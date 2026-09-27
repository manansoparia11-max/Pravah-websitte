import React from 'react';
import { Users, MousePointerClick, Sparkles, TrendingUp, CheckCircle, MapPin } from 'lucide-react';

export default function ResultsSection() {
  const metrics = [
    {
      num: "01",
      name: "Reach",
      icon: Users,
      detail: "High-intent search impressions across your specific city catchment area."
    },
    {
      num: "02",
      name: "Website visits",
      icon: MousePointerClick,
      detail: "Sub-second loading sessions with zero bounce from impatient mobile users."
    },
    {
      num: "03",
      name: "Interactions",
      icon: Sparkles,
      detail: "Time spent exploring 3D products, interactive tools, and catalog navigations."
    },
    {
      num: "04",
      name: "Enquiries",
      icon: TrendingUp,
      detail: "Qualified business inquiries, consultation requests, and confirmed customer bookings."
    },
    {
      num: "05",
      name: "Conversions",
      icon: CheckCircle,
      detail: "Confirmed customer reservations, deposits, and closed commercial transactions."
    },
    {
      num: "06",
      name: "Customer actions",
      icon: MapPin,
      detail: "Directions requested on Google Maps, in-store walk-ins, and verified 5-star reviews."
    }
  ];

  return (
    <section id="results" className="relative py-28 sm:py-36 bg-[#FAFAF8] border-b border-neutral-200/70">
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-20 text-left">
          <span className="text-xs font-mono tracking-widest text-purple-700 uppercase font-semibold block mb-4">
            06 / RESULTS & MEASUREMENT
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-neutral-950 leading-[1.1] mb-6">
            Attractive technology <br />
            <span className="font-editorial italic font-normal text-purple-700">
              must move the business.
            </span>
          </h2>
          <p className="text-base text-neutral-600 font-light">
            We don't design for vanity metrics. Every touchpoint we create is engineered to influence one of six concrete commercial levers.
          </p>
        </div>

        {/* 6 Metrics Grid - Spacious & Clean */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {metrics.map((m) => {
            const MIcon = m.icon;
            return (
              <div
                key={m.num}
                className="p-8 rounded-3xl bg-white border border-neutral-200/80 hover:border-purple-600/60 transition-all duration-300 hover:shadow-md flex flex-col justify-between text-left"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono font-bold text-purple-700 bg-purple-50 px-3 py-1 rounded-full border border-purple-100">
                      {m.num}
                    </span>
                    <MIcon className="w-5 h-5 text-neutral-400" />
                  </div>

                  <h3 className="text-xl font-bold text-neutral-950 mb-2">
                    {m.name}
                  </h3>

                  <p className="text-sm text-neutral-600 font-light leading-relaxed">
                    {m.detail}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
