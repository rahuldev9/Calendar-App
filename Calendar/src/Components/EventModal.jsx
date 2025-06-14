import React from "react";
import { FaTimes, FaCalendarAlt, FaClock } from "react-icons/fa";

const EventModal = ({ event, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 backdrop-blur-sm">
      <div className="bg-white w-full max-w-sm rounded-xl shadow-xl p-6 relative animate-fade-in">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition"
          aria-label="Close modal"
        >
          <FaTimes />
        </button>

        {/* Event Info */}
        <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <FaCalendarAlt className="text-blue-500" />
          {event.title}
        </h3>

        <p className="text-sm text-gray-600 flex items-center gap-2 mb-1">
          <FaCalendarAlt className="text-gray-500" />
          Date: {event.date}
        </p>

        <p className="text-sm text-gray-600 flex items-center gap-2">
          <FaClock className="text-gray-500" />
          Time: {event.time}
        </p>

        {/* Action Button */}
        <button
          onClick={onClose}
          className="mt-6 w-full py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-md transition"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default EventModal;
