import React from "react";
@tailwind base;
@tailwind components;
@tailwind utilities;


const App = () => {
  return (
    <div className="min-h-screen w-screen flex text-white bg-black font-sans">
      {/* Sidebar */}
      <aside className="w-60 bg-gradient-to-b from-zinc-900 to-red-900 p-4 border border-gray-200">
        <div className="bg-gray-300 w-14 h-8 mb-6" />
        <nav className="flex flex-col gap-4 text-sm">
          <a href="#" className="text-white visited:text-white no-underline"
          >compoentst</a>
          <a href="#"className="text-white visited:text-white no-underline">Home</a>
          <a href="#"className="text-white visited:text-white no-underline">takhsja</a>
          <a href="#"className="text-white visited:text-white no-underline">sdfdsds</a>
          <a href="#"className="text-white visited:text-white no-underline">adsfasdfad</a>
          <a href="#"className="text-white visited:text-white no-underline">sdafdsafads</a>
          <a href="#"className="text-white visited:text-white no-underline">profile</a>
          <a href="#"className="text-white visited:text-white no-underline">fasdfasdfasd</a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 bg-gradient-to-br from-black to-red-900 relative">
        {/* Top Circles */}
        <div className="flex gap-4 overflow-scroll mb-4">
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="w-14 h-14 bg-gray-300 rounded-full" />
          ))}
        </div>
        {/* Content could go here */}
      </main>

      {/* Right Sidebar */}
      <aside className="w-48 bg-gradient-to-br from-neutral-900 to-black p-4 border border-gray-200" />
    </div>
  );
};

export default App;
