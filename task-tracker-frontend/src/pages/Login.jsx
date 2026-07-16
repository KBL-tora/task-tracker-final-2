import { useState } from "react";
import { loginUser } from "../api";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const { setToken } = useAuth();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = await loginUser(form);
      setToken(token);
      alert("Login successful");
    } catch (err) {
      alert("Login failed");
    }
  };


    return (
      <div className="container">
        <h2>Login</h2>
        <form>
          <input placeholder="Email" />
          <input placeholder="Password" type="password" />
          <button>Login</button>
        </form>
      </div>
    );
}
