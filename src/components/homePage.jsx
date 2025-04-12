import React from "react";
import "./style.css";
import { Home, Layers, Settings, User, BarChart, Bell, Info } from "lucide-react";

const App = () => {
  return (
    <div className="min-h-screen w-screen flex font-sans bg-gradient-to-br from-zinc-900 via-black to-neutral-900 text-white">
      {/* Sidebar */}
      <aside className="w-64 bg-gradient-to-b from-black via-red-900 to-black p-6 border-r border-red-800 shadow-xl">
        <div className="mb-10 flex items-center gap-3">
          <div className="bg-white w-10 h-10 rounded-full" />
          <span className="text-xl font-bold tracking-wide">StarkFeed</span>
        </div>
        <nav className="flex flex-col gap-6 text-base">
          {[
            { icon: <Home size={18} />, label: "Home" },
            { icon: <Layers size={18} />, label: "Components" },
            { icon: <BarChart size={18} />, label: "Analytics" },
            { icon: <User size={18} />, label: "Profile" },
            { icon: <Settings size={18} />, label: "Settings" },
          ].map((item, index) => (
            <a
              key={index}
              href="#"
              className="flex items-center gap-3 text-white no-underline hover:text-red-400 transition-all duration-200"
            >
              {item.icon}
              {item.label}
            </a>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 bg-gradient-to-br from-black via-zinc-900 to-red-950 overflow-y-auto">
        {/* Top Avatar Circles */}
        <div className="flex gap-4 overflow-x-auto mb-8">
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              className="w-16 h-16 rounded-full bg-gradient-to-tr from-red-500 via-pink-500 to-purple-600 shadow-md hover:scale-105 transition-transform"
            />
          ))}
        </div>

        {/* Dynamic Card Feed */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="bg-black/30 backdrop-blur-lg rounded-xl p-5 border border-red-800 shadow-md hover:shadow-red-900 transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-2 text-red-400">Card {i + 1}</h3>
              <p className="text-sm text-gray-300">
                This is a beautiful content card. You can replace this with posts, updates, stats,
                or anything cool.
              </p>
            </div>
          ))}
        </section>
      </main>

      {/* Right Sidebar */}
      <aside className="w-56 bg-gradient-to-b from-black via-red-900 to-black p-6 border-l border-red-800 shadow-inner">
        <h2 className="text-lg font-bold mb-4 text-red-400">Quick Links</h2>
        <ul className="space-y-4 text-sm">
          <li><a href="#" className="hover:text-pink-400 flex items-center gap-2"><Bell size={16} /> Notifications</a></li>
          <li><a href="#" className="hover:text-pink-400 flex items-center gap-2"><Settings size={16} /> Settings</a></li>
          <li><a href="#" className="hover:text-pink-400 flex items-center gap-2"><Info size={16} /> About</a></li>
        </ul>
      </aside>
    </div>
  );
};

export default App;
