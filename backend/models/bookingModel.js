import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  planId: {
    type: String,
    required: false,
  },
  planName: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  coverageType: {
    type: String,
    required: true,
  },
  premium: {
    type: Number,
    required: true,
  },
  term: {
    type: String,
    required: true,
  },
  conditions: {
    type: String,
    required: false,
  },
  bookedAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Booking", bookingSchema);
