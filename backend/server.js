// // Package import

import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

// utils import

import connectDB from "./config/db.js";
import userRoute from "./routes/userRoute.js";
import planRoute from "./routes/planRoute.js";
import bookingRoute from "./routes/bookingRoute.js";
import paymentRoutes from "./routes/paymentRoute.js";

dotenv.config();

// initialize the port

const port = process.env.PORT || 5000;

// DB conection

connectDB(process.env.MONGO_DB_URI);

const app = express();

app.use(
  cors({
    // origin: "http://localhost:5173",
    origin: "https://insurancewebsite-smart-insure.vercel.app/login",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Welcome to the  api");
});

app.use("/api/v1/user", userRoute);
app.use("/plans", planRoute);
app.use("/bookings", bookingRoute);
app.use("/payments", paymentRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
