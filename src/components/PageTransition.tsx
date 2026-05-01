import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function PageTransition() {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        if (overlayRef.current) {
          overlayRef.current.style.display = 'none';
        }
      }
    });

    // Simple, clean curtain wipe
    tl.to(overlayRef.current, {
      yPercent: -100,
      duration: 0.8,
      ease: "expo.inOut",
      delay: 0.2
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div 
      ref={overlayRef}
      className="fixed inset-0 z-[9999] bg-charcoal pointer-events-none"
      aria-hidden="true"
    />
  );
}
