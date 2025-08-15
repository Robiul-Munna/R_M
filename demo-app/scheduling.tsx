"use client";
import { useState } from "react";

export default function SchedulingPage() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [task, setTask] = useState("");
  const [error, setError] = useState("");

  function handleSchedule(e: React.FormEvent) {
    e.preventDefault();
    if (!date || !time || !task) {
      setError("All fields are required");
      return;
    }
    setError("");
    alert("Scheduled successfully!");
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Scheduling</h1>
      <form onSubmit={handleSchedule}>
        <input
          className="w-full p-2 border rounded mb-2"
          type="date"
          value={date}
          onChange={e => setDate(e.target.value)}
        />
        <input
          className="w-full p-2 border rounded mb-2"
          type="time"
          value={time}
          onChange={e => setTime(e.target.value)}
        />
        <input
          className="w-full p-2 border rounded mb-2"
          type="text"
          placeholder="Task/Appointment"
          value={task}
          onChange={e => setTask(e.target.value)}
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Schedule
        </button>
      </form>
      {error && <div className="text-red-500 mt-2">{error}</div>}
    </div>
  );
}
