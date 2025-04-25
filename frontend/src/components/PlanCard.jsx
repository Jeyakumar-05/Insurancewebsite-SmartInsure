import React from 'react';
import { XIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const PlanCard = ({ plan, onDelete }) => {
  const userData = JSON.parse(localStorage.getItem('user'));
  const isAdmin = userData?.role === 'admin';

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2 text-gray-800">{plan.name}</h2>
        <p className="text-gray-600">Type: {plan.type}</p>
        <p className="text-gray-600">Price: ₹{plan.price}</p>
        <p className="text-gray-600">Coverage Type: {plan.coverageType}</p>
        <p className="text-gray-600">Premium: ₹{plan.premium}</p>
        <p className="text-gray-600">Term: {plan.term}</p>
        <p className="text-gray-600">Conditions: {plan.conditions}</p>

        <div className="flex justify-between items-center mt-4">
          <Link
            to="/insurance-booking"
            state={{
              planId: plan._id,
              planName: plan.name,
              type: plan.type,
              price: plan.price,
              coverageType: plan.coverageType,
              premium: plan.premium,
              term: plan.term,
              conditions: plan.conditions,
            }}
            className="bg-blue-700 text-white py-1 px-4 rounded-lg hover:bg-blue-800 transition"
          >
            Book Now
          </Link>
          {isAdmin && (
            <button
              onClick={() => onDelete(plan._id)}
              className="bg-blue-700 text-white py-1 px-2 rounded-lg flex items-center hover:bg-blue-800 transition"
            >
              <XIcon size={18} className="mr-2" />
              Delete
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default PlanCard;
