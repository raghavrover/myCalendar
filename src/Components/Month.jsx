import { startOfMonth, endOfMonth } from "date-fns";
import { pl } from "date-fns/locale";

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

  // Order dates array to match with weekday
  const placeholderArray = new Array(startDay).fill(0);
  // Array of dates along with placeholder weekdays
  const newDatesArray = [...placeholderArray, ...datesArray];

  return (
    <li className="w-full my-2 ">
      <div className="w-full flex justify-between items-center">
        <p className="text-sm">{monthsList[month - 1]}</p>
        <span className="text-xs">{year}</span>
      </div>
      <ul className="flex flex-col bg-slate-300">
        {/* Display weekdays grid with 7-template columns */}
        <li className="grid grid-cols-7 items-center bg-slate-400  py-3">
          {weekDaysList.map((day) => (
            <div className="text-xs text-center text-slate-700p-2" key={day}>
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
                  className="text-xs text-center text-slate-700  p-2 "
                  key={i}
                >
                  {day}
                </div>
              );
            }
            return (
              <div
                className="text-xs text-center text-white  p-2 "
                key={i}
              ></div>
            );
          })}
        </li>
      </ul>
    </li>
  );
}

export default Month;
