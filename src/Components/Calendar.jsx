import { useContext, createRef, useState, useEffect } from "react";
import Month from "./Month";
import Select from "./Select";
import CalendarContext from "../Context/CalendarContext";
import Button from "./Button";
import { MONTHS } from "../Constants";

const Calendar = ({ data, addForm }) => {
  const { currentDate } = useContext(CalendarContext);
  const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth()); //To hold current month(indexed from zero) on Select dropdown

  // Creating refs to pass each `reference` as value of `ref` attribute of the month Components
  // Here `refs` is an object which has `references` as values with Month names as keys
  const refs = MONTHS.reduce((acc, value) => {
    acc[value] = createRef(null);
    return acc;
  }, {});

  function handleMonthChange(month) {
    setCurrentMonth(month);

    // Scroll to the month selector when changing months
    refs[MONTHS[month]].current.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
  }
  useEffect(() => {
    handleMonthChange(currentMonth);
  }, []);

  return (
    <div className="w-full min-h-[400px] max-w-xs overflow-hidden relative md:h-full">
      <div className="w-full flex justify-between gap-2 px-1">
        <Select
          id={"monthDropDown"}
          options={MONTHS}
          value={currentMonth}
          onMonthChange={handleMonthChange}
        />
        <Button onClick={addForm}>Add Event</Button>
      </div>

      {/* Display months vertically in desktop devices and horizontally in mobiles */}
      <ul className="mt-2 w-full flex gap-2 md:flex-col overflow-auto md:h-full">
        {data?.map((obj, i) => {
          return <Month {...obj} key={i} ref={refs[MONTHS[obj.month - 1]]} />;
        })}
      </ul>
    </div>
  );
};

export default Calendar;
