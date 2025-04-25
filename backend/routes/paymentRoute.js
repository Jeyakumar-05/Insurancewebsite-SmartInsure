import express from 'express';
import { makePayment } from '../controllers/paymentController.js';

const router = express.Router();

// Handle payment
router.post('/makePayment', makePayment);

export default router;
