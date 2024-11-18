import mongoose from "mongoose";

const ServiceSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    portfolio: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Portfolio",
      },
    ],
  },
  { timestamps: true }
);

const Service = mongoose.model("Service", ServiceSchema);

export default Service;
