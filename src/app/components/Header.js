'use client'
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Gcore from '@/../public/gcore-logo.png'
import { FaChevronDown } from "react-icons/fa";
import ButtonGroup from "./ButtonGroup";
import { useInView } from "react-intersection-observer";
import AiChip from "./AiChip";
import useInViewComp from "./useInViewComp";

export default function Home() {
    const [showPage, setShowPage] = useState(false);
    const sectionAnimation = useInViewComp()
    const section2Animation = useInViewComp()
    const { ref, inView } = useInView({
      threshold: 0.3, // Trigger animation when 30% of the component is visible
      triggerOnce: false, // Ensures animation triggers every time the element is in view
    });
 // Controls for the animation
 const controls = useAnimation();
 const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector('.section-to-watch');
      if (section) {
        const { top, bottom } = section.getBoundingClientRect();
        if (top <= 0 && bottom > 0) {
          setIsFixed(true);
        } else {
          setIsFixed(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
 

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
      <>
       {!showPage ? (
        // Video/GIF overlay
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
  <video
    className="w-full h-full object-cover"
    style={{filter: "brightness(100%)"}}
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
  <Image src='/gcore-logo.png' width={30} alt="logo" className="h-auto w-auto" height={30} />
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
              className="flex nav-edit space-x-6 ms-28"
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
  animate={inView ? { opacity: 0, x: -100 } : { opacity: 1, x: 0 }}
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
  
        <AiChip/>
      </div>
      </motion.section>
      <section className="min-h-screen about-sec overflow-x-hidden">    
      <header className={`justify-self-center ${isFixed ? 'fixed top-0 left-1/2 transform -translate-x-1/2 w-full z-50' : ''}`}>
        <motion.nav
        initial={{ opacity: 0, y: -50 }}
        animate={controls}
        transition={{
          duration: 0.2,
          delay: 0.3,
          ease: [0.6, -0.05, 0.01, 0.95], // Custom easing for smoother animation
        }}
        
        className="flex space-x-8 nav-edit bg-black rounded-full text-white py-2 self-center mt-3 max-w-3xl px-2 justify-center"
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
    <section ref={section2Animation.ref} className="min-h-screen bg-black overflow-x-hidden">
      {/* Header */}
      <header className="justify-self-center">
        <motion.nav
          initial="hidden"
          animate={section2Animation.controls}        
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.2, delay: 0.3, ease: [0.6, -0.05, 0.01, 0.95] } },
          }}
          className="flex nav-edit space-x-8 bg-black border rounded-full text-white py-2 self-center mt-3 max-w-3xl px-2 justify-center"
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

      {/* Subheading */}
      <div className="flex justify-center mt-6">
        <motion.p
          initial="hidden"
          animate={section2Animation.controls}  
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0, transition: { duration: 1.2, delay: 0.8, ease: [0.6, -0.05, 0.01, 0.95] } },
          }}
          className="px-4 py-1 text-white text-sm font-medium rounded-full flex items-center space-x-2 shadow-lg w-36"
          style={{
            background: 'linear-gradient(to bottom, #222, #111)',
          }}
        >
          <span className="text-orange-500 text-lg">✨</span>
          <span>AI potential</span>
        </motion.p>
      </div>

      {/* Title */}
      <div className="flex justify-center ">
        <motion.h2
          initial="hidden"
          animate={section2Animation.controls}  
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 1.2, delay: 0.5, ease: [0.6, -0.05, 0.01, 0.95] } },
          }}
          className="text-5xl text-center text-white mt-2 space-x-4 max-w-xl"
        >
          {["Unleash", "your", "AI", "application's", "full", "potential"].map((word, index) => (
            <motion.span
            key={index}            
            initial="hidden"
          animate={section2Animation.controls}  
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 1.7, delay: 1.5 + index * 0.3, ease: [0.6, -0.05, 0.01, 0.95] } },
          }}
              className="inline-block mr-1"
            >
              {word} {index === 3 && <br />}
            </motion.span>
          ))}
        </motion.h2>
      </div>

      {/* Videos with text */}
      <div className="flex justify-between space-x-4 mt-12 pb-12 px-8">
        {/* Left Video */}
        <motion.div
    initial="hidden"
          animate={section2Animation.controls}  
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0, transition: { duration: 1.2, delay: 0.2, ease: [0.6, -0.05, 0.01, 0.95] } },
          }}
    className="flex justify-center relative w-2/3"
  >
    <video
      className="h-full w-full rounded-2xl  object-cover "
      autoPlay
      muted
      loop
    >
      <source src='/earth.mp4' type="video/mp4" />
    </video>
    <motion.h5
  initial="hidden"
          animate={section2Animation.controls}  
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 2, delay: 1.8, ease: [0.6, -0.05, 0.01, 0.95] } },
          }}
  className="text-white absolute top-3 text-lg font-bold w-72 start-10"
>
  {["Low", "-", "latency", "global", "network"].map((word, index) => (
    <motion.span
      key={index}
      initial="hidden"
          animate={section2Animation.controls}  
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 1.2, delay: 1.8 + index * 0.3, ease: [0.6, -0.05, 0.01, 0.95] } },
          }}
      className="inline-block mr-1"
    >
      {word}
    </motion.span>
  ))}
</motion.h5>
<motion.p 
initial="hidden"
          animate={section2Animation.controls}  
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0, transition: { duration: 1.2, delay: 0.8, ease: [0.6, -0.05, 0.01, 0.95] } },
          }}
className="text-slate-700 w-full absolute top-12 text-md font-bold start-10">Maximize model response time with our <span className='text-white'>160+ location CDN.</span></motion.p>
<motion.p 
initial="hidden"
          animate={section2Animation.controls}  
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0, transition: { duration: 1.2, delay: 0.8, ease: [0.6, -0.05, 0.01, 0.95] } },
          }}
