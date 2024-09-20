import { errorHandling } from "../middleware/errorHandler.js";
import Portfolio from "../models/Portfolio.js";

const checkDuplicateName = async (name) => {
  return false;
};

export const addPortfolio = async (req, res, next) => {
  try {
    const { name } = req.body;

    // Case-insensitive check for duplicate portfolio name
    const duplicatePortfolio = await Portfolio.findOne({
      name: { $regex: new RegExp("^" + name + "$", "i") },
    });
    if (duplicatePortfolio) {
      errorHandling("400|Portfolio name already exists.|");
    }

    const portfolio = await Portfolio.create({ name });

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
  Portfolio.findById(req.params.portfolioId)
    .then((portfolio) =>
      res
        .status(200)
        .json({ portfolio, message: `Fetched portfolio ${portfolio.name}` })
    )
    .catch((error) => next(new Error(error.stack)));
};

export const updatePortfolio = async (req, res, next) => {
  try {
    const { name } = req.body;
    //   check duplicate Portfolio
    const duplicatePortfolio = await Portfolio.findOne({
      name: { $regex: new RegExp("^" + name + "$", "i") },
    });
    if (duplicatePortfolio) {
      errorHandling("400|Portfolio name already exists.|");
    }

    const portfolio = await Portfolio.findOneAndUpdate(
      { _id: req.params.portfolioId },
      { name: name },
      { new: true }
    );

    res
      .status(200)
      .json({ portfolio, message: "Portfolio Name Updated Successfully" });
  } catch (error) {
    next(new Error(error.stack));
  }
};

export const deletePortfolio = async (req, res, next) => {
  try {
    const portfolioId = req.params.portfolioId;

    const portfolio = await Portfolio.findById(portfolioId);
    if (!portfolio) errorHandling("404|Could not find portfolio.|");

    await Portfolio.findOneAndDelete(portfolioId);

    res.status(200).json({
      message: "Portfolio and associated projects deleted successfully'",
    });
  } catch (error) {
    next(new Error(error.stack));
  }
};
