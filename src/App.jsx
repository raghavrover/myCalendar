import Header from "./Components/Header";
import Calendar from "./Components/Calendar";
import EventsList from "./Components/EventsList";
import EventForm from "./Components/EventForm";
import { useState } from "react";

const sampleEvents = [
  {
    title: "Meeting with Team",
    startTime: "10:00 AM",
    endTime: "11:30 AM",
    description: "Discuss project updates and upcoming tasks.",
  },
  {
    title: "Lunch with Client",
    startTime: "12:30 PM",
    endTime: "2:00 PM",
    description: "Meet with the client to discuss project requirements.",
  },
];

function App() {
  const [events, setEvents] = useState(sampleEvents);
  return (
    <>
      <Header />
      <main className="w-full h-[calc(100%_-_80px)] max-w-[1440px] p-2 mx-auto mt-2 flex flex-col items-center justify-between md:flex-row md:items-start">
        <Calendar />
        <EventsList />
      </main>
    </>
  );
}

export default App;
