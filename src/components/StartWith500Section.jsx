import React from 'react';
import { Check, ShieldCheck, Zap, Sparkles } from 'lucide-react';

export default function StartWith500Section() {
  const inclusions = [
    {
      num: "01",
      title: "Complete Digital Audit",
      desc: "A meticulous review of your current website, mobile responsiveness, sub-second speed, and Google search presence."
    },
    {
      num: "02",
      title: "Bottleneck Analysis",
      desc: "We identify exactly where potential buyers drop off, hesitate, or get lost before they can contact you."
    },
    {
      num: "03",
      title: "Actionable Growth Roadmap",
      desc: "A clear, prioritized blueprint detailing exactly what to fix, what to build, and where your highest ROI lives."
    }
  ];

  return (
    <section id="start500" className="relative py-28 sm:py-36 bg-white border-b border-neutral-200/70 overflow-hidden">
      
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-purple-100/40 blur-[140px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10 text-left">
        
        {/* Section Numbering */}
        <span className="text-xs font-mono tracking-widest text-purple-700 uppercase font-semibold block mb-4">
          07 / GET STARTED
        </span>

        {/* Big Writing: Start with 500 */}
        <div className="mb-14">
          <h2 className="text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] font-bold tracking-tight text-neutral-950 leading-[0.92] tracking-tighter">
            Start with <br />
            <span className="font-editorial italic font-normal text-purple-700">
              500.
            </span>
          </h2>
        </div>

        {/* Narrative & Inclusions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Clear positioning */}
          <div className="lg:col-span-6 space-y-6">
            <p className="text-xl sm:text-2xl text-neutral-900 font-light leading-relaxed">
              No bloated retainers. No long contracts. No sales fog.
            </p>
            <p className="text-base sm:text-lg text-neutral-600 font-light leading-relaxed">
              We believe testing a working relationship should be frictionless. For <strong className="text-neutral-950 font-semibold">₹500</strong>, we conduct an honest, thorough diagnostic of your digital presence and provide a clear plan of action.
            </p>
            <p className="text-base sm:text-lg text-neutral-600 font-light leading-relaxed">
              Experience Pravah’s standard of clarity, speed, and strategic thinking firsthand before making any larger commitment.
            </p>

            <div className="pt-6 border-t border-neutral-200/70 flex flex-wrap items-center gap-6 text-xs font-mono text-neutral-500">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-600" />
                ZERO AGENCY COMMITMENT
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-600" />
                FOUNDER-REVIEWED
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-600" />
                DELIVERED IN 24H
              </span>
            </div>
          </div>

          {/* Right Column: 3 Concrete Pillars */}
          <div className="lg:col-span-6 space-y-4">
            {inclusions.map((item) => (
              <div 
                key={item.num}
                className="p-6 sm:p-8 rounded-3xl bg-neutral-50/70 border border-neutral-200/80 transition-all text-left"
              >
                <div className="flex items-start gap-5">
                  <span className="text-xs font-mono font-bold text-purple-700 bg-purple-50 px-3 py-1.5 rounded-full border border-purple-100 flex-shrink-0">
                    {item.num}
                  </span>
                  <div>
                    <h3 className="text-xl font-bold text-neutral-950 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-neutral-600 font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
