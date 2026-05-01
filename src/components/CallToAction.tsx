import { useState } from 'react';
import ScrollReveal from './ScrollReveal';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function CallToAction() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 lg:py-36 bg-charcoal relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-orange/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange/3 rounded-full blur-3xl pointer-events-none" />
      
      {/* Dot grid */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
        backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
        backgroundSize: '32px 32px',
      }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left - Copy */}
          <div>
            <ScrollReveal>
              <h2 className="inline-flex items-center gap-2 text-orange text-sm font-semibold tracking-[0.2em] uppercase mb-6">
                <span className="w-8 h-px bg-orange" />
                Get a Quote
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h3 className="font-heading font-900 text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.05] tracking-tight">
                Ready to optimize your <span className="text-orange">supply chain?</span>
              </h3>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="mt-6 text-white/50 text-lg leading-relaxed">
                Connect with our logistics experts to discuss your specific requirements. We'll analyze your current setup and provide a tailored quote within 24 hours.
              </p>
            </ScrollReveal>

            {/* Trust badges */}
            <ScrollReveal delay={0.3}>
              <div className="mt-12 space-y-6">
                <div className="flex items-center gap-4 text-white">
                  <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center shrink-0">
                    <CheckCircle2 size={20} className="text-orange" />
                  </div>
                  <div>
                    <h4 className="font-heading font-700 text-lg">Guaranteed Rates</h4>
                    <p className="text-white/50 text-sm mt-1">No hidden fees or unexpected surcharges.</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-white">
                  <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center shrink-0">
                    <CheckCircle2 size={20} className="text-orange" />
                  </div>
                  <div>
                    <h4 className="font-heading font-700 text-lg">Dedicated Account Manager</h4>
                    <p className="text-white/50 text-sm mt-1">Direct access to a logistics expert 24/7.</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-white">
                  <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center shrink-0">
                    <CheckCircle2 size={20} className="text-orange" />
                  </div>
                  <div>
                    <h4 className="font-heading font-700 text-lg">Global Coverage</h4>
                    <p className="text-white/50 text-sm mt-1">Seamless delivery across 25+ countries.</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right - Form */}
          <ScrollReveal delay={0.2} direction="left">
            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-2xl relative">
              {status === 'success' ? (
                <div className="absolute inset-0 bg-white rounded-3xl flex flex-col items-center justify-center p-8 text-center animate-fade-in z-20">
                  <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 size={40} className="text-green-500" />
                  </div>
                  <h4 className="font-heading font-800 text-2xl text-charcoal mb-2">Message Sent!</h4>
                  <p className="text-charcoal/60 mb-8">
                    Thank you for reaching out. One of our logistics experts will contact you within 24 hours.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="text-orange font-bold hover:text-orange-dark transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : null}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-semibold text-charcoal/80">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      required
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl bg-soft-gray/30 border border-soft-gray/50 text-charcoal focus:bg-white focus:border-orange focus:ring-2 focus:ring-orange/20 transition-all outline-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="company" className="block text-sm font-semibold text-charcoal/80">Company</label>
                    <input
                      type="text"
                      id="company"
                      required
                      placeholder="Acme Logistics"
                      className="w-full px-4 py-3 rounded-xl bg-soft-gray/30 border border-soft-gray/50 text-charcoal focus:bg-white focus:border-orange focus:ring-2 focus:ring-orange/20 transition-all outline-none"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-semibold text-charcoal/80">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      required
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-soft-gray/30 border border-soft-gray/50 text-charcoal focus:bg-white focus:border-orange focus:ring-2 focus:ring-orange/20 transition-all outline-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="service" className="block text-sm font-semibold text-charcoal/80">Service Needed</label>
                    <select
                      id="service"
                      className="w-full px-4 py-3 rounded-xl bg-soft-gray/30 border border-soft-gray/50 text-charcoal focus:bg-white focus:border-orange focus:ring-2 focus:ring-orange/20 transition-all outline-none appearance-none"
                      required
                    >
                      <option value="" disabled selected>Select a service</option>
                      <option value="freight">Freight Forwarding</option>
                      <option value="warehouse">Warehousing</option>
                      <option value="last-mile">Final Mile Delivery</option>
                      <option value="consulting">Supply Chain Consulting</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-semibold text-charcoal/80">Project Details</label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    placeholder="Tell us about your shipping volume and requirements..."
                    className="w-full px-4 py-3 rounded-xl bg-soft-gray/30 border border-soft-gray/50 text-charcoal focus:bg-white focus:border-orange focus:ring-2 focus:ring-orange/20 transition-all outline-none resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="btn-premium w-full group inline-flex items-center justify-center gap-3 px-8 py-4 bg-orange text-white font-heading font-800 text-sm tracking-wider uppercase rounded-xl hover:bg-orange-dark transition-all duration-300 hover:shadow-xl hover:shadow-orange/30 active:scale-[0.98] disabled:opacity-70 disabled:pointer-events-none"
                >
                  {status === 'submitting' ? 'Sending...' : 'Request Quote'}
                  {status !== 'submitting' && (
                    <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                  )}
                </button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
