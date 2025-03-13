import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    FullName: "",
    Email: "",
    Username: "",
    Password: "",
    Phone: "",
    Address: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get("http://localhost:3000/users");
      const users = response.data;

      // Check if email or username already exists
      const emailExists = users.some((user) => user.email === formData.email);
      const usernameExists = users.some((user) => user.username === formData.username);

      if (emailExists) {
        setMessage("Email already registered!");
      } else if (usernameExists) {
        setMessage("Username already taken!");
      } else {
        // Save new user to JSON Server
        await axios.post("http://localhost:3000/users", formData);
        setMessage("Registration successful!");
        setTimeout(() => navigate("/login"), 2000); // Redirect to login page after 2 seconds
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("Something went wrong. Try again!");
    }
  };

  return (
    <div className="auth-container">
      <h2>Register</h2>
      {message && <p className={message.includes("successful") ? "success-message" : "error-message"}>{message}</p>}
      <form onSubmit={handleSubmit}>
        <input type="text" name="fullName" placeholder="Full Name" required onChange={handleChange} />
        <input type="email" name="email" placeholder="Email" required onChange={handleChange} />
        <input type="password" name="password" placeholder="Password" required onChange={handleChange} />
        <input type="text" name="username" placeholder="Username" required onChange={handleChange} />
        <input type="tel" name="phone" placeholder="Phone Number" required onChange={handleChange} />
        <input type="text" name="address" placeholder="Address" required onChange={handleChange} />
        <button type="submit">Sign Up</button>
      </form>
      <p>Already have an account? <Link to="/login">Login</Link></p>
    </div>
  );
};

export default Register;