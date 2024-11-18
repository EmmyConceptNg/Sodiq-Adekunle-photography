import express from "express";
import {
  addContact,
} from "../controllers/Contact.js";
import verifyToken from "../middleware/verifyToken.js";

const router = express.Router();

router.post("/", addContact);

export default router;
