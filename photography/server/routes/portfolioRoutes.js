import express from 'express'
import { addPortfolio, deletePortfolio, getPortfolio, getPortfolios, updatePortfolio } from '../controllers/Portfolio.js';
import verifyToken from '../middleware/verifyToken.js';

const router = express.Router();

router.post('/', verifyToken, addPortfolio)
router.get('/', verifyToken, getPortfolios)
router.get('/:portfolioId', verifyToken, getPortfolio)
router.put("/:portfolioId", verifyToken, updatePortfolio);
router.delete("/:portfolioId", verifyToken, deletePortfolio);

export default router;