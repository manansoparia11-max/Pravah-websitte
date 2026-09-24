import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function ProcessSection() {
  const steps = [
    {
      num: "01",
      title: "Understand",
      desc: "We understand your business economics, customer decision journey, and current digital bottlenecks."
    },
    {
      num: "02",
      title: "Focus",
      desc: "We isolate the single highest-leverage growth priority and eliminate the secondary distractions."
    },
    {
      num: "03",
      title: "Build",
      desc: "We engineer the website, campaign, interactive technology, and WhatsApp pipeline with craft and speed."
    },
    {
      num: "04",
      title: "Improve",
      desc: "We measure real customer actions, eliminate drop-offs, and improve the conversion system continuously."
    }
  ];

  return (
    <section id="process" className="relative py-28 sm:py-36 bg-white border-b border-neutral-200/70">
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-20 text-left">
          <span className="text-xs font-mono tracking-widest text-purple-700 uppercase font-semibold block mb-4">
            03 / OUR PROCESS
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-neutral-950 leading-[1.1] mb-6">
            Structure first.<br />
            <span className="font-editorial italic font-normal text-purple-700">
              Then creative freedom.
            </span>
          </h2>
          <p className="text-base text-neutral-600 font-light">
            Direct collaboration, fewer layers, and a clear reason behind every decision.
          </p>
        </div>

        {/* 4 Process Cards - Generous Whitespace */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((st) => (
            <div
              key={st.num}
              className="p-8 rounded-3xl bg-neutral-50/60 border border-neutral-200/80 hover:border-purple-600/60 hover:bg-white transition-all duration-300 hover:shadow-md flex flex-col justify-between text-left"
            >
              <div>
                <span className="text-4xl font-mono font-bold text-purple-700 block mb-8">
                  {st.num}
                </span>

                <h3 className="text-2xl font-bold text-neutral-950 mb-3">
                  {st.title}
                </h3>

                <p className="text-sm text-neutral-600 font-light leading-relaxed">
                  {st.desc}
                </p>
              </div>

              <div className="pt-8 mt-8 border-t border-neutral-200/60 flex items-center justify-between text-xs font-mono text-neutral-400">
                <span>STAGE {st.num}</span>
                <span className="text-purple-600 font-bold">↗</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
