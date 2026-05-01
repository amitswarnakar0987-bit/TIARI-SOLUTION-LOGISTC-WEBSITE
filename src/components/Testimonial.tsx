import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    quote: "Switching to Tiari Solutions Ltd completely stabilized our supply chain. Their team proactively re-routes shipments around port delays. Last quarter alone, they reduced our average transit time by 4 days.",
    name: 'Marcus Chen',
    role: 'VP Operations, TechVault Inc.',
    rating: 5,
  },
  {
    quote: "We needed a partner who could handle complex customs clearance and warehousing across three continents. Tiari Solutions delivered perfectly. Their transparency and daily reporting are unmatched.",
    name: 'Sarah Mitchell',
    role: 'Supply Chain Director, NovaTrade',
    rating: 5,
  },
  {
    quote: "Pricing is always clear, capacity is always available, and their support team answers the phone when we need them. Tiari Solutions Ltd is exactly what a modern freight forwarder should be.",
    name: 'James Rodriguez',
    role: 'CEO, Atlas Commerce Group',
    rating: 5,
  },
];

export default function Testimonial() {
  const [active, setActive] = useState(0);

  const next = () => setActive((prev) => (prev + 1) % testimonials.length);
  const prev = () => setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 lg:py-36 bg-cream relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left - Image/Visual */}
          <ScrollReveal>
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden">
                <img
                  src="/images/hero-bg.jpg"
                  alt="Logistics operations manager inspecting cargo"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent" />
              </div>
              
              {/* Floating quote card */}
              <div className="absolute -bottom-6 -right-4 lg:-right-8 bg-white rounded-2xl px-6 py-5 shadow-2xl max-w-xs border border-soft-gray/50 z-10 hidden sm:block">
                <Quote size={24} className="text-orange mb-2" aria-hidden="true" />
                <p className="text-charcoal/70 text-sm leading-relaxed italic font-medium">
                  "They don't just move freight; they solve business problems."
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Right - Testimonial content */}
          <div>
            <ScrollReveal>
              <h2 className="inline-flex items-center gap-2 text-orange text-sm font-semibold tracking-[0.2em] uppercase mb-6">
                <span className="w-8 h-px bg-orange" />
                Client Success
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h3 className="font-heading font-800 text-4xl sm:text-5xl text-charcoal leading-[1.05] tracking-tight">
                Trusted by logistics<br /><span className="text-orange">leaders</span>
              </h3>
            </ScrollReveal>

            {/* Active testimonial */}
            <ScrollReveal delay={0.2}>
              <div className="mt-10 min-h-[300px] flex flex-col justify-between">
                <div>
                  {/* Stars */}
                  <div className="flex gap-1 mb-6" aria-label={`Rated ${testimonials[active].rating} out of 5 stars`}>
                    {[...Array(testimonials[active].rating)].map((_, i) => (
                      <Star key={i} size={16} className="text-orange fill-orange" aria-hidden="true" />
                    ))}
                  </div>

                  <AnimatePresence mode="wait">
                    <motion.blockquote
                      key={active}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="text-charcoal/80 text-xl md:text-2xl leading-relaxed font-light italic"
                    >
                      "{testimonials[active].quote}"
                    </motion.blockquote>
                  </AnimatePresence>
                </div>

                <div>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={active}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-8 flex items-center gap-4"
                    >
                      <div className="w-14 h-14 bg-charcoal rounded-full flex items-center justify-center shrink-0">
                        <span className="text-white font-heading font-800 text-lg">
                          {testimonials[active].name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <div className="font-heading font-800 text-lg text-charcoal">{testimonials[active].name}</div>
                        <div className="text-charcoal/60 text-sm font-medium">{testimonials[active].role}</div>
                      </div>
                    </motion.div>
                  </AnimatePresence>

                  {/* Navigation */}
                  <div className="mt-10 flex items-center gap-4 border-t border-soft-gray/50 pt-8">
                    <button
                      onClick={prev}
                      aria-label="Previous testimonial"
                      className="w-12 h-12 border-2 border-charcoal/15 rounded-xl flex items-center justify-center hover:border-orange hover:bg-orange hover:text-white transition-all duration-300 text-charcoal/60 focus-visible:outline-orange"
                    >
                      <ChevronLeft size={20} aria-hidden="true" />
                    </button>
                    <button
                      onClick={next}
                      aria-label="Next testimonial"
                      className="w-12 h-12 border-2 border-charcoal/15 rounded-xl flex items-center justify-center hover:border-orange hover:bg-orange hover:text-white transition-all duration-300 text-charcoal/60 focus-visible:outline-orange"
                    >
                      <ChevronRight size={20} aria-hidden="true" />
                    </button>
                    <div className="ml-4 flex gap-2" role="tablist">
                      {testimonials.map((_, i) => (
                        <button
                          key={i}
                          role="tab"
                          aria-selected={i === active}
                          aria-label={`Go to testimonial ${i + 1}`}
                          className={`h-1.5 rounded-full transition-all duration-300 ${
                            i === active ? 'w-8 bg-orange' : 'w-4 bg-charcoal/20 hover:bg-charcoal/40'
                          }`}
                          onClick={() => setActive(i)}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
