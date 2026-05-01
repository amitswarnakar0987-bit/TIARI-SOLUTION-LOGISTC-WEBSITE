import { motion, useReducedMotion } from 'framer-motion';
import { ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  className?: string;
}

export default function ScrollReveal({ children, delay = 0, direction = 'up', className = '' }: ScrollRevealProps) {
  const shouldReduceMotion = useReducedMotion();

  const directionMap = {
    up: { y: 30, x: 0 },
    down: { y: -30, x: 0 },
    left: { y: 0, x: 30 },
    right: { y: 0, x: -30 },
    none: { y: 0, x: 0 },
  };

  const offset = directionMap[direction];
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        y: shouldReduceMotion ? 0 : offset.y, 
        x: shouldReduceMotion ? 0 : offset.x,
        scale: shouldReduceMotion ? 1 : 0.98,
        filter: (shouldReduceMotion || isMobile) ? 'blur(0px)' : 'blur(4px)'
      }}
      whileInView={{ 
        opacity: 1, 
        y: 0, 
        x: 0, 
        scale: 1,
        filter: 'blur(0px)'
      }}
      viewport={{ once: true, margin: '-10%' }}
      transition={{ 
        duration: 0.8, 
        delay, 
        ease: [0.215, 0.61, 0.355, 1] as const
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
