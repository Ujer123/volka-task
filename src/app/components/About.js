'use client'
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Gcore from '@/../public/gcore-logo.png'
import { FaChevronDown } from "react-icons/fa";
import ButtonGroup from "./ButtonGroup";
import { useInView } from "react-intersection-observer";

function About() {
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
    <section className="min-h-screen about-sec overflow-x-hidden">    
        <header className="justify-self-center">
        <motion.nav
        initial={{ opacity: 0, y: -50 }}
        animate={controls}
        transition={{
          duration: 0.2,
          delay: 0.3,
          ease: [0.6, -0.05, 0.01, 0.95], // Custom easing for smoother animation
        }}
        
        className="flex space-x-8 bg-black rounded-full text-white py-2 self-center mt-3 max-w-3xl px-2 justify-center"
      >
                <Image src='/gcore-orange.png' width={30} alt="logo" className="h-auto w-auto rounded-lg" height={30} />
              <a href="#" className="hover:underline flex text-sm self-center">Products <FaChevronDown className="mt-1 ms-2"/></a>
              <a href="#" className="hover:underline flex text-sm self-center">Pricing <FaChevronDown className="mt-1 ms-2"/></a>
              <a href="#" className="hover:underline flex text-sm self-center">Resources <FaChevronDown className="mt-1 ms-2"/></a>
              <a href="#" className="hover:underline flex text-sm self-center">Partners <FaChevronDown className="mt-1 ms-2"/></a>
              <a href="#" className="hover:underline flex text-sm self-center">Why Gcore <FaChevronDown className="mt-1 ms-2"/></a>
              <a href="#" className="hover:underline flex text-sm bg-white text-black rounded-md self-center py-1 px-2 font-bold">Sign up for free</a>
            </motion.nav>
              </header>
              <main>
                <ButtonGroup/>
                <div className="container">
                <div ref={ref} className="flex justify-center">
  <motion.h2
    initial={{ opacity: 0 }}
    animate={inView?{ opacity: 1 }: {opacity: 0}}
    transition={{ duration: 1, delay: 0.2 }}
    className="text-5xl text-center mt-2 space-x-4 max-w-3xl"
  >
    {["Use", "AI", "faster", "and", "more", "efficiently", "right", "on", "your", "device!"].map((word, index) => (
      <motion.span
        key={index}
        initial={{ opacity: 0 }}
        animate={inView?{ opacity: 1 }: {opacity: 0}}
        transition={{ duration: 0.5, delay: 0.2 + index * 0.3 }}
        className="inline-block mr-1"
      >
        {word} {index === 3 && <br />}
      </motion.span>
    ))}
  </motion.h2>
</div>
                        <div className="grid mt-5 grid-cols-3">
                        <motion.div
    initial={{ opacity: 0, y: 100 }}
    animate={inView?{opacity:1, y:0}:{ opacity: 0, y: 100 }}
    transition={{ duration: 1.5, delay: 0.2 }}
    className="flex justify-center relative"
  >
    <video
      className="h-full w-96 rounded-2xl  object-cover "
      autoPlay
      muted
      loop
    >
      <source src='/star.mp4' type="video/mp4" />
    </video>
    <motion.h5
  initial={{ opacity: 0 }}
  animate={inView?{ opacity: 1 }: {opacity: 0}}
  transition={{ duration: 1, delay: 1.7 }}
  className="text-white absolute bottom-3 text-lg font-bold w-72 start-auto"
>
  {["The", "Gcore", "Inference", "At", "the", "Edge:", "Speed", "Up", "Ai,", "Reduce", "Latency"].map((word, index) => (
    <motion.span
      key={index}
      initial={{ opacity: 0 }}
      animate={inView?{ opacity: 1 }: {opacity:0}}
      transition={{ duration: 0.5, delay: 1.7 + index * 0.3 }}
      className="inline-block mr-1"
    >
      {word}
    </motion.span>
  ))}
</motion.h5>
  </motion.div>

  <motion.div
      initial={{ opacity: 0, y: 100 }} // Initial position: 100 pixels below 
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }} 
      transition={{ duration: 1, delay: 0.2 }}
      className="col-span-2 relative bg-white p-3 h-96 rounded-2xl me-5"
  >
    <div className="text-black text-2xl font-bold">
      Gcore Inference at the Edge reduces the<br/> latency of your ML model output and improves<br/> the performance of AI-enabled applications.
    </div>

    <div className="mt-4 text-sm text-gray-500 max-w-md">
      Its particularly useful for AI apps that need immediate processing and minimal delay, like generative AI and real-time object detection.
    </div>

    <div className=" absolute bottom-0 right-0 w-2/3 rounded-lg ps-10 pt-10" style={{backgroundColor: '#f7f7f7'}}>
    <motion.div   
  ref={ref} 
  initial={{ opacity: 0, x: 100 }}
  animate={inView?{ opacity: 1, x: 0 }:{opacity: 0, x:100}}
  transition={{ duration: 1.5, delay: 0.2 }}
  className="flex justify-end space-x-2"
