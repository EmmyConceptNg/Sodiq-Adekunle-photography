import express from "express";
import {
  addPortfolio,
  deletePortfolio,
  getPortfolio,
  getPortfolios,
  updatePortfolio,
} from "../controllers/Portfolio.js";
import verifyToken from "../middleware/verifyToken.js";
import upload from "../middleware/multer.js";

const router = express.Router();

// Multer error handler middleware
function handleMulterErrors(err, req, res, next) {
  if (err instanceof multer.MulterError) {
    if (err.code === "LIMIT_FILE_SIZE") {
      return res.status(400).json({
        error: "File size exceeds the 100MB limit.",
      });
    }
    // Handle other multer-specific errors if necessary
  } else if (err) {
    // Handle other types of errors
    return res.status(400).json({
      error: err.message,
    });
  }
  next();
}

// Routes
router.post(
  "/",
  verifyToken,
  upload.array("images", 20),
  handleMulterErrors, // Add error handling middleware
  addPortfolio
);

router.get("/", getPortfolios);
router.get("/:portfolioId", getPortfolio);

router.put(
  "/:portfolioId",
  verifyToken,
  upload.array("images", 20),
  handleMulterErrors, // Add error handling middleware
  updatePortfolio
);

router.delete("/:portfolioId", verifyToken, deletePortfolio);

export default router;
