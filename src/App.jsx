import { useState, useEffect } from "react";
import Header from "./Components/Header";
import Calendar from "./Components/Calendar";
import EventsList from "./Components/EventsList";
import EventForm from "./Components/EventForm";
import CalendarContext from "./Context/CalendarContext";
import { getDisplayableMonths } from "./Helpers/getMonths";
import { EVENTS_STORAGE_KEY, DAYS_IN_WEEK, MONTHS } from "./Constants";

const todayDate = new Date();
const displayableMonths = getDisplayableMonths(todayDate); //Months are indexed from 1 (1-12) in this array

function App() {
  const [currentDate, setCurrentDate] = useState(todayDate);
  const [events, setEvents] = useState([]);
  const [isEventFormOpen, setIsEventFormOpen] = useState(false); // Use state to toggle popup visibility

  //Store events in the local storage
  useEffect(() => {
    const storedEvents = JSON.parse(localStorage.getItem(EVENTS_STORAGE_KEY));
    if (storedEvents) setEvents(storedEvents);
  }, []);

  // Function to handle closing the popup
  const closeEventForm = () => setIsEventFormOpen(false);

  // Trigger opening the popup when "Add Event" button is clicked
  const handleAddEventClick = () => setIsEventFormOpen(true);

  function createEventsDateKey() {
    const key = `${currentDate.getDate()}/${
      currentDate.getMonth() + 1
    }/${currentDate.getFullYear()}`;

    return key;
  }

  //Add events data in local storage and in State
  function modifyEvents(data) {
    setEvents(data);
    localStorage.setItem(EVENTS_STORAGE_KEY, JSON.stringify(data));
  }

  const addEvent = (event) => {
    event.id = Math.random().toString(36).substring(2, 15);
    const dateKey = createEventsDateKey();

    //Getting previous eventsList registered on the current picked date
    const previousEvents = events[dateKey]; //To understand about events data structure refer to `sampleEvents` object in `Constants.js` file
    let newEvents = {};
    if (previousEvents) {
      newEvents[dateKey] = [...previousEvents, event]; // Add to the existing eventsList of particular dateKey
    } else {
      newEvents[dateKey] = [event]; // Creating a new eventsList with a current dateKey
    }
    const newEventsObject = { ...events, ...newEvents }; // Entirely new events data structure
    modifyEvents(newEventsObject);
  };

  const deleteEvent = (eventId) => {
    const dateKey = createEventsDateKey();
    const tempEvents = events[dateKey]; // Get eventsList on the current data
    const filteredEvents = tempEvents.filter((event) => event.id !== eventId);

    let newEvents = {};
    newEvents[dateKey] = filteredEvents; //Attaching new events lists to the current date key
    const newEventsObject = { ...events, ...newEvents }; //Entirely new events data structure
    modifyEvents(newEventsObject);
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
    <CalendarContext.Provider
      value={{
        currentDate,
        setCurrentDate,
        addEvent,
        deleteEvent,
        setIsEventFormOpen,
      }}
    >
      <div className="h-screen relative">
        <Header />
        <main className="w-[92%] h-[calc(100%_-_80px)] max-w-[1440px] mx-auto py-2 flex flex-col items-center gap-3 md:justify-between md:flex-row md:items-start md:overflow-hidden">
          <Calendar data={displayableMonths} addForm={handleAddEventClick} />
          <EventsList events={events} />
        </main>
        {renderEventFormPopUp()}
      </div>
    </CalendarContext.Provider>
  );
}

export default App;
