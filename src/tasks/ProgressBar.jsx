import { useEffect, useState } from "react";

const ProgressBar = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (width === 100) return;
    const timer = setTimeout(() => {
      setWidth((prev) => prev + 1);
    }, 20);

    return () => clearTimeout(timer);
  }, [width]);
  return (
    <div className="w-full h-[50vh] bg-gray-300 flex flex-col justify-center gap-8 items-center">
      <h1 className="text-3xl font-bold pb-8">Progress Bar</h1>
      <div className="w-96 h-5 rounded-3xl bg-slate-50 overflow-hidden flex items-center justify-center relative">
        <p className="absolute z-10 text-lg font-semibold">{width}%</p>
        <div
          className="absolute bg-green-600 top-0 left-0 h-full"
          style={{ width: `${width}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
