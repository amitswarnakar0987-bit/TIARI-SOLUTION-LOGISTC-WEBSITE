import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';

interface ScrollRevealOptions {
  threshold?: number;
  triggerOnce?: boolean;
  delay?: number;
}

export function useScrollReveal(options: ScrollRevealOptions = {}) {
  const { threshold = 0.15, triggerOnce = true, delay = 0 } = options;
  const [hasAnimated, setHasAnimated] = useState(false);
  const { ref, inView } = useInView({ threshold, triggerOnce });

  useEffect(() => {
    if (inView && !hasAnimated) {
      const timer = setTimeout(() => setHasAnimated(true), delay);
      return () => clearTimeout(timer);
    }
  }, [inView, hasAnimated, delay]);

  return { ref, isVisible: hasAnimated || inView };
}

export function useCountUp(end: number, duration: number = 2000, startOnView: boolean = true) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (inView && !hasStarted && startOnView) {
      setHasStarted(true);
      const startTime = Date.now();
      const step = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setCount(Math.floor(eased * end));
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }
  }, [inView, hasStarted, end, duration, startOnView]);

  return { count, ref };
}
