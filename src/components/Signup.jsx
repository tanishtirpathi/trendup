import React, { useState } from "react";
import "./Auth.css";
import { BorderBeam } from "./magicui/border-beam";
export default function Signup() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    window.location.href = "/";
  };

  return (
    <div className="auth-container">
      <div className="auth-graphic">images or graphic</div>
      <form onSubmit={handleSignup} className="auth-box">
        <h2>Sign up in trend up</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button id="signintype" type="submit">
          Sign up on trend up
                  <BorderBeam
                  size={500}
                  initialOffset={20}
                  className="from-transparent via-blue-500 to-transparent"
                  transition={{
                    type: "spring",
                    stiffness: 80,
                    damping: 50,
                  }}
                />
        </button>
        <p>Already have an account?</p>
        <a href="/login">Login on trend up</a>
      </form>
    </div>
  );
}
