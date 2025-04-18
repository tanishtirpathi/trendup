import React, { useEffect, useState } from "react";
import { Home, Layers, Crown, User, Code } from "lucide-react";
import Masonry from "react-masonry-css";
import axios from "axios";
import "./explore.css";
"use client";
import confetti from "canvas-confetti";
import { Button } from "@/components/ui/button";
import RightBar from "../rightBar"; 


function Explore() {
  const [images, setImages] = useState([]);
  const [zoomedImageId, setZoomedImageId] = useState(null);

  const [count, setCount] = useState(125);

  const API_KEY = "l4TW7s3pFyIwQpqJ5TisMrwthQloY6e3ZSVRYHUBqtvCgG6DafKUuMee";

  const client = axios.create({
    baseURL: "https://api.pexels.com/v1/",
    headers: {
      Authorization: API_KEY,
    },
  });


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
 
  const fetchImages = async (num) => {
    try {
      const res = await client.get(`/curated?per_page=${num}`);
      setImages((prev) => [...prev, ...res.data.photos]);
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
        setCount((prev) => prev + 6);
      }
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex h-screen w-screen font-sans text-white overflow-hidden">
      {/* Sidebar */}   <div className="fixed bottom-10 left-10">
      <Button onClick={handleClick}>log out</Button>
    </div>
   
       
    <RightBar>
  {/* children here if needed */}
</RightBar>
     
      <main
        id="scrollable-main"
        className="w-full h-screen bg-black p-6 overflow-scroll"
      >
        <Masonry
          breakpointCols={{ default: 5, 1100: 2, 700: 3, 500: 4, 300: 1 }}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {images.map((img) => (
            <img
              key={img.id}
              src={img.src.large}
              alt={img.alt || "pexels image"}
              className={`rounded-lg shadow-md mb-4 cursor-pointer transition-all duration-300 ease-in-out ${
                zoomedImageId === img.id
                  ? "fixed top-0 left-0 w-screen h-screen object-contain bg- z-50 p-10  "
                  : "hover:scale-130"
              }`}
              onClick={() =>
                setZoomedImageId(zoomedImageId === img.id ? null : img.id)
              }
            />
          ))}
        </Masonry>{" "}
        {zoomedImageId && (
          <div className="fixed inset-0 bg-white/4 backdrop-blur-sm z-40" />
        )}
      </main>
    </div>
  );
}

export default Explore;