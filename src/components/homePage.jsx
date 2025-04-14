import React, { useState, useEffect } from "react";
import "./style.css";
import { Home, Layers, Crown, User, BarChart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import RandomImage from "../pages/RandomImages";
"use client";
import confetti from "canvas-confetti";
import { Button } from "@/components/ui/button";

const App = () => {
  const [profileData, setProfileData] = useState(null);
  const Navigate = useNavigate();
  const fetchGitHubData = async () => {
    const url = "https://api.github.com/users/tanishtirpathi";
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("User not found");
    }
    const data = await response.json();
    setProfileData(data);
  };

  const handleClick = () => {
    const end = Date.now() + 3 * 1000; // 3 seconds
    const colors = ["#a786ff", "#fd8bbc", "#eca184", "#f8deb1"];
 
    const frame = () => {
      if (Date.now() > end) return;
 
      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        startVelocity: 60,
        origin: { x: 0, y: 0.5 },
        colors: colors,
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        startVelocity: 60,
        origin: { x: 1, y: 0.5 },
        colors: colors,
      });
 
      requestAnimationFrame(frame);
    };
 
    frame();


    setTimeout(() => {
      window.location.href = "/";
    }, 1500); 

  };
  useEffect(() => {
    fetchGitHubData();
  }, []);

  return (
    <div className="flex h-screen w-screen font-sans text-white overflow-hidden">
      {/* Left Sidebar */}
           <aside className="fixed h-screen bg-gradient-to-b from-black via-blue-950 to-black p-6 border-r border-blue-900 shadow-xl">
             <div className="mb-10 flex items-center gap-3">
               <img src="./logo-tr.png" className=" w-14 h-14 " />
               <span className="text-xl font-bold tracking-wide">Dashboard</span>
             </div>
             <nav className="flex flex-col gap-6 text-base">
               {[
                 { icon: <Home size={18} />, label: "Home", path: "/main" },
                 {
                   icon: <Layers size={18} />,
                   label: "Explore",
                   path: "/explore",
                 },
                 { icon: <BarChart size={18} />, label: "notification", path: "/notification" },
                 { icon: <User size={18} />, label: "Profile", path: "/profile" },
                 {
                   icon: <Crown size={18} />,
                   label: "about",
                   path: "/about  ",
                 },
               ].map((item, index) => (
                 <a
                   key={index}
                   href={item.path}
                   className="flex items-center gap-3 text-white no-underline hover:text-blue-400 transition-all duration-200"
                 >
                   {item.icon}
                   {item.label}
                 </a>
               ))}
             </nav>
           </aside>

      {/* Right Sidebar */}
      <aside className="w-56 h-screen bg-gradient-to-b from-black via-blue-950 to-black p-6 border-l border-blue-900 shadow-inner fixed top-0 right-0">
        <h2 className="text-lg font-bold mb-4 text-white-400">Links</h2>
        <ul className="space-y-4 text-sm">
          <li>
            <a href="#" className="text-white hover:text-gray-400 flex items-center gap-2">
              Setting
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-400 flex items-center gap-2">
              About

            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-400 flex items-center gap-2">
              Other

            </a>
          </li>
        </ul>

        <h2 className="text-lg font-bold mt-8 mb-4 text-blue-400">Log Out</h2>
      <div className="relative">
           <Button className="bg-black px-10  "onClick={handleClick}>log out</Button>
         </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-64 mr-56 h-screen overflow-y-auto bg-gradient-to-br from-black via-zinc-900 to-blue-950 p-8">
        <div className="flex gap-4 overflow-x-auto mb-4">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="w-14 h-14 bg-red-300 rounded-full" />
          ))}
        </div>

        <div className="flex flex-col space-y-6">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="w-full p-6 rounded-md bg-gray-950 bg-opacity-30 border border-white-900"
            >
              <div className="flex items-center gap-4 mb-2">
                {profileData && (
                  <img
                    src={profileData.avatar_url}
                    className="h-10 w-10 rounded-full"
                    alt="GitHub Avatar"
                  />
                )}
                <h2 className="text-lg font-semibold">Tweet #{i + 1}</h2>
              </div>
              <p className="text-sm text-zinc-300">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa officia maxime illum.
              </p>
              <RandomImage />

            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default App;
