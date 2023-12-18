import express from 'express';
import * as customerController from '../controllers/customerController';
// import { authenticate } from '../middleware/authMiddleware';

const router = express.Router();

router.get('/', customerController.getAllCustomers); //  & authenticate
router.get('/:id', customerController.getCustomerById);
router.get('/:id/forecast', customerController.getCustomerForecastById);
router.post('/', customerController.createCustomer);
router.put('/:id', customerController.updateCustomer);
// router.delete('/:id', authenticate, customerController.deleteCustomer);

export default router;
