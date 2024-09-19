import express from 'express'
import { refreshToken, signin, signup } from '../controllers/AuthController.js';

const router = express.Router();

router.post('/signin', signin)
router.post('/signup', signup)
router.post("/refresh-token", refreshToken);

export default router