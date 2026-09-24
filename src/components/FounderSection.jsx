import React from 'react';
import { Sparkles, Code2, Bot, Layers } from 'lucide-react';

export default function FounderSection() {
  return (
    <section id="founder" className="relative py-28 sm:py-36 bg-[#FAFAF8] border-b border-neutral-200/70 overflow-hidden">
      
      {/* Subtle background ambient purple light & river wave accent */}
      <div className="pointer-events-none absolute -right-32 top-1/2 -translate-y-1/2 w-96 h-96 bg-purple-100/50 blur-[130px] rounded-full" />
      <div className="pointer-events-none absolute -left-32 bottom-0 w-80 h-80 bg-violet-100/40 blur-[120px] rounded-full" />

      {/* Decorative flowing ribbon SVG behind the section */}
      <div className="absolute inset-0 pointer-events-none opacity-25" aria-hidden="true">
        <svg className="w-full h-full" viewBox="0 0 1440 600" fill="none">
          <path 
            d="M-100 350C250 200 500 500 800 320C1100 140 1300 420 1600 280" 
            stroke="url(#founderWaveGrad)" 
            strokeWidth="2" 
            strokeDasharray="4 4"
          />
          <defs>
            <linearGradient id="founderWaveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#7C3AED" />
              <stop offset="50%" stopColor="#C084FC" />
              <stop offset="100%" stopColor="#49148C" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Tag */}
        <div className="text-left mb-16">
          <span className="text-xs font-mono tracking-widest text-purple-700 uppercase font-semibold block mb-3">
            08 / MEET THE FOUNDER
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-950 leading-[1.1]">
            Behind <span className="font-editorial italic font-normal text-purple-700">Pravah.</span>
          </h2>
        </div>

        {/* Two-Column Layout on Desktop / Stacked on Mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Column 1: Founder Photo with Pravah flowing frame */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start">
            <div className="relative group max-w-sm w-full">
              
              {/* Outer soft ambient aura */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-purple-600/20 via-violet-400/20 to-purple-800/10 rounded-[2.2rem] blur-xl opacity-75 group-hover:opacity-100 transition duration-500" />
              
              {/* Photo Frame Container */}
              <div className="relative rounded-[2rem] overflow-hidden bg-white p-2.5 shadow-xl border border-neutral-200/80">
                
                {/* Photo */}
                <div className="aspect-[3/4] w-full rounded-[1.5rem] overflow-hidden bg-neutral-100 relative">
                  <img
                    src="/manan-soparia.jpg"
                    alt="Manan Soparia, Founder of Pravah"
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                  
                  {/* Subtle gradient vignette at the bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Micro floating identity tag */}
                <div className="mt-3 px-3 py-2 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-purple-600" />
                    <span className="text-[11px] font-mono tracking-wider text-neutral-700 font-semibold uppercase">
                      MANAN SOPARIA
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-purple-700 bg-purple-50 px-2.5 py-0.5 rounded-full border border-purple-100">
                    FOUNDER
                  </span>
                </div>
              </div>

              {/* Decorative Pravah river flow badge */}
              <div className="absolute -bottom-4 -right-4 hidden sm:flex items-center gap-2 px-4 py-2 rounded-2xl bg-white/95 border border-purple-200/80 shadow-lg backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5 text-purple-600" />
                <span className="text-[11px] font-mono text-neutral-800 font-semibold">
                  Founder-Led Practice
                </span>
              </div>

            </div>
          </div>

          {/* Column 2: Personal Founder Narrative */}
          <div className="lg:col-span-7 text-left flex flex-col justify-center">
            
            {/* Header info */}
            <div className="mb-6">
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-950 mb-2">
                Manan Soparia
              </h3>
              <p className="text-sm font-mono text-purple-800 font-medium">
                Founder, Pravah
              </p>
            </div>

            {/* Exact Content as requested by User */}
            <div className="space-y-5 text-base sm:text-lg text-neutral-600 font-light leading-relaxed mb-8">
              <p className="text-neutral-900 font-normal">
                "Hi, I'm Manan Soparia, the founder of Pravah.
              </p>
              <p>
                I'm an Information Technology diploma student with a strong interest in technology, web development and interactive digital experiences.
              </p>
              <p>
                I started Pravah with a simple idea: technology should do more than just look impressive — it should help businesses move forward.
              </p>
              <p>
                I enjoy exploring new technologies, building things and finding creative ways to solve real-world problems. Pravah is my way of bringing those interests together and helping businesses create stronger digital experiences."
              </p>
            </div>

            {/* Focus areas tags */}
            <div className="pt-6 border-t border-neutral-200/70 flex flex-wrap items-center gap-2.5">
              <span className="px-3.5 py-1.5 rounded-full bg-white border border-neutral-200 text-xs font-mono text-neutral-700">
                ✦ Technology & Code
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-white border border-neutral-200 text-xs font-mono text-neutral-700">
                ✦ Automation & Systems
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-white border border-neutral-200 text-xs font-mono text-neutral-700">
                ✦ Web Development
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-white border border-neutral-200 text-xs font-mono text-neutral-700">
                ✦ Interactive Experiences
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
