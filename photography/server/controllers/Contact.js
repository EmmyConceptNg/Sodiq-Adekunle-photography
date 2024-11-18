
import { errorHandling } from "../middleware/errorHandler.js";
import Contact from "../models/Contact.js";
import nodemailer from "nodemailer";
export const addContact = async (req, res, next) => {
  try {
    const { fullName, email, message } = req.body;

    await Contact.create({
      fullName,
      email,
      message,
    });


     const transporter = nodemailer.createTransport({
       service: "Gmail",
       auth: {
         user: process.env.ADMIN_MAIL,
         pass: process.env.ADMIN_MAIL_PASS,
       },
     });

     // Email options
     const mailOptions = {
       from: `"${fullName}" <${email}>`,
       to: "adekunle4real007@gmail.com",
       subject: "New Contact Form Submission",
       text: `Name: ${fullName}\nEmail: ${email}\nMessage: ${message}`,
     };

     // Send email
     await transporter.sendMail(mailOptions);


    res
      .status(201)
      .json({ message: "Contact Sent" });
  } catch (error) {
    next(new Error(error.stack));
  }
};
