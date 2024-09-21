import mongoose from 'mongoose'

const PortfolioSchema = mongoose.Schema({
  name: String,
  description: String,
  client: String,
  date: Date,
  images: [String],
},{timestamps : true});

const Portfolio = mongoose.model("Portfolio", PortfolioSchema)

export default Portfolio;