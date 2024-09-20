import express from 'express'
import { addService, deleteService, getService, getServices, updateService } from '../controllers/Service.js';
import verifyToken from '../middleware/verifyToken.js';

const router = express.Router();

router.post('/', verifyToken, addService)
router.get('/', verifyToken, getServices)
router.get('/:serviceId', verifyToken, getService)
router.put("/:serviceId", verifyToken, updateService);
router.delete("/:serviceId", verifyToken, deleteService);

export default router;