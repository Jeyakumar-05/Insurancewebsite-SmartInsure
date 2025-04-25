import express from 'express';
import { createBooking, getUserBookings,deleteBookingController } from '../controllers/bookingController.js';

const router = express.Router();

// Create booking
router.post('/', createBooking);

// Get bookings for a user
router.get('/user/:userId', getUserBookings);

// Delete a booking by ID
router.delete('/:bookingId', deleteBookingController);

export default router;
