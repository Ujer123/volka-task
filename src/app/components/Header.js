'use client'
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { GiStarGate } from "react-icons/gi"; 
import { FaChevronDown } from "react-icons/fa";
import AiChip from "./AiChip";
import useInViewComp from "./useInViewComp";

export default function Home() {
    const [showPage, setShowPage] = useState(false);
    const sectionAnimation = useInViewComp()
    const section2Animation = useInViewComp()
    const section3Animation = useInViewComp()
    const section4Animation = useInViewComp()
    const section5Animation = useInViewComp()
    const section6Animation = useInViewComp()
    const section7Animation = useInViewComp()


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
          transition={{ duration: 2, delay: 0.5 }}
          ref={section4Animation.ref}
          className="hero-section min-w-100 bg-black relative">
      <div className="bg-orange-400 w-1 h-32 absolute top-16 right-10 transform -translate-x-14"></div>
      <div className="relative w-100 text-white min-h-screen overflow-hidden ">        
        <header className="w-full px-8 py-4 flex top-2 justify-between items-center text-sm z-10 relative">
        <motion.div
  className="text-xl font-bold flex"
>
  <Image src='/gcore-logo.png' width={30} alt="logo" className="h-auto w-auto" height={30} />
  <motion.span
    initial="hidden"
          animate={section4Animation.controls}        
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0, transition: { duration: 1.5, delay: 0.8, ease: [0.6, -0.05, 0.01, 0.95] } },
          }} // Delay the text animation
  >
    CORE
  </motion.span>
</motion.div>
            <motion.nav
              initial="hidden"
          animate={section4Animation.controls}        
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0, transition: { duration: 1.5, delay: 0.3, ease: [0.6, -0.05, 0.01, 0.95] } },
          }}
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
              initial="hidden"
              animate={section4Animation.controls}        
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 1.5, delay: 0.3, ease: [0.6, -0.05, 0.01, 0.95] } },
              }}
              >
              <button className="px-4 py-2 border rounded-full bg-gray-700 text-white border-none bg-opacity-70">Contact us</button>
            </motion.div>
            <motion.div
              initial="hidden"
              animate={section4Animation.controls}        
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 1.5, delay: 0.5, ease: [0.6, -0.05, 0.01, 0.95] } },
              }}
              >
              <button className="px-4 py-2 bg-orange-custom text-white rounded-full">Sign up for free</button>
              </motion.div>
                </div>
        </header>
  
        {/* Main Section */}
        <main className="flex flex-col items-center text-center space-y-6 mt-16 z-10 relative">
        <motion.p
  initial="hidden"
  animate={section4Animation.controls}        
  variants={{
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1.5, delay: 0.7, ease: [0.6, -0.05, 0.01, 0.95] } },
  }}
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
                <span>Inference</span>
                <motion.span
                  initial="hidden"
                  animate={section4Animation.controls}        
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0, transition: { duration: 1.5, delay: 1.3, ease: [0.6, -0.05, 0.01, 0.95] } },
                  }}
                  className="ps-3"
                >
                   at
                </motion.span>
                <motion.span
                  initial="hidden"
                  animate={section4Animation.controls}        
                  variants={{
                    hidden: { opacity: 0, x: 20 },
                    visible: { opacity: 1, x: 0, transition: { duration: 1.5, delay: 1.5, ease: [0.6, -0.05, 0.01, 0.95] } },
                  }}
                  className="ps-3"
                >
                   the Edge
                </motion.span>
              </motion.h1>
              <motion.p
              initial="hidden"
              animate={section4Animation.controls}        
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { duration: 1.5, delay: 1.7, ease: [0.6, -0.05, 0.01, 0.95] } },
              }}
              className="text-gray-500 max-w-2xl"
            >
              Boost your AI applications speed and efficiency globally by bringing inference closer to your users. 
              Enjoy customization and cost-efficiency for a best-in-class inference experience.
            </motion.p>
            <motion.div
              initial="hidden"
              animate={section4Animation.controls}        
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 1.5, delay: 1.8, ease: [0.6, -0.05, 0.01, 0.95] } },
              }}
              className="flex space-x-4"
            >
              <button className="px-6 py-2 bg-orange-custom rounded-full">Get started</button>
              <button className="px-6 py-2">Book a demo</button>
            </motion.div>
        </main>
  
        <AiChip section4Animation={section4Animation}/>
      </div>
      </motion.section>
      <section ref={section3Animation.ref} className="about-sec overflow-x-hidden">    
      <header className={`justify-self-center`}>
        <motion.nav
        initial="hidden"
          animate={section3Animation.controls}        
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.2, delay: 0.3, ease: [0.6, -0.05, 0.01, 0.95] } },
          }}
        
        className="flex space-x-8 nav-edit bg-black rounded-full text-white py-2 self-center mt-3 max-w-3xl px-2 justify-center"
      >
                <Image src='/gcore-orange.png' width={30} alt="logo" sizes="(max-width: 768px) 20px, 30px" className="h-auto w-auto rounded-lg" height={30} />
              <a href="#" className="hover:underline flex text-sm self-center">Products <FaChevronDown className="mt-1 ms-2"/></a>
              <a href="#" className="hover:underline flex text-sm self-center">Pricing <FaChevronDown className="mt-1 ms-2"/></a>
              <a href="#" className="hover:underline flex text-sm self-center">Resources <FaChevronDown className="mt-1 ms-2"/></a>
              <a href="#" className="hover:underline flex text-sm self-center">Partners <FaChevronDown className="mt-1 ms-2"/></a>
              <a href="#" className="hover:underline flex text-sm self-center">Why Gcore <FaChevronDown className="mt-1 ms-2"/></a>
              <a href="#" className="hover:underline flex text-sm bg-white text-black rounded-md self-center py-1 px-2 font-bold">Sign up for free</a>
            </motion.nav>
              </header>
              <main>
              <div className="flex justify-center mt-10">
      <motion.div
      initial="hidden"
          animate={section3Animation.controls}        
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0, transition: { duration: 1.2, delay: 0.3, ease: [0.6, -0.05, 0.01, 0.95] } },
          }}
      className="border rounded-full bg-white p-1 flex">
        <motion.button
        initial="hidden"
          animate={section3Animation.controls}        
          variants={{
            hidden: { opacity: 0, x: 100 },
            visible: { opacity: 1, x: 0, transition: { duration: 1.5, delay: 0.3, ease: [0.6, -0.05, 0.01, 0.95] } },
          }}
          className="bg-black text-white p-2 rounded-full flex"
        >
          <motion.div 
          >
            <GiStarGate className="me-3 mt-1" /> 
          </motion.div>
            What is?
        </motion.button>
        <motion.button
        
          className="text-black p-2"
        >
          <motion.div 
          >
            How it works?
          </motion.div>
        </motion.button>
      </motion.div>
    </div>
                <div className="container">
                <div className="flex justify-center">
  <motion.h2
    initial="hidden"
          animate={section3Animation.controls}        
          variants={{
            hidden: { opacity: 0},
            visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.3, ease: [0.6, -0.05, 0.01, 0.95] } },
          }}
    className="md:text-5xl text-3xl text-center mt-2 space-x-4 max-w-3xl"
  >
    {["Use", "AI", "faster", "and", "more", "efficiently", "right", "on", "your", "device!"].map((word, index) => (
      <motion.span
        key={index}
        initial="hidden"
          animate={section3Animation.controls}        
          variants={{
            hidden: { opacity: 0},
            visible: { opacity: 1, transition: { duration: 0.2, delay: 0.3 + index * 0.3, ease: [0.6, -0.05, 0.01, 0.95] } },
          }}
        className="inline-block mr-1"
      >
        {word} {index === 3 && <br />}
      </motion.span>
    ))}
  </motion.h2>
