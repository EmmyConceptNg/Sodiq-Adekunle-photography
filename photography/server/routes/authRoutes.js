import express from 'express'
import {
  refreshToken,
  signin,
  signup,
  updateUser,
  adminUser,
  updateDisplayImage,
} from "../controllers/AuthController.js";
import verifyToken from '../middleware/verifyToken.js';
import upload from '../middleware/multer.js';

const router = express.Router();

router.post('/signin', signin)
router.get('/admin-user', adminUser)
router.post('/signup', signup)
router.put('/update/:userId', verifyToken, updateUser)
router.put(
  "/update-display-image/:userId",
  verifyToken,
  upload.single("image"),
  updateDisplayImage
);
router.post("/refresh-token", refreshToken);

export default router