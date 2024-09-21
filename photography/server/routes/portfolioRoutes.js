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

router.post("/", verifyToken, upload.array("images", 5), addPortfolio);
router.get("/", getPortfolios);
router.get("/:portfolioId", getPortfolio);
router.put(
  "/:portfolioId",
  verifyToken,
  upload.array("images", 5),
  updatePortfolio
);
router.delete("/:portfolioId", verifyToken, deletePortfolio);

export default router;
