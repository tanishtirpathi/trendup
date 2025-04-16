import React, { useState, useEffect } from "react";
import "./style.css";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

import {
  Home,
  Layers,
  Plus,
  Crown,
  Share2,
  User,
  Heart,
  Repeat2,
  BellPlus,
  Code,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import RandomImage from "../pages/RandomImages";
("use client");
import confetti from "canvas-confetti";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

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
  const items = Array.from({ length: 6 });

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
      <aside className=" h-screen bg-gradient-to-b from-black via-blue-950 to-black p-6 border-r border-blue-900 shadow-xl">
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
            { icon: <Code size={18} />, label: "Premium", path: "/premium" },

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
      {/* Main Content */}
      <main className="flex-1 bg-black h-screen overflow-y-auto p-8">
        <div className="flex flex-row gap-4 overflow-x-auto mb-10">
          <div className="flex flex-row gap-4 overflow-x-auto mb-10 px-4">
            {profileData && (
              <div className="flex flex-col items-center shrink-0">
                <div className="relative cursor-pointer">
                  <img
                    src={profileData.avatar_url}
                    alt="avatar"
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  {/* Plus icon positioned like Instagram story add */}
                  <div className="absolute bottom-0 right-0 w-5 h-5 bg-blue-500 border-2 border-black rounded-full flex items-center justify-center">
                    <Plus className="w-3 h-3 text-white" />
                  </div>
                </div>
                <h4 className="text-white text-sm mt-2">Add Your</h4>
              </div>
            )}
          </div>

          {items.map((_, i) => (
            <div className=" mb-4 mx-1 ">
              <img
                src="./logo.png"
                key={i}
                className="w-[56px] h-[56px]  rounded-full shrink-0 "
                id="story"
              />
              <h4 className=" text-white font-light">userName</h4>
            </div>
          ))}
        </div>
        <section className="px-22 space-y-10">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="w-140 p-6 rounded-xl " id="post">
              {/* User Info */}
              <div className="flex items-center gap-1 mb-4">
               
               
                {profileData && (
                  <img
                    src={profileData.avatar_url}
                    alt="avatar"
                    className="h-10 w-10 rounded-full border border-zinc-600"
                  />
                )}
               <div className="flex-col justify-start items-center "> <h2 className="text-l text-white font-bold">
                  User name #{i + 1}
                </h2>
                <h3 className=" px-1 text-xs text-blue font-light ">
                   4hr ago
                </h3></div>
              </div>

              <p className="text-sm text-zinc-300 leading-relaxed">
                Everyone Wants a Happy Ending, Right? But It Doesn't Always Roll
                That Way.
              </p>
              <img
                src="./tweet.jpg"
                alt="post"
                className="w-120 h-64 object-cover rounded-lg border border-zinc-700 mt-4"
              />

              <div className="flex justify-around items-center mt-6 text-zinc-400">
                <div className="flex flex-col items-center group cursor-pointer">
                  <Heart className="group-hover:text-pink-500 transition" />
                  <span className="text-xs mt-1 group-hover:text-white">
                    Like
                  </span>
                </div>

                <div className="flex flex-col items-center group cursor-pointer">
                  <Share2 className="group-hover:text-blue-500 transition" />
                  <span className="text-xs mt-1 group-hover:text-white">
                    Share
                  </span>
                </div>

                <div className="flex flex-col items-center group cursor-pointer">
                  <Repeat2 className="group-hover:text-green-500 transition" />
                  <span className="text-xs mt-1 group-hover:text-white">
                    Repeat
                  </span>
                </div>
              </div>
            </div>
          ))}
        </section>
      </main>
      {/* Right Sidebar */}
      <aside className=" h-screen bg-gradient-to-b from-black via-blue-950 to-black p-6 border-l border-blue-900 shadow-inner ">
        <h2 className="text-lg font-bold mb-4 text-white-400">
          welcome :-trend up{" "}
        </h2>
        <ul className="space-y-6 text-sm">
          <li>
            <Sheet>
              <SheetTrigger className="text-white hover:text-gray-400 flex items-center gap-2 bg-gray-900 ">
                notification
              </SheetTrigger>

              <SheetContent className="w-full sm:w-[380px] bg-gray-900 flex flex-col items-center overflow-auto py-8 px-6">
                {[...Array(12)].map((_, index) => (
                  <div
                    key={index}
                    className="w-full bg-gray-800 rounded-lg shadow-md p-4 flex items-center gap-3"
                  >
                    <BellPlus className="text-blue-500 w-6 h-6" />
                    <div>
                      <h3 className="text-white font-semibold">Rahul :</h3>
                      <p className="text-gray-300 text-sm">
                        posted a new video.
                      </p>
                    </div>
                  </div>
                ))}
              </SheetContent>
            </Sheet>
          </li>
          <li>
            <HoverCard>
              <HoverCardTrigger
                id="HoverCardTrigger"
                className="text-white  bg-gray-900"
              >
                Balance
              </HoverCardTrigger>
              <HoverCardContent>
                you have currently <b>34</b> coin in your account balance.
              </HoverCardContent>
            </HoverCard>
          </li>
          <li>
            <Popover>
              <PopoverTrigger id="PopoverTrigger" className="bg-gray-900">
                code
              </PopoverTrigger>

              <PopoverContent className="bg-black text-white w-50">
                <a
                  href="https://github.com/tanishtirpathi/trendup"
                  className="text-white"
                >
                  {" "}
                  source code{" "}
                </a>{" "}
              </PopoverContent>
            </Popover>
          </li>
        </ul>

        <div className="fixed bottom-10 right-10">
          <Button
            id="logout"
            className="bg-gray-900 px-10  "
            onClick={handleClick}
          >
            log out
          </Button>
        </div>
      </aside>
    </div>
  );
};

export default App;
