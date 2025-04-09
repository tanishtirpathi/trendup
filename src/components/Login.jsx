import React, { useState } from "react";
import "./Auth.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    if ((email === "tanishtirpathi@gmail.com", password === "Rattangarh0011")) {
      alert("hi welcome tanish sir ");
      window.location.href = "main";
    } else {
      alert("username and password is incorrect ");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-graphic">images or graphic</div>
      <form onSubmit={handleLogin} className="auth-box">
        <h2>Login to the trend up</h2>
        <input
          type="email"
          placeholder="Email / username "
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
          Login on trend up
        </button>
        <div className="Icons ">
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
        </div>
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
