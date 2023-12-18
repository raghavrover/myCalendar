import { useState } from "react";
import { addMonths, subMonths } from "date-fns";
import Header from "./Components/Header";
import Calendar from "./Components/Calendar";
import EventsList from "./Components/EventsList";
import EventForm from "./Components/EventForm";

function getDisplayableMonths(date) {
  const year = date.getFullYear(),
    month = date.getMonth(); // getMonth() method gives 0-11 month numbers
  const tempDate = new Date(year, month); // Month argument should be zero indexed(0-11)

  const monthsData = [];
  // Getting previous six months
  for (let i = 6; i >= 1; i--) {
    const currentDate = subMonths(tempDate, i);

    const monthObj = {
      month: currentDate.getMonth() + 1,
      year: currentDate.getFullYear(),
    };
    monthsData.push(monthObj);
  }

  // Getting next six months (including current month)
  for (let i = 0; i <= 6; i++) {
    const currentDate = addMonths(tempDate, i);
    const monthObj = {
      month: currentDate.getMonth() + 1,
      year: currentDate.getFullYear(),
    };
    monthsData.push(monthObj);
  }

  return monthsData;
}

const todayDate = new Date();
const displayableMonths = getDisplayableMonths(todayDate); //Months are indexed from 1 (1-12) in this array

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
  const [currentDate, setCurrentDate] = useState(todayDate);
  const [events, setEvents] = useState(sampleEvents);

  //Store events in the local storage

  return (
    <div className="h-screen">
      <Header />
      <main className="w-[92%] h-[calc(100%_-_80px)] max-w-[1440px] mx-auto pt-2 overflow-hidden flex flex-col items-center justify-between md:flex-row md:items-start">
        <Calendar data={displayableMonths} />
        <EventsList eventsList={sampleEvents} />
      </main>
    </div>
  );
}

export default App;
