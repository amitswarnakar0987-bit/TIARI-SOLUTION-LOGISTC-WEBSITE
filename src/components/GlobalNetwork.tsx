import ScrollReveal from './ScrollReveal';
import { MapPin } from 'lucide-react';

const locations = [
  { name: 'New York', x: '25%', y: '35%' },
  { name: 'London', x: '45%', y: '28%' },
  { name: 'Dubai', x: '60%', y: '42%' },
  { name: 'Singapore', x: '73%', y: '55%' },
  { name: 'Shanghai', x: '78%', y: '38%' },
  { name: 'Sydney', x: '82%', y: '72%' },
  { name: 'Rotterdam', x: '48%', y: '26%' },
  { name: 'Mumbai', x: '65%', y: '48%' },
];

export default function GlobalNetwork() {
  return (
    <section className="py-24 lg:py-36 bg-cream-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <div>
            <ScrollReveal>
              <h2 className="inline-flex items-center gap-2 text-orange text-sm font-semibold tracking-[0.2em] uppercase mb-6">
                <span className="w-8 h-px bg-orange" />
                Global Infrastructure
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h3 className="font-heading font-800 text-4xl sm:text-5xl lg:text-6xl text-charcoal leading-[1.05] tracking-tight">
                Strategically positioned<br />
                <span className="text-orange">worldwide</span>
              </h3>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="mt-6 text-charcoal/60 text-lg leading-relaxed max-w-lg">
                We maintain active operations in major global trade hubs. This localized presence ensures we can clear customs faster, secure local capacity, and respond immediately to regional disruptions.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="mt-10 grid grid-cols-2 gap-y-4 gap-x-8">
                {locations.slice(0, 6).map((loc) => (
                  <div key={loc.name} className="flex items-center gap-3 py-2 border-b border-soft-gray/50 pb-3">
                    <MapPin size={18} className="text-orange flex-shrink-0" aria-hidden="true" />
                    <span className="text-charcoal/80 font-semibold">{loc.name} Port Hub</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Right - Map Visual */}
          <ScrollReveal direction="right" delay={0.2}>
            <div className="relative mt-12 lg:mt-0">
              <div className="relative bg-charcoal rounded-3xl overflow-hidden aspect-[4/3] p-8 shadow-2xl">
                {/* World map background image */}
                <img
                  src="/images/global-network.jpg"
                  alt="World map highlighting logistics routes"
                  loading="lazy"
                  width="1200"
                  height="900"
                  className="absolute inset-0 w-full h-full object-cover opacity-30"
                />
                <div className="absolute inset-0 bg-charcoal/70" />

                {/* Dot grid pattern */}
                <div className="absolute inset-0 opacity-[0.03]" style={{
                  backgroundImage: 'radial-gradient(circle, white 2px, transparent 2px)',
                  backgroundSize: '24px 24px',
                }} />

                {/* Location pins */}
                {locations.map((loc) => (
                  <div
                    key={loc.name}
                    className="absolute group cursor-pointer"
                    style={{ left: loc.x, top: loc.y }}
                    aria-label={`Hub location: ${loc.name}`}
                  >
                    <div className="relative">
                      <div className="w-3 h-3 bg-orange rounded-full shadow-lg shadow-orange/50 animate-pulse" />
                      <div className="absolute -inset-2 bg-orange/20 rounded-full" />
                    </div>
                    {/* Tooltip */}
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-4 py-2 bg-white rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-20">
                      <span className="text-charcoal text-xs font-bold tracking-wide uppercase">{loc.name}</span>
                      <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-white" />
                    </div>
                  </div>
                ))}

                {/* Connection lines (SVG) */}
                <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }} aria-hidden="true">
                  <line x1="25%" y1="35%" x2="45%" y2="28%" stroke="rgba(212,98,43,0.3)" strokeWidth="1.5" strokeDasharray="4 4" />
                  <line x1="45%" y1="28%" x2="60%" y2="42%" stroke="rgba(212,98,43,0.3)" strokeWidth="1.5" strokeDasharray="4 4" />
                  <line x1="60%" y1="42%" x2="73%" y2="55%" stroke="rgba(212,98,43,0.3)" strokeWidth="1.5" strokeDasharray="4 4" />
                  <line x1="60%" y1="42%" x2="78%" y2="38%" stroke="rgba(212,98,43,0.3)" strokeWidth="1.5" strokeDasharray="4 4" />
                  <line x1="73%" y1="55%" x2="82%" y2="72%" stroke="rgba(212,98,43,0.3)" strokeWidth="1.5" strokeDasharray="4 4" />
                  <line x1="48%" y1="26%" x2="60%" y2="42%" stroke="rgba(212,98,43,0.2)" strokeWidth="1" strokeDasharray="4 4" />
                  <line x1="65%" y1="48%" x2="73%" y2="55%" stroke="rgba(212,98,43,0.2)" strokeWidth="1" strokeDasharray="4 4" />
                </svg>
              </div>

              {/* Floating stat */}
              <div className="absolute -bottom-6 -left-4 lg:-left-8 bg-white rounded-2xl px-6 py-5 shadow-xl border border-soft-gray/50 z-20">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-orange/10 rounded-xl flex items-center justify-center">
                    <MapPin size={24} className="text-orange" aria-hidden="true" />
                  </div>
                  <div>
                    <div className="font-heading font-900 text-2xl text-charcoal">25+</div>
                    <div className="text-charcoal/60 font-medium text-xs uppercase tracking-wider mt-0.5">Active Global Hubs</div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
