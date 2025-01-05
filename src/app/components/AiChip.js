// components/AiChip.js
import React from "react";

const AiChip = () => {
  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 grid grid-cols-12 grid-rows-12">
        {Array.from({ length: 144 }).map((_, i) => (
          <div
            key={i}
            className="border border-gray-800 h-full w-full opacity-20"
          ></div>
        ))}
      </div>

      {/* Central AI Chip */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="bg-gray-800 text-white text-xl font-bold flex justify-center items-center w-32 h-32 rounded-lg shadow-[0_0_20px_rgba(255,140,0,0.7)] border-2 border-gray-700">
          AI
        </div>
      </div>

      {/* Lines and Nodes */}
      <svg
        className="absolute top-0 left-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Example Line 1 */}
        <path
          d="M 50% 50% C 60% 45%, 70% 55%, 80% 50%"
          stroke="orange"
          strokeWidth="2"
          fill="none"
          className="animate-draw-line"
        />
        {/* Example Line 2 */}
        <path
          d="M 50% 50% C 45% 60%, 55% 70%, 50% 80%"
          stroke="orange"
          strokeWidth="2"
          fill="none"
          className="animate-draw-line"
        />
        {/* Additional nodes */}
        <circle cx="80%" cy="50%" r="8" fill="gray" />
        <circle cx="50%" cy="80%" r="8" fill="gray" />
      </svg>
    </div>
  );
};

export default AiChip;
