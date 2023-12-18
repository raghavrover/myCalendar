const Event = ({ title, startTime, endTime, description }) => {
  return (
    <li className="border p-3 mb-2 rounded-md">
      <h3 className="text-sm font-medium mb-1">{title}</h3>
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
