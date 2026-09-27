import React, { useState } from 'react';
import { RotateCw, Calculator, Sparkles, Layers, CheckCircle2 } from 'lucide-react';

export default function InteractiveTechSection() {
  const [activeTab, setActiveTab] = useState('3d');
  const [gemColor, setGemColor] = useState('purple');
  const [rotAngle, setRotAngle] = useState(30);

  // Conversion Calculator State (Pure Business Logic)
  const [monthlyVisitors, setMonthlyVisitors] = useState(3500);
  const [currentConversion, setCurrentConversion] = useState(1.0);
  const [customerValue, setCustomerValue] = useState(4000);

  const currentEnquiries = Math.round(monthlyVisitors * (currentConversion / 100));
  const pravahProjectedEnquiries = Math.round(monthlyVisitors * ((currentConversion * 2.5) / 100));
  const pipelineLift = (pravahProjectedEnquiries - currentEnquiries) * customerValue;

  return (
    <section id="tech" className="relative py-28 sm:py-36 bg-[#FAFAF8] border-b border-neutral-200/70 overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 text-left">
          <span className="text-xs font-mono tracking-widest text-purple-700 uppercase font-semibold block mb-4">
            04 / INTERACTIVE TECHNOLOGY
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-neutral-950 leading-[1.1] mb-6">
            Technology should feel <br />
            <span className="font-editorial italic font-normal text-purple-700">
              effortless and alive.
            </span>
          </h2>
          <p className="text-base text-neutral-600 font-light">
            We don't build static brochures. We build interactive tools, 3D product experiences, and automated systems that make your business memorable.
          </p>
        </div>

        {/* Minimal Tab Switcher */}
        <div className="flex gap-2 mb-10 bg-white p-1.5 rounded-2xl border border-neutral-200/80 w-fit">
          {[
            { id: '3d', label: '3D & AR Product View', icon: RotateCw },
            { id: 'calc', label: 'Growth & ROI Calculator', icon: Calculator },
            { id: 'ops', label: 'Automated Operations', icon: Layers }
          ].map((tab) => {
            const TabIcon = tab.icon;
            const isSelected = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-neutral-900 text-white shadow-xs'
                    : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50'
                }`}
              >
                <TabIcon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab 1: 3D Visualizer */}
        {activeTab === '3d' && (
          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-neutral-200/80 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center text-left">
            <div className="lg:col-span-6">
              <span className="text-xs font-mono text-purple-700 font-bold uppercase tracking-wider block mb-2">
                Spatial 3D & WebAR
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-neutral-950 mb-3">
                Interactive Product Exploration
              </h3>
              <p className="text-neutral-600 font-light text-sm leading-relaxed mb-8">
                Eliminate hesitation for fine craft, jewellery, and high-value retail. Customers rotate, inspect materials, and view in their space before making an inquiry.
              </p>

              <div className="space-y-4">
                <div>
                  <span className="text-xs font-mono text-neutral-500 block mb-2">SELECT FINISH TONE:</span>
                  <div className="flex gap-2">
                    {[
                      { id: 'purple', label: 'Amethyst Violet', color: '#7C3AED' },
                      { id: 'gold', label: '18K Gold', color: '#D97706' },
                      { id: 'emerald', label: 'Emerald', color: '#059669' }
                    ].map((m) => (
                      <button
                        key={m.id}
                        onClick={() => setGemColor(m.id)}
                        className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-mono border transition-all cursor-pointer ${
                          gemColor === m.id ? 'border-purple-600 bg-purple-50 text-neutral-950' : 'border-neutral-200 text-neutral-500'
                        }`}
                      >
                        <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: m.color }} />
                        <span>{m.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono text-neutral-500 mb-1">
                    <span>ROTATION PERSPECTIVE</span>
                    <span>{rotAngle}°</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="360"
                    value={rotAngle}
                    onChange={(e) => setRotAngle(Number(e.target.value))}
                    className="w-full accent-purple-600 cursor-pointer"
                  />
                </div>
              </div>
            </div>

            {/* 3D Geometry Container */}
            <div className="lg:col-span-6 flex flex-col items-center justify-center p-12 rounded-2xl bg-neutral-50 border border-neutral-200/80 min-h-[320px]">
              <div 
                className="w-36 h-36 rounded-full border-8 shadow-xl relative flex items-center justify-center transition-all duration-300"
                style={{
                  transform: `rotateY(${rotAngle}deg) rotateX(${rotAngle * 0.2}deg)`,
                  borderColor: gemColor === 'gold' ? '#F59E0B' : gemColor === 'emerald' ? '#10B981' : '#7C3AED'
                }}
              >
                <div 
                  className="w-14 h-14 transform rotate-45 rounded-lg shadow-md flex items-center justify-center transition-colors duration-300"
                  style={{
                    backgroundColor: gemColor === 'gold' ? '#FDE68A' : gemColor === 'emerald' ? '#A7F3D0' : '#DDD6FE'
                  }}
                >
                  <Sparkles className="w-6 h-6 text-purple-700" />
                </div>
              </div>
              <p className="text-xs font-mono text-neutral-400 mt-6">
                Live interactive browser render. Zero app download required.
              </p>
            </div>
          </div>
        )}

        {/* Tab 2: Growth & ROI Calculator */}
        {activeTab === 'calc' && (
          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-neutral-200/80 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center text-left">
            <div className="lg:col-span-6">
              <span className="text-xs font-mono text-purple-700 font-bold uppercase tracking-wider block mb-2">
                Conversion Economics
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-neutral-950 mb-3">
                Simulate Your Growth Lift
              </h3>
              <p className="text-neutral-600 font-light text-sm leading-relaxed mb-6">
                Removing friction from mobile load times and replacing clunky interfaces with sub-second responsive experiences compounds customer inquiries immediately.
              </p>

              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-xs font-mono text-neutral-600 mb-1">
                    <span>MONTHLY WEBSITE VISITORS</span>
                    <span className="font-bold text-neutral-900">{monthlyVisitors.toLocaleString()}</span>
                  </div>
                  <input
                    type="range"
                    min="500"
                    max="20000"
                    step="500"
                    value={monthlyVisitors}
                    onChange={(e) => setMonthlyVisitors(Number(e.target.value))}
                    className="w-full accent-purple-600 cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono text-neutral-600 mb-1">
                    <span>CURRENT CONVERSION RATE</span>
                    <span className="font-bold text-neutral-900">{currentConversion}%</span>
                  </div>
                  <input
                    type="range"
                    min="0.5"
                    max="3.0"
                    step="0.1"
                    value={currentConversion}
                    onChange={(e) => setCurrentConversion(Number(e.target.value))}
                    className="w-full accent-purple-600 cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono text-neutral-600 mb-1">
                    <span>AVG VALUE PER CUSTOMER</span>
                    <span className="font-bold text-neutral-900">₹{customerValue.toLocaleString()}</span>
                  </div>
                  <input
                    type="range"
                    min="1000"
                    max="25000"
                    step="1000"
                    value={customerValue}
                    onChange={(e) => setCustomerValue(Number(e.target.value))}
                    className="w-full accent-purple-600 cursor-pointer"
                  />
                </div>
              </div>
            </div>

            {/* Calculations Output */}
            <div className="lg:col-span-6 p-8 rounded-2xl bg-neutral-50 border border-neutral-200/80 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest block mb-4">
                  ESTIMATED PIPELINE ACCELERATION
                </span>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="p-4 rounded-xl bg-white border border-neutral-200">
                    <span className="text-[10px] font-mono text-neutral-400 block mb-1">Current Baseline</span>
                    <p className="text-xl font-bold font-mono text-neutral-800">{currentEnquiries} leads/mo</p>
                  </div>
                  <div className="p-4 rounded-xl bg-purple-50 border border-purple-200">
                    <span className="text-[10px] font-mono text-purple-700 block mb-1">Pravah Optimized</span>
                    <p className="text-xl font-bold font-mono text-purple-950">{pravahProjectedEnquiries} leads/mo</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-neutral-900 text-white">
                  <span className="text-[10px] font-mono text-purple-300 uppercase tracking-wider block mb-1">
                    PROJECTED MONTHLY VALUE CREATION
                  </span>
                  <p className="text-3xl font-bold font-mono">+₹{pipelineLift.toLocaleString()}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Automated Operations */}
        {activeTab === 'ops' && (
          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-neutral-200/80 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center text-left">
            <div className="lg:col-span-6">
              <span className="text-xs font-mono text-purple-700 font-bold uppercase tracking-wider block mb-2">
                Unified Automation
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-neutral-950 mb-3">
                Automated Operational Flow
              </h3>
              <p className="text-neutral-600 font-light text-sm leading-relaxed mb-6">
                Zero manual bottlenecks. When visitors engage with your catalog, calculator, or booking flow, data synchronizes instantly across your internal operational tools.
              </p>

              <div className="space-y-2 text-xs text-neutral-600">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 flex-shrink-0" />
                  <span>Real-time data synchronization in &lt; 500ms</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 flex-shrink-0" />
                  <span>Automated notifications to internal dashboards & inventory</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 p-6 rounded-2xl bg-neutral-50 border border-neutral-200 max-w-[360px] mx-auto text-left space-y-3">
              <div className="p-3.5 rounded-xl bg-white border border-neutral-200 shadow-xs flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono text-neutral-400 uppercase block">Event Triggered</span>
                  <span className="text-xs font-semibold text-neutral-900">Custom Inquiry Logged</span>
                </div>
                <span className="text-[10px] font-mono text-purple-700 bg-purple-50 px-2 py-0.5 rounded-full border border-purple-100 font-semibold">
                  SYNCED
                </span>
              </div>
              <div className="p-3.5 rounded-xl bg-white border border-neutral-200 shadow-xs flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono text-neutral-400 uppercase block">Inventory System</span>
                  <span className="text-xs font-semibold text-neutral-900">Stock Availability Verified</span>
                </div>
                <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100 font-semibold">
                  ACTIVE
                </span>
              </div>
              <div className="p-3.5 rounded-xl bg-neutral-950 text-white shadow-xs flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono text-purple-300 uppercase block">Founder Dashboard</span>
                  <span className="text-xs font-medium text-white">Direct Notification Dispatched</span>
                </div>
                <span className="text-[10px] font-mono text-emerald-400 font-semibold">0.3s</span>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
