import Event from "./Event";

function EventsList({ eventsList }) {
  return (
    <div className="w-full">
      {eventsList.length === 0 && (
        <h2 className="text-sm text-center">No events are registered</h2>
      )}
      {eventsList && (
        <ul>
          {eventsList.map((event) => (
            <Event key={event.id} {...event} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default EventsList;
