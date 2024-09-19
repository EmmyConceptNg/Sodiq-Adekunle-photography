import { createTransport } from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

// Load Email Templates
import { welcomeEmailTemplate } from "../templates/onboarding.js";
import { otpEmailTemplate } from "../templates/otp.js";
import { passwordResetTemplate } from "../templates/password-reset.js";

// For Gmail
const options = {
  service: "gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.ADMIN_MAIL,
    pass: process.env.ADMIN_MAIL_PASS,
  },
};

const transporter = createTransport(options);

const sendMail = async (subject, email, type, data) => {
  let html = "";

  if (type == "onboarding") html = welcomeEmailTemplate(`${data.username}`);
  if (type == "otp") html = otpEmailTemplate(`${data.otp}`);
  if (type == "password-reset") html = passwordResetTemplate(`${data.username}`);

  const mailOptions = {
    from: `Swyype ${process.env.ADMIN_MAIL}`,
    to: `${email}`,
    subject: subject,
    html: html,
  };

  try {
    await transporter.sendMail(mailOptions);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export default sendMail;
