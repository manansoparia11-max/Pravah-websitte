import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function FinalCtaSection() {
  return (
    <section className="relative py-32 sm:py-44 bg-[#FAFAF8] border-b border-neutral-200/70 text-center">
      
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        
        {/* Kicker */}
        <span className="text-xs font-mono tracking-widest text-purple-700 uppercase font-semibold block mb-6">
          09 / READY TO MOVE
        </span>

        {/* Big Headline */}
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-neutral-950 leading-[1.08] mb-8">
          Have a business <br />
          <span className="font-editorial italic font-normal text-purple-700">
            ready to move?
          </span>
        </h2>

        {/* Supporting Text */}
        <p className="text-lg sm:text-xl text-neutral-600 max-w-xl mx-auto font-light leading-relaxed mb-10">
          Where strategy, creativity, and technology work together as one unbroken current.
        </p>

        {/* Let's Connect CTA */}
        <div className="flex items-center justify-center mb-12">
          <a
            href="https://www.instagram.com/pravah_growth?stkn=aHlkaXBnd3lxYTc0"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2.5 px-9 py-4 rounded-full text-sm font-semibold text-white bg-neutral-950 hover:bg-purple-700 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-sm cursor-pointer"
          >
            <svg 
              className="w-4 h-4 text-pink-400 group-hover:text-white transition-colors" 
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
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-neutral-400 group-hover:text-white" />
          </a>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-8 text-xs font-mono text-neutral-500">
          <span>✦ FOUNDER RESPONSIBILITY</span>
          <span>✦ ONE UNIFIED SYSTEM</span>
          <span>✦ MEASURABLE CLARITY</span>
        </div>

      </div>
    </section>
  );
}