</div>
                        <div className="grid my-5 md:grid-cols-3 grid-cols-1">
                        <motion.div
    initial="hidden"
          animate={section3Animation.controls}        
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0, transition: { duration: 1.2, delay: 0.3, ease: [0.6, -0.05, 0.01, 0.95] } },
          }}
    className="flex justify-center relative"
  >
    <video
      className="h-full w-96 rounded-2xl  object-cover"
      autoPlay
      muted
      loop
    >
      <source src='/star.mp4' type="video/mp4" />
    </video>
    <motion.h5
  initial="hidden"
  animate={section3Animation.controls}        
  variants={{
    hidden: { opacity: 0},
    visible: { opacity: 1, transition: { duration: 1.2, delay: 0.3, ease: [0.6, -0.05, 0.01, 0.95] } },
  }}
  className="text-white absolute bottom-3 text-lg font-bold w-72 start-auto"
>
  {["The", "Gcore", "Inference", "At", "the", "Edge:", "Speed", "Up", "Ai,", "Reduce", "Latency"].map((word, index) => (
    <motion.span
      key={index}
      initial="hidden"
          animate={section3Animation.controls}        
          variants={{
            hidden: { opacity: 0},
            visible: { opacity: 1, transition: { duration: 1.2, delay: 1.3 + index * 0.3, ease: [0.6, -0.05, 0.01, 0.95] } },
          }}
      className="inline-block mr-1"
    >
      {word}
    </motion.span>
  ))}
</motion.h5>
  </motion.div>

  <motion.div
      initial="hidden"
          animate={section3Animation.controls}        
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0, transition: { duration: 1.2, delay: 0.3, ease: [0.6, -0.05, 0.01, 0.95] } },
          }}
      className="col-span-2 relative  bg-white p-3 h-96 rounded-2xl me-5"
  >
    <div className="text-black text-2xl font-bold">
      Gcore Inference at the Edge reduces the<br/> latency of your ML model output and improves<br/> the performance of AI-enabled applications.
    </div>

    <div className="mt-4 text-sm text-gray-500 max-w-md">
      Its particularly useful for AI apps that need immediate processing and minimal delay, like generative AI and real-time object detection.
    </div>

    <div className=" md:absolute relative bottom-0 right-0 md:w-2/3 w-full rounded-lg ps-10 pt-10" style={{backgroundColor: '#f7f7f7'}}>
    <motion.div   
  initial="hidden"
          animate={section3Animation.controls}        
          variants={{
            hidden: { opacity: 0, x: 100 },
            visible: { opacity: 1, x: 0, transition: { duration: 1.5, delay: 0.2, ease: [0.6, -0.05, 0.01, 0.95] } },
          }}
  className="md:flex block space-y-2 justify-end md:space-x-2 space-x-0"
>
  <motion.div
    className="bg-white md:w-auto w-52 flex rounded-full"
    initial="hidden"
          animate={section3Animation.controls}        
          variants={{
            hidden: { opacity: 0, x: 100 },
            visible: { opacity: 1, x: 0, transition: { duration: 1.5, delay: 0.4, ease: [0.6, -0.05, 0.01, 0.95] } },
          }}
  >
    <div className="me-1 mt-1 border rounded-full p-2">
      <Image src='/chatgpt.png' alt='text-generation' width={20} height={20}/>
    </div>
    <p className="font-bold self-center me-2">Text generation</p>
  </motion.div>
  <motion.div
    className="bg-white md:w-auto w-52 flex rounded-full"    
    initial="hidden"
          animate={section3Animation.controls}        
          variants={{
            hidden: { opacity: 0, x: 100 },
            visible: { opacity: 1, x: 0, transition: { duration: 1.5, delay: 0.6, ease: [0.6, -0.05, 0.01, 0.95] } },
          }}
  >
    <div className="me-1 mt-1 border rounded-full px-2">
      {/* <Image src='/chatgpt.png' alt='text-generation' width={20} height={20}/> */}
      <h3 className="font-bold h-3 text-xl w-5 text-purple-800">S<span className="text-red-500">.</span></h3>
    </div>
    <p className="font-bold self-center me-2">Image generation</p>
  </motion.div>
