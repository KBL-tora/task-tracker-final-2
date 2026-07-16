import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

export default function Dashboard() {
  const [reloadFlag, setReloadFlag] = useState(0);

  const triggerReload = () => setReloadFlag((f) => f + 1);

  return (
    <div className="container">
      <h2>Dashboard</h2>
      <TaskForm onTaskCreated={triggerReload} />
      <TaskList key={reloadFlag} />
    </div>
  );
}


