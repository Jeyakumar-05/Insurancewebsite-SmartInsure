import React, { useState } from "react";

const Payment = () => {
  const [status, setStatus] = useState(null);

  const handlePayment = (e) => {
    e.preventDefault();
    // Simulate payment
    setTimeout(() => {
      setStatus("success"); // you can toggle between 'success' or 'failure'
    }, 1000);
  };

  return (
    <div className="max-w-xl mx-auto py-10">
      <h2 className="text-3xl font-semibold text-center text-purple-600 mb-6">
        Payment Details
      </h2>

      <form onSubmit={handlePayment} className="bg-white shadow-md p-6 rounded-lg space-y-4">
        <div>
          <label className="block font-medium mb-2">Card Number</label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            placeholder="1234 5678 9012 3456"
            required
          />
        </div>
        <div className="flex space-x-4">
          <div className="w-1/2">
            <label className="block font-medium mb-2">Expiry Date</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              placeholder="MM/YY"
              required
            />
          </div>
          <div className="w-1/2">
            <label className="block font-medium mb-2">CVV</label>
            <input
              type="password"
              className="w-full p-2 border rounded"
              placeholder="123"
              required
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-purple-500 text-white font-semibold p-2 rounded hover:bg-purple-600"
        >
          Pay Now
        </button>
      </form>

      {status === "success" && (
        <div className="mt-6 p-4 bg-green-100 text-green-800 border border-green-300 rounded">
          Payment successful! 🎉 Your booking has been confirmed.
        </div>
      )}

      {status === "failure" && (
        <div className="mt-6 p-4 bg-red-100 text-red-800 border border-red-300 rounded">
          Payment failed. Please try again.
        </div>
      )}
    </div>
  );
};

export default Payment;
