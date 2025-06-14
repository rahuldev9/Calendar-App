import React from "react";
import dayjs from "dayjs";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import EventCard from "./EventCard";

const CalendarGrid = ({ currentDate, events, onEventDrop, onEventClick }) => {
  const startDay = currentDate.startOf("month").day();
  const daysInMonth = currentDate.daysInMonth();

  const handleDragEnd = (result) => {
    if (!result.destination) return;
    const eventId = result.draggableId;
    const newDate = result.destination.droppableId;
    onEventDrop(eventId, newDate);
  };

  const getEventsForDate = (date) =>
    events.filter((e) => dayjs(e.date).isSame(date, "day"));

  const renderCells = () => {
    const cells = [];
    for (let i = 0; i < startDay + daysInMonth; i++) {
      const dayNum = i - startDay + 1;
      if (i < startDay) {
        cells.push(
          <div key={`empty-${i}`} className="bg-transparent min-h-[100px]" />
        );
      } else {
        const cellDate = dayjs(currentDate).date(dayNum).format("YYYY-MM-DD");
        const cellEvents = getEventsForDate(cellDate);

        cells.push(
          <Droppable droppableId={cellDate} key={cellDate}>
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className="bg-white rounded-xl shadow-sm border p-2 min-h-[100px] flex flex-col gap-1 hover:shadow-md transition-all duration-200"
              >
                <div className="text-sm font-semibold text-gray-800">
                  {dayNum}
                </div>
                {cellEvents.map((e, idx) => (
                  <Draggable key={e.id} draggableId={e.id} index={idx}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        onClick={() => onEventClick(e)}
                      >
                        <EventCard event={e} />
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        );
      }
    }
    return cells;
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className="grid grid-cols-7 gap-2 sm:gap-3 auto-rows-[minmax(100px,_1fr)]">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div
            key={day}
            className="text-center text-sm sm:text-base font-semibold text-gray-600 mb-1"
          >
            {day}
          </div>
        ))}
        {renderCells()}
      </div>
    </DragDropContext>
  );
};

export default CalendarGrid;
