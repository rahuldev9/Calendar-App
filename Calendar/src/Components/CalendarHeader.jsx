import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const CalendarHeader = ({ currentDate, nextMonth, prevMonth }) => {
  return (
    <div className="flex items-center justify-between flex-wrap gap-4">
      {/* Navigation Buttons */}
      <div className="flex gap-2">
        <button
          onClick={prevMonth}
          className="flex items-center gap-2 bg-white text-gray-700 hover:bg-gray-100 border border-gray-300 px-4 py-2 rounded-lg shadow-sm transition"
        >
          <FaChevronLeft />
          <span className="hidden sm:inline">Previous</span>
        </button>
        <button
          onClick={nextMonth}
          className="flex items-center gap-2 bg-white text-gray-700 hover:bg-gray-100 border border-gray-300 px-4 py-2 rounded-lg shadow-sm transition"
        >
          <span className="hidden sm:inline">Next</span>
          <FaChevronRight />
        </button>
      </div>

      {/* Current Month Display */}
      <h2 className="text-2xl font-bold text-gray-800">
        {currentDate.format("MMMM YYYY")}
      </h2>
    </div>
  );
};

export default CalendarHeader;
