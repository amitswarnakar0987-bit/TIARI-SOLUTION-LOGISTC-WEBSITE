import ScrollReveal from './ScrollReveal';

const partners = [
  'MAERSK', 'DHL', 'FEDEX', 'AMAZON', 'UPS',
  'COSCO', 'HAPAG', 'MSC', 'EVERGREEN', 'YANG MING',
];

export default function LogoStrip() {
  return (
    <section className="py-16 bg-charcoal relative overflow-hidden" aria-labelledby="partners-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-8">
        <ScrollReveal>
          <h2 id="partners-heading" className="text-white/40 text-sm tracking-[0.25em] uppercase text-center font-medium">
            Trusted by industry leaders worldwide
          </h2>
        </ScrollReveal>
      </div>

      <div className="relative overflow-hidden" aria-hidden="true">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-charcoal to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-charcoal to-transparent z-10" />

        <div className="animate-scroll-left flex items-center gap-16 whitespace-nowrap">
          {[...partners, ...partners].map((name, i) => (
            <div
              key={`${name}-${i}`}
              className="flex-shrink-0 flex items-center justify-center"
            >
              <span className="text-white/25 font-heading font-700 text-xl tracking-[0.15em] hover:text-white/50 transition-colors duration-500 cursor-default">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
