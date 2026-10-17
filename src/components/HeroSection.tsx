import React from 'react';
import { CLINIC_INFO } from '../data/clinicData';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import heroSmileImg from '../assets/images/hero_smile_portrait_1792217533812.jpg';

interface HeroSectionProps {
  onScheduleClick: () => void;
  onExploreServices: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onScheduleClick,
  onExploreServices,
}) => {
  return (
    <section id="home" className="pt-4 pb-12 sm:pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Main Hero Card Matching Template */}
        <div className="bg-[#f7f8fa] text-[#121f31] rounded-[28px] sm:rounded-[36px] overflow-hidden shadow-2xl border border-white/20">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch min-h-[500px]">
            {/* Left Content Column */}
            <div className="lg:col-span-6 p-8 sm:p-12 lg:p-14 flex flex-col justify-between">
              <div>
                {/* Subtle Clinic Tag */}
                <div className="inline-flex items-center gap-2 mb-6 text-xs font-semibold tracking-wider text-[#436485] uppercase">
                  <span>Avni Dental Care</span>
                  <span>·</span>
                  <span>Nagpur</span>
                  <span className="flex items-center text-emerald-600 font-bold ml-1">
                    <CheckCircle2 className="w-3.5 h-3.5 mr-1" /> Open Today
                  </span>
                </div>

                {/* Primary Headline */}
                <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold uppercase tracking-tight text-[#0f1b2b] leading-[1.08] mb-6">
                  Your Health<br />
                  Your Smile
                </h1>

                {/* Description */}
                <p className="text-sm sm:text-base text-[#4d5c6f] max-w-md leading-relaxed mb-8">
                  Get the best care for your teeth with our expert team. We ensure
                  your smile stays healthy and beautiful with advanced, painless
                  dental treatments.
                </p>

                {/* Call to action button */}
                <div className="flex flex-wrap items-center gap-3">
                  <button
                    onClick={onScheduleClick}
                    className="px-7 py-3 text-xs sm:text-sm font-semibold tracking-wide text-white bg-[#122033] hover:bg-[#1f324d] rounded-full transition-all shadow-md active:scale-95 cursor-pointer"
                  >
                    Schedule now
                  </button>
                  <button
                    onClick={onExploreServices}
                    className="px-5 py-3 text-xs sm:text-sm font-medium text-[#2d4057] hover:text-[#0f1b2b] hover:bg-black/5 rounded-full transition-colors flex items-center gap-1 cursor-pointer"
                  >
                    <span>View treatments</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Opening Hours Block from HTML Data */}
              <div className="mt-10 pt-6 border-t border-[#e2e7ee]">
                <p className="text-xs font-semibold text-[#182a3e] uppercase tracking-wider mb-1">
                  Opening hours:
                </p>
                <p className="text-xs sm:text-sm text-[#4d5c6f] font-medium">
                  Monday - Sunday: 09:00 AM - 5:00 PM
                </p>
                <p className="text-[11px] text-[#78889b] mt-0.5">
                  Appointments recommended before visiting · Trimurti Nagar, Nagpur
                </p>
              </div>
            </div>

            {/* Right Image Column */}
            <div className="lg:col-span-6 relative min-h-[340px] sm:min-h-[420px] lg:min-h-full bg-slate-100 overflow-hidden flex items-center justify-center">
              <img
                src={heroSmileImg}
                alt="Confident healthy patient smile"
                className="w-full h-full object-cover object-center select-none hover:scale-102 transition-transform duration-700"
                loading="eager"
                referrerPolicy="no-referrer"
              />
              {/* Subtle gradient vignette blend */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
              {/* Floating verified rating pill */}
              <div className="absolute bottom-5 right-5 sm:bottom-7 sm:right-7 bg-white/95 backdrop-blur-md px-4 py-2 rounded-2xl shadow-lg border border-white/40 flex items-center gap-2 text-xs font-bold text-slate-800">
                <span className="text-amber-500 text-sm">★★★★★</span>
                <span>5.0 / 5.0 Rating</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
