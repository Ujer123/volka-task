
'use client'
export const fadeInUp = (delay = 0) => ({
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, delay }
  });