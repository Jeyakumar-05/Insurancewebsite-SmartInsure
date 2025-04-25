import mongoose from "mongoose";

const planSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
      enum: ["Health", "Life", "Auto", "Home", "Travel", "Business"],
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
  },
  { timestamps: true }
);

const Plan = mongoose.model("Plan", planSchema);

export default Plan;
