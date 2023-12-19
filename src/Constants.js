export const EVENTS_STORAGE_KEY = "events-data";
export const DAYS_IN_WEEK = 7;
export const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
export const weekDaysList = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// Sample Events object to indicate data storage structure of events.
export const sampleEvents = {
  "18/12/2023": [
    {
      id: "firstId", //Id is generated randomly while adding an event
      title: "Meeting with Team",
      startTime: "10:00 AM",
      endTime: "11:30 AM",
      description: "Discuss project updates and upcoming tasks.",
    },
    {
      id: "secondId", //Id is generated randomly while adding an event
      title: "Lunch with Client",
      startTime: "12:30 PM",
      endTime: "2:00 PM",
      description: "Meet with the client to discuss project requirements.",
    },
  ],
  "19/12/2023": [
    {
      id: "randomId", //Id is generated randomly while adding an event
      title: "Meeting with Team",
      startTime: "10:00 AM",
      endTime: "11:30 AM",
      description: "Discuss project updates and upcoming tasks.",
    },
  ],
};
