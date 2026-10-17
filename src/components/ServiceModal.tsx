import React from 'react';
import { X, Check, Clock, Tag, Calendar, ArrowRight } from 'lucide-react';
import { ServiceItem } from '../data/clinicData';

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onBookService: (service: ServiceItem) => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({
  service,
  onClose,
  onBookService,
}) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="bg-[#18283e] text-white w-full max-w-xl rounded-3xl border border-white/10 shadow-2xl overflow-hidden relative max-h-[90vh] flex flex-col">
        {/* Modal Image Header */}
        <div className="relative h-56 sm:h-64 w-full bg-slate-900 shrink-0">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover object-center"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#18283e] via-black/30 to-transparent" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-colors cursor-pointer border border-white/20"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Badge & Title */}
          <div className="absolute bottom-4 left-6 right-6">
            <span className="text-[11px] font-bold uppercase tracking-wider text-sky-300 bg-sky-950/70 border border-sky-400/30 px-2.5 py-1 rounded-md">
              {service.category}
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1.5 tracking-tight">
              {service.title}
            </h3>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
            {service.fullDesc}
          </p>

          {/* Key Specs */}
          <div className="grid grid-cols-2 gap-3 p-4 rounded-2xl bg-[#121f31] border border-white/5 text-xs">
            <div className="flex items-center gap-2">
              <Tag className="w-4 h-4 text-sky-400 shrink-0" />
              <div>
                <span className="text-slate-400 block text-[10px] uppercase font-bold">Estimated Cost</span>
                <span className="font-semibold text-white">{service.priceRange}</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
              <div>
                <span className="text-slate-400 block text-[10px] uppercase font-bold">Typical Duration</span>
                <span className="font-semibold text-white">{service.duration}</span>
              </div>
            </div>
          </div>

          {/* Key Benefits */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-2.5">
              Key Procedure Highlights
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {service.keyBenefits.map((benefit, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-slate-200">
                  <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <Check className="w-2.5 h-2.5" />
                  </div>
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-2 flex items-center gap-3">
            <button
              onClick={() => onBookService(service)}
              className="flex-1 py-3 px-5 text-xs sm:text-sm font-semibold text-white bg-[#3b5e8c] hover:bg-[#4770a6] rounded-full transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer active:scale-98"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment for {service.title}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
