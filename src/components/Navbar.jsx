import React, { useState, useEffect } from 'react';
import PravahLogo from './PravahLogo';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Capabilities', href: '#capabilities' },
    { label: 'Interactive Tech', href: '#tech' },
    { label: 'Selected Work', href: '#work' },
    { label: 'How We Work', href: '#process' },
    { label: 'Start with 500', href: '#start500' },
    { label: 'Founder', href: '#founder' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-neutral-200/70 py-4 shadow-xs'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          
          {/* Brand Logo on Left */}
          <a href="#" className="flex items-center gap-3 focus:outline-none">
            <PravahLogo variant="dark" showTagline={true} />
          </a>

          {/* Actions on Right */}
          <div className="flex items-center gap-3">
            <a
              href="https://www.instagram.com/pravah_growth?stkn=aHlkaXBnd3lxYTc0"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-white bg-neutral-950 hover:bg-purple-700 transition-all hover:scale-[1.02] cursor-pointer shadow-xs"
            >
              <svg 
                className="w-3.5 h-3.5 text-pink-400" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
              </svg>
              <span>Let's Connect</span>
            </a>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-100 hover:bg-neutral-200/80 border border-neutral-200 text-neutral-800 text-xs font-semibold transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {menuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              <span className="hidden sm:inline">{menuOpen ? 'Close' : 'Menu'}</span>
            </button>
          </div>

        </div>
      </header>

      {/* Clean Slide-out Navigation Drawer */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-white/98 backdrop-blur-xl pt-28 px-8 sm:px-16 flex flex-col justify-between pb-12 animate-in fade-in duration-200">
          <div className="max-w-4xl mx-auto w-full">
            <span className="text-xs font-mono text-purple-700 font-semibold tracking-widest uppercase block mb-8">
              NAVIGATION
            </span>

            <nav className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
              {navLinks.map((link, idx) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="group flex items-center justify-between text-2xl sm:text-3xl font-serif text-neutral-900 border-b border-neutral-100 pb-4 hover:text-purple-700 transition-colors"
                >
                  <span className="group-hover:translate-x-1 transition-transform">{link.label}</span>
                  <span className="text-xs font-mono text-purple-600">0{idx + 1}</span>
                </a>
              ))}
            </nav>
          </div>

          <div className="max-w-4xl mx-auto w-full pt-8 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs font-mono text-neutral-500">
              PRAVAH · DIGITAL GROWTH CONSULTANT · BENGALURU & PAN-INDIA
            </div>

            <a
              href="https://www.instagram.com/pravah_growth?stkn=aHlkaXBnd3lxYTc0"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-neutral-950 hover:bg-purple-700 text-white font-semibold text-xs tracking-wider uppercase transition-colors"
            >
              <span>Let's Connect ↗</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
}
