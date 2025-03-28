import { errorHandling } from "../middleware/errorHandler.js";
import Portfolio from "../models/Portfolio.js";
import path from "path";
import fs from "fs";
import Service from "../models/Service.js";
const __dirname = path.resolve();
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

const checkDuplicateName = async (name) => {
  return false;
};

export const addPortfolio = async (req, res, next) => {
  try {
    const { name, date, description, service } = req.body;

    // Case-insensitive check for duplicate portfolio name
    const duplicatePortfolio = await Portfolio.findOne({
      name: { $regex: new RegExp("^" + name + "$", "i") },
    });

    if (duplicatePortfolio) {
      return res
        .status(400)
        .json({ message: "Portfolio name already exists." });
    }

    // Collect image file paths
    
    const files = Array.isArray(req.files.images)
      ? req.files.images
      : [req.files.images];
    const imagePaths = await Promise.all(files.map((file) => uploadToR2(file)));

    const portfolio = await Portfolio.create({
      name,
      date,
      description,
      service,
      images: imagePaths,
    });

    const myService = await Service.findById(service)
    myService.portfolio.push(portfolio._id);
    await myService.save()

    res
      .status(201)
      .json({ message: "Portfolio Added Successfully", portfolio });
  } catch (error) {
    next(new Error(error.stack));
  }
};

export const getPortfolios = (req, res, next) => {
  console.log("Portfolios");
  Portfolio.find()
    .then((portfolios) => {
      res.status(200).json({ portfolios, message: "Fetched all portfolios" });
    })
    .catch((error) => next(new Error(error.stack)));
};

export const getPortfolio = (req, res, next) => {
  Portfolio.find({service:req.params.serviceId}).populate(['service'])
    .then((portfolio) =>
      res
        .status(200)
        .json({ portfolio, message: `Fetched portfolio` })
    )
    .catch((error) => next(new Error(error.stack)));
};

export const updatePortfolio = async (req, res, next) => {
  try {
    const { name, date, description, service, removedImages } = req.body;

    console.log(req.body);

    // Case-insensitive check for duplicate portfolio name
    const duplicatePortfolio = await Portfolio.findOne({
      name: { $regex: new RegExp("^" + name + "$", "i") },
      _id: { $ne: req.params.portfolioId }, // Exclude the current portfolio from the check
    });

    if (duplicatePortfolio) {
      return res
        .status(400)
        .json({ message: "Portfolio name already exists." });
    }

    // Find the existing portfolio
    let portfolio = await Portfolio.findById(req.params.portfolioId);

    if (!portfolio) {
      return res.status(404).json({ message: "Portfolio not found." });
    }

    // Parse removedImages
    const removedImagesArray = JSON.parse(removedImages || "[]");
    removedImagesArray.forEach((imagePath) => {
      const relativePath = imagePath.replace(`${process.env.SERVER_URL}/`, "");
      fs.unlink(path.join(__dirname, relativePath), (err) => {
        if (err) console.error("Error deleting image:", err);
      });
    });

    // Filter out removed images from the portfolio images
    const updatedImages = portfolio.images.filter(
      (image) => !removedImagesArray.includes(image)
    );

    // Collect image file paths for new images
    const files = Array.isArray(req.files.images)
      ? req.files.images
      : [req.files.images];
    const newImagePaths = await Promise.all(files.map((file) => uploadToR2(file)));

    // Update the portfolio with new data
    portfolio.name = name;
    portfolio.date = date;
    portfolio.description = description;
    portfolio.service = service;
    portfolio.images = [...updatedImages, ...newImagePaths];

    await portfolio.save();

    res
      .status(200)
      .json({ portfolio, message: "Portfolio Updated Successfully" });
  } catch (error) {
    console.log(error);
    next(new Error(error.stack));
  }
};

export const deletePortfolio = async (req, res, next) => {
  try {
    const portfolioId = req.params.portfolioId;

    const portfolio = await Portfolio.findById(portfolioId);
    if (!portfolio) errorHandling("404|Could not find portfolio.|");

    await Portfolio.findOneAndDelete({_id:portfolioId});

    const portfolios = await Portfolio.find();
    res.status(200).json({
      message: "Portfolio and associated projects deleted successfully'", portfolios
    });
  } catch (error) {
    next(new Error(error.stack));
  }
};
