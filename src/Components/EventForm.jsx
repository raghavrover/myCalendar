// components/Calendar/EventForm.js
import { useState } from "react";
import Input from "./Input";

const EventForm = ({ onAddEvent }) => {
  const [title, setTitle] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [description, setDescription] = useState("");

  const handleAddEvent = () => {
    // Validate input fields as needed
    // For simplicity, we'll assume all fields are required
    if (title && startTime && endTime && description) {
      const eventData = {
        title,
        startTime,
        endTime,
        description,
      };

      // Pass the event data to the parent component
      onAddEvent(eventData);

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
    <div className="mt-4">
      <h2 className="text-lg font-semibold mb-2">Add Event</h2>
      <form onSubmit={handleAddEvent}>
        <Input
          id={"title"}
          type={"text"}
          label={"Title"}
          value={""}
          placeholder={"Add title"}
          required
        />
        <Input
          id={"startTime"}
          type={"time"}
          label={"Start Time"}
          value={""}
          placeholder={""}
          required
        />
        <Input
          id={"endTime"}
          type={"time"}
          label={"End Time"}
          value={""}
          placeholder={"Add title"}
          required
        />
        <Input
          id={"description"}
          type={"text"}
          label={"Description"}
          value={""}
          placeholder={"Add description"}
          required
        />

        <button className="bg-blue-500 text-white p-2 rounded-md" type="submit">
          Add Event
        </button>
      </form>
    </div>
  );
};

export default EventForm;