</motion.div>
    <motion.div 
    className="md:flex block md:space-y-0 space-y-2 justify-end mt-2 md:space-x-2 space-x-0" 
  initial="hidden"
          animate={section3Animation.controls}        
          variants={{
            hidden: { opacity: 0, x: 100 },
            visible: { opacity: 1, x: 0, transition: { duration: 1.5, delay: 0.4, ease: [0.6, -0.05, 0.01, 0.95] } },
          }}
  >
        <motion.div 
        className="bg-white md:w-auto w-52 flex rounded-full"
    initial="hidden"
          animate={section3Animation.controls}        
          variants={{
            hidden: { opacity: 0, x: 100 },
            visible: { opacity: 1, x: 0, transition: { duration: 1.5, delay: 0.6, ease: [0.6, -0.05, 0.01, 0.95] } },
          }}
        >
          <div className="me-1 mt-1 border rounded-full p-2">
            <Image src='/gcore-orange.png' className="rounded-full" alt='text-generation' width={20} height={20}/>
          </div>
            <p className="font-bold self-center me-2">Speech recognition</p>
        </motion.div>
        <motion.div 
        className="bg-white md:w-auto w-52 flex rounded-full"
    initial="hidden"
          animate={section3Animation.controls}        
          variants={{
            hidden: { opacity: 0, x: 100 },
            visible: { opacity: 1, x: 0, transition: { duration: 1.5, delay: 0.8, ease: [0.6, -0.05, 0.01, 0.95] } },
          }}
        >
          <div className="me-1 mt-1 border rounded-full p-2">
            <Image src='/m-logo.png' alt='text-generation' width={20} height={20}/>
          </div>
            <p className="font-bold self-center me-2">Text generation</p>
        </motion.div>
        <motion.div 
        className="bg-white md:w-auto w-52 flex rounded-s-full"
    initial="hidden"
          animate={section3Animation.controls}        
          variants={{
            hidden: { opacity: 0, x: 100 },
            visible: { opacity: 1, x: 0, transition: { duration: 1.5, delay: 1, ease: [0.6, -0.05, 0.01, 0.95] } },
          }}
        >
          <div className="me-1 mt-1 border rounded-full p-2">
            <Image src='/chatgpt.png' alt='text-generation' width={20} height={20}/>
          </div>
            <p className="font-bold self-center me-2">Speec</p>
        </motion.div>
    </motion.div>
    <motion.div
    className="md:flex block justify-end mt-2 mb-4 md:space-x-2 space-x-0 md:space-y-0 space-y-2"
  initial="hidden"
          animate={section3Animation.controls}        
          variants={{
            hidden: { opacity: 0, x: 100 },
            visible: { opacity: 1, x: 0, transition: { duration: 1.5, delay: 0.4, ease: [0.6, -0.05, 0.01, 0.95] } },
          }}
  >
        <motion.div className="bg-white md:w-auto w-52 flex rounded-full"
    initial="hidden"
          animate={section3Animation.controls}        
          variants={{
            hidden: { opacity: 0, x: 100 },
            visible: { opacity: 1, x: 0, transition: { duration: 1.5, delay: 1, ease: [0.6, -0.05, 0.01, 0.95] } },
          }}
    >
          <div className="me-1 mt-1 border rounded-full p-2">
            {/* <Image src='/chatgpt.png' alt='text-generation' width={20} height={20}/> */}
            <h3 className="font-bold h-3 text-xl w-5 text-purple-800">S<span className="text-red-500">.</span></h3>
          </div>
            <p className="font-bold self-center me-2">Image generation</p>
        </motion.div>
        <motion.div className="bg-white md:w-auto w-52 flex rounded-full"
        initial="hidden"
          animate={section3Animation.controls}        
          variants={{
            hidden: { opacity: 0, x: 100 },
            visible: { opacity: 1, x: 0, transition: { duration: 1.5, delay: 1.2, ease: [0.6, -0.05, 0.01, 0.95] } },
          }}
        >
          <div className="me-1 mt-1 border rounded-full p-2">
            <Image src='/chatgpt.png' alt='text-generation' width={20} height={20}/>
          </div>
            <p className="font-bold self-center me-2">Image classification</p>
        </motion.div>
        <motion.div className="bg-white md:w-auto w-52 flex rounded-s-full"
        initial="hidden"
          animate={section3Animation.controls}        
          variants={{
            hidden: { opacity: 0, x: 100 },
            visible: { opacity: 1, x: 0, transition: { duration: 1.5, delay: 1.4, ease: [0.6, -0.05, 0.01, 0.95] } },
          }}
        >
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
          className="flex nav-edit md:space-x-8 space-x-2 bg-black border rounded-full text-white md:py-2 py-0 self-center mt-3 md:max-w-3xl max-w-xl px-2 justify-center"
        >
          <Image src='/gcore-orange.png' width={30} alt="logo" className="h-auto md:w-auto w-24 rounded-lg" height={30} />
              <a href="#" className="hover:underline flex md:text-sm text-xs self-center">Products <FaChevronDown className="mt-1 ms-2"/></a>
              <a href="#" className="hover:underline flex md:text-sm text-xs self-center">Pricing <FaChevronDown className="mt-1 ms-2"/></a>
              <a href="#" className="hover:underline flex md:text-sm text-xs self-center">Resources <FaChevronDown className="mt-1 ms-2"/></a>
              <a href="#" className="hover:underline flex md:text-sm text-xs self-center">Partners <FaChevronDown className="mt-1 ms-2"/></a>
              <a href="#" className="hover:underline flex md:text-sm text-xs self-center">Why Gcore <FaChevronDown className="mt-1 ms-2"/></a>
              <a href="#" className="hover:underline flex md:text-sm text-xs bg-white text-black rounded-md self-center py-1 px-2 font-bold">Sign up for free</a>
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
      <div className="flex justify-center">
        <motion.h2
          initial="hidden"
          animate={section2Animation.controls}  
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 1.2, delay: 0.5, ease: [0.6, -0.05, 0.01, 0.95] } },
          }}
          className="md:text-5xl text-2xl text-center text-white mt-2 space-x-4 max-w-xl"
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
      <div className="grid md:grid-cols-3 md:space-x-4 grid-cols-1 mt-12 pb-12 px-8">
        {/* Left Video */}
        <motion.div
    initial="hidden"
          animate={section2Animation.controls}  
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0, transition: { duration: 1.2, delay: 0.2, ease: [0.6, -0.05, 0.01, 0.95] } },
          }}
    className="flex justify-center col-span-2 h-full relative w-full"
  >
    <video
      className="h-full w-full rounded-2xl  object-cover"
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
  className="text-white absolute top-3 md:text-lg text-md font-bold w-72 md:start-10 start-0"
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
className="text-slate-700 md:w-full w-72 absolute top-12 md:text-md text-sm font-bold md:start-10 start-0">Maximize model response time with our <span className='text-white'>160+ location CDN.</span></motion.p>
<motion.p 
initial="hidden"
          animate={section2Animation.controls}  
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0, transition: { duration: 1.2, delay: 0.8, ease: [0.6, -0.05, 0.01, 0.95] } },
          }}
