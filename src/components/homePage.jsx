import React from "react";
import "./style.css";
import { Home, Layers, Settings, User, BarChart } from "lucide-react";
import { useNavigate } from "react-router-dom";

const App = () => {
  const Navigate = useNavigate();

  return (
    <div className="flex h-screen w-screen font-sans text-white overflow-hidden">
      {/* Left Sidebar */}
      <aside className="w-64 h-screen bg-gradient-to-b from-black via-blue-950 to-black p-6 border-r border-blue-900 shadow-xl fixed top-0 left-0">
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

      {/* Right Sidebar */}
      <aside className="w-56 h-screen bg-gradient-to-b from-black via-blue-950 to-black p-6 border-l border-blue-900 shadow-inner fixed top-0 right-0">
        <h2 className="text-lg font-bold mb-4 text-white-400">Links</h2>
        <ul className="space-y-4 text-sm">
          <li>
            <a href="#" className="hover:text-white-400 flex items-center gap-2">
              setting
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-white-400 flex items-center gap-2">
              about
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-white-400 flex items-center gap-2">
              other
            </a>
          </li>
        </ul>

        <h2 className="text-lg font-bold mt-8 mb-4 text-blue-400">Log Out</h2>
        <button
          onClick={() => Navigate("/")}
          className="px-4 py-2 bg-black hover:bg-blue-900 rounded-md text-white transition-colors border border-blue-800"
        >
          Log out
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-64 mr-56 h-screen overflow-y-auto bg-gradient-to-br from-black via-zinc-900 to-blue-950 p-8">
        <div className="flex gap-4 overflow-x-auto mb-4">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="w-14 h-14 bg-red-300 rounded-full" />
          ))}
        </div>
        <div className="flex-col space-y-6">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="w-full h-100 bg-red-300 p-10 rounded-md" />
          ))}
        </div>
      </main>
    </div>
  );
};

export default App;
