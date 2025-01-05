import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const useAnimateOnInView = (threshold = 0.3, triggerOnce = true) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold,
    triggerOnce,
  });

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

  return { ref, controls };
};

export default useAnimateOnInView;