import React from "react";

const ChipAnimation = () => {
  return (
    <div className="relative flex items-center justify-center h-screen bg-black">
      {/* Central AI chip */}
      <div className="relative z-10 flex items-center justify-center w-20 h-20 bg-gray-900 text-white rounded-full shadow-lg">
        AI
      </div>

      {/* Animated Lines */}
      <div className="absolute w-full h-full">
        {/* Top Left Line */}
        <div className="absolute top-1/2 left-1/2 h-0.5 w-40 bg-orange-500 origin-left transform -translate-x-1/2 -translate-y-1/2 rotate-45 animate-grow" />
        {/* Top Right Line */}
        <div className="absolute top-1/2 left-1/2 h-0.5 w-40 bg-orange-500 origin-left transform -translate-x-1/2 -translate-y-1/2 -rotate-45 animate-grow" />
        {/* Bottom Left Line */}
        <div className="absolute top-1/2 left-1/2 h-0.5 w-40 bg-orange-500 origin-left transform -translate-x-1/2 -translate-y-1/2 rotate-135 animate-grow" />
        {/* Bottom Right Line */}
        <div className="absolute top-1/2 left-1/2 h-0.5 w-40 bg-orange-500 origin-left transform -translate-x-1/2 -translate-y-1/2 -rotate-135 animate-grow" />
      </div>

      {/* Chips */}
      <div className="absolute">
        {/* Top Chip */}
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 flex items-center justify-center w-16 h-16 bg-gray-900 text-white rounded-full shadow-lg">
          Chip 1
        </div>
        {/* Right Chip */}
        <div className="absolute top-1/2 right-16 transform -translate-y-1/2 flex items-center justify-center w-16 h-16 bg-gray-900 text-white rounded-full shadow-lg">
          Chip 2
        </div>
        {/* Bottom Chip */}
        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex items-center justify-center w-16 h-16 bg-gray-900 text-white rounded-full shadow-lg">
          Chip 3
        </div>
        {/* Left Chip */}
        <div className="absolute top-1/2 left-16 transform -translate-y-1/2 flex items-center justify-center w-16 h-16 bg-gray-900 text-white rounded-full shadow-lg">
          Chip 4
        </div>
      </div>
    </div>
  );
};

export default ChipAnimation;
