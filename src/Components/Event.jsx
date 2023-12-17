const Event = ({ title, startTime, endTime, description }) => {
  return (
    <li className="border p-3 mb-2 rounded-md">
      <h3 className="text-md font-semibold mb-1">{title}</h3>
      <p>
        <strong>Start Time:</strong> {startTime}
      </p>
      <p>
        <strong>End Time:</strong> {endTime}
      </p>
      <p>
        <strong>Description:</strong> {description}
      </p>
    </li>
  );
};

export default Event;
