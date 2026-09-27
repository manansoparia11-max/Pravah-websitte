import React from 'react';
import { Coffee, Gem, ShoppingBag, Check } from 'lucide-react';

export default function SelectedWorkSection() {
  const projects = [
    {
      id: "cafe",
      badge: "PROJECT 01",
      category: "Specialty Café & Roastery",
      headline: "Turning a local café into a digital experience.",
      icon: Coffee,
      summary: "Sub-second digital table menu, automated table reservation flow, and top-3 local Google Maps ranking.",
      solution: "Engineered a rapid mobile web app with instant 1-tap table booking and local map pack optimization.",
      outcomes: ["180% surge in advance reservations", "0.4s digital menu load speed", "4.9★ Google authority rating"]
    },
    {
      id: "jewellery",
      badge: "PROJECT 02",
      category: "Fine Jewellery Studio",
      headline: "Making product discovery interactive.",
      icon: Gem,
      summary: "Interactive 3D ring visualizer, custom metal finish selector, and VIP private consultation booking pipeline.",
      solution: "Created an editorial digital flagship featuring real-time 3D rotation and direct private consultation scheduling.",
      outcomes: ["4.8x increase in visitor session depth", "62% more booked boutique appointments", "Zero lead drops with calendar sync"]
    },
    {
      id: "retail",
      badge: "PROJECT 03",
      category: "Local Retail Flagship",
      headline: "Connecting digital discovery with physical stores.",
      icon: ShoppingBag,
      summary: "Live local store inventory portal, 1-click 'Hold In-Store' reservation, and hyper-local search ads.",
      solution: "Deployed a live inventory lookup with 1-tap 'Hold in Store' reservation for local shoppers within 5km.",
      outcomes: ["140% growth in store visits from Google Search", "38% lower customer acquisition cost", "High-intent footfall conversion"]
    }
  ];

  return (
    <section id="work" className="relative py-28 sm:py-36 bg-white border-b border-neutral-200/70">
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8 text-left">
          <div className="max-w-2xl">
            <span className="text-xs font-mono tracking-widest text-purple-700 uppercase font-semibold block mb-4">
              05 / SELECTED WORK
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-neutral-950 leading-[1.1]">
              Real businesses.<br />
              <span className="font-editorial italic font-normal text-purple-700">
                Real digital momentum.
              </span>
            </h2>
          </div>
          <p className="text-base text-neutral-600 max-w-sm font-light text-left md:text-right">
            Selected digital flagships and systems engineered for measurable business momentum.
          </p>
        </div>

        {/* 3 Project Cards Grid - Non-clickable, clean editorial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((proj) => {
            const Icon = proj.icon;
            return (
              <article
                key={proj.id}
                className="p-8 rounded-3xl bg-neutral-50/60 border border-neutral-200/80 flex flex-col justify-between text-left"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[11px] font-mono font-semibold text-purple-700 bg-purple-50 px-3 py-1 rounded-full border border-purple-100">
                      {proj.badge}
                    </span>
                    <Icon className="w-5 h-5 text-neutral-400" />
                  </div>

                  <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider block mb-2">
                    {proj.category}
                  </span>

                  <h3 className="text-2xl font-bold text-neutral-950 mb-3">
                    {proj.headline}
                  </h3>

                  <p className="text-sm text-neutral-600 font-light leading-relaxed mb-6">
                    {proj.summary}
                  </p>

                  <div className="pt-4 border-t border-neutral-200/60 space-y-2">
                    <span className="text-xs font-semibold text-neutral-900 block mb-1">
                      Key Outcomes:
                    </span>
                    <ul className="space-y-1.5">
                      {proj.outcomes.map((out, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs text-neutral-600">
                          <Check className="w-3.5 h-3.5 text-purple-600 flex-shrink-0" />
                          <span>{out}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