className="absolute md:top-16 top-24 text-md font-bold w-full md:start-10 start-0 text-slate-700">providing an average global latency of 30ms</motion.p>
  </motion.div>

        {/* Right Video */}
        <motion.div
    initial="hidden"
          animate={section2Animation.controls}  
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0, transition: { duration: 1.2, delay: 0.2, ease: [0.6, -0.05, 0.01, 0.95] } },
          }}
    className="flex justify-center relative w-full"
  >
    <video
      className="h-full w-full rounded-2xl object-cover "
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
  className="text-white absolute md:bottom-36 bottom-28 md:text-lg text-md font-bold w-72 start-1"
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
initial="hidden"
animate={section2Animation.controls}  
variants={{
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1,y:0 , transition: { duration: 1.2, delay: 0.8, ease: [0.6, -0.05, 0.01, 0.95] } },
}}
className="text-slate-700 md:text-md text-sm md:w-96 w-72 absolute md:bottom-16 bottom-10 font-bold start-1">Gcore offers automated infrastructured management for AI applications while offering real-time inference</motion.p>

  </motion.div>
      </div>
    </section>
              
    <motion.section ref={sectionAnimation.ref} 
    className="min-h-screen bg-black border-t-2 overflow-x-hidden">
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

      <main className="md:grid block md:space-y-0 space-y-4  mt-3 lg:grid-cols-3 gap-8 mx-3">
      <motion.div
            className=" p-6 rounded-lg shadow-lg h-60 relative w-full overflow-hidden"
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
            <video
        className="absolute w-full right-0 h-full bottom-0 object-cover opacity-50"
        autoPlay
        muted
        loop
      >
        <source src='/grid.mp4' type="video/mp4" />
      </video>
            <div className="relative z-10">
              <p className="text-white font-bold">Unlimited Object storage</p>
              <p className="text-gray-700">Use scalable <span className="font-bold">S3-compatible</span> cloud storage that grows with your needs</p>
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
            <video
        className="absolute w-full right-0 h-full bottom-0 object-cover opacity-50"
        autoPlay
        muted
        loop
      >
        <source src='/thunder.mp4' type="video/mp4" />
      </video>
            <div className="relative z-10">
              <p className="text-white font-bold">Pre-trained and custom ML models</p>
              <p className="text-gray-700">Use pre-trained foundational models from the <span className='font-bold'>Gcore ML Model Hub</span> or your own trained models</p>
            </div>
          </motion.div>
      <motion.div
            className="bg-gray-900 col-span-2 p-6 h-80 rounded-lg  shadow-lg relative overflow-hidden"
            initial="hidden"
            animate={sectionAnimation.controls}  
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0, transition: { duration: 1.8, delay: 1.4, ease: [0.4, -0.05, 0.01, 0.95] } },
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-black to-orange-600 opacity-10"></div>
            <video
        className="absolute w-full right-0 h-full bottom-0 object-cover opacity-50"
        autoPlay
        muted
        loop
      >
        <source src='/cable.mp4' type="video/mp4" />
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
              visible: { opacity: 1, y: 0, transition: { duration: 2, delay: 1.6, ease: [0.4, -0.05, 0.01, 0.95] } },
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-black to-orange-600 opacity-10"></div>
            <video
        className="absolute w-full right-0 h-full bottom-0 object-cover opacity-50"
        autoPlay
        muted
        loop
      >
        <source src='/grid.mp4' type="video/mp4" />
      </video>
            <div className="relative z-10">
              <p className="text-white font-bold">Data privacy and security</p>
              <p className="text-gray-700">Use pre-trained foundational models from the Gcore ML ModelHub or your own trained models.</p>
            </div>
          </motion.div>            
      </main>
      </motion.section>

      <motion.section ref={section5Animation.ref} 
      className=" bg-black overflow-x-hidden border-t-2">
      {/* Header */}
      <header className="justify-self-center">
        <motion.nav
          initial="hidden"
          animate={section5Animation.controls}        
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.2, delay: 0.3, ease: [0.6, -0.05, 0.01, 0.95] } },
          }}
          className="flex nav-edit md:space-x-8 space-x-2 bg-black border rounded-full text-white md:py-2 py-0 self-center mt-3 md:max-w-3xl max-w-xl px-2 justify-center"
        >
          <Image src='/gcore-orange.png' width={30} alt="logo" className="h-auto md:w-auto w-24 rounded-lg" height={30} />
              <a href="#" className="hover:underline flex md:text-sm text-xs self-center">Products <FaChevronDown className="mt-1 ms-2"/></a>
              <a href="#" className="hover:underline flex md:text-sm text-xs self-center">Pricing <FaChevronDown className="mt-1 ms-2"/></a>
              <a href="#" className="hover:underline flex md:text-sm text-xs self-center">Resources <FaChevronDown className="mt-1 ms-2"/></a>
              <a href="#" className="hover:underline flex md:text-sm text-xs self-center">Partners <FaChevronDown className="mt-1 ms-2"/></a>
              <a href="#" className="hover:underline flex md:text-sm text-xs self-center">Why Gcore <FaChevronDown className="mt-1 ms-2"/></a>
              <a href="#" className="hover:underline flex md:text-sm text-xs bg-white text-black rounded-md self-center py-1 px-2 font-bold">Sign up for free</a>
        </motion.nav>
      </header>

      {/* Subheading */}
      <div className="flex justify-center mt-6">
        <motion.p
          initial="hidden"
          animate={section5Animation.controls}  
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0, transition: { duration: 1.2, delay: 0.8, ease: [0.6, -0.05, 0.01, 0.95] } },
          }}
          className="px-4 py-1 text-white text-sm font-medium rounded-full flex items-center space-x-2 shadow-lg w-44"
          style={{
            background: 'linear-gradient(to bottom, #222, #111)',
          }}
        >
          <span className="text-orange-500 text-lg">🪐</span>
          <span>Global Network</span>
        </motion.p>
      </div>

      {/* Title */}
      <div className="flex justify-center">
        <motion.h2
          initial="hidden"
          animate={section5Animation.controls}  
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 1.2, delay: 0.5, ease: [0.6, -0.05, 0.01, 0.95] } },
          }}
          className="md:text-5xl text-2xl text-center text-white mt-2 space-x-4 max-w-xl"
        >
          {["A", "truly", "global", "network", "for", "lightning", "-","fast", "inference"].map((word, index) => (
            <motion.span
            key={index}            
            initial="hidden"
          animate={section5Animation.controls}  
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
        <motion.p
         initial="hidden"
          animate={section5Animation.controls}  
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1,y: 0, transition: { duration: 1.2, delay: 0.5, ease: [0.6, -0.05, 0.01, 0.95] } },            
          }}
          className="px-4 py-1 text-slate-300 mt-3 text-sm font-medium rounded-full text-center space-x-2 shadow-lg "
        >Gcore global network consists of more than 160 locations,</motion.p>
        <motion.p
         initial="hidden"
          animate={section5Animation.controls}  
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0, transition: { duration: 1.2, delay: 0.8, ease: [0.6, -0.05, 0.01, 0.95] } },
          }}
          className="px-4 py-1 text-slate-300 text-sm font-medium rounded-full text-center space-x-2 shadow-lg "
        >allowing you to reach your users anywhere in the world</motion.p>

