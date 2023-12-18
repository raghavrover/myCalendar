import { useState, useEffect } from "react";
import Header from "./Components/Header";
import Calendar from "./Components/Calendar";
import EventsList from "./Components/EventsList";
import EventForm from "./Components/EventForm";
import CalendarContext from "./Context/CalendarContext";
import { getDisplayableMonths } from "./Helpers/getMonths";
import {
  EVENTS_STORAGE_KEY,
  DAYS_IN_WEEK,
  MONTHS,
  sampleEvents,
} from "./Constants";

const todayDate = new Date();
const displayableMonths = getDisplayableMonths(todayDate); //Months are indexed from 1 (1-12) in this array

function App() {
  const [currentDate, setCurrentDate] = useState(todayDate);
  const [events, setEvents] = useState(sampleEvents);
  const [isEventFormOpen, setIsEventFormOpen] = useState(false); // Use state to toggle popup visibility

  // Function to handle closing the popup
  const closeEventForm = () => setIsEventFormOpen(false);

  // Trigger opening the popup when "Add Event" button is clicked
  const handleAddEventClick = () => setIsEventFormOpen(true);

  //Store events in the local storage
  useEffect(() => {
    const storedEvents = JSON.parse(localStorage.getItem(EVENTS_STORAGE_KEY));
    if (storedEvents) setEvents(storedEvents);

    return () => {};
  }, []);

  const addEvent = (event) => {
    event.id = Math.random().toString(36).substring(2, 15);
    setEvents([...events, event]);
    localStorage.setItem(EVENTS_STORAGE_KEY, JSON.stringify(events));
  };

  const updateEvent = (updatedEvent) => {
    const updatedEvents = events.map((event) =>
      event.id === updatedEvent.id ? updatedEvent : event
    );
    setEvents(updatedEvents);
    localStorage.setItem(EVENTS_STORAGE_KEY, JSON.stringify(updatedEvents));
  };

  const deleteEvent = (eventId) => {
    const filteredEvents = events.filter((event) => event.id !== eventId);
    setEvents(filteredEvents);
    localStorage.setItem(EVENTS_STORAGE_KEY, JSON.stringify(filteredEvents));
  };

  const renderEventFormPopUp = () => {
    if (!isEventFormOpen) return null;

    return (
      <div className="flex items-center justify-center fixed top-0 left-0 w-full h-full overflow-y-auto bg-gray-900 bg-opacity-75 backdrop-filter md:opacity-100 transition-opacity ease-in-out duration-300">
        <EventForm close={closeEventForm} add={addEvent} />
      </div>
    );
  };

  return (
    <CalendarContext.Provider value={{ currentDate, setCurrentDate }}>
      <div className="h-screen relative">
        <Header />
        <main className="w-[92%] h-[calc(100%_-_80px)] max-w-[1440px] mx-auto py-2 flex flex-col items-center justify-between md:flex-row md:items-start md:overflow-hidden">
          <Calendar data={displayableMonths} addForm={handleAddEventClick} />
          <EventsList eventsList={events} />
        </main>
        {renderEventFormPopUp()}
      </div>
    </CalendarContext.Provider>
  );
}

export default App;
