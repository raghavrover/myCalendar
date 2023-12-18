import { useContext, useState } from "react";
import Month from "./Month";
import Select from "./Select";
import CalendarContext from "../Context/CalendarContext";

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

const Calendar = ({ data }) => {
  const { currentDate } = useContext(CalendarContext);
  const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth()); //Month is indexed from zero
  return (
    <div className="w-full h-full max-w-xs">
      <Select
        id={"monthDropDown"}
        options={MONTHS}
        value={currentMonth}
        onMonthChange={setCurrentMonth}
      />
      {/* Your calendar rendering logic goes here */}
      {/* Display months vertically in desktop devices and horizontally in mobiles */}
      <ul className="mt-2 w-full h-full pb-4 flex gap-2 md:flex-col overflow-auto last:mb-4">
        {data?.map((obj, i) => (
          <Month key={i} {...obj} />
        ))}
      </ul>
    </div>
  );
};

export default Calendar;
