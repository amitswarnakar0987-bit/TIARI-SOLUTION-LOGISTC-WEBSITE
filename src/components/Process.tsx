import ScrollReveal from './ScrollReveal';
import { FileText, TruckIcon, MapPin, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: FileText,
    number: '01',
    title: 'Consult & Quote',
    description: 'Provide your shipment details. We analyze the optimal routes and provide a transparent, all-inclusive rate.',
  },
  {
    icon: TruckIcon,
    number: '02',
    title: 'Secure Pickup',
    description: 'Our certified carriers collect your freight, verify documentation, and secure the cargo for transit.',
  },
  {
    icon: MapPin,
    number: '03',
    title: 'Active Transit',
    description: 'Your freight is moved through our network. You receive proactive milestone updates via our tracking portal.',
  },
  {
    icon: CheckCircle,
    number: '04',
    title: 'Final Delivery',
    description: 'Cargo arrives on schedule. We handle the final handoff and provide immediate digital proof of delivery.',
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 lg:py-36 bg-charcoal relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange/3 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto">
          <ScrollReveal>
            <h2 className="inline-flex items-center gap-2 text-orange text-sm font-semibold tracking-[0.2em] uppercase mb-6">
              <span className="w-8 h-px bg-orange" />
              Our Methodology
              <span className="w-8 h-px bg-orange" />
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h3 className="font-heading font-800 text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.05] tracking-tight">
              A proven process for<br /><span className="text-orange">predictable delivery</span>
            </h3>
          </ScrollReveal>
        </div>

        {/* Process Steps */}
        <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {steps.map((step, index) => (
            <ScrollReveal key={step.number} delay={index * 0.15}>
              <div className="group relative text-center lg:text-left">
                {/* Connector line (desktop) */}
                {index < 3 && (
                  <div className="hidden lg:block absolute top-10 left-[60%] w-full h-px bg-gradient-to-r from-white/20 to-transparent" aria-hidden="true" />
                )}

                <div className="relative">
                  {/* Number + Icon */}
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-white/5 border border-white/10 rounded-2xl group-hover:bg-orange/10 group-hover:border-orange/30 transition-all duration-500 mb-6 relative z-10">
                    <step.icon size={28} className="text-orange" aria-hidden="true" />
                  </div>

                  {/* Step number */}
                  <div className="font-heading font-800 text-5xl text-white/5 absolute -top-4 lg:-top-2 left-1/2 lg:left-0 -translate-x-1/2 lg:translate-x-0 group-hover:text-orange/10 transition-colors duration-500 select-none">
                    {step.number}
                  </div>

                  <h4 className="font-heading font-700 text-xl text-white mb-3">
                    {step.title}
                  </h4>
                  <p className="text-white/50 leading-relaxed text-[15px]">
                    {step.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
