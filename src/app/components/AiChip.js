import React from "react";
import { motion } from "framer-motion";

export default function AiChip() {
  const wireVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 2, ease: "linear" } },
  };

  return (
    <div className="relative bg-black flex flex-col items-center justify-center text-white h-60 overflow-hidden">
      {/* Central AI Chip */}
      <div className="relative flex items-center justify-center">
        <div className="bg-gray-900 w-24 h-24 z-50 rounded-3xl flex items-center justify-center shadow-lg">
          <span className="text-3xl font-bold">AI</span>
        </div>
      </div>

      {/* Icons */}
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="absolute -top-20 left-44 z-50">
          <div className="bg-gray-900 w-16 h-16 rounded-2xl flex items-center justify-center shadow-md">
            <span className="text-2xl font-bold bg-gradient-to-b from-gray-800 to-white bg-clip-text text-transparent">A</span>
          </div>
        </div>
        <div className="absolute top-1/2 left-10">
          <div className="bg-gray-900 w-12 h-12 rounded-2xl flex items-center justify-center shadow-md">
            <span className="text-2xl font-bold bg-gradient-to-b from-gray-800 to-white bg-clip-text text-transparent">A</span>
          </div>
        </div>
        <div className="absolute -top-20 right-44">
          <div className="bg-gray-900 w-16 h-16 rounded-2xl flex items-center justify-center shadow-md">
            <span className="text-2xl font-bold bg-gradient-to-b from-gray-800 to-white bg-clip-text text-transparent">S.</span>
          </div>
        </div>
        <div className="absolute top-1/2 right-10">
          <div className="bg-gray-900 w-12 h-12 rounded-2xl flex items-center justify-center shadow-md">
            <span className="text-2xl font-bold bg-gradient-to-b from-gray-800 to-white bg-clip-text text-transparent">S</span>
          </div>
        </div>
        <div className="absolute top-44 left-44">
          <div className="bg-gray-900 w-16 h-16 rounded-2xl flex items-center justify-center shadow-md">
            <span className="text-2xl font-bold bg-gradient-to-b from-gray-800 to-white bg-clip-text text-transparent">M.</span>
          </div>
        </div>
        <div className="absolute top-44 right-44 ">
          <div className="bg-gray-900 w-16 h-16 rounded-2xl flex items-center justify-center shadow-md">
            <span className="text-2xl font-bold bg-gradient-to-b from-gray-800 to-white bg-clip-text text-transparent">S</span>
          </div>
        </div>
      </div>

      {/* Animated Wires */}
      <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <motion.line
          x1="50%" y1="50%" x2="30%" y2="20%"
          stroke="orange" strokeWidth="2" variants={wireVariants} initial="initial" animate="animate"
        />
        <motion.line
          x1="50%" y1="50%" x2="15%" y2="50%"
          stroke="orange" strokeWidth="2" variants={wireVariants} initial="initial" animate="animate"
        />
        <motion.line
          x1="50%" y1="50%" x2="20%" y2="80%"
          stroke="orange" strokeWidth="2" variants={wireVariants} initial="initial" animate="animate"
        />
        <motion.line
          x1="50%" y1="50%" x2="70%" y2="20%"
          stroke="orange" strokeWidth="2" variants={wireVariants} initial="initial" animate="animate"
        />
        <motion.line
          x1="50%" y1="50%" x2="85%" y2="50%"
          stroke="orange" strokeWidth="2" variants={wireVariants} initial="initial" animate="animate"
        />
        <motion.line
          x1="50%" y1="50%" x2="80%" y2="80%"
          stroke="orange" strokeWidth="2" variants={wireVariants} initial="initial" animate="animate"
        />
      </svg>
    </div>
  );
}