import { useState } from "react";
import { useContext } from "react";
import CalendarContext from "../Context/CalendarContext";
import Input from "./Input";
import Textarea from "./Textarea";
import Button from "./Button";

const EventForm = ({ close, add, event }) => {
  const { currentDate } = useContext(CalendarContext);
  const [title, setTitle] = useState("");
  const [startTime, setStartTime] = useState("09:00");
  const [endTime, setEndTime] = useState("17:00");
  const [description, setDescription] = useState("");

  const handleAddEvent = (e) => {
    e.preventDefault();
    // Validate input fields as needed
    // For simplicity, we'll assume all fields are required
    if (title && startTime && endTime && description) {
      const eventData = {
        title,
        startTime,
        endTime,
        description,
      };

      // Pass the event data to the parent component and close the form
      add(eventData);
      close();
      // Reset form fields after adding an event
      setTitle("");
      setStartTime("");
      setEndTime("");
      setDescription("");
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <div className="w-full m-auto py-5 px-4 max-w-md bg-slate-400 rounded-xl md:py-10 md:px-6">
      <h2 className="text-lg font-semibold text-white mb-2">
        Add Event On:
        {` ${currentDate.getDate()}/${
          currentDate.getMonth() + 1
        }/${currentDate.getFullYear()}`}
      </h2>
      <form onSubmit={handleAddEvent}>
        <Input
          id={"title"}
          type={"text"}
          label={"Title"}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder={"Add title"}
          required
        />

        <div className="w-full flex gap-4">
          <Input
            id={"startTime"}
            type={"time"}
            label={"Start Time"}
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
          />
          <Input
            id={"endTime"}
            type={"time"}
            label={"End Time"}
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
          />
        </div>

        <Textarea
          id={"description"}
          type={"text"}
          label={"Description"}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder={"Add description"}
          required
        />

        <div className="w-full flex justify-center gap-4 mt-4">
          <Button
            className="bg-gray-500 text-white p-2 rounded-md"
            type="button"
            onClick={close}
          >
            Close
          </Button>

          <Button
            className="bg-blue-500 text-white p-2 rounded-md"
            type="submit"
          >
            Add Event
          </Button>
        </div>
      </form>
    </div>
  );
};

export default EventForm;
