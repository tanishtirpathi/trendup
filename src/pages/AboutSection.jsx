import React from "react";
import RightBar from "../components/rightBar";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";

function AboutSection() {
  return (
    <div className="flex h-screen w-screen font-sans text-white overflow-hidden">
      <RightBar />
      <main className="flex-1 bg-black h-screen overflow-y-auto p-8">
        {/* Hero Section */}
        <section className="flex items-center  flex- gap-6 mt-12 text-center" style={{justifyContent: "space-around" }}>
          <div className="relative">
            <div className="p-1 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-full animate-pulse">
              <img
                src="/logo-tr.png"
                className="h-28 w-28 object-contain rounded-full bg-black p-2"
                alt="TrendUp Logo"
              />
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-2">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
              TrendUp
            </h1>
            <p className="text-md text-gray-400 max-w-lg">
              Our mission is to create a distraction-free social media platform.
            </p>
            <InteractiveHoverButton className="text-black font-semibold px-6 py-2 mt-2">
              Start with us
            </InteractiveHoverButton>
          </div>
        </section>
<hr className="my-12"/>
        {/* About Me Section */}
        <section
          id="aboutme"style={{justifyContent: "space-around" }}
          className="mt-10 flex flex-col md:flex-row items-center  gap-10 text-center"
        >
          <div className="w-40 h-50 relative">
            <img
              src="/my-image.png"
              alt="Tanish Tripathi"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-extrabold">Tanish Tripathi</h2>
            <p className="text-gray-400 max-w-md">
              The innovative person who built this entire web app with love,
              code, and caffeine ☕.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <a href="#" className="hover:text-pink-500 transition">Instagram</a>
              <a href="#" className="hover:text-blue-500 transition">LinkedIn</a>
              <a href="#" className="hover:text-green-400 transition">GitHub</a>
              <a href="#" className="hover:text-cyan-400 transition">Twitter</a>
            </div>
          </div>
        </section>   {/* tech stack Section */}
        <hr className="my-12"/>
        <section className="mt-16 px-4 text-center">
  <h1 className="text-3xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
    Tech Stacks used in this Project
  </h1>
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 justify-items-center">
    {[
      { src: "/public/react.png", alt: "React" },
      { src: "/public/js.png", alt: "JavaScript" },
      { src: "/public/magicui.jpg", alt: "Magic UI" },
      { src: "/public/shadcn.png", alt: "ShadCN" },
      { src: "/public/tailwind.png", alt: "Tailwind CSS" },
    ].map((tech, index) => (
      <div
        key={index}
        className="flex flex-col  items-center"
      >
        <img
          src={tech.src}
          alt={tech.alt}
          className="w-16 h-16 object-cover rounded-lg"
        />
        <h3 className="bg-gray-900 px-5 py-0.3 my-2 rounded-md hover:bg-blue-900 cursor-pointer">{tech.alt}</h3>
      </div>
    ))}
  </div>
</section>

      </main>
    </div>
  );
}

export default AboutSection;
