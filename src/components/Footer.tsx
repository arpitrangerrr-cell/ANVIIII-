import React from 'react';
import { CLINIC_INFO } from '../data/clinicData';
import { Phone, MapPin, Clock } from 'lucide-react';

interface FooterProps {
  onOpenBooking: () => void;
  onOpenPriceList: () => void;
  onOpenReviews: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenBooking,
  onOpenPriceList,
  onOpenReviews,
}) => {
  return (
    <footer className="border-t border-white/10 bg-[#0f1b2b] text-slate-400 py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-white/5">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 text-white">
              <div className="w-7 h-7 rounded-lg bg-sky-500/20 border border-sky-400/30 flex items-center justify-center text-sky-300 font-bold">
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                >
                  <path d="M12 2C8 2 6 5 6 9c0 4 2 8 4 13h4c2-5 4-9 4-13 0-4-2-7-6-7z" />
                  <path d="M9 12c1.5 1 4.5 1 6 0" />
                </svg>
              </div>
              <span className="text-base font-bold tracking-tight uppercase text-white">
                Avni Dental Clinic
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-1 max-w-sm">
              Advanced Dental Treatments in Nagpur · Personalized Care & Radiant Smiles.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center gap-6 text-xs font-medium text-slate-300">
            <a href="#home" className="hover:text-white transition-colors">
              Home
            </a>
            <a href="#services" className="hover:text-white transition-colors">
              Services
            </a>
            <a href="#clinic" className="hover:text-white transition-colors">
              Our Clinic
            </a>
            <button
              onClick={onOpenPriceList}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Price List
            </button>
            <button
              onClick={onOpenReviews}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Patient Reviews
            </button>
            <a href="#contact" className="hover:text-white transition-colors">
              Contact
            </a>
          </div>
        </div>

        {/* Address & Direct Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-400">
          <div className="flex items-start gap-2.5">
            <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
            <div>
              <span className="text-slate-300 font-semibold block mb-0.5">Address</span>
              <span>{CLINIC_INFO.address}</span>
            </div>
          </div>

          <div className="flex items-start gap-2.5">
            <Clock className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <span className="text-slate-300 font-semibold block mb-0.5">Clinic Hours</span>
              <span>{CLINIC_INFO.hoursText}</span>
            </div>
          </div>

          <div className="flex items-start gap-2.5">
            <Phone className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
            <div>
              <span className="text-slate-300 font-semibold block mb-0.5">Direct Line</span>
              <a href={`tel:${CLINIC_INFO.phone}`} className="hover:text-sky-300 transition-colors">
                {CLINIC_INFO.phoneFormatted}
              </a>
            </div>
          </div>
        </div>

        {/* Informational Disclaimer from Original HTML */}
        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500 text-center sm:text-left">
          <p className="max-w-2xl leading-relaxed">
            {CLINIC_INFO.disclaimer}
          </p>
          <p className="shrink-0">
            © {new Date().getFullYear()} Avni Dental Clinic. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