className="absolute top-16 text-md font-bold w-full start-10 text-slate-700">providing an average global latency of 30ms</motion.p>
  </motion.div>

        {/* Right Video */}
        <motion.div
    initial="hidden"
          animate={section2Animation.controls}  
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0, transition: { duration: 1.2, delay: 0.2, ease: [0.6, -0.05, 0.01, 0.95] } },
          }}
    className="flex justify-center relative w-1/3"
  >
    <video
      className="h-full w-full rounded-2xl  object-cover "
      autoPlay
      muted
      loop
    >
      <source src='/ai-chip.mp4' type="video/mp4" />
    </video>
    <motion.h5
  initial="hidden"
          animate={section2Animation.controls}  
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 2, delay: 1.8, ease: [0.6, -0.05, 0.01, 0.95] } },
          }}
  className="text-white absolute bottom-36 text-lg font-bold w-72 start-1"
>
  {["Single", "end", "-", "point", "for","all", "AI", "tasks"].map((word, index) => (
    <motion.span
      key={index}
      initial="hidden"
          animate={section2Animation.controls}  
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 1.2, delay: 0.8 + index* 0.3, ease: [0.6, -0.05, 0.01, 0.95] } },
          }}
      className="inline-block mr-1"
    >
      {word}
    </motion.span>
  ))}
</motion.h5>
<motion.p 
initial={{opacity: 1, y: 0}}
animate={inView? {opacity: 0, y: 100}:{opacity: 1, y: 0}}
transition={{ duration: 1, delay: 0.7 }}
className="text-slate-700 text-md w-96 absolute bottom-16 font-bold start-1">Gcore offers automated infrastructured management for AI applications while offering real-time inference</motion.p>

  </motion.div>
      </div>
    </section>
              
    <section ref={sectionAnimation.ref} className="min-h-screen bg-black overflow-x-hidden">
      {/* Header */}
      <header className="justify-self-center">
        <motion.nav
          initial="hidden"
          animate={sectionAnimation.controls}        
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.2, delay: 0.3, ease: [0.6, -0.05, 0.01, 0.95] } },
          }}
          className="flex space-x-8 nav-edit bg-black border rounded-full text-white py-2 self-center mt-3 max-w-3xl px-2 justify-center"
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

      <main className="grid mt-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
      <motion.div
            className=" p-6 rounded-lg shadow-lg h-60 relative overflow-hidden"
            initial="hidden"
          animate={sectionAnimation.controls}  
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { duration: 1.2, delay: 0.8, ease: [0.6, -0.05, 0.01, 0.95] } },
          }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-black to-orange-600 opacity-10"></div>
            <video
        className="absolute w-52 right-0 h-52 bottom-0 object-cover opacity-50"
        autoPlay
        muted
        loop
      >
        <source src='/thunder.mp4' type="video/mp4" />
      </video>
            <div className="relative z-10">
              <p className="text-white font-bold">Data privacy and security</p>
              <p className="text-gray-700">Use pre-trained foundational models from the Gcore ML ModelHub or your own trained models.</p>
            
            </div>
          </motion.div>
      <motion.div
            className="bg-gray-900 p-6 rounded-lg shadow-lg relative overflow-hidden"
            initial="hidden"
            animate={sectionAnimation.controls}  
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0, transition: { duration: 1.4, delay: 1, ease: [0.4, -0.05, 0.01, 0.95] } },
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-black to-orange-600 opacity-10"></div>
            <div className="relative z-10">
              <p className="text-white font-bold">Data privacy and security</p>
              <p className="text-gray-700">Use pre-trained foundational models from the Gcore ML ModelHub or your own trained models.</p>
              <p className="text-gray-400">Byee</p>
            </div>
          </motion.div>
      <motion.div
            className="bg-gray-900 p-6 rounded-lg shadow-lg relative overflow-hidden"
            initial="hidden"
            animate={sectionAnimation.controls}  
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0, transition: { duration: 1.6, delay: 1.2, ease: [0.4, -0.05, 0.01, 0.95] } },
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-black to-orange-600 opacity-10"></div>
            <div className="relative z-10">
              <p className="text-white font-bold">Data privacy and security</p>
              <p className="text-gray-700">Use pre-trained foundational models from the Gcore ML ModelHub or your own trained models.</p>
              <p className="text-gray-400">Byee</p>
            </div>
          </motion.div>
      <motion.div
            className="bg-gray-900 p-6 rounded-lg shadow-lg relative overflow-hidden"
            initial="hidden"
            animate={sectionAnimation.controls}  
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0, transition: { duration: 1.8, delay: 1.4, ease: [0.4, -0.05, 0.01, 0.95] } },
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-black to-orange-600 opacity-10"></div>
            <div className="relative z-10">
              <p className="text-white font-bold">Data privacy and security</p>
              <p className="text-gray-700">Use pre-trained foundational models from the Gcore ML ModelHub or your own trained models.</p>
              <p className="text-gray-400">Byee</p>
            </div>
          </motion.div>
      <motion.div
            className="bg-gray-900 p-6 rounded-lg shadow-lg relative overflow-hidden"
            initial="hidden"
            animate={sectionAnimation.controls}  
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0, transition: { duration: 2, delay: 1.6, ease: [0.4, -0.05, 0.01, 0.95] } },
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-black to-orange-600 opacity-10"></div>
            <div className="relative z-10">
              <p className="text-white font-bold">Data privacy and security</p>
              <p className="text-gray-700">Use pre-trained foundational models from the Gcore ML ModelHub or your own trained models.</p>
              <p className="text-gray-400">Byee</p>
            </div>
          </motion.div>            
      </main>
      </section>
      </>
      )}
      </>
    );
  }
  