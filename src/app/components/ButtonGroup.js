import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { GiStarGate } from "react-icons/gi"; 

const ButtonGroup = () => {
  const controls = useAnimation();
  const buttonRef = useRef(null);
  const [buttonWidth, setButtonWidth] = useState(0); 

  useEffect(() => {
    const buttonWidth = buttonRef.current.offsetWidth; 
    setButtonWidth(buttonWidth); 

    controls.start('animate');
  }, [controls]);

  const variants = {
    initial: { x: buttonWidth / 2 }, 
    animate: { x: 0, transition: { duration: 0.5 } }, 
  };

  return (
    <div className="flex justify-center mt-10">
      <div className="border rounded-full bg-white p-1 flex" ref={buttonRef}>
        <motion.button
          variants={variants}
          animate={controls}
          className="bg-black text-white p-2 rounded-full flex"
        >
          <motion.div 
            initial={{ x: -20 }} 
            animate={{ x: 0 }} 
            transition={{ duration: 0.5, delay: 0.1 }} 
          >
            <GiStarGate className="me-3 mt-1" /> 
          </motion.div>
            What is?
        </motion.button>
        <motion.button
          variants={variants}
          animate={controls}
          className="text-black p-2"
        >
          <motion.div 
            initial={{ x: 20 }} 
            animate={{ x: 0 }} 
            transition={{ duration: 0.5, delay: 0.1 }} 
          >
            How it works?
          </motion.div>
        </motion.button>
      </div>
    </div>
  );
};

export default ButtonGroup;