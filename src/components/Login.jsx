import React, { useState } from "react";
import "./Auth.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    if (email === "tanishtirpathi@gmail.com" && password === "Rattangarh0011") {
      setMessage("👋 Hi, welcome Tanish sir!");
      setTimeout(() => {
        window.location.href = "main";
      }, 1500); // small delay so user sees the message
    } else {
      setMessage("❌ Invalid detail. Please try again.");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-graphic">images or graphic</div>
      <form onSubmit={handleLogin} className="auth-box">
        <h2>Login to TrendUp</h2>
        <input
          type="email"
          placeholder="Email / username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button id="logintype" type="submit">
          Login on TrendUp
        </button>

        {message && <div className="msg">{message}</div>}

        <p>
          <a href="#">Forgot password?</a>
        </p>
        <p>Don't have an account?</p>
        <a href="/signup" id="signup">
          Sign up
        </a>
      </form>
    </div>
  );
}
