import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function ProblemSection() {
  const problems = [
    {
      num: "01",
      title: "A website that doesn't convert",
      detail: "Traffic arrives, but leaves in seconds without taking any action."
    },
    {
      num: "02",
      title: "Social media without strategy",
      detail: "Posting content regularly that produces vanity likes, but zero real inquiries."
    },
    {
      num: "03",
      title: "Disconnected digital tools",
      detail: "Scattered software and apps where customer leads get lost in between."
    },
    {
      num: "04",
      title: "Poor online visibility",
      detail: "Invisible on Google search and map packs when local buyers are ready to purchase."
    },
    {
      num: "05",
      title: "Technology that doesn't help customers",
      detail: "Clunky forms and slow mobile pages that create friction instead of ease."
    }
  ];

  return (
    <section id="problem" className="relative py-28 sm:py-36 bg-[#FAFAF8] border-b border-neutral-200/70">
      
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-20 text-left">
          <span className="text-xs font-mono tracking-widest text-purple-700 uppercase font-semibold block mb-4">
            01 / COMMON BOTTLENECKS
          </span>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-neutral-950 leading-[1.1] mb-6">
            Problems your business <br />
            <span className="font-editorial italic font-normal text-purple-700">
              might be facing.
            </span>
          </h2>

          <p className="text-lg text-neutral-600 font-light leading-relaxed">
            Your digital presence should work as one system. Most businesses struggle not from a lack of effort, but from disconnected tools and touchpoints that leak attention.
          </p>
        </div>

        {/* 5 Problems - Spacious Minimalist List */}
        <div className="space-y-4">
          {problems.map((prob) => (
            <div
              key={prob.num}
              className="group p-6 sm:p-8 rounded-2xl bg-white border border-neutral-200/80 hover:border-purple-600/60 transition-all duration-300 hover:shadow-md flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-left"
            >
              <div className="flex items-start sm:items-center gap-6">
                <span className="text-xs font-mono font-bold text-purple-600 bg-purple-50 px-3 py-1.5 rounded-full">
                  {prob.num}
                </span>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-neutral-900 group-hover:text-purple-700 transition-colors">
                    {prob.title}
                  </h3>
                  <p className="text-sm text-neutral-500 font-light mt-1">
                    {prob.detail}
                  </p>
                </div>
              </div>

              <span className="text-xs font-mono text-purple-600 hidden sm:block opacity-0 group-hover:opacity-100 transition-opacity">
                RESOLVED BY PRAVAH →
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
