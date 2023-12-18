import Month from "./Month";
import Select from "./Select";

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
  return (
    <div className="w-full h-full min-w-[300px] max-w-sm overflow-y-auto">
      <Select id={"monthDropDown"} options={MONTHS} />
      {/* Your calendar rendering logic goes here */}
      {/* Display months vertically in desktop devices and horizontally in mobiles */}
      <ul className="">
        {data?.map((obj, i) => (
          <Month key={i} {...obj} />
        ))}
      </ul>
    </div>
  );
};

export default Calendar;
