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
    const { userId } = req.params;
    const bookings = await Booking.find({ userId }).sort({ bookedAt: -1 });
    res.status(200).json(bookings);
  } catch (err) {
    console.error("Get bookings error:", err);
    res.status(500).json({ message: "Failed to fetch bookings" });
  }
};
