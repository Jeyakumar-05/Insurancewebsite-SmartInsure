import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { createBooking } from '../services/api';
import { toast } from 'sonner';

const MyBookings = () => {
  const location = useLocation();
  const user = JSON.parse(localStorage.getItem('user'));

  const [email, setEmail] = useState(user?.email || '');
  const [username, setUsername] = useState(user?.username || '');

  const [planDetails, setPlanDetails] = useState({
    planId: location?.state?.planId || '',
    planName: location?.state?.planName || '',
    type: location?.state?.type || '',
    price: location?.state?.price || '',
    coverageType: location?.state?.coverageType || '',
    premium: location?.state?.premium || '',
    term: location?.state?.term || '',
    conditions: location?.state?.conditions || '', 
  });

  const handleBooking = async (e) => {
    e.preventDefault();
    if (!planDetails.planId) {
      return toast.error("No plan selected");
    }

    const newBooking = {
      userId: user?._id,
      email,
      username,
      ...planDetails,
    };

    console.log("Booking payload:", newBooking);

    const success = await createBooking(newBooking);
    if (success) {
      toast.success("Booking successful!");
      setEmail('');
      setUsername('');
      setPlanDetails({
        planId: '',
        planName: '',
        type: '',
        price: '',
        coverageType: '',
        premium: '',
        term: '',
        conditions: '',
      });
    } else {
      toast.error("Booking failed.");
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 px-4">
      <h2 className="text-2xl font-semibold text-center mb-6">Book Insurance</h2>

      <form
        onSubmit={handleBooking}
        className="bg-white p-6 rounded-md shadow-md mb-10 space-y-4"
      >
        <input
          type="text"
          value={planDetails.planName}
          readOnly
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Plan Name"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Email"
        />
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Username"
        />
        <input
          type="text"
          value={planDetails.type}
          readOnly
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Type"
        />
        <input
          type="text"
          value={`₹${planDetails.price}`}
          readOnly
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Price"
        />
        <input
          type="text"
          value={planDetails.coverageType}
          readOnly
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Coverage Type"
        />
        <input
          type="text"
          value={`₹${planDetails.premium}`}
          readOnly
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Premium"
        />
        <input
          type="text"
          value={planDetails.term}
          readOnly
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Term"
        />
        <textarea
          value={planDetails.conditions}
          readOnly
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Conditions"
        />

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Confirm Booking
        </button>
      </form>
    </div>
  );
};

export default MyBookings;
