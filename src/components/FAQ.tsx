import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const faqs = [
  {
    question: "How do you handle customs clearance for international freight?",
    answer: "We have dedicated in-house customs brokers who manage all documentation, duty calculations, and compliance checks before your cargo even reaches the border, ensuring zero delays at ports of entry."
  },
  {
    question: "Do you offer cargo insurance?",
    answer: "Yes, all shipments include standard liability coverage, and we offer comprehensive all-risk cargo insurance policies tailored to the specific value and nature of your goods."
  },
  {
    question: "Can I track my shipment in real-time?",
    answer: "Absolutely. You'll receive access to our digital tracking portal, which provides 24/7 real-time visibility, milestone alerts, and digital document management for every shipment."
  },
  {
    question: "What types of warehousing services do you provide?",
    answer: "We offer contract warehousing, cross-docking, temperature-controlled storage, and complete eCommerce fulfillment services (pick, pack, and ship) across our global network of facilities."
  },
  {
    question: "How fast can you provide a shipping quote?",
    answer: "For standard air and ocean freight, we provide comprehensive quotes within 4 hours. Complex supply chain or project cargo quotes are typically delivered within 24 hours."
  },
  {
    question: "What happens if there's a delay due to weather or port congestion?",
    answer: "Our operations team monitors global events 24/7. In the event of a disruption, we proactively communicate the issue and immediately implement pre-planned contingency routes to minimize delays."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 lg:py-36 bg-cream border-t border-soft-gray/50">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <ScrollReveal>
            <h2 className="inline-flex items-center gap-2 text-orange text-sm font-semibold tracking-[0.2em] uppercase mb-6">
              <span className="w-8 h-px bg-orange" />
              Common Questions
              <span className="w-8 h-px bg-orange" />
            </h2>
          </ScrollReveal>
          
          <ScrollReveal delay={0.1}>
            <h3 className="font-heading font-800 text-4xl sm:text-5xl text-charcoal tracking-tight">
              Frequently Asked Questions
            </h3>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.2}>
          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              
              return (
                <div 
                  key={index}
                  className={`bg-white rounded-2xl border transition-colors duration-300 overflow-hidden ${
                    isOpen ? 'border-orange/30 shadow-lg shadow-orange/5' : 'border-soft-gray/50 hover:border-orange/20'
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-inset"
                    aria-expanded={isOpen}
                  >
                    <span className="font-heading font-700 text-lg text-charcoal pr-8">
                      {faq.question}
                    </span>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300 ${
                      isOpen ? 'bg-orange text-white' : 'bg-charcoal/5 text-charcoal/50 group-hover:bg-orange/10'
                    }`}>
                      <ChevronDown 
                        size={18} 
                        className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                      />
                    </div>
                  </button>
                  
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                      >
                        <div className="px-6 pb-6 pt-2 text-charcoal/60 leading-relaxed border-t border-soft-gray/20 mt-2">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
