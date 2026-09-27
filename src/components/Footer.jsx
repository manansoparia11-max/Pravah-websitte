import React from 'react';
import PravahLogo from './PravahLogo';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const capabilities = [
    { name: "Digital Presence", href: "#capabilities" },
    { name: "Creative", href: "#capabilities" },
    { name: "Interactive", href: "#capabilities" },
    { name: "Growth", href: "#capabilities" },
    { name: "Conversion", href: "#capabilities" },
    { name: "Innovation", href: "#capabilities" },
  ];

  return (
    <footer className="relative bg-white text-neutral-600 pt-24 pb-12 border-t border-neutral-200/70">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-neutral-200/70 text-left">
          
          {/* Brand Col */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <PravahLogo variant="dark" showTagline={true} className="mb-4" />
              <p className="text-sm text-neutral-500 max-w-sm mt-4 leading-relaxed font-light">
                Technology-first digital consultancy for local and scaling businesses. Built and delivered by the founder.
              </p>
            </div>

            <div className="mt-8 text-xs font-mono text-purple-700 font-medium">
              FLOW · GROWTH · TRANSFORMATION · MOVEMENT · CREATIVITY · TECHNOLOGY
            </div>
          </div>

          {/* Capabilities Col */}
          <div className="lg:col-span-4">
            <span className="text-xs font-mono text-neutral-900 font-bold tracking-widest uppercase block mb-6">
              Capabilities
            </span>
            <ul className="grid grid-cols-2 gap-y-3 gap-x-6 text-sm">
              {capabilities.map((cap) => (
                <li key={cap.name}>
                  <a
                    href={cap.href}
                    className="hover:text-purple-700 transition-colors flex items-center justify-between group"
                  >
                    <span>{cap.name}</span>
                    <span className="text-purple-600 opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Col */}
          <div className="lg:col-span-3">
            <span className="text-xs font-mono text-neutral-900 font-bold tracking-widest uppercase block mb-6">
              Connect
            </span>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="https://www.instagram.com/pravah_growth?stkn=aHlkaXBnd3lxYTc0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-purple-700 transition-colors flex items-center gap-2 group"
                >
                  <svg 
                    className="w-4 h-4 text-pink-600 group-hover:scale-110 transition-transform" 
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
                  <span className="text-purple-600 opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-400">
          <div>
            <span>© {new Date().getFullYear()} PRAVAH CONSULTANCY. ALL RIGHTS RESERVED.</span>
          </div>

          <div className="flex items-center gap-6">
            <span>BENGALURU · MUMBAI · JAIPUR · DELHI</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-neutral-700 hover:text-purple-700 transition-colors cursor-pointer"
            >
              <span>BACK TO TOP</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
