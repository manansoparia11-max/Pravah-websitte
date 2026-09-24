import React, { useState } from 'react';
import { X, Check, MessageSquare } from 'lucide-react';

export default function ProjectModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);

  const [businessType, setBusinessType] = useState('Local Retail / Showroom');
  const [selectedNeeds, setSelectedNeeds] = useState(['Website & Identity', 'WhatsApp Automation']);
  const [formData, setFormData] = useState({
    businessName: '',
    founderName: '',
    phoneOrWa: '',
    city: 'Bengaluru',
    notes: ''
  });

  if (!isOpen) return null;

  const toggleNeed = (need) => {
    if (selectedNeeds.includes(need)) {
      setSelectedNeeds(selectedNeeds.filter((n) => n !== need));
    } else {
      setSelectedNeeds([...selectedNeeds, need]);
    }
  };

  const generateWhatsAppMessage = () => {
    const text = `Hi Pravah! I'd like to discuss a project:%0A%0A*Business:* ${formData.businessName || 'My Business'} (${businessType})%0A*Founder:* ${formData.founderName || 'Founder'}%0A*City:* ${formData.city}%0A*Needs:* ${selectedNeeds.join(', ')}%0A*Notes:* ${formData.notes || 'Looking forward to hearing from you.'}`;
    return `https://wa.me/918302569311?text=${text}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div className="relative w-full max-w-xl bg-white border border-neutral-200 rounded-3xl p-6 sm:p-10 text-left shadow-2xl my-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-neutral-100 text-neutral-500 hover:text-neutral-900 cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {submitted ? (
          <div className="py-8 text-center">
            <div className="w-14 h-14 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center mx-auto mb-4">
              <Check className="w-6 h-6" />
            </div>

            <h3 className="text-2xl font-bold text-neutral-950 mb-2">
              Thank you, {formData.founderName || 'Partner'}.
            </h3>

            <p className="text-sm text-neutral-600 max-w-md mx-auto mb-8 font-light">
              We received your project brief for <strong className="text-neutral-900">{formData.businessName || 'your business'}</strong>. We will review your context and reply within 24 hours.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={generateWhatsAppMessage()}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs tracking-wider uppercase transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Instant WhatsApp Handoff ↗</span>
              </a>

              <button
                onClick={onClose}
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-700 text-xs font-mono tracking-wider cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <div>
            <span className="text-xs font-mono text-purple-700 font-semibold tracking-wider uppercase block mb-1">
              START A PROJECT
            </span>

            <h3 className="text-2xl font-bold text-neutral-950 mb-2">
              Tell us about your business
            </h3>

            <p className="text-xs text-neutral-500 mb-6 font-light">
              We review every brief personally and respond with a written scope within 24 hours.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Category */}
              <div>
                <label className="text-xs font-semibold text-neutral-900 block mb-2">
                  01. YOUR BUSINESS CATEGORY
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {[
                    'Local Retail / Store',
                    'Café / Restaurant',
                    'Fine Jewellery / Luxury',
                    'Professional Services',
                    'Healthcare / Wellness',
                    'Growing Brand'
                  ].map((cat) => (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => setBusinessType(cat)}
                      className={`p-2.5 rounded-xl text-xs font-medium border text-left transition-all cursor-pointer ${
                        businessType === cat
                          ? 'border-purple-600 bg-purple-50 text-purple-950 font-semibold'
                          : 'border-neutral-200 text-neutral-600 hover:border-neutral-300'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Needs */}
              <div>
                <label className="text-xs font-semibold text-neutral-900 block mb-2">
                  02. WHAT DO YOU NEED HELP WITH?
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {[
                    'Website & Identity',
                    'Interactive 3D / AR',
                    'Interactive Web Tools',
                    'Local SEO & Google Maps',
                    'WhatsApp Automation',
                    'Full Growth System'
                  ].map((need) => {
                    const isSelected = selectedNeeds.includes(need);
                    return (
                      <button
                        key={need}
                        type="button"
                        onClick={() => toggleNeed(need)}
                        className={`p-2 rounded-xl text-xs font-medium border text-left transition-all flex items-center justify-between cursor-pointer ${
                          isSelected
                            ? 'border-purple-600 bg-purple-50 text-purple-950 font-semibold'
                            : 'border-neutral-200 text-neutral-600 hover:border-neutral-300'
                        }`}
                      >
                        <span className="truncate">{need}</span>
                        {isSelected && <Check className="w-3 h-3 text-purple-600 ml-1" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Details */}
              <div className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    required
                    placeholder="Business Name *"
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                    className="bg-neutral-50 border border-neutral-200 rounded-xl px-3.5 py-2.5 text-xs text-neutral-900 focus:outline-none focus:border-purple-600"
                  />
                  <input
                    type="text"
                    required
                    placeholder="Your Name *"
                    value={formData.founderName}
                    onChange={(e) => setFormData({ ...formData, founderName: e.target.value })}
                    className="bg-neutral-50 border border-neutral-200 rounded-xl px-3.5 py-2.5 text-xs text-neutral-900 focus:outline-none focus:border-purple-600"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    required
                    placeholder="WhatsApp / Phone Number *"
                    value={formData.phoneOrWa}
                    onChange={(e) => setFormData({ ...formData, phoneOrWa: e.target.value })}
                    className="bg-neutral-50 border border-neutral-200 rounded-xl px-3.5 py-2.5 text-xs text-neutral-900 focus:outline-none focus:border-purple-600"
                  />
                  <input
                    type="text"
                    placeholder="City (e.g. Bengaluru)"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="bg-neutral-50 border border-neutral-200 rounded-xl px-3.5 py-2.5 text-xs text-neutral-900 focus:outline-none focus:border-purple-600"
                  />
                </div>
              </div>

              {/* Submit Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="submit"
                  className="w-full sm:flex-1 py-3.5 rounded-xl bg-neutral-950 hover:bg-purple-700 text-white font-semibold text-xs tracking-wider uppercase transition-colors cursor-pointer"
                >
                  Submit Brief
                </button>

                <a
                  href={generateWhatsAppMessage()}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 text-emerald-800 font-semibold text-xs uppercase tracking-wider transition-colors"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-600" />
                  <span>Send on WhatsApp ↗</span>
                </a>
              </div>

            </form>
          </div>
        )}

      </div>
    </div>
  );
}
