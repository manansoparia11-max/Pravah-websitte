import React from 'react';

/**
 * PravahLogo component
 * Renders the authentic Pravah brand mark:
 * - Distinctive top bar (shirorekha) and the iconic flowing river/wave from 'v'.
 * - Optimized for clean white & off-white backgrounds with purple accents.
 */
export default function PravahLogo({ 
  className = "h-9", 
  variant = "dark", // default 'dark' text for white backgrounds
  showTagline = false 
}) {
  const isLight = variant === "light"; // true if on dark background

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Dynamic Pravah River Wave / Lotus Icon */}
      <div className="relative flex items-center justify-center">
        <svg 
          viewBox="0 0 48 48" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-9 h-9 transition-transform duration-500 hover:rotate-6"
        >
          <defs>
            <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#7C3AED" />
              <stop offset="100%" stopColor="#49148C" />
            </linearGradient>
            <linearGradient id="waveGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#A855F7" />
              <stop offset="100%" stopColor="#6D28D9" />
            </linearGradient>
          </defs>

          {/* Top Bar (Shirorekha aesthetic) */}
          <rect x="4" y="10" width="40" height="2.6" rx="1.3" fill="url(#logoGrad)" />

          {/* Outer Flowing Petal / River current */}
          <path 
            d="M12 12C12 24 16 38 24 44C32 38 36 24 36 12" 
            stroke="url(#waveGrad)" 
            strokeWidth="2.2" 
            strokeLinecap="round" 
            opacity="0.35"
          />

          {/* Central iconic flowing 'V' wave into river current */}
          <path 
            d="M18 12L24 28C25.5 32 29 34 32 32C35 30 38 32 36 36C34 40 28 42 22 36C18 32 18 24 24 12" 
            stroke="url(#logoGrad)" 
            strokeWidth="2.6" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />

          {/* Secondary flowing river ripple */}
          <path 
            d="M23 38C26 41 31 42 34 40" 
            stroke="#A855F7" 
            strokeWidth="2" 
            strokeLinecap="round"
          />

          {/* Center growth seed / light node */}
          <circle cx="24" cy="22" r="2" fill="#7C3AED" />
        </svg>
      </div>

      {/* Pravah Wordmark with authentic Devanagari shirorekha top line & wave typography */}
      <div className="flex flex-col text-left">
        <div className="relative flex items-center">
          {/* Top connecting bar across typography */}
          <div className={`absolute top-0 left-0 right-0 h-[1.8px] rounded-full ${
            isLight ? "bg-white" : "bg-[#111015]"
          }`} />

          <span className={`text-[23px] tracking-tight font-bold pt-0.5 leading-none transition-colors ${
            isLight ? "text-white" : "text-[#111015]"
          }`} style={{ fontFamily: "var(--font-sans), sans-serif" }}>
            pra<span className="text-purple-600">v</span>ah
          </span>
        </div>

        {showTagline && (
          <span className={`text-[9px] uppercase tracking-[0.22em] font-semibold mt-1 ${
            isLight ? "text-purple-300" : "text-purple-900/80"
          }`} style={{ fontFamily: "var(--font-mono), monospace" }}>
            Digital Growth Consultant
          </span>
        )}
      </div>
    </div>
  );
}
