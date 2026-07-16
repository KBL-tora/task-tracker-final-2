import { useAuth } from "./context/AuthContext";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

export default function App() {
  const { token } = useAuth();

  if (!token) {
    return (
      <div>
        <Register />
        <Login />
        <p>Log in to manage your tasks.</p>
      </div>
    );
  }

  return <Dashboard />;
}
