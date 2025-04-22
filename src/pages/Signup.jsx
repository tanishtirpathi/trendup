import React, { useState } from "react";
import { BorderBeam } from "../components/magicui/border-beam";
import { ShimmerButton } from "../components/magicui/shimmer-button";
import { ShinyButton } from "../components/magicui/shiny-button";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase-config";
import './auth.css'
export default function Signup() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      // User registered successfully; you can access userCredential.user
      console.log("User signed up:", userCredential.user);
      window.location.href = "/main";
    } catch (error) {
      console.error("Error signing up:", error.message);
    }
  };
  const handleLogin = () => {
    window.location.href = "/login";
  };

  return (
    <div className="flex justify-around items-center h-screen w-screen overflow-scroll bg-gradient-to-br from-[#0d0d0d] via-black to-[#002d81] text-white gap-8 p-4">
      {/* Font imports with script tag instead of CSS import */}
      <style>
        {`
          @import url("https://fonts.googleapis.com/css2?family=Borel&family=Homemade+Apple&family=Montserrat:ital,wght@0,100..900;1,100..900&family=PT+Serif:ital,wght@0,400;0,700;1,400;1,700&family=Poetsen+One&family=Source+Code+Pro:ital,wght@0,200..900;1,200..900&family=Stalinist+One&family=Syne:wght@400..800&family=Yellowtail&display=swap");
          
          /* Hide scrollbars for all browsers */
          ::-webkit-scrollbar {
            display: none;
          }
          html {
            scrollbar-width: none;
          }
          body {
            -ms-overflow-style: none;
          }
        `}
      </style>

      <div className="w-[400px] h-[400px] bg-gray-400 flex items-center justify-center font-bold overflow-hidden">
        <img src="./logo.png" alt="" />
      </div>
      
      <form onSubmit={handleSignup} className="flex flex-col justify-center items-center p-5 gap-4 w-[300px]">
        <h2 className="font-['syne'] text-xl">Sign up in trend up</h2>
        
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="p-2 text-base rounded-lg border-none w-full bg-[#363636] text-gray-200"
        />
        
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          className="p-2 text-base rounded-lg border-none w-full bg-[#363636] text-gray-200"
        />
        
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="p-2 text-base rounded-lg border-none w-full bg-[#363636] text-gray-200"
        />
        
      
              <ShimmerButton 
                 type="submit"
                 className="px-14 py-1 bg-transparent"
               >
                 Sign up  <BorderBeam
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
     
        
        <p className="text-[#0088f8]">Already have an account?</p>
        
         <ShinyButton id="ShinyButton" onClick={handleLogin}>
              <p className="text-white">  Login on trend up </p> 
               </ShinyButton>
      </form>
    </div>
  );
}