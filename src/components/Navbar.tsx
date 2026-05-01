import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import StaggeredMenu from './StaggeredMenu';

const desktopLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'About', href: '#about' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple scroll spy for active state
      const sections = desktopLinks.map(l => l.href.replace('#', ''));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
          scrolled
            ? 'bg-charcoal/90 backdrop-blur-xl border-white/5 py-3 shadow-2xl shadow-black/20'
            : 'bg-transparent border-transparent py-5'
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16">
            {/* Left: Logo */}
            <div className="flex-1 flex items-center">
              <a href="#hero" className="flex items-center gap-3 group" aria-label="Tiari Solutions — Home">
                <div className="w-10 h-10 bg-orange rounded-lg flex items-center justify-center transition-all duration-500 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-orange/20">
                  <svg viewBox="0 0 32 32" className="w-6 h-6" fill="none" aria-hidden="true">
                    <path d="M6 22L10 12L14 19L18 8L26 22Z" fill="white" stroke="white" strokeWidth="1" strokeLinejoin="round"/>
                    <circle cx="22" cy="10" r="2" fill="white"/>
                  </svg>
                </div>
                <span className="font-heading font-800 text-xl tracking-tight text-white">
                  Tiari <span className="text-orange">Solutions</span>
                </span>
              </a>
            </div>

            {/* Center: Desktop Links */}
            <div className="hidden lg:flex flex-[2] justify-center items-center gap-12">
              {desktopLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`nav-link-hover text-[11px] font-bold tracking-[0.25em] uppercase transition-colors duration-300 ${
                    activeSection === link.href.replace('#', '') ? 'text-orange active' : 'text-white/50 hover:text-white'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Right: Actions & Menu */}
            <div className="flex-1 flex items-center justify-end gap-6 sm:gap-10">
              <div className="hidden lg:flex items-center gap-6">
                <a
                  href="#contact"
                  className="px-6 py-2.5 bg-orange text-white text-[10px] font-bold tracking-[0.2em] uppercase rounded-full hover:bg-orange-dark transition-all duration-300 shadow-lg shadow-orange/10 hover:shadow-orange/20"
                >
                  Get a Quote
                </a>
              </div>

              {/* Sidebar Toggle */}
              <div className="relative z-[100]">
                <StaggeredMenu />
              </div>
            </div>
          </div>
        </div>
      </motion.nav>
    </header>
  );
}