<motion.div
initial="hidden"
animate={section5Animation.controls}  
variants={{
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2, delay: 0.8, ease: [0.6, -0.05, 0.01, 0.95] } },
}}
>

<video
      className="h-full w-full rounded-2xl object-cover "
      autoPlay
      muted
      loop
    >
      <source src='/full-earth.mp4' type="video/mp4" />
    </video>
      </motion.div>
      </motion.section>
      <motion.section ref={section6Animation.ref} 
      className=" bg-white overflow-x-hidden">
      {/* Header */}
      <header className="justify-self-center">
        <motion.nav
          initial="hidden"
          animate={section6Animation.controls}        
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.2, delay: 0.3, ease: [0.6, -0.05, 0.01, 0.95] } },
          }}
          className="flex nav-edit md:space-x-8 space-x-2 bg-black border rounded-full text-white md:py-2 py-0 self-center mt-3 md:max-w-3xl max-w-xl px-2 justify-center"
        >
          <Image src='/gcore-orange.png' width={30} alt="logo" className="h-auto md:w-auto w-24 rounded-lg" height={30} />
              <a href="#" className="hover:underline flex md:text-sm text-xs self-center">Products <FaChevronDown className="mt-1 ms-2"/></a>
              <a href="#" className="hover:underline flex md:text-sm text-xs self-center">Pricing <FaChevronDown className="mt-1 ms-2"/></a>
              <a href="#" className="hover:underline flex md:text-sm text-xs self-center">Resources <FaChevronDown className="mt-1 ms-2"/></a>
              <a href="#" className="hover:underline flex md:text-sm text-xs self-center">Partners <FaChevronDown className="mt-1 ms-2"/></a>
              <a href="#" className="hover:underline flex md:text-sm text-xs self-center">Why Gcore <FaChevronDown className="mt-1 ms-2"/></a>
              <a href="#" className="hover:underline flex md:text-sm text-xs bg-white text-black rounded-md self-center py-1 px-2 font-bold">Sign up for free</a>
        </motion.nav>
      </header>



      {/* Title */}
      <div className="flex justify-center mt-5">
        <motion.h2
          initial="hidden"
          animate={section6Animation.controls}  
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 1.2, delay: 0.5, ease: [0.6, -0.05, 0.01, 0.95] } },
          }}
          className="md:text-5xl text-2xl text-center mt-2 space-x-4 max-w-xl"
        >
          {["Experience", "it", "now"].map((word, index) => (
            <motion.span
            key={index}            
            initial="hidden"
          animate={section6Animation.controls}  
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
        <motion.p
         initial="hidden"
          animate={section6Animation.controls}  
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1,y: 0, transition: { duration: 1.2, delay: 0.5, ease: [0.6, -0.05, 0.01, 0.95] } },            
          }}
          className="px-4 py-1 text-slate-300 mt-3 text-sm font-medium text-center"
        >Try Gcore Inference at the Edge for yourself using</motion.p>
        <motion.p
         initial="hidden"
          animate={section6Animation.controls}  
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0, transition: { duration: 1.2, delay: 0.8, ease: [0.6, -0.05, 0.01, 0.95] } },
          }}
          className="px-4 py-1 text-slate-300 text-sm font-medium text-center"
        >our playground</motion.p>

