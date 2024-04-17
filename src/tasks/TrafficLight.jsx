import { useEffect } from "react";
import { useState } from "react";

const TrafficLight = () => {
  const [color, setColor] = useState("red");

  function setActiveColor(color) {
    if (color === "red") setColor("yellow");
    else if (color === "yellow") setColor("green");
    else if (color === "green") setColor("red");
  }

  function getInterval(color) {
    if (color === "red") return 4000;
    else if (color === "yellow") return 1000;
    else return 3000;
  }

  useEffect(() => {
    const colorInterval = setInterval(() => {
      setActiveColor(color);
    }, getInterval(color));
    return () => clearInterval(colorInterval);
  }, [color]);

  return (
    <>
      <div className="w-full h-screen bg-gray-300 flex flex-col justify-center gap-8 items-center">
        <h1 className="text-3xl font-bold pb-8">Traffic Light System</h1>
        <div className="bg-black rounded-lg p-3 flex flex-col gap-3">
          <div
            className={`h-20 w-20 rounded-full bg-red-600 ${
              color === "red" ? "border-8 border-white" : ""
            }`}
          ></div>
          <div
            className={`h-20 w-20 rounded-full bg-yellow-600 ${
              color === "yellow" ? "border-8 border-white" : ""
            }`}
          ></div>
          <div
            className={`h-20 w-20 rounded-full bg-green-600 ${
              color === "green" ? "border-8 border-white" : ""
            }`}
          ></div>
        </div>
        <div className="bg-black rounded-lg p-3 flex gap-3">
          <div
            className={`h-20 w-20 rounded-full bg-red-600 ${
              color === "red" ? "bg-red-600" : "bg-slate-700"
            }`}
          ></div>
          <div
            className={`h-20 w-20 rounded-full ${
              color === "yellow" ? "bg-yellow-600" : "bg-slate-700"
            }`}
          ></div>
          <div
            className={`h-20 w-20 rounded-full bg-green-600 ${
              color === "green" ? "bg-green-600" : "bg-slate-700"
            }`}
          ></div>
        </div>
      </div>
    </>
  );
};

export default TrafficLight;
