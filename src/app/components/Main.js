'use client'
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Gcore from '@/../public/gcore-logo.png'
import { FaChevronDown } from "react-icons/fa";
import ButtonGroup from "./ButtonGroup";
import { useInView } from "react-intersection-observer";
import AiChip from "./AiChip";
function Main() {
    const [showPage, setShowPage] = useState(false);
    const { ref, inView } = useInView({
      threshold: 0.3, // Trigger animation when 30% of the component is visible
      triggerOnce: false, // Ensures animation triggers every time the element is in view
    });
 // Controls for the animation
 const controls = useAnimation();
 

 useEffect(() => {
  if (inView) {
    controls.start({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
        delay: 0.3,
        ease: [0.6, -0.05, 0.01, 0.95],
      },
    });
  } else {
    controls.start({
      opacity: 0,
      y: -50,
    });
  }
}, [inView, controls]);

 // Trigger animation when in view
 useEffect(() => {
   if (inView) {
     controls.start("visible");
   }
 }, [inView, controls]);

    useEffect(() => {
        // Show the page content after 3 seconds (adjust this based on your video duration)
        const timer = setTimeout(() => {
          setShowPage(true);
        }, 2000);
    
        return () => clearTimeout(timer); // Clean up the timer
      }, []);
  return (
    <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="hero-section min-w-100 bg-black relative">
      <div className="bg-orange-400 w-1 h-32 absolute top-16 right-10 transform -translate-x-14"></div>
      <div className="relative w-100 text-white min-h-screen overflow-hidden ">        
        <header className="w-full px-8 py-4 flex top-2 justify-between items-center text-sm z-10 relative" ref={ref}>
        <motion.div
  className="text-xl font-bold flex"
>
  <Image src={Gcore} width={30} alt="logo" className="h-auto w-auto" height={30} />
  <motion.span
    initial={{ opacity: 1, x: 0 }}
    animate={inView ?{ opacity: 1, x: 0, } :{opacity: 0, x:50}}
    transition={{ duration: 1.5, delay: 0.2 }} // Delay the text animation
  >
    CORE
  </motion.span>
</motion.div>
            <motion.nav
              initial={{ opacity: 1, x: 0 }}
              animate={inView ?{ opacity: 1, x: 0 }: {opacity: 0, x: -50}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex space-x-6 ms-28"
            >
              <a href="#" className="hover:underline flex">Products <FaChevronDown className="mt-1 ms-2"/></a>
              <a href="#" className="hover:underline flex">Pricing <FaChevronDown className="mt-1 ms-2"/></a>
              <a href="#" className="hover:underline flex">Resources <FaChevronDown className="mt-1 ms-2"/></a>
              <a href="#" className="hover:underline flex">Partners <FaChevronDown className="mt-1 ms-2"/></a>
              <a href="#" className="hover:underline flex">Why Gcore <FaChevronDown className="mt-1 ms-2"/></a>
            </motion.nav>
            <div className="flex space-x-4">

            <motion.div
              initial={{ opacity: 1, y: 0 }}
              animate={inView? {opacity: 1, y: 0}:{ opacity: 0, y: 50 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              >
              <button className="px-4 py-2 border rounded-full bg-gray-700 text-white border-none bg-opacity-70">Contact us</button>
            </motion.div>
            <motion.div
              initial={{ opacity: 1, y: 0 }}
              animate={inView? {opacity:1, y:0}:{ opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              >
              <button className="px-4 py-2 bg-orange-custom text-white rounded-full">Sign up for free</button>
              </motion.div>
                </div>
        </header>
  
        {/* Main Section */}
        <main className="flex flex-col items-center text-center space-y-6 mt-16 z-10 relative">
        <motion.p
  initial={{ opacity: 1, x: 0 }}
  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
  transition={{ duration: 0.5, delay: 0.7 }}
  className="px-4 py-1 text-white text-sm font-medium rounded-full flex items-center space-x-2 shadow-lg "
  style={{
    background: 'linear-gradient(to bottom, #222, #111)', // Adjust colors as needed
  }}
>
  <span className="text-orange-500 text-lg">✨</span>
  <span>Beta release</span>
</motion.p>
            <motion.h1
                className="lg:text-8xl text-5xl bg-gradient-to-b from-gray-800 to-white bg-clip-text text-transparent"
              >
                <span className="">Inference</span>
                <motion.span
                  initial={{ opacity: 1, x: 0 }}
                  animate={inView? {opacity: 1, x: 0}:{ opacity: 0, x: -20 }}
                  transition={{ duration: 1, delay: 2.2 }}
                  className="ps-3"
                >
                   at
                </motion.span>
                <motion.span
                  initial={{ opacity: 1, x: 0 }}
                  animate={inView? {opacity: 1, x:0}:{ opacity: 0, x: 20 }}
                  transition={{ duration: 1, delay: 13 }}
                  className="ps-3"
                >
                   the Edge
                </motion.span>
              </motion.h1>
              <motion.p
              initial={{ opacity: 1 }}
              animate={inView? {opacity: 1}:{ opacity: 0 }}
              transition={{ duration: 0.5, delay: 1.6 }}
              className="text-gray-500 max-w-2xl"
            >
              Boost your AI applications speed and efficiency globally by bringing inference closer to your users. 
              Enjoy customization and cost-efficiency for a best-in-class inference experience.
            </motion.p>
            <motion.div
              initial={{ opacity: 1, y: 0 }}
              animate={inView?{opacity: 1, y:0}:{ opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: 1.8 }}
              className="flex space-x-4"
            >
              <button className="px-6 py-2 bg-orange-custom rounded-full">Get started</button>
              <button className="px-6 py-2">Book a demo</button>
            </motion.div>
        </main>
  
        <AiChip/>
      </div>
      </motion.section>
  )
}

export default Main
