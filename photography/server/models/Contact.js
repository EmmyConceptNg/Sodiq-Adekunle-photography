import mongoose from "mongoose";

const ContactSchema = mongoose.Schema(
  {
    name: String,
    email: String,
    message: String,
    
  },
  { timestamps: true }
);

const Contact = mongoose.model("Contact", ContactSchema);

export default Contact;
