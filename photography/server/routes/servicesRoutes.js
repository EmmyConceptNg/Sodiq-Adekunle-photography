import express from "express";
import {
  addService,
  deleteService,
  getService,
  getServices,
  updateService,
} from "../controllers/Services.js";
import verifyToken from "../middleware/verifyToken.js";


const router = express.Router();


// Routes
router.post(
  "/",
  verifyToken,
  addService
);

router.get("/", getServices);
router.get("/:serviceId", getService);

router.put(
  "/:serviceId",
  verifyToken,
  updateService
);

router.delete("/:serviceId", verifyToken, deleteService);

export default router;
