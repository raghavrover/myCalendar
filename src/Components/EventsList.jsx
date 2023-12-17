import Event from "./Event";

function EventsList({ eventsList }) {
  return (
    <div className="w-full md:w-[47%]">
      {eventsList.length === 0 && (
        <h2 className="text-sm text-center">No events are registered</h2>
      )}
      {eventsList && (
        <ul>
          {eventsList.map((event) => (
            <Event key={event.title} {...event} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default EventsList;
