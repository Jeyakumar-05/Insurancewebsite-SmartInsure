import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { makePayment } from '../services/api';

const PaymentForm = () => {
  const location = useLocation();
  const {
    type = '',
    planName = '',
    planId = '',
  } = location.state || {};

  const [formData, setFormData] = useState({
    typeOfBooking: type || '',
    username: planName || '',
    cardNumber: '',
    expiryDate: '',
    transactionId: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const paymentDetails = {
        ...formData,
        bookingId: planId,
      };
      const result = await makePayment(paymentDetails);
      alert('Payment Successful!');
      console.log(result);
    } catch (error) {
      alert('Payment Failed');
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white p-8 rounded-2xl shadow-lg space-y-6"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800">Secure Payment</h2>

        {/* Booking Type and Name */}
        <div className="space-y-4">
          <input
            type="text"
            name="typeOfBooking"
            value={formData.typeOfBooking}
            onChange={handleChange}
            placeholder="Type of Booking"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Card Details */}
        <div className="space-y-4">
          <input
            type="text"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleChange}
            placeholder="Card Number (e.g., 1234 5678 9012 3456)"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <div className="flex gap-4">
            <input
              type="text"
              name="expiryDate"
              value={formData.expiryDate}
              onChange={handleChange}
              placeholder="MM/YY"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="text"
              name="transactionId"
              value={formData.transactionId}
              onChange={handleChange}
              placeholder="Transaction ID"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition duration-300"
        >
          Pay ₹999
        </button>

        {/* Disclaimer */}
        <p className="text-center text-sm text-gray-500">
          By proceeding, you agree to our <span className="text-blue-600 underline cursor-pointer">Terms & Conditions</span>.
        </p>
      </form>
    </div>
  );
};

export default PaymentForm;
