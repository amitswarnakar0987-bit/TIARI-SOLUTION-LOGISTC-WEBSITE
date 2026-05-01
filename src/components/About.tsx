import ScrollReveal from './ScrollReveal';
import { Globe, Shield, Clock } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-36 bg-cream relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left content */}
          <div>
            <ScrollReveal>
              <h2 className="inline-flex items-center gap-2 text-orange text-sm font-semibold tracking-[0.2em] uppercase mb-6">
                <span className="w-8 h-px bg-orange" />
                Who We Are
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h3 className="font-heading font-800 text-4xl sm:text-5xl lg:text-6xl text-charcoal leading-[1.05] tracking-tight">
                Logistics driven by<br />
                <span className="text-orange">precision & scale</span>
              </h3>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="mt-8 border-l-2 border-orange/30 pl-6">
                <p className="text-charcoal/60 text-lg leading-relaxed">
                  Based in New York, Tiari Solutions Ltd is a leading global freight forwarder. We simplify complex supply chains for manufacturing, retail, and eCommerce businesses. Rather than just moving boxes, we partner with you to optimize routes, cut delays, and manage end-to-end delivery schedules.
                </p>
              </div>
            </ScrollReveal>

            {/* Feature pills */}
            <ScrollReveal delay={0.3}>
              <div className="mt-10 flex flex-wrap gap-4">
                {[
                  { icon: Globe, label: 'Global Forwarding Network' },
                  { icon: Shield, label: 'Cargo Insurance Included' },
                  { icon: Clock, label: 'Real-Time Dedicated Support' },
                ].map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-3 px-5 py-3 bg-charcoal/5 rounded-xl hover:bg-charcoal/10 transition-colors duration-300"
                  >
                    <Icon size={18} className="text-orange" />
                    <span className="text-charcoal font-medium text-sm">{label}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Right - Two column text */}
          <div>
            <ScrollReveal delay={0.2} direction="right">
              <div className="grid gap-8">
                <div className="p-8 bg-white rounded-2xl shadow-sm border border-soft-gray/50 hover:border-orange/20 transition-colors">
                  <div className="w-12 h-12 bg-orange/10 rounded-xl flex items-center justify-center mb-5">
                    <span className="text-orange font-heading font-800 text-xl">01</span>
                  </div>
                  <h4 className="font-heading font-700 text-xl text-charcoal mb-3">Our Mission</h4>
                  <p className="text-charcoal/55 leading-relaxed">
                    To eliminate the friction in international trade. We handle the customs paperwork, secure the capacity, and negotiate rates so you can focus entirely on growing your core business.
                  </p>
                </div>

                <div className="p-8 bg-white rounded-2xl shadow-sm border border-soft-gray/50 hover:border-orange/20 transition-colors">
                  <div className="w-12 h-12 bg-orange/10 rounded-xl flex items-center justify-center mb-5">
                    <span className="text-orange font-heading font-800 text-xl">02</span>
                  </div>
                  <h4 className="font-heading font-700 text-xl text-charcoal mb-3">The Tiari Standard</h4>
                  <p className="text-charcoal/55 leading-relaxed">
                    We believe in complete transparency. No hidden fees, clear communication during delays, and a proactive approach to solving logistical hurdles before they affect your bottom line.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
