import React from 'react';
import { XIcon } from 'lucide-react';
import { Link } from 'react-router-dom';


const BookingCard = ({ booking, onDelete }) => {
  const userData = JSON.parse(localStorage.getItem('user'));
  const isAdmin = true; // Or: const isAdmin = userData?.role === 'admin';

  return (
    <div className="w-full sm:w-[22rem] bg-white shadow-lg rounded-2xl overflow-hidden m-2">
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2 text-gray-800">{booking.planName}</h2>
        <p className="text-gray-600">Plan Type: {booking.type}</p>
        <p className="text-gray-600">Price: ₹{booking.price}</p>
        <p className="text-gray-600">Coverage Type: {booking.coverageType}</p>
        <p className="text-gray-600">Premium: ₹{booking.premium}</p>
        <p className="text-gray-600">Term: {booking.term}</p>
        <p className="text-gray-600">Conditions: {booking.conditions}</p>
        <p className="text-gray-600">Booked On: {new Date(booking.bookedAt).toLocaleDateString()}</p>

        <div className="flex justify-between items-center mt-4">
          <Link
            to="/insurance-booking"
            state={{
              planId: booking.planId,
              planName: booking.planName,
              type: booking.type,
              price: booking.price,
              coverageType: booking.coverageType,
              premium: booking.premium,
              term: booking.term,
              conditions: booking.conditions,
            }}
            className="bg-blue-700 text-white py-1 px-4 rounded-lg hover:bg-blue-800 transition"
          >
            View Details
          </Link>
          {isAdmin && (
            <button
              onClick={() => onDelete(booking._id)}
              className="bg-red-700 text-white py-1 px-2 rounded-lg flex items-center hover:bg-red-800 transition"
            >
              <XIcon size={18} className="mr-1" />
              Delete
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingCard;
