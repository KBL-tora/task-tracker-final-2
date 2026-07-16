import { useState } from "react";
import { createTask } from "../api";

export default function TaskForm({ onTaskCreated }) {
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await createTask({ title, status: "incomplete" });
      setTitle("");
      onTaskCreated && onTaskCreated();
    } catch {
      setError("Failed to create task.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <p className="error">{error}</p>}
      <input
        placeholder="New Task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button>Add Task</button>
    </form>
  );
}

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="New Task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button>Add Task</button>
    </form>
  );
