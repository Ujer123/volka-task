'use client'
import { motion, useViewportScroll, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import Gcore from '@/../public/gcore-logo.png'
import { FaChevronDown } from "react-icons/fa";
import GOrange from '@/../public/gcore-orange.png';
import ButtonGroup from "./ButtonGroup";
import { useInView } from "react-intersection-observer";

export default function Home() {
    const [showPage, setShowPage] = useState(false);
    const { scrollYProgress } = useViewportScroll();
    const { ref, inView } = useInView({
      threshold: 0.3, // Trigger animation when 30% of the component is visible
      triggerOnce: false, // Ensures animation triggers every time the element is in view
    });
    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.1, // Stagger children by 0.1 seconds
        },
      },
    };
 // Controls for the animation
 const controls = useAnimation();

 // Trigger animation when in view
 useEffect(() => {
   if (inView) {
     controls.start("visible");
   }
 }, [inView, controls]);

    // Animation variants for sliding in from the right
  const logoVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 15,
        staggerChildren: 0.2, // Stagger child animations
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { type: "tween", duration: 1.5 } },
  };
  
    const childVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
      ease: [0.6, -0.05, 0.01, 0.95],
      transition: { duration: 2.5, delay: 0.2 },
    };
  

    useEffect(() => {
        // Show the page content after 3 seconds (adjust this based on your video duration)
        const timer = setTimeout(() => {
          setShowPage(true);
        }, 2000);
    
        return () => clearTimeout(timer); // Clean up the timer
      }, []);


    return (
      <>
       {!showPage ? (
        // Video/GIF overlay
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
  <video
    className="w-full h-full object-cover"
    autoPlay
    muted
    
  >
    <source src='/Logo-3.mp4' type="video/mp4" />
  </video>
</div>
      ) : (
        // Page content
        <>
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
    initial={{ opacity: 0, x: 50 }}
    animate={inView ?{ opacity: 0, x: 50, } :{opacity: 1, x:0}}
    transition={{ duration: 1.5, delay: 0.2 }} // Delay the text animation
  >
    CORE
  </motion.span>
</motion.div>
            <motion.nav
              initial={{ opacity: 0, x: -50 }}
              animate={inView ?{ opacity: 0, x: -50 }: {opacity: 1, x: 0}}
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
              initial={{ opacity: 0, y: 50 }}
              animate={inView? {opacity: 0, y: 50}:{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              >
              <button className="px-4 py-2 border rounded-full bg-gray-700 text-white border-none bg-opacity-70">Contact us</button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={inView? {opacity:0, y:50}:{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              >
              <button className="px-4 py-2 bg-orange-custom text-white rounded-full">Sign up for free</button>
              </motion.div>
                </div>
        </header>
  
        {/* Main Section */}
        <main className="flex flex-col items-center text-center space-y-6 mt-16 z-10 relative">
        <motion.p
              initial={{ opacity: 0, x: -100 }}
              animate={inView? {opacity: 0, y:50}:{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="px-4 py-1 bg-black text-white rounded-full"
            >
              Beta Release
            </motion.p>
            <motion.h1
                className="lg:text-8xl text-5xl bg-gradient-to-b from-gray-800 to-white bg-clip-text text-transparent"
              >
                <span className="">Inference</span>
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView? {opacity: 0, x: -20}:{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 1.2 }}
                  className="ps-3"
                >
                   at
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView? {opacity: 0, x:20}:{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 1.4 }}
                  className="ps-3"
                >
                   the Edge
                </motion.span>
              </motion.h1>
              <motion.p
              initial={{ opacity: 0 }}
              animate={inView? {opacity: 0}:{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.6 }}
              className="text-gray-500 max-w-2xl"
            >
              Boost your AI applications speed and efficiency globally by bringing inference closer to your users. 
              Enjoy customization and cost-efficiency for a best-in-class inference experience.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={inView?{opacity: 0, y:50}:{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.8 }}
              className="flex space-x-4"
            >
              <button className="px-6 py-2 bg-orange-custom rounded-full">Get started</button>
              <button className="px-6 py-2">Book a demo</button>
            </motion.div>
        </main>
  
        {/* Circuit Animations */}
        <div className="relative mt-16 flex justify-center">
          {/* Circuit Lines */}
          <div className="absolute top-1/2 left-0 h-1 w-1/2 bg-gradient-to-r from-orange-custom to-transparent"></div>
          <div className="absolute top-1/2 right-0 h-1 w-1/2 bg-gradient-to-l from-orange-custom to-transparent"></div>
  
          {/* AI Chip */}
          <div className="chip">AI</div>
    <svg className="lines" width="500" height="200" xmlns="http://www.w3.org/2000/svg">
      <path
        className="line"
        d="M250,250 L400,150" 
        stroke="orange" 
        strokeWidth="2" 
        fill="none"
      />
      <path
        className="line"
        d="M250,250 L150,350" 
        stroke="orange" 
        strokeWidth="2" 
        fill="none"
        />
    </svg>
        </div>
      </div>
      </motion.section>
      <section className="min-h-screen about-sec overflow-x-hidden" >    
        <header className="justify-self-center">
        <motion.nav
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.2,
          delay: 0.3,
          ease: [0.6, -0.05, 0.01, 0.95], // Custom easing for smoother animation
        }}
        style={{
          opacity: scrollYProgress, // Fade in as the user scrolls
        }}
        className="flex space-x-8 bg-black rounded-full text-white py-2 self-center mt-3 max-w-3xl px-2 justify-center"
      >
                <Image src={GOrange} width={30} alt="logo" className="h-auto w-auto rounded-lg" height={30} />
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
                <div ref={ref}>
      <motion.h2
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"} // Trigger animation based on visibility
        className="text-5xl text-center mt-2"
      >
        <motion.span variants={childVariants}>Use AI </motion.span>
        <motion.span variants={childVariants}>faster and more <br /> </motion.span>
        <motion.span variants={childVariants}>efficiently </motion.span>
        <motion.span variants={childVariants}>right on your device!</motion.span>
      </motion.h2>
    </div>
                        <div className="grid mt-5 grid-cols-3">
                        <motion.div
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
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
    <h5 className="text-white absolute bottom-3 text-lg font-bold start-auto">The Gcore Inference At the Edge:<br/>Speed Up Ai, Reduce Latency</h5>
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
    variants={logoVariants}
        initial="hidden"
        animate={controls} 
         className="flex justify-end space-x-2">
        <div className="bg-white w-auto flex rounded-full" variants={itemVariants}>
          <div className="me-1 mt-1 border rounded-full p-2">
            <Image src='/chatgpt.png' alt='text-generation' width={20} height={20}/>
          </div>
            <p className="font-bold self-center me-2">Text generation</p>
        </div>
        <div className="bg-white w-auto flex rounded-full" variants={itemVariants}>
          <div className="me-1 mt-1 border rounded-full p-2">
            {/* <Image src='/chatgpt.png' alt='text-generation' width={20} height={20}/> */}
            <h3 className="font-bold h-3 text-xl w-5 text-purple-800 ">S<span className="text-red-500">.</span></h3>
          </div>
            <p className="font-bold self-center me-2">Image generation</p>
        </div>
    </motion.div>
    <div className="flex justify-end mt-2 space-x-2">
        <div className="bg-white w-auto flex rounded-full">
          <div className="me-1 mt-1 border rounded-full p-2">
            <Image src='/gcore-orange.png' className="rounded-full" alt='text-generation' width={20} height={20}/>
          </div>
            <p className="font-bold self-center me-2">Speech recognition</p>
        </div>
        <div className="bg-white w-auto flex rounded-full">
          <div className="me-1 mt-1 border rounded-full p-2">
            <Image src='/m-logo.png' alt='text-generation' width={20} height={20}/>
          </div>
            <p className="font-bold self-center me-2">Text generation</p>
        </div>
        <div className="bg-white w-auto flex rounded-s-full">
          <div className="me-1 mt-1 border rounded-full p-2">
            <Image src='/chatgpt.png' alt='text-generation' width={20} height={20}/>
          </div>
            <p className="font-bold self-center me-2">Speec</p>
        </div>
    </div>
    <div className="flex justify-end mt-2 mb-4 space-x-2">
        <div className="bg-white w-auto flex rounded-full">
          <div className="me-1 mt-1 border rounded-full p-2">
            {/* <Image src='/chatgpt.png' alt='text-generation' width={20} height={20}/> */}
            <h3 className="font-bold h-3 text-xl w-5 text-purple-800">S<span className="text-red-500">.</span></h3>
          </div>
            <p className="font-bold self-center me-2">Image generation</p>
        </div>
        <div className="bg-white w-auto flex rounded-full">
          <div className="me-1 mt-1 border rounded-full p-2">
            <Image src='/chatgpt.png' alt='text-generation' width={20} height={20}/>
          </div>
            <p className="font-bold self-center me-2">Image classification</p>
        </div>
        <div className="bg-white w-auto flex rounded-s-full">
          <div className="me-1 mt-1 border rounded-full p-2">
          <Image src='/gcore-orange.png' className="rounded-full" alt='text-generation' width={20} height={20}/>
          </div>
            <p className="font-bold self-center me-2">Speech recogni</p>
        </div>
    </div>
    </div>

  </motion.div>
</div>
                </div>
              </main>
    </section>

      </>
      )}
      </>
    );
  }
  