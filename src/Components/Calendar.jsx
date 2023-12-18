import { useContext, useRef, useState } from "react";
import Month from "./Month";
import Select from "./Select";
import CalendarContext from "../Context/CalendarContext";
import Button from "./Button";

const DAYS_IN_WEEK = 7;
const MONTHS = [
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

const Calendar = ({ data, addForm }) => {
  const { currentDate } = useContext(CalendarContext);
  const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth()); //Month is indexed from zero
  const monthSelectorRef = useRef(null);

  function handleMonthChange(month) {
    setCurrentMonth(month);
    // Scroll to the month selector when changing months
    monthSelectorRef.current.scrollIntoView({
      behavior: "smooth",
      block: "enter",
    });
  }

  return (
    <div className="w-full h-full max-w-xs">
      <div className="w-full flex justify-between gap-2">
        <Select
          id={"monthDropDown"}
          options={MONTHS}
          value={currentMonth}
          onMonthChange={handleMonthChange}
        />
        <Button onClick={addForm}>Add Event</Button>
      </div>
      {/* Your calendar rendering logic goes here */}
      {/* Display months vertically in desktop devices and horizontally in mobiles */}
      <ul className="mt-2 w-full h-full flex gap-2 md:flex-col overflow-x-auto md:last:mb-4 md:pb-4">
        {data?.map((obj, i) => (
          <Month key={i} {...obj} />
        ))}
      </ul>
    </div>
  );
};

export default Calendar;
