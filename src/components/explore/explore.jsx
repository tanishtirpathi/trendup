import React, { useEffect, useState } from "react";
import { Home, Layers, Settings, User, BarChart } from "lucide-react";
import RandomImage from "../../pages/RandomImages";
import "./explore.css";
function Explore() {
  const [Count, setCount] = useState(12);
  // const [seletedImage , setselectedImage] = useState(null);

  useEffect(() => {
    const container = document.getElementById("scrollable-main");

    const handleScroll = () => {
      if (
        container.scrollHeight - container.scrollTop <=
        container.clientHeight + 500
      ) {
        setCount((prev) => prev + 6);
      }
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

function handleclick(){
alert('hi guys')
}

  return (
    <>
      <div className="flex h-screen w-screen font-sans text-white overflow-hidden">
        <aside className=" h-screen bg-gradient-to-b from-black via-blue-950 to-black p-6 border-r border-blue-900 shadow-xl ">
          <div className="mb-10 flex items-center gap-3">
            <div className="bg-white w-10 h-10 rounded-full" />
            <span className="text-xl font-bold tracking-wide">Dashboard</span>
          </div>
          <nav className="flex flex-col gap-6 text-base">
            {[
              { icon: <Home size={18} />, label: "Home" },
              { icon: <Layers size={18} />, label: "Components" },
              { icon: <BarChart size={18} />, label: "Tasks" },
              { icon: <User size={18} />, label: "Profile" },
              { icon: <Settings size={18} />, label: "Settings" },
            ].map((item, index) => (
              <a
                key={index}
                href="#"
                className="flex items-center gap-3 text-white no-underline hover:text-blue-400 transition-all duration-200"
              >
                {item.icon}
                {item.label}
              </a>
            ))}
          </nav>
        </aside>
        <main
          id="scrollable-main"
          className=" h-screen bg-gradient-to-b from-black via-blue-950 to-black p-6 overflow-scroll"
        >
          <div className="grid grid-cols-3 md:grid-cols-3 overflow-scroll ">
            {Array.from({ length: Count }).map((_, i) => {
              return <RandomImage key={i} onclick={handleclick}/>;
            })}
          </div>
        </main>
      </div>
    </>
  );
}

export default Explore;
