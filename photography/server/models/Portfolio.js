import mongoose from 'mongoose'

const PortfolioSchema = mongoose.Schema({
  name: String,
  description: String,
  client: String,
  date: Date,
  images: [],
});

const Portfolio = mongoose.model("Portfolio", PortfolioSchema)

export default Portfolio;