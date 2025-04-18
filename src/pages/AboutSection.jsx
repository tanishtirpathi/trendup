import React from "react";
import RightBar from "../components/rightBar";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";

function AboutSection() {
  return (
    <div className="flex h-screen w-screen font-sans text-white overflow-hidden">
      <RightBar />
      <main className="flex-1 bg-black h-screen overflow-y-auto p-8">
        {/* Hero Section */}
        <section className="flex items-center justify-center gap-6 mt-12 text-center">
        <img src="/logo-tr.png" className="h-35 w-35 object-contain" alt="TrendUp Logo" />
         <div className="flex flex-col items-center justify-center">
          <h1 className="text-2xl font-bold tracking-tight">TrendUp</h1>
          <p className="text-s text-gray-300 max-w-md">
            Our mission is to create a distraction-free social media platform.
          </p>
          <InteractiveHoverButton className="text-black font-semibold px-6 py-1">
            Start with us
          </InteractiveHoverButton>
         </div>
        </section>

        {/* About Me Section */}
        <section id="aboutme" className="mt-16 flex items-center justify-center text-center ">
          <div className=" w-40 h-50">
            <img
              src="/public/my-image.png"
              alt="Tanish Tripathi"
              className="w-full h-full object-cover rounded-md"
            />
          </div>
<div>
          <div className="space-y-2">
            <h2 className="text-2xl font-bold">Tanish Tripathi</h2>
            <p className="text-gray-400">The innovative person who built this entire web app.</p>
          </div>

          <div className="flex gap-4 text-sm">
            <a href="#" className="text-white   hover:text-blue-400 transition">Instagram</a>
            <a href="#" className=" text-white hover:text-blue-400 transition">LinkedIn</a>
            <a href="#" className=" text-white hover:text-blue-400 transition">GitHub</a>
            <a href="#" className=" text-white hover:text-blue-400 transition">Twitter</a>
          </div></div>
        </section>
      </main>
    </div>
  );
}

export default AboutSection;
