import { useEffect, useState } from "react";
import { getTasks, deleteTask, updateTask } from "../api";

export default function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadTasks = async () => {
    setLoading(true);
    setError("");
    try {
      const data = await getTasks();
      setTasks(data);
    } catch {
      setError("Failed to load tasks.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const handleToggleStatus = async (task) => {
    await updateTask(task._id, {
      status: task.status === "complete" ? "incomplete" : "complete",
    });
    loadTasks();
  };

  const handleDelete = async (id) => {
    await deleteTask(id);
    loadTasks();
  };

  if (loading) return <p>Loading tasks...</p>;
  if (error) return <p className="error">{error}</p>;

  return (
    <div style={{ marginTop: "20px" }}>
      <h3>Your Tasks</h3>
      {tasks.map((task) => (
        <div key={task._id} className="task-item">
          <p>
            <strong>{task.title}</strong> — {task.status}
          </p>
          <button onClick={() => handleToggleStatus(task)}>
            {task.status === "complete" ? "Mark Incomplete" : "Mark Complete"}
          </button>
          <button onClick={() => handleDelete(task._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

  return (
    <div>
      <h3>Your Tasks</h3>
      {/* tasks will render here */} 
      {tasks.map((task) => (
        <div key={task._id}>
          <p>{task.title}</p>
        </div>
      ))}
    </div>
  );
