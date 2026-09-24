import React from 'react';
import { ArrowUpRight, MessageCircle } from 'lucide-react';

export default function FinalCtaSection({ onOpenProjectModal }) {
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
        <p className="text-lg sm:text-xl text-neutral-600 max-w-xl mx-auto font-light leading-relaxed mb-12">
          Let’s build a digital presence where strategy, creativity, and technology work together as one system.
        </p>

        {/* The Two Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto mb-12">
          <button
            onClick={onOpenProjectModal}
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-sm font-semibold text-white bg-neutral-950 hover:bg-purple-700 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-sm cursor-pointer"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>

          <a
            href="https://wa.me/918302569311?text=Hi%20Pravah%2C%20I%20have%20a%20business%20ready%20to%20move.%20I%20would%20like%20to%20discuss%20a%20project."
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-sm font-medium text-neutral-800 bg-white hover:bg-neutral-100 border border-neutral-300 transition-colors shadow-xs"
          >
            <MessageCircle className="w-4 h-4 text-emerald-600" />
            <span>Talk to Pravah</span>
          </a>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-8 text-xs font-mono text-neutral-400">
          <span>✓ WRITTEN SCOPE IN 24H</span>
          <span>✓ DIRECT FOUNDER REVIEW</span>
          <span>✓ NO SALES FOG</span>
        </div>

      </div>
    </section>
  );
}
