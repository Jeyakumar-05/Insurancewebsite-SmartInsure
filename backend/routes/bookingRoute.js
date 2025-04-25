import express from 'express';
import { createBooking, getUserBookings } from '../controllers/bookingController.js';

const router = express.Router();

// Create booking
router.post('/', createBooking);

// Get bookings for a user
router.get('/user/:userId', getUserBookings);

export default router;