>
  <motion.div
    className="bg-white w-auto flex rounded-full"
    initial={{ opacity: 0, x: 100 }}
    animate={inView?{ opacity: 1, x: 0 }: {opacity:0, x:100}}
    transition={{ duration: 1.5, delay: 0.4 }}
  >
    <div className="me-1 mt-1 border rounded-full p-2">
      <Image src='/chatgpt.png' alt='text-generation' width={20} height={20}/>
    </div>
    <p className="font-bold self-center me-2">Text generation</p>
  </motion.div>
  <motion.div
    className="bg-white w-auto flex rounded-full"
    initial={{ opacity: 0, x: 100 }}
    animate={inView?{ opacity: 1, x: 0 }:{opacity: 0, x:100}}
    transition={{ duration: 1.5, delay: 0.6 }}
  >
    <div className="me-1 mt-1 border rounded-full p-2">
      {/* <Image src='/chatgpt.png' alt='text-generation' width={20} height={20}/> */}
      <h3 className="font-bold h-3 text-xl w-5 text-purple-800 ">S<span className="text-red-500">.</span></h3>
    </div>
    <p className="font-bold self-center me-2">Image generation</p>
  </motion.div>
</motion.div>
    <motion.div 
    className="flex justify-end mt-2 space-x-2" 
    ref={ref} 
  initial={{ opacity: 0, x: 100 }}
  animate={inView?{ opacity: 1, x: 0 }:{opacity: 0, x:100}}
  transition={{ duration: 1.5, delay: 0.4 }}>
        <motion.div 
        className="bg-white w-auto flex rounded-full"
        initial={{ opacity: 0, x: 100 }}
    animate={inView?{ opacity: 1, x: 0 }: {opacity:0, x:100}}
    transition={{ duration: 1.5, delay: 0.6 }}
        >
          <div className="me-1 mt-1 border rounded-full p-2">
            <Image src='/gcore-orange.png' className="rounded-full" alt='text-generation' width={20} height={20}/>
          </div>
            <p className="font-bold self-center me-2">Speech recognition</p>
        </motion.div>
        <motion.div 
        className="bg-white w-auto flex rounded-full"
        initial={{ opacity: 0, x: 100 }}
    animate={inView?{ opacity: 1, x: 0 }: {opacity:0, x:100}}
    transition={{ duration: 1.5, delay: 0.8 }}
        >
          <div className="me-1 mt-1 border rounded-full p-2">
            <Image src='/m-logo.png' alt='text-generation' width={20} height={20}/>
          </div>
            <p className="font-bold self-center me-2">Text generation</p>
        </motion.div>
        <motion.div 
        className="bg-white w-auto flex rounded-s-full"
        initial={{ opacity: 0, x: 100 }}
    animate={inView?{ opacity: 1, x: 0 }:{opacity: 0, x:100}}
    transition={{ duration: 1.5, delay: 1 }}
        >
          <div className="me-1 mt-1 border rounded-full p-2">
            <Image src='/chatgpt.png' alt='text-generation' width={20} height={20}/>
          </div>
            <p className="font-bold self-center me-2">Speec</p>
        </motion.div>
    </motion.div>
    <motion.div
    className="flex justify-end mt-2 mb-4 space-x-2"
    initial={{ opacity: 0, x: 100 }}
  animate={inView?{ opacity: 1, x: 0 }:{opacity: 0, x:100}}
  transition={{ duration: 1.5, delay: 0.4 }}>
        <motion.div className="bg-white w-auto flex rounded-full"
        initial={{ opacity: 0, x: 100 }}
    animate={inView?{ opacity: 1, x: 0 }:{opacity: 0, x:100}}
    transition={{ duration: 1.5, delay: 1 }}>
          <div className="me-1 mt-1 border rounded-full p-2">
            {/* <Image src='/chatgpt.png' alt='text-generation' width={20} height={20}/> */}
            <h3 className="font-bold h-3 text-xl w-5 text-purple-800">S<span className="text-red-500">.</span></h3>
          </div>
            <p className="font-bold self-center me-2">Image generation</p>
        </motion.div>
        <motion.div className="bg-white w-auto flex rounded-full"
        initial={{ opacity: 0, x: 100 }}
        animate={inView?{ opacity: 1, x: 0 }:{opacity: 0, x:100}}
        transition={{ duration: 1.5, delay: 1.2 }}>
          <div className="me-1 mt-1 border rounded-full p-2">
            <Image src='/chatgpt.png' alt='text-generation' width={20} height={20}/>
          </div>
            <p className="font-bold self-center me-2">Image classification</p>
        </motion.div>
        <motion.div className="bg-white w-auto flex rounded-s-full"
        initial={{ opacity: 0, x: 100 }}
        animate={inView?{ opacity: 1, x: 0 }:{opacity: 0, x:100}}
        transition={{ duration: 1.5, delay: 1.4 }}>
          <div className="me-1 mt-1 border rounded-full p-2">
          <Image src='/gcore-orange.png' className="rounded-full" alt='text-generation' width={20} height={20}/>
          </div>
            <p className="font-bold self-center me-2">Speech recogni</p>
        </motion.div>
    </motion.div>
    </div>

  </motion.div>
</div>
                </div>
              </main>
    </section>
  )
}

export default About
