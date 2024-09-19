import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  phone: Number,
  email: {
    type: String,
    unique: true,
    required: [true, "Email address is required"],
    match: [/.+\@.+\..+/, "Please use a valid email address"],
    lowercase: true,
    trim: true,
  },
  address: String,
  password: String,
  twitter: String,
  instagram: String,
  linkedIn: String,
  facebook: String,
  image: String,
  token: {
    type: String,
  },
});

const User = mongoose.model("User", UserSchema);

export default User;
