import express from "express";
import {
  addEducation,
  deleteEducation,
  getEducation,
  getEducations,
  updateEducation,
} from "../controllers/Education.js";
import verifyToken from "../middleware/verifyToken.js";

const router = express.Router();

router.post("/", verifyToken, addEducation);
router.get("/", getEducations);
router.get("/:educationId", getEducation);
router.put(
  "/:educationId",
  verifyToken,
  updateEducation
);
router.delete("/:educationId", verifyToken, deleteEducation);

export default router;
