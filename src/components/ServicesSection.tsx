import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SERVICES, ServiceItem } from '../data/clinicData';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
  onMeetTeam: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectService,
  onMeetTeam,
}) => {
  const orthodontics = SERVICES.find((s) => s.id === 'orthodontics') || SERVICES[0];
  const implants = SERVICES.find((s) => s.id === 'implants') || SERVICES[1];
  const cleaning = SERVICES.find((s) => s.id === 'cleaning') || SERVICES[2];
  const pediatric = SERVICES.find((s) => s.id === 'pediatric') || SERVICES[3];

  return (
    <section id="services" className="py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Heading, description, and action */}
          <div className="lg:col-span-4 flex flex-col justify-start">
            <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-white mb-4">
              Services
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed mb-6">
              High-quality dental care for you and your family. Our expert team
              provides a wide range of services, ensuring comfort and personalized
              treatment.
            </p>
            <div>
              <button
                onClick={onMeetTeam}
                className="px-6 py-2.5 text-xs sm:text-sm font-semibold text-[#142337] bg-white hover:bg-slate-100 rounded-full transition-all active:scale-95 cursor-pointer shadow-sm"
              >
                Meet our team
              </button>
            </div>
          </div>

          {/* Right Column: Bento Grid matching template */}
          <div className="lg:col-span-8 flex flex-col gap-4">
            {/* Top Row: 2 Cards (Orthodontics, Dental Implants) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Card 1: Orthodontics */}
              <div
                onClick={() => onSelectService(orthodontics)}
                className="group relative h-48 sm:h-52 rounded-2xl overflow-hidden cursor-pointer shadow-lg border border-white/10 hover:border-sky-400/50 transition-all duration-300"
              >
                <img
                  src={orthodontics.image}
                  alt={orthodontics.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                  <span className="text-xs font-semibold text-white/90 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
                    Orthodontics
                  </span>
                  <div className="w-7 h-7 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-white group-hover:text-[#122033] transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Card 2: Dental Implants */}
              <div
                onClick={() => onSelectService(implants)}
                className="group relative h-48 sm:h-52 rounded-2xl overflow-hidden cursor-pointer shadow-lg border border-white/10 hover:border-sky-400/50 transition-all duration-300"
              >
                <img
                  src={implants.image}
                  alt={implants.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                  <span className="text-xs font-semibold text-white/90 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
                    Dental Implants
                  </span>
                  <div className="w-7 h-7 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-white group-hover:text-[#122033] transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Row: 3 Cards (Dental Cleaning, Accent Card, Pediatric Dentistry) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Card 3: Dental Cleaning */}
              <div
                onClick={() => onSelectService(cleaning)}
                className="group relative h-44 sm:h-48 rounded-2xl overflow-hidden cursor-pointer shadow-lg border border-white/10 hover:border-sky-400/50 transition-all duration-300"
              >
                <img
                  src={cleaning.image}
                  alt={cleaning.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                  <span className="text-xs font-semibold text-white/90 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/10 truncate">
                    Dental Cleaning
                  </span>
                  <div className="w-6 h-6 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-white group-hover:text-[#122033] transition-colors shrink-0">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>

              {/* Card 4: Accent Quote Card */}
              <div className="h-44 sm:h-48 rounded-2xl bg-[#3c5e85] p-5 flex items-center justify-center text-center shadow-lg border border-white/10 relative overflow-hidden group">
                <div className="absolute -top-8 -right-8 w-24 h-24 bg-white/5 rounded-full blur-xl group-hover:bg-white/10 transition-colors" />
                <p className="text-base sm:text-lg font-bold text-white tracking-tight leading-snug px-2">
                  You smile is<br />our priority
                </p>
              </div>

              {/* Card 5: Pediatric Dentistry */}
              <div
                onClick={() => onSelectService(pediatric)}
                className="group relative h-44 sm:h-48 rounded-2xl overflow-hidden cursor-pointer shadow-lg border border-white/10 hover:border-sky-400/50 transition-all duration-300"
              >
                <img
                  src={pediatric.image}
                  alt={pediatric.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                  <span className="text-xs font-semibold text-white/90 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/10 truncate">
                    Pediatric Dentistry
                  </span>
                  <div className="w-6 h-6 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-white group-hover:text-[#122033] transition-colors shrink-0">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
