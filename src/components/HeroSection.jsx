import React from 'react';
import RiverFlowCanvas from './RiverFlowCanvas';
import { ChevronRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-[88vh] flex flex-col justify-between pt-36 pb-16 bg-white overflow-hidden border-b border-neutral-100">
      
      {/* Background Soft River Waves */}
      <RiverFlowCanvas className="opacity-90" />

      {/* Atmospheric Soft Light */}
      <div className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-purple-100/40 blur-[130px] rounded-full" />

      <div className="relative max-w-5xl mx-auto px-6 sm:px-8 w-full z-10 my-auto text-center flex flex-col items-center">
        
        {/* Kicker Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 border border-purple-200/60 mb-8 shadow-xs">
          <span className="w-2 h-2 rounded-full bg-purple-600" />
          <span className="text-[11px] font-mono tracking-widest text-purple-900 uppercase font-medium">
            Digital Growth Consultant · Founder-Led
          </span>
        </div>

        {/* Large Statement */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-neutral-950 leading-[1.05] mb-8 max-w-4xl">
          Digital growth, <br />
          <span className="font-editorial italic font-normal text-purple-700">
            set in motion.
          </span>
        </h1>

        {/* Supporting Narrative */}
        <p className="text-lg sm:text-2xl text-neutral-600 max-w-2xl font-light leading-relaxed mb-10">
          Pravah helps businesses build digital systems that convert attention into <strong className="text-neutral-900 font-medium">measurable commercial action</strong>.
        </p>

        {/* Scroll to Content Anchor */}
        <div className="flex items-center justify-center w-full sm:w-auto mb-16">
          <a
            href="#problem"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-semibold text-white bg-neutral-950 hover:bg-purple-700 transition-all hover:scale-[1.02] shadow-sm"
          >
            <span>See What We Do</span>
            <ChevronRight className="w-4 h-4 text-neutral-400 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>

        {/* 3 Quick Signals */}
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-xs font-mono text-neutral-500">
          <span>✦ STRATEGY + DESIGN + TECH</span>
          <span>✦ FOUNDER ACCOUNTABILITY</span>
          <span>✦ ZERO AGENCY SILOS</span>
        </div>

      </div>

      {/* Kinetic Infinite Ticker Strip */}
      <div className="relative w-full overflow-hidden py-4 border-t border-neutral-100 bg-neutral-50/60 mt-16 select-none">
        <div className="animate-ticker text-xs font-mono tracking-widest text-neutral-500 uppercase">
          <span className="mx-6 flex items-center gap-2">
            <span className="text-purple-600">✳</span> FLOW
          </span>
          <span className="mx-6 flex items-center gap-2">
            <span className="text-purple-600">✳</span> GROWTH
          </span>
          <span className="mx-6 flex items-center gap-2">
            <span className="text-purple-600">✳</span> TRANSFORMATION
          </span>
          <span className="mx-6 flex items-center gap-2">
            <span className="text-purple-600">✳</span> MOVEMENT
          </span>
          <span className="mx-6 flex items-center gap-2">
            <span className="text-purple-600">✳</span> CREATIVITY
          </span>
          <span className="mx-6 flex items-center gap-2">
            <span className="text-purple-600">✳</span> TECHNOLOGY
          </span>
          <span className="mx-6 flex items-center gap-2">
            <span className="text-purple-600">✳</span> ONE UNIFIED SYSTEM
          </span>

          {/* Repeat */}
          <span className="mx-6 flex items-center gap-2">
            <span className="text-purple-600">✳</span> FLOW
          </span>
          <span className="mx-6 flex items-center gap-2">
            <span className="text-purple-600">✳</span> GROWTH
          </span>
          <span className="mx-6 flex items-center gap-2">
            <span className="text-purple-600">✳</span> TRANSFORMATION
          </span>
          <span className="mx-6 flex items-center gap-2">
            <span className="text-purple-600">✳</span> MOVEMENT
          </span>
          <span className="mx-6 flex items-center gap-2">
            <span className="text-purple-600">✳</span> CREATIVITY
          </span>
          <span className="mx-6 flex items-center gap-2">
            <span className="text-purple-600">✳</span> TECHNOLOGY
          </span>
          <span className="mx-6 flex items-center gap-2">
            <span className="text-purple-600">✳</span> ONE UNIFIED SYSTEM
          </span>
        </div>
      </div>

    </section>
  );
}
