import { useState } from 'react';
import { Home, Layers, Settings, User, BarChart } from "lucide-react";
import RandomImage from '../../pages/RandomImages';


export default function InstagramExplorePage() {
  const [selectedImage, setSelectedImage] = useState(null);
  
  const handleImageClick = (index) => {
    setSelectedImage(index);
  };
  
  const closeModal = () => {
    setSelectedImage(null);
  };
  
  // Grid layout data - different sizes for visual interest
  const gridItems = [
    { size: 'row-span-2 col-span-1', text: 'Video 1' },
    { size: 'row-span-1 col-span-1', text: 'Tony Stark' },
    { size: 'row-span-2 col-span-1', text: 'Construction' },
    { size: 'row-span-1 col-span-1', text: 'Retro Tech' },
    { size: 'row-span-1 col-span-1', text: 'Network' },
    { size: 'row-span-1 col-span-1', text: 'Gaming' },
    { size: 'row-span-1 col-span-1', text: 'Video 2' },
    { size: 'row-span-1 col-span-1', text: 'Video 3' },
    { size: 'row-span-1 col-span-1', text: 'Day 44' },
  ];

  return (
    <div className="flex h-screen bg-black text-white w-screen">
      {/* Left Sidebar */}
      <aside className=" h-screen bg-gradient-to-b from-black via-blue-950 to-black p-6 border-r border-blue-900 shadow-xl fixed top-0 left-0">
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
      {/* Main Content */}
      <div className="flex-grow overflow-auto p-6">
        <h2 className="text-xl font-bold mb-6">Explore</h2>
        
        {/* Image Grid */}
        <div className="grid grid-cols-3 gap-1 auto-rows-min">
          {gridItems.map((item, index) => (
            <div key={index} className={`${item.size} min-h-64 relative`}>
              <RandomImage onClick={() => handleImageClick(index)} text={item.text} />
              <div className="absolute top-2 right-2 bg-gray-900 bg-opacity-70 rounded-full p-1">
                <Layers size={16} className="text-white" />
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Modal for enlarged image */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
          <div className="relative w-4/5 h-4/5 max-w-5xl">
            <button 
              onClick={closeModal} 
              className="absolute top-4 right-4 text-white z-20 bg-gray-800 rounded-full p-2"
            >
              <X size={24} />
            </button>
            
            <div className="h-full w-full flex items-center justify-center">
              <RandomImage 
                dimensions="w-full h-full object-contain" 
                text={gridItems[selectedImage].text} 
              />
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 p-4">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 rounded-full bg-gray-500"></div>
                <div>
                  <p className="font-bold">username</p>
                  <p className="text-sm text-gray-300">Original caption for {gridItems[selectedImage].text}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}