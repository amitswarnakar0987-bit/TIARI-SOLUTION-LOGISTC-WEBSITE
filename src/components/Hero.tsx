import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';

export default function Hero() {
  const ref = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  // Parallax and Zoom effects
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.12]);

  const containerVariants = {
    hidden: { opacity: 0, filter: 'blur(10px)' },
    visible: {
      opacity: 1,
      filter: 'blur(0px)',
      transition: {
        duration: 0.8,
        staggerChildren: 0.12,
        delayChildren: 0.2,
        ease: "easeOut" as any
      }
    }
  };

  // Mobile optimization for ambient glow
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1] as any
      }
    }
  };

  const lineVariants = {
    hidden: { y: "110%" },
    visible: { 
      y: 0,
      transition: {
        duration: 0.9,
        ease: [0.215, 0.61, 0.355, 1] as any
      }
    }
  };

  return (
    <section ref={ref} id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-charcoal">
      {/* Background Image Container */}
      <motion.div 
        style={{ 
          y: shouldReduceMotion ? 0 : y,
          scale: shouldReduceMotion ? 1 : bgScale
        }}
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1.05, opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <img
          src="/images/hero-bg.jpg"
          alt="Aerial view of a busy cargo port"
          className="w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
          width="1920"
          height="1080"
        />
        {/* Dark cinematic overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/80 to-charcoal/20" />
        <div className="absolute inset-0 bg-charcoal/30" />
      </motion.div>

      {/* Ambient Glow - Optimized for mobile */}
      <motion.div
        animate={isMobile ? { opacity: [0.1, 0.15, 0.1] } : { 
          opacity: [0.1, 0.2, 0.1],
          x: [0, 30, 0],
          y: [0, -20, 0]
        }}
        transition={{ duration: isMobile ? 5 : 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-orange/15 rounded-full blur-[80px] sm:blur-[100px] pointer-events-none z-0"
      />

      {/* Content */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full py-32 lg:py-0"
      >
        <div className="max-w-3xl">
          {/* Label */}
          <motion.div variants={itemVariants} className="mb-8">
            <span className="inline-flex items-center gap-3 text-orange text-xs sm:text-sm font-bold tracking-[0.4em] uppercase">
              <span className="w-10 h-px bg-orange/40" />
              Tiari Solutions Ltd
            </span>
          </motion.div>

          {/* Headline */}
          <h1 className="font-heading font-800 text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-white leading-[1.05] tracking-tight mb-8">
            <div className="overflow-hidden">
              <motion.span variants={lineVariants} className="block">Global freight.</motion.span>
            </div>
            <div className="overflow-hidden">
              <motion.span variants={lineVariants} className="block">
                Delivered with <span className="text-orange">precision.</span>
              </motion.span>
            </div>
          </h1>

          {/* Subtext */}
          <motion.div variants={itemVariants} className="mb-12">
            <p className="text-white/70 text-lg sm:text-xl leading-relaxed font-light max-w-2xl">
              Reliable transport, freight, and warehousing support for businesses that need faster movement, secure handling, and clear communication.
            </p>
          </motion.div>

          {/* Buttons & Trust Badge */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-10"
          >
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="btn-premium px-8 py-4 bg-orange text-white font-heading font-700 text-sm tracking-widest uppercase rounded-full hover:bg-orange-dark transition-all duration-300 shadow-xl shadow-orange/20"
              >
                Request a Quote
              </a>
              <a
                href="#services"
                className="btn-premium px-8 py-4 border border-white/20 text-white font-heading font-700 text-sm tracking-widest uppercase rounded-full hover:bg-white hover:text-charcoal transition-all duration-300"
              >
                Explore Services
              </a>
            </div>

            {/* Trust Line */}
            <div className="flex items-center gap-3 text-white/40 text-xs sm:text-sm font-medium tracking-wide border-l border-white/10 pl-6 h-12">
              <ShieldCheck size={18} className="text-orange/60" />
              <span>Trusted by 500+ businesses<br />worldwide</span>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-10 z-10 hidden lg:flex"
        aria-hidden="true"
      >
        <div className="flex flex-col items-center gap-4">
          <div className="w-[1px] h-16 bg-white/10 relative overflow-hidden">
            <motion.div 
              animate={{ y: ["-100%", "100%"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 bg-gradient-to-b from-transparent via-orange to-transparent" 
            />
          </div>
          <span className="text-white/20 text-[10px] tracking-[0.5em] uppercase font-bold [writing-mode:vertical-lr]">Scroll</span>
        </div>
      </motion.div>
    </section>
  );
}
