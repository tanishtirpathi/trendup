import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import RightBar from "../components/rightBar";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";

function AboutSection() {
  return (
    <div className="flex h-screen w-screen font-sans text-white overflow-hidden">
      <RightBar />
      <main className="flex-1 bg-black h-screen overflow-y-auto p-8 ">
        {/* Hero Section */}
        <section
          className="flex items-center  flex- gap-6 mt-12 text-center"
          style={{ justifyContent: "space-around" }}
        >
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
        <hr className="my-12" />
        {/* About Me Section */}
        <section
          id="aboutme"
          style={{ justifyContent: "space-around" }}
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
            <a
              href="https://tanishtirpathi.netlify.app"
              className=" text-white text-2xl font-extrabold  underline hover:text-green-300"
            >
              Tanish Tripathi
            </a>
            <p className="text-gray-400 max-w-md">
              The innovative person who built this entire web app with love,
              code, and caffeine ☕.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <a
                href="https://www.instagram.com/techwithtanish/"
                className="bg-black-100 rounded-md text-white hover:text-pink-500  bg-black transition"
              >
                Instagram
              </a>
              <a
                href="https://github.com/tanishtirpathi"
                className="bg-black-100 rounded-md text-white hover:text-green-400 bg-black  transition"
              >
                GitHub
              </a>
              <a
                href="https://x.com/tanishtirpathi"
                className="bg-black-100 rounded-md text-white hover:text-cyan-400  bg-black transition"
              >
                Twitter
              </a>
              <a
                href="https://www.linkedin.com/in/tanishtirpathi/"
                className="bg-black-100 rounded-md text-white hover:text-blue-500  bg-black transition"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </section>{" "}
        {/* tech stack Section */}
        <hr className="my-12" />
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
              <div key={index} className="flex flex-col  items-center">
                <img
                  src={tech.src}
                  alt={tech.alt}
                  className="w-16 h-16 object-cover rounded-lg"
                />
                <h3 className="bg-gray-900 px-5 py-0.3 my-2 rounded-md hover:bg-blue-900 cursor-pointer">
                  {tech.alt}
                </h3>
              </div>
            ))}
          </div>
        </section>
        <hr className="my-12" />
        <div className="my-10 mx-20">
          <Accordion type="single" collapsible className="my-10 ">
            <AccordionItem value="item-1">
              <AccordionTrigger className="bg-transparent border border-none">
                What problem it solves ?
              </AccordionTrigger>
              <AccordionContent className="bg-transparent px-10 py-4" style={{ textShadow: "2px 2px 2px black" }}>
                It is the socal media web app which make you feel productive and
                also it is totally distraction free
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible className="my-10 ">
            <AccordionItem value="item-1">
              <AccordionTrigger className="bg-transparent border border-none">
                Is dark mode the only option?
              </AccordionTrigger>
              <AccordionContent className="bg-transparent px-10 py-4" style={{ textShadow: "2px 2px 2px black" }}>
                Right now, trend up rocks a sleek dark theme by default for a
                clean, distraction-free reading experience. Light mode support
                is on our roadmap based on user feedback.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible className="my-10 ">
            <AccordionItem value="item-1">
              <AccordionTrigger className="bg-transparent border border-none">
                Is Trend UP available as an app?
              </AccordionTrigger>
              <AccordionContent className="bg-transparent px-10 py-4" style={{ textShadow: "2px 2px 2px black" }}>
                Currently, we’re web-based — but a progressive web app (PWA)
                version is coming soon so you can add us right to your home
                screen like a native app.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>{" "}
        <hr className="my-12" />{" "}
        <div className="flex justify-center items-center ">
          <h4 style={{ textShadow: "2px 2px 2px black" }}>
            Made by Tanish Tirpathi with the full of love ❣ and caffeine ☕{" "}
          </h4>
        </div>
      </main>
    </div>
  );
}

export default AboutSection;
