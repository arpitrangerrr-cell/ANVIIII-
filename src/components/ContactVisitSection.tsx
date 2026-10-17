import React, { useState } from 'react';
import { MapPin, Clock, Phone, Calendar, Copy, Check, Navigation, Star, ShieldCheck } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface ContactVisitSectionProps {
  onScheduleClick: () => void;
}

export const ContactVisitSection: React.FC<ContactVisitSectionProps> = ({
  onScheduleClick,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(CLINIC_INFO.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    'Avni Dental Clinic Trimurti Nagar Nagpur Maharashtra 440022'
  )}`;

  return (
    <section id="contact" className="py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="bg-[#192b42] rounded-3xl p-6 sm:p-10 border border-white/10 shadow-2xl">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 border-b border-white/10">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-400 mb-2">
                <ShieldCheck className="w-4 h-4" />
                <span>Verified Dental Practice</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-white">
                Contact & Visit Information
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
                {CLINIC_INFO.overview}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={onScheduleClick}
                className="px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#3b5e8c] hover:bg-[#4770a6] rounded-full transition-all shadow active:scale-95 cursor-pointer flex items-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Appointment</span>
              </button>
            </div>
          </div>

          {/* Info Grid directly matching provided HTML */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
            {/* Reviews Block */}
            <div className="p-5 rounded-2xl bg-[#142337]/70 border border-white/5 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold tracking-wider text-slate-400 uppercase">
                  Patient Reviews
                </span>
                <div className="flex items-center gap-1.5 mt-2 text-amber-400 font-bold text-lg">
                  <Star className="w-5 h-5 fill-current" />
                  <span>5.0 / 5</span>
                </div>
                <p className="text-xs text-slate-300 mt-1">
                  Based on 5 verified patient reviews
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/5 text-[11px] text-emerald-400 font-medium">
                100% Satisfaction Rate
              </div>
            </div>

            {/* Address Block */}
            <div className="p-5 rounded-2xl bg-[#142337]/70 border border-white/5 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold tracking-wider text-slate-400 uppercase flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-sky-400" />
                  <span>Clinic Address</span>
                </span>
                <p className="text-xs text-slate-200 mt-2 leading-relaxed font-normal">
                  {CLINIC_INFO.address}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-3">
                <button
                  onClick={handleCopyAddress}
                  className="text-[11px] text-slate-300 hover:text-white flex items-center gap-1 font-medium transition-colors cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
                <span className="text-slate-600">·</span>
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] text-sky-300 hover:text-sky-200 flex items-center gap-1 font-medium transition-colors"
                >
                  <Navigation className="w-3 h-3" />
                  <span>Directions</span>
                </a>
              </div>
            </div>

            {/* Hours Block */}
            <div className="p-5 rounded-2xl bg-[#142337]/70 border border-white/5 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold tracking-wider text-slate-400 uppercase flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Opening Hours</span>
                </span>
                <p className="text-xs text-white font-semibold mt-2">
                  Monday - Sunday
                </p>
                <p className="text-xs text-slate-300">
                  9:00 AM - 5:00 PM
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="text-[11px] text-emerald-400 font-bold uppercase tracking-wide">
                  Current Status: Open
                </span>
              </div>
            </div>

            {/* Direct Phone & Planning */}
            <div className="p-5 rounded-2xl bg-[#142337]/70 border border-white/5 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold tracking-wider text-slate-400 uppercase flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-sky-400" />
                  <span>Phone & Planning</span>
                </span>
                <a
                  href={`tel:${CLINIC_INFO.phone}`}
                  className="block text-sm font-bold text-white hover:text-sky-300 transition-colors mt-2"
                >
                  {CLINIC_INFO.phoneFormatted}
                </a>
                <p className="text-[11px] text-slate-300 mt-2 leading-relaxed">
                  {CLINIC_INFO.appointmentNote}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/5">
                <a
                  href={`tel:${CLINIC_INFO.phone}`}
                  className="inline-flex items-center gap-1.5 text-xs text-sky-300 hover:text-sky-200 font-semibold"
                >
                  <span>Click to Call</span>
                  <Navigation className="w-3 h-3 rotate-45" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
