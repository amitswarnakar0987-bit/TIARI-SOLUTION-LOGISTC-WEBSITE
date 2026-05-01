import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LogoStrip from './components/LogoStrip';
import About from './components/About';
import WarehouseImage from './components/WarehouseImage';
import Services from './components/Services';
import Process from './components/Process';
import Statistics from './components/Statistics';
import GlobalNetwork from './components/GlobalNetwork';
import Testimonial from './components/Testimonial';
import FAQ from './components/FAQ';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import PageTransition from './components/PageTransition';
import { useEffect, useRef } from 'react';

export default function App() {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const updateFooterHeight = () => {
      if (footerRef.current) {
        const height = footerRef.current.offsetHeight;
        document.documentElement.style.setProperty('--footer-height', `${height}px`);
      }
    };

    updateFooterHeight();
    window.addEventListener('resize', updateFooterHeight);
    // Extra check after fonts/images load
    window.addEventListener('load', updateFooterHeight);
    
    return () => {
      window.removeEventListener('resize', updateFooterHeight);
      window.removeEventListener('load', updateFooterHeight);
    };
  }, []);

  return (
    <div className="min-h-screen bg-cream">
      <PageTransition />
      <Navbar />
      
      <div className="main-content-wrapper">
        <main>
          <Hero />
          <LogoStrip />
          <About />
          <WarehouseImage />
          <Services />
          <Process />
          <Statistics />
          <GlobalNetwork />
          <Testimonial />
          <FAQ />
          <CallToAction />
        </main>
      </div>

      <div className="footer-reveal-container">
        <Footer ref={footerRef} />
      </div>
    </div>
  );
}
