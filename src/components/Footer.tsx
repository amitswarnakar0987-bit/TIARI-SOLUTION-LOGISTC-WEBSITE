import { ArrowRight, MapPin, Phone, Mail } from 'lucide-react';
import { forwardRef } from 'react';

const footerLinks = {
  company: [
    { label: 'About Us', href: '#about' },
    { label: 'Careers', href: '#' },
    { label: 'Press', href: '#' },
    { label: 'Blog', href: '#' },
  ],
  services: [
    { label: 'Freight Forwarding', href: '#services' },
    { label: 'Contract Warehousing', href: '#services' },
    { label: 'Final Mile Delivery', href: '#services' },
    { label: 'Supply Chain Consulting', href: '#services' },
  ],
  support: [
    { label: 'Help Center', href: '#' },
    { label: 'Track Shipment', href: '#' },
    { label: 'Customs Resources', href: '#' },
    { label: 'API Access', href: '#' },
  ],
};

const Footer = forwardRef<HTMLElement>((_, ref) => {
  return (
    <footer ref={ref} className="bg-charcoal-light relative overflow-hidden">
      {/* Top border accent */}
      <div className="h-px bg-gradient-to-r from-transparent via-orange/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <a href="#hero" className="flex items-center gap-3 mb-6" aria-label="Tiari Solutions Ltd — Home">
              <div className="w-10 h-10 bg-orange rounded-lg flex items-center justify-center">
                <svg viewBox="0 0 32 32" className="w-6 h-6" fill="none" aria-hidden="true">
                  <path d="M6 22L10 12L14 19L18 8L26 22Z" fill="white" stroke="white" strokeWidth="1" strokeLinejoin="round"/>
                  <circle cx="22" cy="10" r="2" fill="white"/>
                </svg>
              </div>
              <span className="font-heading font-800 text-xl text-white tracking-tight">
                Tiari <span className="text-orange">Solutions</span>
              </span>
            </a>
            <p className="text-white/40 leading-relaxed max-w-sm mb-8 text-sm">
              Global logistics and freight solutions for businesses that demand reliability, transparency, and operational excellence.
            </p>

            {/* Newsletter */}
            <form onSubmit={(e) => e.preventDefault()}>
              <label htmlFor="newsletter" className="block text-white font-heading font-600 text-sm mb-4 tracking-wide">Subscribe to Industry Insights</label>
              <div className="flex gap-2">
                <input
                  id="newsletter"
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/25 text-sm focus:outline-none focus:border-orange/50 focus:bg-white/10 transition-colors"
                />
                <button type="submit" aria-label="Subscribe" className="px-4 py-3 bg-orange rounded-xl hover:bg-orange-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal-light transition-all duration-300 group">
                  <ArrowRight size={18} className="text-white group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
                </button>
              </div>
            </form>
          </div>

          {/* Links columns */}
          <div>
            <h4 className="text-white font-heading font-600 text-sm mb-6 tracking-wide uppercase">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-white/40 hover:text-orange transition-colors duration-300 text-sm font-medium">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-heading font-600 text-sm mb-6 tracking-wide uppercase">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-white/40 hover:text-orange transition-colors duration-300 text-sm font-medium">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-heading font-600 text-sm mb-6 tracking-wide uppercase">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-orange mt-0.5 flex-shrink-0" aria-hidden="true" />
                <address className="text-white/40 text-sm not-italic font-medium leading-relaxed">350 Fifth Avenue, Suite 4200<br />New York, NY 10118</address>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-orange flex-shrink-0" aria-hidden="true" />
                <a href="tel:+18005550199" className="text-white/40 hover:text-orange transition-colors text-sm font-medium">+1 (800) 555-0199</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-orange flex-shrink-0" aria-hidden="true" />
                <a href="mailto:hello@tiarisolution.com" className="text-white/40 hover:text-orange transition-colors text-sm font-medium">hello@tiarisolution.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-white/30 text-sm font-medium">
            <p>© {new Date().getFullYear()} Tiari Solutions Ltd. All rights reserved.</p>
            <p className="hidden sm:block">•</p>
            <p>Designed by <span className="text-white/50">Design Arena</span></p>
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="text-white/30 hover:text-orange transition-colors text-sm font-medium">Privacy Policy</a>
            <a href="#" className="text-white/30 hover:text-orange transition-colors text-sm font-medium">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;
