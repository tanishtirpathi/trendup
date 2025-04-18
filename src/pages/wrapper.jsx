import React from "react";
import TextPressure from "../components/animation/TextPressure";
import CountUp from "../components/animation/counup";
import { Button } from "../components/ui/button";
import { CoolMode } from "../components/magicui/cool-mode";
import { InteractiveHoverButton } from "../components/magicui/interactive-hover-button";
import "./wrapper.css";
function Wrapper() {
  return (
    <div className="bg-black w-screen h-screen ">
      <div
        style={{ position: "relative", height: "300px", margin: "0px 400px" }}
      >
        <TextPressure
          text="Trend up !"
          flex={true}
          alpha={false}
          stroke={false}
          width={true}
          weight={true}
          italic={true}
          textColor="#ffffff"
          strokeColor="#ff0000"
          minFontSize={6}
        />
      </div>
      <div
        className="flex items-center justify-center"
        style={{ margin: "-100px 100px  " }}
      >
        <h1 className="text-2xl text-white">
          Welcome to Trend Up — the social media space where trends take flight.
          Discover what's buzzing, follow real-time hype, and express yourself
          in a place built entirely with sleek, responsive frontend magic.
        </h1>
      </div>
      <div id="user">
      <div className="fixed top-10 right-10">
      <CoolMode>
        <Button>Click Me!</Button>
      </CoolMode>
    </div>

    <div>
    </div>
      </div>
      <div
        id="button"
        className="flex items-center justify-center "
        style={{ margin: "240px 300px  " }}
      >
        <InteractiveHoverButton className= "pl-20 pr-20 m-10"
          onClick={() => (window.location.href = "login")}
        >
          Login
        </InteractiveHoverButton>
        <InteractiveHoverButton className= "pl-20 pr-20 m-10"
          onClick={() => (window.location.href = "signup")}
        >
          Sign Up
        </InteractiveHoverButton>
      </div>
    </div>
  );
}

export default Wrapper;
