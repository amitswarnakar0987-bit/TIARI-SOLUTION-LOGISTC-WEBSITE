import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import ScrollReveal from './ScrollReveal';
import { useInView } from 'react-intersection-observer';

const stats = [
  { value: 25, suffix: '+', label: 'Countries Served' },
  { value: 500, suffix: '+', label: 'Active Clients' },
  { value: 1000, suffix: 'K+', label: 'Shipments Delivered' }, // Adjusted from 1M to 1000K for counting ease if needed, or keep 1
  { value: 99, suffix: '%', label: 'On-Time Accuracy' },
];

function StatItem({ value, suffix, label, delay }: { value: number; suffix: string; label: string; delay: number }) {
  const countRef = useRef<HTMLSpanElement>(null);
  const { ref: inViewRef, inView } = useInView({ threshold: 0.5, triggerOnce: true });

  useEffect(() => {
    if (inView && countRef.current) {
      gsap.to(countRef.current, {
        innerText: value,
        duration: 2,
        snap: { innerText: 1 },
        ease: "power2.out",
        delay: delay
      });
    }
  }, [inView, value, delay]);

  return (
    <div ref={inViewRef} className="text-center p-6 lg:p-8 flex flex-col h-full justify-center">
      <div className="font-heading font-900 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-charcoal tracking-tight leading-none">
        <span ref={countRef}>0</span><span className="text-orange">{suffix}</span>
      </div>
      <div className="mt-4 text-charcoal/60 font-semibold tracking-wider text-xs sm:text-sm uppercase">
        {label}
      </div>
    </div>
  );
}

export default function Statistics() {
  return (
    <section className="py-16 lg:py-24 bg-cream relative border-y border-soft-gray/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 lg:gap-0 divide-x-0 lg:divide-x divide-y lg:divide-y-0 divide-soft-gray/50">
          {stats.map((stat, index) => (
            <div key={stat.label} className={`
              ${index % 2 !== 0 ? 'border-l border-soft-gray/50 lg:border-l-0' : ''}
              ${index > 1 ? 'pt-12 border-t border-soft-gray/50 lg:border-t-0 lg:pt-0' : 'pb-12 lg:pb-0'}
            `}>
              <ScrollReveal delay={index * 0.1}>
                <StatItem
                  value={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                  delay={index * 0.1}
                />
              </ScrollReveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