<div className="flex justify-center">
        <motion.div
         initial="hidden"
         animate={section6Animation.controls}  
         variants={{
           hidden: { opacity: 0, y: 50 },
           visible: { opacity: 1, y: 0, transition: { duration: 1.2, delay: 0.4, ease: [0.6, -0.05, 0.01, 0.95] } },
         }}
        className="flex rounded-full bg-gradient-to-r from-sky-500 to-indigo-500"
        >
          <motion.div
          initial="hidden"
          animate={section6Animation.controls}  
          variants={{
            hidden: { opacity: 0},
            visible: { opacity: 1, transition: { duration: 2, delay: 0.8, ease: [0.6, -0.05, 0.01, 0.95] } },
          }}
          className="m-1 border rounded-full p-2 bg-white">
      <Image src='/chatgpt.png' alt='text-generation' width={20} height={20}/>
    </motion.div>
    <motion.div 
    initial="hidden"
    animate={section6Animation.controls}  
    variants={{
      hidden: { opacity: 0},
      visible: { opacity: 1, transition: { duration: 2, delay: 1, ease: [0.6, -0.05, 0.01, 0.95] } },
    }}
    className="m-1 border rounded-full p-2 bg-white">
          <Image src='/gcore-orange.png' className="rounded-full" alt='text-generation' width={20} height={20}/>
          </motion.div>
          <motion.div 
           initial="hidden"
           animate={section6Animation.controls}  
           variants={{
             hidden: { opacity: 0},
             visible: { opacity: 1, transition: { duration: 2, delay: 1.2, ease: [0.6, -0.05, 0.01, 0.95] } },
           }}
          className="m-1 border rounded-full p-2 bg-white">
            {/* <Image src='/chatgpt.png' alt='text-generation' width={20} height={20}/> */}
            <h3 className="font-bold h-4 text-2xl w-5 text-purple-800">S<span className="text-red-500">.</span></h3>
          </motion.div>
          <motion.div 
           initial="hidden"
           animate={section6Animation.controls}  
           variants={{
             hidden: { opacity: 0},
             visible: { opacity: 1, transition: { duration: 2, delay: 1.4, ease: [0.6, -0.05, 0.01, 0.95] } },
           }}
          className="m-1 border rounded-full p-2 bg-white">
            <Image src='/m-logo.png' alt='text-generation' width={20} height={20}/>
          </motion.div>
          <motion.div 
           initial="hidden"
           animate={section6Animation.controls}  
           variants={{
             hidden: { opacity: 0},
             visible: { opacity: 1, transition: { duration: 2, delay: 1.6, ease: [0.6, -0.05, 0.01, 0.95] } },
           }}
          className="m-1 border rounded-full p-2 bg-white">
      <Image src='/chatgpt.png' alt='text-generation' width={20} height={20}/>
    </motion.div>
    <motion.div 
     initial="hidden"
     animate={section6Animation.controls}  
     variants={{
       hidden: { opacity: 0},
       visible: { opacity: 1, transition: { duration: 2, delay: 1.8, ease: [0.6, -0.05, 0.01, 0.95] } },
     }}
    className="m-1 border rounded-full p-2 bg-white">
          <Image src='/gcore-orange.png' className="rounded-full" alt='text-generation' width={20} height={20}/>
          </motion.div>
          <motion.div 
           initial="hidden"
           animate={section6Animation.controls}  
           variants={{
             hidden: { opacity: 0},
             visible: { opacity: 1, transition: { duration: 2, delay: 2, ease: [0.6, -0.05, 0.01, 0.95] } },
           }}
          className="m-1 border rounded-full p-2 bg-white">
            {/* <Image src='/chatgpt.png' alt='text-generation' width={20} height={20}/> */}
            <h3 className="font-bold h-4 text-2xl w-5 text-purple-800">S<span className="text-red-500">.</span></h3>
          </motion.div>
          <motion.div 
           initial="hidden"
           animate={section6Animation.controls}  
           variants={{
             hidden: { opacity: 0},
             visible: { opacity: 1, transition: { duration: 2, delay: 2.2, ease: [0.6, -0.05, 0.01, 0.95] } },
           }}
          className="m-1 border rounded-full p-2 bg-white">
            <Image src='/m-logo.png' alt='text-generation' width={20} height={20}/>
          </motion.div>
        </motion.div>        
          </div>

          <motion.div 
           initial="hidden"
           animate={section6Animation.controls}  
           variants={{
             hidden: { opacity: 0, y: 100},
             visible: { opacity: 1, y: 0, transition: { duration: 2, delay: 2.2, ease: [0.6, -0.05, 0.01, 0.95] } },
           }}
          className="rounded-lg shadow-2xl mt-10 md:mx-20 bg-white">
            <div className='flex justify-center mb-10 pt-10'>
          <motion.div className="rounded-t-full bg-gradient-to-b p-10 z-0 from-sky-500 to-indigo-500 opacity-40">
  <motion.h3 className="text-white font-bold text-center py-2 z-10">
    Discover the AI Realm
  </motion.h3>
