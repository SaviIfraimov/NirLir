import express from 'express';
import * as OrderController from '../controllers/orderController';
// import { authenticate } from '../middleware/authMiddleware';

const router = express.Router();

router.get('/', OrderController.getAllOrders); // & authenticate
router.get('/:id', OrderController.getOrderById);
router.post('/', OrderController.createOrder);
router.put('/:id', OrderController.updateOrder);
// router.delete('/:id', authenticate, OrderController.deleteOrder);

export default router;
