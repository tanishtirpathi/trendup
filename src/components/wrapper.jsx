import React from "react";
import TextPressure from "./animation/TextPressure";
import CountUp from "./animation/counup";

function Wrapper() {
  return (
    <div className="bg-black w-screen h-screen">
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
      <div className="flex items-center justify-center" style={{ margin: "-100px 100px " }}>
        <h1 className="text-2xl text-white">
          
        Welcome to Trend Up — the social media space where trends take flight.
          Discover what's buzzing, follow real-time hype, and express yourself
          in a place built entirely with sleek, responsive frontend magic.

        </h1>
      </div>
    </div>
  );
}

export default Wrapper;
