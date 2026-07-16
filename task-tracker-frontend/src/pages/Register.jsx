import { useState } from "react";
import { registerUser } from "../api";

export default function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await registerUser(form);
      alert("Registration successful");
    } catch (err) {
      alert("Registration failed");
    }
  };


   return (
     <div className="container">
       <h2>Register</h2>
       <form>
         <input placeholder="Name" />
         <input placeholder="Email" />
         <input placeholder="Password" type="password" />
         <button>Register</button>
       </form>
     </div>
   );
}
