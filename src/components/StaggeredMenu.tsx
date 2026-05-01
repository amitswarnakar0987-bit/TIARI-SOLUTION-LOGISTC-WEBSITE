import { useRef, useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ArrowRight } from 'lucide-react';
import './StaggeredMenu.css';

gsap.registerPlugin(useGSAP);

const menuLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
  { label: 'Get a Quote', href: '#contact' }
];

export default function StaggeredMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  // Keyboard accessibility
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Lock body scroll
  useEffect(() => {
    if (isOpen) {
      const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${scrollBarWidth}px`;
      document.body.classList.add('menu-open');
    } else {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
      document.body.classList.remove('menu-open');
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
      document.body.classList.remove('menu-open');
    };
  }, [isOpen]);

  useGSAP(() => {
    if (!isOpen) return;

    // Setup timeline
    tlRef.current = gsap.timeline({ paused: true })
      .to('.menu-overlay', {
        autoAlpha: 1,
        duration: 0.4,
        ease: 'power2.inOut'
      })
      .to('.layer-1', {
        x: '0%',
        autoAlpha: 1,
        duration: 0.6,
        ease: 'expo.out'
      }, '<0.05')
      .to('.layer-2', {
        x: '0%',
        autoAlpha: 1,
        duration: 0.6,
        ease: 'expo.out'
      }, '<0.05')
      .to('.main-panel', {
        x: '0%',
        autoAlpha: 1,
        duration: 0.7,
        ease: 'expo.out'
      }, '<0.05')
      .to('.layer-1', {
        x: '-300%',
        autoAlpha: 0,
        duration: 0.4,
        ease: 'power2.in'
      }, '<0.3')
      .to('.layer-2', {
        x: '-100%',
        duration: 0.4,
        ease: 'power2.in'
      }, '<')
      .fromTo('.info-panel-content', {
        y: 40,
        opacity: 0
      }, {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: 'power3.out'
      }, '<0.1')
      .fromTo('.nav-link-inner', {
        y: 80,
        opacity: 0
      }, {
        y: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.05,
        ease: 'power3.out'
      }, '<0.1')
      .fromTo('.footer-item', {
        y: 20,
        opacity: 0
      }, {
        y: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.05,
        ease: 'power3.out'
      }, '<0.2');

    tlRef.current.play();
  }, { scope: containerRef, dependencies: [isOpen] });

  useEffect(() => {
    if (isOpen) {
      // Animate icon to X
      gsap.to('.icon-line-top', { y: 4, rotation: 45, duration: 0.3, ease: 'power2.inOut' });
      gsap.to('.icon-line-bottom', { y: -4, rotation: -45, duration: 0.3, ease: 'power2.inOut' });
      gsap.to('.label-menu', { y: -20, opacity: 0, duration: 0.2 });
      gsap.to('.label-close', { y: 0, opacity: 1, duration: 0.2, delay: 0.05 });
    } else {
      if (tlRef.current) {
        tlRef.current.timeScale(1.5).reverse();
      }
      
      // Animate icon to Hamburger
      gsap.to('.icon-line-top', { y: 0, rotation: 0, duration: 0.3, ease: 'power2.inOut' });
      gsap.to('.icon-line-bottom', { y: 0, rotation: 0, duration: 0.3, ease: 'power2.inOut' });
      gsap.to('.label-menu', { y: 0, opacity: 1, duration: 0.2, delay: 0.05 });
      gsap.to('.label-close', { y: 20, opacity: 0, duration: 0.2 });
    }
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // The overlay component
  const MenuOverlay = () => (
    <div className="staggered-menu-portal" ref={containerRef}>
      {/* Background Overlay */}
      <div className="menu-overlay" onClick={closeMenu} aria-hidden="true" />

      {/* Layers */}
      <div className="menu-layer layer-1" aria-hidden="true" />
      <div className="menu-layer layer-2 hidden lg:flex">
        <div className="info-panel-content">
          <div className="info-label">TIARI SOLUTIONS LTD</div>
          <h2 className="info-headline">Move your cargo with confidence.</h2>
          <p className="info-text">
            Reliable transport, freight, warehousing, and logistics support for businesses that need speed, clarity, and secure delivery.
          </p>
          
          <div className="info-divider" />
          
          <div className="info-buttons">
            <a href="#contact" className="info-btn primary btn-premium" onClick={closeMenu}>
              Get a Quote
              <ArrowRight size={16} className="btn-arrow" />
            </a>
            <a href="#contact" className="info-btn btn-premium" onClick={closeMenu}>
              Contact Us
              <ArrowRight size={16} className="btn-arrow" />
            </a>
          </div>
          
          <div className="info-details">
            <div className="detail-label">Email</div>
            <a href="mailto:hello@tiarisolution.com" className="detail-item">hello@tiarisolution.com</a>
            
            <div className="detail-label mt-4">Phone</div>
            <a href="tel:+18005550199" className="detail-item">+1 (800) 555-0199</a>
          </div>
          
          <div className="info-tags">
            <span className="service-tag">Freight Transport</span>
            <span className="service-tag">Warehousing</span>
            <span className="service-tag">Last-Mile Delivery</span>
            <span className="service-tag">Supply Chain</span>
          </div>
        </div>
      </div>

      {/* Main Panel */}
      <nav 
        className="menu-layer main-panel"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation"
      >
        <div className="menu-nav">
          {menuLinks.map((link) => (
            <div key={link.label} className="nav-item">
              <a 
                href={link.href} 
                className="nav-link"
                onClick={closeMenu}
              >
                <div className="nav-link-inner block">
                  {link.label}
                </div>
              </a>
            </div>
          ))}
        </div>

        <div className="menu-footer">
          {/* Mobile-only info content */}
          <div className="lg:hidden mb-12 pt-8 border-t border-white/10">
            <div className="info-label !text-orange/80 !mb-4">TIARI SOLUTIONS LTD</div>
            <div className="text-white font-heading font-700 text-2xl mb-6">Move your cargo with confidence.</div>
            <div className="flex flex-col gap-3">
              <a href="#contact" className="btn-premium px-6 py-3 bg-orange text-white text-center rounded-xl font-bold uppercase text-xs tracking-wider" onClick={closeMenu}>Get a Quote</a>
              <a href="#contact" className="btn-premium px-6 py-3 border border-white/20 text-white text-center rounded-xl font-bold uppercase text-xs tracking-wider" onClick={closeMenu}>Contact Us</a>
            </div>
          </div>

          <div className="footer-item">
            <div className="footer-label">Contact</div>
            <a href="mailto:hello@tiarisolution.com" className="footer-link">hello@tiarisolution.com</a>
            <div className="mt-1">
              <a href="tel:+18005550199" className="footer-link">+1 (800) 555-0199</a>
            </div>
          </div>
          <div className="footer-item">
            <div className="footer-label">Follow Us</div>
            <div className="footer-socials">
              <a href="#" className="footer-link">LinkedIn</a>
              <a href="#" className="footer-link">Twitter</a>
              <a href="#" className="footer-link">Instagram</a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );

  return (
    <div className="staggered-menu-container">
      {/* Toggle Button - Stays in Navbar */}
      <button 
        className="menu-toggle btn-premium" 
        onClick={toggleMenu}
        aria-label={isOpen ? "Close menu" : "Open navigation menu"}
        aria-expanded={isOpen}
      >
        <div className="toggle-label-container">
          <span className="toggle-label label-menu" style={{ transform: 'translateY(0)' }}>Menu</span>
          <span className="toggle-label label-close" style={{ transform: 'translateY(20px)', opacity: 0 }}>Close</span>
        </div>
        <div className="icon-container" aria-hidden="true">
          <div className="icon-line icon-line-top" />
          <div className="icon-line icon-line-bottom" />
        </div>
      </button>

      {/* Overlay - Portaled to Body */}
      {isOpen && createPortal(<MenuOverlay />, document.body)}
    </div>
  );
}
