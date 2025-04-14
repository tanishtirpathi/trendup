import React from "react";
import TextPressure from "./animation/TextPressure";

function Wrapper() {
  return (
    <>
    <div className="bg-black w-screen h-screen ">
    <div style={{position: 'relative', height: '300px',margin: '0px 300px '} }>
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
    </div>

    </>
  );
}

export default Wrapper;
