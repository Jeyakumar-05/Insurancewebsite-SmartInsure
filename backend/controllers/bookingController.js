import Booking from "../models/bookingModel.js";

export const createBooking = async (req, res) => {
  try {
    const { userId, email, username, planId, planName, type, price, coverageType, premium, term, conditions} = req.body;

    const newBooking = new Booking({
      userId,
      email,
      username,
      planId,
      planName,
      type,
      price,
      coverageType,
      premium,
      term,
      conditions,
    });

    const savedBooking = await newBooking.save();
    res.status(201).json(savedBooking);
  } catch (err) {
    console.error("Create booking error:", err);
    res.status(500).json({ message: "Booking failed" });
  }
};


export const getUserBookings = async (req, res) => {
    try {
      const { userId } = req.params; // Getting the userId from the URL params
      const bookings = await Booking.find({ userId }).sort({ bookedAt: -1 }); // Sorting bookings by date descending
  
      if (!bookings.length) {
        return res.status(404).json({ message: "No bookings found for this user" }); // If no bookings are found
      }
  
      res.status(200).json(bookings); // Sending the bookings as a response
    } catch (err) {
      console.error("Get bookings error:", err);
      res.status(500).json({ message: "Failed to fetch bookings" });
    }
  };

  export const deleteBookingController = async (req, res) => {
    try {
      const { bookingId } = req.params;
      const deletedBooking = await Booking.findByIdAndDelete(bookingId);
      if (!deletedBooking) {
        return res.status(404).json({ message: 'Booking not found' });
      }
      res.status(200).json({ message: 'Booking deleted successfully' });
    } catch (error) {
      console.error("Delete booking error:", error);
      res.status(500).json({ message: 'Server error' });
    }
  };
  
  