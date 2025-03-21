import jwt from "jsonwebtoken";
import { errorHandling } from "../middleware/errorHandler.js";
import { Hash, VerifyHash } from "../middleware/hasher.js";
import User from "../models/User.js";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

// Configure Cloudflare R2 using AWS SDK
const r2Client = new S3Client({
  region: "auto",
  endpoint: `https://${process.env.CLOUDFLARE_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: process.env.CLOUDFLARE_ACCESS_KEY_ID,
    secretAccessKey: process.env.CLOUDFLARE_SECRET_ACCESS_KEY,
  },
});

// Helper function to upload file to Cloudflare R2
const uploadToR2 = async (file) => {
  const key = `${Date.now()}-${file.name}`;

  const uploadParams = {
    Bucket: process.env.CLOUDFLARE_BUCKET_NAME,
    Key: key,
    Body: file.data,
    ContentType: file.mimetype,
  };

  await r2Client.send(new PutObjectCommand(uploadParams));

  return `${process.env.CLOUDFLARE_PUBLIC_URL}/${key}`;
};

const checkDuplicateUser = async (fields, type) => {
  const handleBadRequestException = (e) => {
    errorHandling(`400|${e}.|`);
  };

  if (type === "findByField") {
    for (let i = 0; i < fields.length; i++) {
      let field = fields[i][0];
      let value = fields[i][1];
      let userExists = await User.findOne({ [field]: value });
      if (userExists !== null) {
        handleBadRequestException(
          `User with this ${field} - ${value} - already exists`
        );
      }
    }
  }
};

// Helper function to generate access and refresh tokens
const generateTokens = (user) => {
  const accessToken = jwt.sign(
    { id: user._id, email: user.email },
    process.env.JWT_SECRET,
    {
      expiresIn: "30m",
    }
  );

  const refreshToken = jwt.sign(
    { id: user._id, email: user.email },
    process.env.JWT_REFRESH_SECRET,
    {
      expiresIn: "1d", // Example: 7 days
    }
  );

  return { accessToken, refreshToken };
};

export const signup = async (req, res, next) => {
  try {
    const data = req.body;

    if (!data.email) errorHandling("400|Input email.|");
    if (!data.password) errorHandling("400|Input password.|");

    await checkDuplicateUser([["email", data.email]], "findByField");

    data.password = await Hash(data.password);
    data.isEmailVerified = false;

    if (data.referralCode) {
      let referred_by = await User.findOne({ referralCode: data.referralCode });

      if (!referred_by) errorHandling("400|Referral Code doesn't exist.|");

      let referral_bonus = 500;
      let earnings = referred_by.earnings + referral_bonus;

      // Update Referred By Earnings Point
      await User.findOneAndUpdate(
        { referralCode: data.referralCode },
        { earnings: earnings }
      );
    }

    let user = new User(data);
    await user.save();

    const { accessToken, refreshToken } = generateTokens(user);

    res.status(200).json({
      message: "Signup Successful",
      user,
      accessToken,
      refreshToken,
    });
  } catch (error) {
    next(new Error(error.stack));
  }
};

export const signin = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email) errorHandling("400|Input Email.|");
    if (!password) errorHandling("400|Input Password.|");

    // Find the user without updating
    let user = await User.findOne({ email });
    if (!user) errorHandling("400|User not found.|");

    // Verify password
    const isPasswordValid = await VerifyHash(password, user.password);
    if (!isPasswordValid) errorHandling("400|Password incorrect.|");

    // Check email verification
    // if (!user.isEmailVerified) errorHandling("400|Email not verified.|");

    const { accessToken, refreshToken } = generateTokens(user);

    res.status(200).json({
      message: "Login Successful",
      user,
      accessToken,
      refreshToken,
    });
  } catch (error) {
    next(new Error(error.stack));
  }
};

export const refreshToken = async (req, res, next) => {
  const { refreshToken } = req.body;

  if (!refreshToken) return res.status(401).json({ message: "Unauthorized" });

  try {
    const decoded = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);

    const newAccessToken = jwt.sign(
      { id: decoded.id, email: decoded.email },
      process.env.JWT_SECRET,
      { expiresIn: "30m" }
    );

    res.status(200).json({ accessToken: newAccessToken });
  } catch (error) {
    return res.status(403).json({ message: "Forbidden" });
  }
};

export const adminUser = (req, res, next) => {
  User.findOne({ role: "admin" })
    .select("-password")
    .then((user) =>
      res.status(200).json({ user, message: "Admin User Successfully" })
    )
    .catch((error) => next(new Error(error.stack)));
};

export const updateUser = (req, res, next) => {
  const { userId } = req.params;

  User.findOneAndUpdate({ _id: userId }, req.body, { new: true }).then((user) =>
    res.status(200).json({ user, message: "User Details Updated Successfully" })
  ).catch(error => next(new Error(error.stack)));
};

export const updateDisplayImage = async (req, res, next) => {
  try {
    let user = await User.findById(req.params.userId);

    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    // Check if a file was uploaded
    if (!req.file) {
      return res.status(400).json({ message: "No image uploaded." });
    }

    // Update the user's profile image with the uploaded file's path
    const file = req.file;
    const imagePath = await uploadToR2(file); // Await the uploadToR2 function
    user.image = imagePath;

    await user.save();

    res
      .status(200)
      .json({ user, message: "Display image updated successfully" });
  } catch (error) {
    next(new Error(error.stack));
  }
};
