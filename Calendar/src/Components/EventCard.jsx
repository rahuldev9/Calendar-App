import React from "react";
import { FaClock } from "react-icons/fa";

const EventCard = ({ event }) => {
  return (
    <div className="flex items-center gap-2 mt-1 text-xs p-2 bg-blue-50 border-l-4 border-blue-500 rounded-md cursor-pointer hover:bg-blue-100 transition">
      <FaClock className="text-blue-500 text-sm shrink-0" />
      <div className="text-blue-800 font-medium truncate">
        {event.title} <span className="text-gray-500">@ {event.time}</span>
      </div>
    </div>
  );
};

export default EventCard;
