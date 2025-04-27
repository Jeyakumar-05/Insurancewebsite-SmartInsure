import express from 'express';
import { createBooking, getUserBookings,deleteBookingController,getAllBookings } from '../controllers/bookingController.js';

const router = express.Router();

// Create booking
router.post('/', createBooking);

// Get bookings for a user
router.get('/user/:userId', getUserBookings);

// Admin to get all bookings
router.get('/all', getAllBookings);


// Delete a booking by ID
router.delete('/:bookingId', deleteBookingController);

export default router;
