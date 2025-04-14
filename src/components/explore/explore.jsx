import React, { useEffect, useState } from "react";
import { Home, Layers, Settings, User, BarChart } from "lucide-react";
import Masonry from "react-masonry-css";
import axios from "axios";
import "./explore.css";

function Explore() {
  const [images, setImages] = useState([]);
  // const [zoomedImageId, setZoomedImageId] = useState(null);
  const [count, setCount] = useState(125);

  const API_KEY = "l4TW7s3pFyIwQpqJ5TisMrwthQloY6e3ZSVRYHUBqtvCgG6DafKUuMee";

  const client = axios.create({
    baseURL: "https://api.pexels.com/v1/",
    headers: {
      Authorization: API_KEY,
    },
  });

  useEffect(() => {
    const generatePlaceholderImages  = () => {
      const heights = [200, 300, 400, 500, 600];
      const generatedImages = [];

      for (let i = 0; i < 20; i++) {
        const height = heights[Math.floor(Math.random() * heights.length)];

        generatedImages.push({
          id: i,
          url: `/api/placeholder/300/${height}`,
          photographer: "Placeholder",
          alt: "Placeholder Image"
        });
      }
      return generatedImages;
    };
    setImages(generatePlaceholderImages());
  }, []);

  const fetchImages = async (num) => {
    try {
      const res = await client.get(`/curated?per_page=${num}`);
      setImages(res.data.photos.map(photo => ({
        id: photo.id,
        url:photo.src.large,
        photographer: photo.photographer,
        alt: photo.alt || "Pexels Image"
      })));
    } catch (err) {
      console.error("Error fetching images", err);
    }
  };

  useEffect(() => {
    fetchImages(count);
  }, [count]);

  useEffect(() => {
    const container = document.getElementById("scrollable-main");

    const handleScroll = () => {
      if (
        container.scrollHeight - container.scrollTop <=
        container.clientHeight + 500
      ) {
        setCount((prev) => prev +10);
      }
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex h-screen w-screen font-sans text-white overflow-hidden">
      <aside className="h-screen bg-gradient-to-b from-black via-blue-950 to-black p-6 border-r border-blue-900 shadow-xl">
        <div className="mb-10 flex items-center gap-3">
          <div className="bg-white w-10 h-10 rounded-full" />
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
            {
              icon: <BarChart size={18} />,
              label: "notification",
              path: "/notification",
            },
            { icon: <User size={18} />, label: "Profile", path: "/profile" },
            {
              icon: <Settings size={18} />,
              label: "Settings",
              path: "/settings",
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

      <main
        id="scrollable-main"
        className="w-full h-screen bg-gradient-to-b from-black via-blue-950 to-black p-6 overflow-scroll"
      >
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {images.map((image) => (
            <div
              key={image.id}
              className="relative group overflow-hidden rounded-lg transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full object-cover"
              />
          
              <div className="absolute inset-0 bg-transparent bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300">
               
              </div>
              <button className="absolute top-2 right-2 bg-red-600 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Explore;
