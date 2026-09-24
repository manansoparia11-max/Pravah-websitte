import React, { useState } from 'react';
import { Globe, Palette, Cpu, TrendingUp, MessageSquare, Zap, ArrowUpRight, Check } from 'lucide-react';

export default function CapabilitiesSection({ onOpenProjectModal }) {
  const [selectedCap, setSelectedCap] = useState(null);

  const capabilities = [
    {
      num: "01",
      title: "Digital Presence",
      sub: "Websites · Digital Identity · Google Presence",
      desc: "Fast, bespoke websites and an authoritative digital identity that builds instant trust.",
      problem: "Slow, dated templates that don't reflect your actual standard of quality.",
      creates: ["Sub-second responsive website", "Refined typography & visual identity", "Google Business Profile optimization"]
    },
    {
      num: "02",
      title: "Creative",
      sub: "Social Content · Campaigns · Creative Direction",
      desc: "Storytelling and visual campaigns designed to earn attention and stay memorable.",
      problem: "Generic social posting that produces zero brand equity or customer inquiries.",
      creates: ["Strategic campaign creative", "High-retention reel & video frameworks", "Omnichannel visual consistency"]
    },
    {
      num: "03",
      title: "Interactive",
      sub: "3D Visualizers · Web Apps · Dynamic Experiences",
      desc: "Modern digital experiences—including 3D product visualizers and interactive tools.",
      problem: "Passive text-heavy websites where customers cannot experience products dynamically.",
      creates: ["Embeddable 3D/AR product viewers", "Custom interactive business calculators", "Self-guided dynamic customer journeys"]
    },
    {
      num: "04",
      title: "Growth",
      sub: "SEO · Local Visibility · Digital Campaigns",
      desc: "Targeted search optimization and local visibility that attract ready-to-buy customers.",
      problem: "Burning marketing budgets on broad audiences with zero commercial intent.",
      creates: ["Top-3 Local Google Map pack rankings", "High-intent transactional SEO", "Laser-focused local ad campaigns"]
    },
    {
      num: "05",
      title: "Conversion",
      sub: "Landing Pages · WhatsApp · Enquiry Systems",
      desc: "Zero-friction customer handoffs—turning web visitors directly into WhatsApp chats and calls.",
      problem: "Complex contact forms that get abandoned, letting warm leads slip away.",
      creates: ["High-conversion landing pages", "1-tap WhatsApp business handoff", "Automated instant lead notification"]
    },
    {
      num: "06",
      title: "Innovation",
      sub: "Automation · Custom Tools · System Solutions",
      desc: "Custom lightweight tools and automated workflows that streamline your business.",
      problem: "Repetitive manual tasks and messy spreadsheets slowing down operations.",
      creates: ["Custom client intake portals", "Automated lead dispatch & CRM sync", "Real-time performance dashboards"]
    }
  ];

  return (
    <section id="capabilities" className="relative py-28 sm:py-36 bg-white border-b border-neutral-200/70">
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8 text-left">
          <div className="max-w-2xl">
            <span className="text-xs font-mono tracking-widest text-purple-700 uppercase font-semibold block mb-4">
              02 / WHAT PRAVAH DOES
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-neutral-950 leading-[1.1]">
              What would <br />
              <span className="font-editorial italic font-normal text-purple-700">
                Pravah do?
              </span>
            </h2>
          </div>
          <p className="text-base text-neutral-600 max-w-md font-light">
            We assemble the exact strategy, creative and technology required to move your business forward.
          </p>
        </div>

        {/* 6 Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((cap) => (
            <div
              key={cap.num}
              className="group p-8 rounded-3xl bg-neutral-50/60 border border-neutral-200/80 hover:border-purple-600/60 hover:bg-white transition-all duration-300 hover:shadow-lg flex flex-col justify-between text-left"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono font-bold text-purple-700 bg-purple-50 px-3 py-1 rounded-full border border-purple-100">
                    {cap.num}
                  </span>
                  <span className="text-[11px] font-mono text-neutral-400">
                    CAPABILITY
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-neutral-950 mb-2 group-hover:text-purple-700 transition-colors">
                  {cap.title}
                </h3>

                <p className="text-xs font-mono text-purple-800/80 mb-4 font-medium">
                  {cap.sub}
                </p>

                <p className="text-sm text-neutral-600 font-light leading-relaxed mb-6">
                  {cap.desc}
                </p>

                {/* Problem & Solution Mini */}
                <div className="pt-4 border-t border-neutral-200/60 space-y-3">
                  <div className="text-xs">
                    <span className="font-semibold text-neutral-900 block mb-0.5">Problem it solves:</span>
                    <span className="text-neutral-500 font-light">{cap.problem}</span>
                  </div>

                  <div className="text-xs">
                    <span className="font-semibold text-neutral-900 block mb-1.5">What Pravah creates:</span>
                    <ul className="space-y-1">
                      {cap.creates.map((c, i) => (
                        <li key={i} className="flex items-center gap-2 text-neutral-600">
                          <Check className="w-3 h-3 text-purple-600 flex-shrink-0" />
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
