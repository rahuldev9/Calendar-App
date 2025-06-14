import React, { useState } from "react";
import dayjs from "dayjs";
import CalendarHeader from "./CalendarHeader";
import CalendarGrid from "./CalendarGrid";
import EventModal from "./EventModal";
import initialEvents from "../Data/events.json";
import Sidebar from "./Sidebar";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(dayjs());
  const [events, setEvents] = useState(initialEvents);
  const [modalEvent, setModalEvent] = useState(null);

  const nextMonth = () => setCurrentDate(currentDate.add(1, "month"));
  const prevMonth = () => setCurrentDate(currentDate.subtract(1, "month"));

  const updateEventDate = (eventId, newDate) => {
    setEvents((prev) =>
      prev.map((event) =>
        event.id === eventId ? { ...event, date: newDate } : event
      )
    );
  };

  const handleEventClick = (event) => {
    setModalEvent(event);
  };

  const closeModal = () => setModalEvent(null);

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-50">
      {/* Sidebar */}
      <div className="md:w-64">
        <Sidebar />
      </div>

      {/* Main Content */}
      <main className="flex-1 p-4 sm:p-6 md:p-8 overflow-x-hidden">
        <div className="max-w-7xl mx-auto bg-white rounded-xl shadow p-4 sm:p-6">
          <CalendarHeader
            currentDate={currentDate}
            nextMonth={nextMonth}
            prevMonth={prevMonth}
          />
          <div className="mt-6">
            <CalendarGrid
              currentDate={currentDate}
              events={events}
              onEventDrop={updateEventDate}
              onEventClick={handleEventClick}
            />
          </div>
        </div>
        {modalEvent && <EventModal event={modalEvent} onClose={closeModal} />}
      </main>
    </div>
  );
};

export default Calendar;
