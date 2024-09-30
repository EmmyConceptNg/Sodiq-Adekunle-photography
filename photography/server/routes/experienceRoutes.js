import express from "express";
import {
  addExperience,
  deleteExperience,
  getExperience,
  getExperiences,
  updateExperience,
} from "../controllers/Experience.js";
import verifyToken from "../middleware/verifyToken.js";

const router = express.Router();

router.post("/", verifyToken, addExperience);
router.get("/", getExperiences);
router.get("/:experienceId", getExperience);
router.put(
  "/:experienceId",
  verifyToken,
  updateExperience
);
router.delete("/:experienceId", verifyToken, deleteExperience);

export default router;
