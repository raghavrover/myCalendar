import { useContext } from "react";
import CalendarContext from "../Context/CalendarContext";
import Event from "./Event";

function EventsList({ events }) {
  const { currentDate } = useContext(CalendarContext);

  // Events Object Key Format 'DD/MM/YYYY'
  const currentDayKey = `${currentDate.getDate()}/${
    currentDate.getMonth() + 1
  }/${currentDate.getFullYear()}`;

  //If events are registered, then `eventsList` is going to be an `Array` in two cases
  // i. events are registered and are present in the Array
  // ii. all the events are deleted(Array of length zero)
  // else `undefined`
  const eventsList = events[currentDayKey];

  let areEventsThere = true;

  if (eventsList === undefined) {
    //Safety Case, to not to raise error
    areEventsThere = false;
  } else if (eventsList.length === 0) {
    areEventsThere = false;
  }

  return (
    <div className="w-full">
      {!areEventsThere && (
        <h2 className="text-sm text-center">
          No events are registered on {currentDayKey}
        </h2>
      )}
      {areEventsThere && (
        <ul className="w-full mx-auto">
          <li className="w-full text-center">Events on {currentDayKey}</li>
          {eventsList.map((event) => (
            <Event key={event.id} {...event} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default EventsList;
