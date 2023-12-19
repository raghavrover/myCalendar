import { useContext } from "react";
import CalendarContext from "../Context/CalendarContext";
import Button from "./Button";

const Event = ({ id, title, startTime, endTime, description }) => {
  const { deleteEvent } = useContext(CalendarContext);

  function deleteTheEvent() {
    deleteEvent(id);
  }

  return (
    <li className="max-w-lg border p-3 mb-2 rounded-md">
      <div className="w-full flex justify-between mb-2">
        <h3 className="text-sm font-medium mb-1">{title}</h3>
        <div className="flex gap-1">
          <Button
            className="text-[10px] px-[10px] py-1 md:px-2 md:py-2 md:text-xs"
            onClick={deleteTheEvent}
          >
            Delete
          </Button>
        </div>
      </div>
      <p className="text-xs">
        <span className="font-medium">Start Time:</span> {startTime}
      </p>
      <p className="text-xs">
        <span className="font-medium">End Time:</span> {endTime}
      </p>
      <p className="text-xs">
        <span className="font-medium">Description:</span> {description}
      </p>
    </li>
  );
};

export default Event;