</motion.div>
            </div>

          <motion.div className="grid md:grid-cols-2 md:gap-4 md:mx-10">
            <motion.div
             initial="hidden"
             animate={section6Animation.controls}  
             variants={{
               hidden: { opacity: 0, y: 100},
               visible: { opacity: 1, y: 0, transition: { duration: 2, delay: 2.4, ease: [0.6, -0.05, 0.01, 0.95] } },
             }}
            className="flex space-x-5 border rounded-lg space-y-2 my-2">
              <div>
              <Image src="/chatgpt.png" width={20} height={20} className='w-auto h-auto ms-3 mt-3' alt='text image'/>
              </div>
              <div>
                <h5 className="font-bold text-black">Text Generate</h5>
                <p className='text-slate-400'>A white robot on a black Harley  riding down a desert road</p>
              </div>
          </motion.div>
            <motion.div 
              initial="hidden"
              animate={section6Animation.controls}  
              variants={{
                hidden: { opacity: 0, y: 100},
                visible: { opacity: 1, y: 0, transition: { duration: 2, delay: 2.7, ease: [0.6, -0.05, 0.01, 0.95] } },
              }}
            className="flex space-x-5 border rounded-lg space-y-2 my-2">
              <div>
              <Image src="/chatgpt.png" width={20} height={20} className='w-auto h-auto ms-3 mt-3' alt='text image'/>
              </div>
              <div>
                <h5 className="font-bold text-black">Text Generate</h5>
                <p className='text-slate-400'>A white robot on a black Harley  riding down a desert road</p>
              </div>
          </motion.div>
            <motion.div 
              initial="hidden"
              animate={section6Animation.controls}  
              variants={{
                hidden: { opacity: 0, y: 100},
                visible: { opacity: 1, y: 0, transition: { duration: 2, delay: 2.8, ease: [0.6, -0.05, 0.01, 0.95] } },
              }}
            className="flex space-x-5 border rounded-lg space-y-2 my-2">
              <div>
              <Image src="/chatgpt.png" width={20} height={20} className='w-auto h-auto ms-3 mt-3' alt='text image'/>
              </div>
              <div>
                <h5 className="font-bold text-black">Text Generate</h5>
                <p className='text-slate-400'>A white robot on a black Harley  riding down a desert road</p>
              </div>
          </motion.div>
            <motion.div 
              initial="hidden"
              animate={section6Animation.controls}  
              variants={{
                hidden: { opacity: 0, y: 100},
                visible: { opacity: 1, y: 0, transition: { duration: 2, delay: 3, ease: [0.6, -0.05, 0.01, 0.95] } },
              }}
            className="flex space-x-5 border rounded-lg space-y-2 my-2">
              <div>
              <Image src="/chatgpt.png" width={20} height={20} className='w-auto h-auto ms-3 mt-3' alt='text image'/>
              </div>
              <div>
                <h5 className="font-bold text-black">Text Generate</h5>
                <p className='text-slate-400'>A white robot on a black Harley  riding down a desert road</p>
              </div>
          </motion.div>        
          </motion.div>

          <motion.div 
          initial="hidden"
          animate={section6Animation.controls}  
          variants={{
            hidden: { opacity: 0, y: 100},
            visible: { opacity: 1, y: 0, transition: { duration: 2, delay: 3.2, ease: [0.6, -0.05, 0.01, 0.95] } },
          }}
          className='rounded-full bg-gray-200 md:mx-10 mt-6 flex justify-between'>
            <input className="border-0 bg-transparent p-2 placeholder-black font-bold w-full rounded-full" placeholder='A white rabbit on a black Harley Davidson riding down a desert road'/>
            <button className="bg-white text-black rounded-md me-6 w-10 my-1">H</button>
            </motion.div>          
            <motion.h5
            initial="hidden"
            animate={section6Animation.controls}  
            variants={{
              hidden: { opacity: 0, x: 50},
              visible: { opacity: 1, x: 0, transition: { duration: 2, delay: 3, ease: [0.6, -0.05, 0.01, 0.95] } },
            }}
            className='text-slate-400 text-center mt-4 mb-6 pb-10'>Free research Preview. May produce inaccurate information about people, places, or facts.</motion.h5>
          </motion.div>

      </motion.section>

      <motion.section ref={section7Animation.ref} 
      className="bg-white overflow-x-hidden border-t-black">
      {/* Header */}
      <header className="justify-self-center">
        <motion.nav
          initial="hidden"
          animate={section7Animation.controls}        
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.2, delay: 0.3, ease: [0.6, -0.05, 0.01, 0.95] } },
          }}
          className="flex nav-edit md:space-x-8 space-x-2 bg-black border rounded-full text-white md:py-2 py-0 self-center mt-3 md:max-w-3xl max-w-xl px-2 justify-center"
        >
          <Image src='/gcore-orange.png' width={30} alt="logo" className="h-auto md:w-auto w-24 rounded-lg" height={30} />
              <a href="#" className="hover:underline flex md:text-sm text-xs self-center">Products <FaChevronDown className="mt-1 ms-2"/></a>
              <a href="#" className="hover:underline flex md:text-sm text-xs self-center">Pricing <FaChevronDown className="mt-1 ms-2"/></a>
              <a href="#" className="hover:underline flex md:text-sm text-xs self-center">Resources <FaChevronDown className="mt-1 ms-2"/></a>
              <a href="#" className="hover:underline flex md:text-sm text-xs self-center">Partners <FaChevronDown className="mt-1 ms-2"/></a>
              <a href="#" className="hover:underline flex md:text-sm text-xs self-center">Why Gcore <FaChevronDown className="mt-1 ms-2"/></a>
              <a href="#" className="hover:underline flex md:text-sm text-xs bg-white text-black rounded-md self-center py-1 px-2 font-bold">Sign up for free</a>
        </motion.nav>
      </header>



      {/* Title */}
      <div className="flex justify-center mt-5">
        <motion.h2
          initial="hidden"
          animate={section7Animation.controls}  
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 1.2, delay: 0.5, ease: [0.6, -0.05, 0.01, 0.95] } },
          }}
          className="md:text-5xl text-2xl text-center mt-2 space-x-4 max-w-xl"
        >
          {["A", "flexible", "solution", "for", "diverse", "use", "cases"].map((word, index) => (
            <motion.span
            key={index}            
            initial="hidden"
          animate={section7Animation.controls}  
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

      <div className="grid md:grid-cols-3 justify-between items-center gap-8 p-6 md:p-12">
      
      {/* IT / Technology Section */}
      <motion.div 
      initial="hidden"
      animate={section7Animation.controls}        
      variants={{
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0, transition: { duration: 1.5, delay: 0.8, ease: [0.6, -0.05, 0.01, 0.95] } },
      }}
      className="bg-white shadow-md rounded-lg p-6 w-full">
      <Image
      src='/IT-tech.png'
      width={100}
      height={100}
      className="h-60 w-full rounded-t-xl"
      alt='IT tech'
      />
        <h3 className="text-lg font-semibold mb-4">IT / Technology</h3>
        <ul className="list-disc list-inside text-gray-600">
          <li>Generative AI applications</li>
          <li>Chatbots and virtual assistants</li>
          <li>AI tools for software engineers</li>
          <li>Data augmentation</li>
        </ul>
      </motion.div>
      
      {/* Retail Section */}
      <motion.div 
      initial="hidden"
      animate={section7Animation.controls}        
      variants={{
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0, transition: { duration: 1.5, delay: 1, ease: [0.6, -0.05, 0.01, 0.95] } },
      }}
      className="bg-white shadow-md rounded-lg p-6 w-full">
      <Image
      src='/visa.png'
      width={100}
      height={100}
      className="h-60 w-full rounded-t-xl"
      alt='IT tech'
      />
        <h3 className="text-lg font-semibold mb-4">Retail</h3>
        <ul className="list-disc list-inside text-gray-600">
          <li>Smart grocery with self-checkout and merchandising</li>
          <li>
            Real-time user behavior analysis and active feedback: content
            generation, predictions, recommendations
          </li>
          <li>Data augmentation</li>
        </ul>       
      </motion.div>
      
      {/* Automotive Section */}
      <motion.div 
       initial="hidden"
       animate={section7Animation.controls}        
       variants={{
         hidden: { opacity: 0, y: 100 },
         visible: { opacity: 1, y: 0, transition: { duration: 1.5, delay: 1.2, ease: [0.6, -0.05, 0.01, 0.95] } },
       }}
      className="bg-white shadow-md rounded-lg p-6 w-full">
      <Image
      src='/location.jpg'
      width={100}
      height={100}
      className="h-60 w-full rounded-t-xl"
      alt='IT tech'
      />
        <h3 className="text-lg font-semibold mb-4">Automotive</h3>
        <ul className="list-disc list-inside text-gray-600">
          <li>
            Fast response to changes in road conditions and incidents in
            self-driving vehicles
          </li>
          <li>Advanced driver assistants</li>
          <li>Vehicle personalization</li>
        </ul>        
      </motion.div>
      <motion.div 
      initial="hidden"
      animate={section7Animation.controls}        
      variants={{
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0, transition: { duration: 1.5, delay: 0.8, ease: [0.6, -0.05, 0.01, 0.95] } },
      }}
      className="bg-white shadow-md rounded-lg p-6 w-full">
      <Image
      src='/IT-tech.png'
      width={100}
      height={100}
      className="h-60 w-full rounded-t-xl"
      alt='IT tech'
      />
        <h3 className="text-lg font-semibold mb-4">Gaming</h3>
        <ul className="list-disc list-inside text-gray-600">
          <li>AI content and map generation</li>
          <li>AI bot real-time customization and conversation</li>
          <li>Real-time player analytics</li>
          <li>Best game performation</li>
        </ul>
      </motion.div>
      
      {/* Hospitality Section */}
      <motion.div 
      initial="hidden"
      animate={section7Animation.controls}        
      variants={{
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0, transition: { duration: 1.5, delay: 1, ease: [0.6, -0.05, 0.01, 0.95] } },
      }}
      className="bg-white shadow-md rounded-lg p-6 w-full">
      <Image
      src='/visa.png'
      width={100}
      height={100}
      className="h-60 w-full rounded-t-xl"
      alt='IT tech'
      />
        <h3 className="text-lg font-semibold mb-4">Hospitality</h3>
        <ul className="list-disc list-inside text-gray-600">
          <li>Personalized destination and accomodation recommendations</li>
          <li>
            Real-time user behavior analysis and active feedback: content
            generation, predictions, recommendations
          </li>
          <li>Data augmentation</li>
        </ul>       
      </motion.div>
      
      {/* Automotive Section */}
      <motion.div 
       initial="hidden"
       animate={section7Animation.controls}        
       variants={{
         hidden: { opacity: 0, y: 100 },
         visible: { opacity: 1, y: 0, transition: { duration: 1.5, delay: 1.2, ease: [0.6, -0.05, 0.01, 0.95] } },
       }}
      className="bg-white shadow-md rounded-lg p-6 w-full">
      <Image
      src='/location.jpg'
      width={100}
      height={100}
      className="h-60 w-full rounded-t-xl"
      alt='IT tech'
      />
        <h3 className="text-lg font-semibold mb-4">Automotive</h3>
        <ul className="list-disc list-inside text-gray-600">
          <li>
            Fast response to changes in road conditions and incidents in
            self-driving vehicles
          </li>
          <li>Advanced driver assistants</li>
          <li>Vehicle personalization</li>
        </ul>        
      </motion.div>
    </div>
      </motion.section>
      </>
      )}
      </>
    );
  }
  