import { startOfMonth, endOfMonth } from "date-fns";
import { useContext } from "react";
import CalendarContext from "../Context/CalendarContext";

const weekDaysList = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const monthsList = [
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

function getDatesArray(start, end) {
  const array = [];
  for (let i = start; i <= end; i++) {
    array.push(i);
  }

  return array;
}

function Month({ month, year }) {
  const { currentDate, setCurrentDate } = useContext(CalendarContext);
  const currentDay = currentDate.getDate(),
    currentMonth = currentDate.getMonth() + 1,
    currentYear = currentDate.getFullYear();

  const areMonthAndYearSame = currentMonth === month && currentYear === year;

  // Creating a date, just to get start and end of the days of the current month
  const currentMonthDate = new Date(year, month - 1);
  // Get the start and end of the current month
  const startOfCurrentMonth = startOfMonth(currentMonthDate);
  const endOfCurrentMonth = endOfMonth(currentMonthDate);
  const datesArray = getDatesArray(
    startOfCurrentMonth.getDate(),
    endOfCurrentMonth.getDate()
  );

  const startDay = startOfCurrentMonth.getDay();
  // Order the dates array to match with weekday when displayed as Calendar
  const placeholderArray = new Array(startDay).fill(0);
  // Array of dates along with placeholder weekdays
  const newDatesArray = [...placeholderArray, ...datesArray];

  function handleClick(day) {
    const newDate = new Date(year, month - 1, day);
    setCurrentDate(newDate);
  }

  return (
    <li className="w-full min-w-[300px] my-2">
      <div className="w-full flex justify-between items-center">
        <p className="text-sm">{monthsList[month - 1]}</p>
        <span className="text-xs">{year}</span>
      </div>

      <ul className="flex flex-col bg-slate-300">
        {/* Display weekdays grid with 7-template columns */}
        <li className="grid grid-cols-7 items-center bg-slate-400">
          {weekDaysList.map((day) => (
            <div
              className="aspect-square text-xs text-center text-slate-700 flex items-center justify-center"
              key={day}
            >
              {day}
            </div>
          ))}
        </li>
        {/*Display month dates using grid with 7-template columns and let auto flow the rows*/}
        <li className="grid grid-cols-7 items-center">
          {newDatesArray.map((day, i) => {
            if (day !== 0) {
              return (
                <div
                  className="w-full aspect-square flex items-center justify-center"
                  key={i}
                >
                  <div
                    className={`${
                      areMonthAndYearSame && currentDay === day
                        ? "bg-teal-800 text-white"
                        : ""
                    }  text-xs text-center w-[60%] aspect-square flex items-center justify-center rounded-full text-slate-700 cursor-pointer duration-200 hover:bg-teal-600 hover:text-white`}
                    onClick={() => handleClick(day)}
                  >
                    {day}
                  </div>
                </div>
              );
            }
            return <div className="p-2" key={i}></div>;
          })}
        </li>
        {/* To add extra space to months in mobile view  */}
        {newDatesArray.length <= 35 && (
          <li className="grid grid-cols-7 items-center md:hidden">
            <div className="w-full aspect-square"></div>
          </li>
        )}
      </ul>
    </li>
  );
}

export default Month;
