import ScrollReveal from './ScrollReveal';
import { Truck, Warehouse, Package, Network, Check } from 'lucide-react';

const services = [
  {
    icon: Truck,
    title: 'Freight Forwarding',
    bestFor: 'High-volume international shipping',
    description: 'Secure capacity on major air, ocean, and ground routes. We handle the routing, carrier negotiation, and customs clearance so your cargo moves without delays.',
    benefits: ['Guaranteed carrier capacity', 'Automated customs clearance', 'Door-to-door tracking'],
    image: '/images/freight-transport.jpg',
  },
  {
    icon: Warehouse,
    title: 'Contract Warehousing',
    bestFor: 'Retail & eCommerce brands',
    description: 'Store your inventory closer to your customers. Our global fulfillment centers manage receiving, storage, pick-and-pack, and returns processing.',
    benefits: ['Climate-controlled facilities', 'Real-time inventory syncing', 'Same-day order fulfillment'],
    image: '/images/warehouse.jpg',
  },
  {
    icon: Package,
    title: 'Final Mile Delivery',
    bestFor: 'Direct-to-consumer businesses',
    description: 'Ensure your products reach the end consumer reliably. We manage local carrier networks to provide predictable, trackable home deliveries.',
    benefits: ['Predictable delivery windows', 'Photo proof of delivery', 'Customer SMS updates'],
    image: '/images/hero-bg.jpg',
  },
  {
    icon: Network,
    title: 'Supply Chain Consulting',
    bestFor: 'Enterprise manufacturers',
    description: 'Identify bottlenecks in your supply network. We audit your current logistics setup and design new routing strategies to reduce your overall shipping spend.',
    benefits: ['Freight spend analysis', 'Route optimization modeling', 'Risk management planning'],
    image: '/images/global-network.jpg',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 lg:py-36 bg-cream-dark relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-2xl">
          <ScrollReveal>
            <h2 className="inline-flex items-center gap-2 text-orange text-sm font-semibold tracking-[0.2em] uppercase mb-6">
              <span className="w-8 h-px bg-orange" />
              Our Services
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h3 className="font-heading font-800 text-4xl sm:text-5xl lg:text-6xl text-charcoal leading-[1.05] tracking-tight">
              Logistics services that<br />protect your <span className="text-orange">margins</span>
            </h3>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="mt-6 text-charcoal/60 text-lg leading-relaxed">
              We provide the infrastructure and expertise required to move your products efficiently, whether you are shipping single pallets or managing a global retail supply chain.
            </p>
          </ScrollReveal>
        </div>

        {/* Service Cards */}
        <div className="mt-16 grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ScrollReveal key={service.title} delay={index * 0.1}>
              <div className="group relative bg-white rounded-2xl overflow-hidden border border-soft-gray/50 hover:border-orange/30 transition-all duration-500 hover:shadow-2xl hover:shadow-orange/5 hover:-translate-y-2 flex flex-col h-full">
                {/* Image */}
                <div className="relative h-64 overflow-hidden shrink-0">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    width="800"
                    height="600"
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent" />
                  
                  {/* Icon & Label overlay */}
                  <div className="absolute bottom-5 left-6 right-6 flex items-end justify-between">
                    <div className="w-14 h-14 bg-orange rounded-xl flex items-center justify-center shadow-lg transform translate-y-0 group-hover:-translate-y-2 transition-transform duration-500">
                      <service.icon size={26} className="text-white" />
                    </div>
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1.5 rounded-full">
                      <span className="text-white text-xs font-medium tracking-wide">Best for: {service.bestFor}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-grow">
                  <h4 className="font-heading font-700 text-2xl text-charcoal mb-4 group-hover:text-orange transition-colors duration-300">
                    {service.title}
                  </h4>
                  <p className="text-charcoal/60 leading-relaxed mb-6 flex-grow">
                    {service.description}
                  </p>
                  
                  {/* Benefits List */}
                  <ul className="space-y-3 mb-8 border-t border-soft-gray/50 pt-6">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check size={18} className="text-orange shrink-0 mt-0.5" />
                        <span className="text-charcoal/70 text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <a href="#contact" className="btn-premium inline-flex items-center gap-2 text-orange font-bold tracking-wide text-sm group/link mt-auto w-fit px-4 py-2 rounded-lg border border-transparent hover:border-orange/20">
                    Discuss this service
                    <svg className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
