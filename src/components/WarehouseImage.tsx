import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { useRef } from 'react';
import ScrollReveal from './ScrollReveal';

export default function WarehouseImage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return (
    <section ref={containerRef} className="py-24 lg:py-36 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <div className="relative aspect-[16/9] lg:aspect-[21/9] rounded-3xl overflow-hidden shadow-2xl">
            <motion.img
              style={{ y: shouldReduceMotion ? 0 : y }}
              src="/images/warehouse.jpg"
              alt="Interior of a modern, well-organized high-tech logistics warehouse"
              className="w-full h-[120%] object-cover absolute top-[-10%]"
              loading="lazy"
              width="1920"
              height="1080"
            />
            
            {/* Cinematic overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent" />
            <div className="absolute inset-0 bg-orange/5 mix-blend-overlay" />
            
            {/* Content overlay */}
            <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
              <div className="max-w-2xl bg-white/10 backdrop-blur-md border border-white/20 p-8 lg:p-12 rounded-2xl">
                <h2 className="font-heading font-800 text-3xl sm:text-4xl lg:text-5xl text-white mb-6 leading-tight">
                  Infrastructure built for <span className="text-orange">unlimited scale.</span>
                </h2>
                <p className="text-white/80 text-lg leading-relaxed mb-8">
                  Our strategic warehouse locations and advanced inventory systems ensure your products are always where they need to be, ready for instant fulfillment.
                </p>
                <div className="flex flex-wrap justify-center gap-8">
                  <div>
                    <div className="text-2xl font-heading font-800 text-white">500k+ sq.ft</div>
                    <div className="text-white/50 text-sm mt-1 uppercase tracking-wider">Total Space</div>
                  </div>
                  <div className="w-px h-10 bg-white/20 hidden sm:block" />
                  <div>
                    <div className="text-2xl font-heading font-800 text-white">100% Digital</div>
                    <div className="text-white/50 text-sm mt-1 uppercase tracking-wider">Inventory Tracking</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
