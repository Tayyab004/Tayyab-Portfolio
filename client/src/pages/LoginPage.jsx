import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";

const LoginPage = () => {
  const navigate = useNavigate();
  const [creds, setCreds] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    setCreds({ ...creds, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(creds),
      });
      const data = await res.json();
      if (!res.ok) {
        alert(data.msg || "Login failed");
        return;
      }
      localStorage.setItem("token", data.token);
      alert("Logged in successfully!");
      navigate("/admin");
    } catch (err) {
      console.error("Login error:", err);
      alert("Server error");
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Admin Login</h2>
      <form onSubmit={handleLogin} className="login-form">
        <label>Username</label>
        <input
          type="text"
          name="username"
          onChange={handleChange}
          value={creds.username}
          required
        />

        <label>Password</label>
        <input
          type="password"
          name="password"
          onChange={handleChange}
          value={creds.password}
          required
        />

        <button className="btn" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
