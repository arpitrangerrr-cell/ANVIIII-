import React from 'react';
import { X, Calendar, CheckCircle2, Shield } from 'lucide-react';
import { SERVICES, CLINIC_INFO } from '../data/clinicData';

interface PriceListModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBookAppointment: () => void;
}

export const PriceListModal: React.FC<PriceListModalProps> = ({
  isOpen,
  onClose,
  onBookAppointment,
}) => {
  if (!isOpen) return null;

  const additionalTreatments = [
    { name: 'Comprehensive Consultation & Digital Diagnostic Exam', price: '₹300 - ₹500', time: '20 mins' },
    { name: 'Tooth-Colored Composite Filling (Per Tooth)', price: '₹1,200 - ₹2,500', time: '30 mins' },
    { name: 'Full Mouth Digital X-Ray / RVG Intraoral Scan', price: '₹400 - ₹800', time: '15 mins' },
    { name: 'Wisdom Tooth Surgical Extraction', price: '₹3,000 - ₹6,500', time: '45 mins' },
    { name: 'Professional Teeth Whitening (In-Office Laser)', price: '₹7,000 - ₹12,000', time: '60 mins' },
    { name: 'Full Zirconia Premium Ceramic Crown', price: '₹6,000 - ₹14,000', time: '2 visits' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="bg-[#18283e] text-white w-full max-w-2xl rounded-3xl border border-white/10 shadow-2xl overflow-hidden relative max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-white/10 bg-[#142235] flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
              <span>Transparent Price List & Treatments</span>
            </h3>
            <p className="text-xs text-slate-300 mt-1">
              {CLINIC_INFO.name} · Trimurti Nagar, Nagpur
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-slate-300 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          <div className="p-4 rounded-2xl bg-sky-950/40 border border-sky-400/20 flex items-center gap-3 text-xs text-sky-200">
            <Shield className="w-5 h-5 text-sky-400 shrink-0" />
            <span>
              All treatments include pre-consultation diagnostics, sterilization protocol guarantees, and post-care guidelines. No hidden charges.
            </span>
          </div>

          {/* Primary Treatments */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
              Core Specializations
            </h4>
            <div className="divide-y divide-white/5 bg-[#142337] rounded-2xl border border-white/5 overflow-hidden">
              {SERVICES.map((s) => (
                <div key={s.id} className="p-4 flex items-center justify-between gap-4 hover:bg-white/5 transition-colors">
                  <div>
                    <h5 className="text-xs sm:text-sm font-bold text-white">{s.title}</h5>
                    <p className="text-[11px] text-slate-400 mt-0.5">{s.shortDesc}</p>
                    <span className="text-[10px] text-sky-300 font-medium">Est. Duration: {s.duration}</span>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="text-xs sm:text-sm font-bold text-white block">{s.priceRange}</span>
                    <span className="text-[10px] text-emerald-400">Standard Pricing</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Common Procedures */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
              Diagnostic & General Dental Procedures
            </h4>
            <div className="divide-y divide-white/5 bg-[#142337] rounded-2xl border border-white/5 overflow-hidden">
              {additionalTreatments.map((t, idx) => (
                <div key={idx} className="p-3.5 flex items-center justify-between gap-4 hover:bg-white/5 transition-colors">
                  <div>
                    <span className="text-xs font-medium text-slate-200 block">{t.name}</span>
                    <span className="text-[10px] text-slate-400">{t.time}</span>
                  </div>
                  <span className="text-xs font-bold text-sky-200 shrink-0">{t.price}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <button
            onClick={() => {
              onClose();
              onBookAppointment();
            }}
            className="w-full py-3 text-xs sm:text-sm font-semibold text-white bg-[#3b5e8c] hover:bg-[#4770a6] rounded-full transition-all text-center cursor-pointer flex items-center justify-center gap-2"
          >
            <Calendar className="w-4 h-4" />
            <span>Schedule A Consultation At Avni Dental</span>
          </button>
        </div>
      </div>
    </div>
  );
};
