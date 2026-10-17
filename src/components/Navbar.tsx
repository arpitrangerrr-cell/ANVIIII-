import React from 'react';
import { Phone, Calendar, Clock, MapPin } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface NavbarProps {
  onOpenBooking: () => void;
  onOpenContact: () => void;
  onOpenPriceList: () => void;
  onOpenReviews: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenBooking,
  onOpenContact,
  onOpenPriceList,
  onOpenReviews,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-[#152336]/90 backdrop-blur-md border-b border-white/5 transition-all">
      {/* Subtle Top Trust Bar */}
      <div className="hidden sm:block border-b border-white/5 bg-[#121e2e]/60 text-[11px] text-slate-300 py-1.5 px-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-sky-400" />
              <span>Trimurti Nagar, Nagpur, Maharashtra</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-emerald-400" />
              <span>Mon - Sun: 09:00 AM - 5:00 PM</span>
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-amber-400 font-medium">★ 5.0 Rating (5 Verified Reviews)</span>
            <span className="text-slate-400">·</span>
            <a
              href={`tel:${CLINIC_INFO.phone}`}
              className="text-white hover:text-sky-300 font-medium transition-colors"
            >
              {CLINIC_INFO.phoneFormatted}
            </a>
          </div>
        </div>
      </div>

      {/* Main Top Bar Contract */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between gap-8">
        {/* Brand Zone */}
        <a href="#home" className="flex items-center gap-2.5 text-white group shrink-0">
          <div className="w-8 h-8 rounded-lg bg-sky-500/20 border border-sky-400/30 flex items-center justify-center text-sky-300 font-bold group-hover:bg-sky-500/30 transition-colors">
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2C8 2 6 5 6 9c0 4 2 8 4 13h4c2-5 4-9 4-13 0-4-2-7-6-7z" />
              <path d="M9 12c1.5 1 4.5 1 6 0" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-base sm:text-lg font-bold tracking-tight text-white uppercase leading-none">
              Avni Dental
            </span>
            <span className="text-[10px] tracking-widest text-slate-400 uppercase font-medium mt-0.5">
              Clinic · Nagpur
            </span>
          </div>
        </a>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-[13px] font-medium text-slate-300">
          <a href="#home" className="hover:text-white transition-colors whitespace-nowrap">
            Home
          </a>
          <a href="#services" className="hover:text-white transition-colors whitespace-nowrap">
            Services
          </a>
          <a href="#clinic" className="hover:text-white transition-colors whitespace-nowrap">
            Our Clinic
          </a>
          <button
            onClick={onOpenPriceList}
            className="hover:text-white transition-colors whitespace-nowrap cursor-pointer"
          >
            Price list
          </button>
          <button
            onClick={onOpenReviews}
            className="hover:text-white transition-colors whitespace-nowrap cursor-pointer"
          >
            Reviews
          </button>
          <a href="#contact" className="hover:text-white transition-colors whitespace-nowrap">
            Contact
          </a>
        </nav>

        {/* Primary Action Button */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={`tel:${CLINIC_INFO.phone}`}
            className="hidden sm:inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/10 text-slate-200 hover:text-white hover:bg-white/15 transition-colors"
            title="Call Clinic Directly"
          >
            <Phone className="w-4 h-4" />
          </a>
          <button
            onClick={onOpenBooking}
            className="px-5 py-2 text-xs sm:text-sm font-semibold text-white bg-[#3b5e8c] hover:bg-[#466fa5] rounded-full transition-all duration-200 shadow-sm active:scale-95 whitespace-nowrap cursor-pointer flex items-center gap-2"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Get in touch</span>
          </button>
        </div>
      </div>
    </header>
  );
};
