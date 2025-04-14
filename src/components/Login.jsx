import React, { useState } from "react";
import { ShinyButton } from "./magicui/shiny-button";
import { BorderBeam } from "./magicui/border-beam";
import { ShimmerButton } from "./magicui/shimmer-button";

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
      }, 1500);
    } else {
      setMessage("❌ Invalid detail. Please try again.");
    }
  };
 
  const handleSignUp = () => {
    window.location.href = "/signup";
  };

  return (
    <div className="flex justify-around items-center h-screen w-screen bg-gradient-to-br from-neutral-900 via-black to-blue-950 text-white gap-8 p-4">
      <div className="w-72 h-72 bg-gray-400 flex items-center justify-center font-bold">    <BorderBeam
        size={500}
        initialOffset={20}
        className="from-transparent via-blue-500 to-transparent"
        transition={{
          type: "spring",
          stiffness: 80,
          damping: 50,
        }}
      />
        images or graphic
      </div>
     
      <form onSubmit={handleLogin} className="flex flex-col justify-center items-center p-5 gap-4 w-72">
        <h2 className="font-bold text-xl">Login to TrendUp</h2>
        <input
          type="email"
          placeholder="Email / username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="p-2 text-base rounded-lg border-none w-full bg-neutral-800 text-gray-200"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="p-2 text-base rounded-lg border-none w-full bg-neutral-800 text-gray-200"
        />
      
        <ShimmerButton
          type="submit"
          className="pl-14 pr-14 bg-transparent"
        >
          Login on TrendUp   <BorderBeam
        size={500}
        initialOffset={20}
        className="from-transparent via-blue-500 to-transparent"
        transition={{
          type: "spring",
          stiffness: 80,
          damping: 50,
        }}
      />
        </ShimmerButton>
       
        {message && (
          <div className="mt-1 p-2 rounded-lg text-gray-100 font-bold text-sm text-center">
            {message}
          </div>
        )}
       
        <p className="text-gray-300 hover:text-white cursor-pointer">Forgot password?</p>
        <p className="text-blue-500">Don't have an account?</p>
       
        <ShinyButton onClick={handleSignUp}>
          <p className="text-white">Sign up</p>
        </ShinyButton>
      </form>
     
   
    </div>
  );
}