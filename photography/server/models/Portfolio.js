import mongoose from 'mongoose'

const PortfolioSchema = mongoose.Schema(
  {
    name: String,
    description: String,
    images: [String],
    service: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Service",
    },
  },
  { timestamps: true }
);

const Portfolio = mongoose.model("Portfolio", PortfolioSchema)

export default Portfolio;