import React from 'react';
import { Cpu, UserCheck } from 'lucide-react';

interface ClinicSectionProps {
  onMeetTeam: () => void;
}

export const ClinicSection: React.FC<ClinicSectionProps> = ({ onMeetTeam }) => {
  return (
    <section id="clinic" className="py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left Column: Heading, description, and 2 feature cards */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-white mb-4">
                Our Clinic
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Modern treatments tailored to your unique needs ensure a
                comfortable, satisfying dental experience.
              </p>
            </div>

            <div className="space-y-4">
              {/* Feature 1: Innovative Equipment */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#1c2e44]/60 border border-white/10 hover:border-white/20 transition-colors">
                <div className="flex items-center gap-2.5 mb-2 text-sky-400">
                  <div className="w-6 h-6 rounded-lg bg-sky-500/10 flex items-center justify-center">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <h3 className="text-xs sm:text-sm font-bold text-white tracking-wide">
                    Innovative Equipment
                  </h3>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  We use cutting-edge technology for diagnosis and treatment,
                  ensuring a high standard of medical care.
                </p>
              </div>

              {/* Feature 2: Personalized Approach */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#1c2e44]/60 border border-white/10 hover:border-white/20 transition-colors">
                <div className="flex items-center gap-2.5 mb-2 text-sky-400">
                  <div className="w-6 h-6 rounded-lg bg-sky-500/10 flex items-center justify-center">
                    <UserCheck className="w-4 h-4" />
                  </div>
                  <h3 className="text-xs sm:text-sm font-bold text-white tracking-wide">
                    Personalized Approach
                  </h3>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  We Develop Customized Treatment And Care Plans, Fully Adapted To
                  The Needs Of Each Patient.
                </p>
              </div>
            </div>
          </div>

          {/* Center Column: Large Clinic Operatory Photo */}
          <div className="lg:col-span-5 h-[340px] sm:h-[400px] lg:h-auto rounded-3xl overflow-hidden shadow-xl border border-white/10 group relative">
            <img
              src="/src/assets/images/clinic_modern_operatory_1792217537156.jpg"
              alt="Avni Dental modern operating room"
              className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-700"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Right Column: Expert Care card + Doctor Portrait */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            {/* Top Card: Expert Care (White card matching template) */}
            <div className="p-5 sm:p-6 rounded-2xl bg-white text-[#122033] shadow-lg flex flex-col justify-between">
              <div>
                <h3 className="text-sm sm:text-base font-bold text-[#0f1d2e] tracking-tight mb-2">
                  Expert Care
                </h3>
                <p className="text-xs text-[#526377] leading-relaxed mb-4">
                  Our dedicated doctors continuously enhance their expertise to
                  bring you the highest standard of dental services.
                </p>
              </div>
              <button
                onClick={onMeetTeam}
                className="self-start px-4 py-1.5 text-xs font-semibold text-[#122033] bg-[#f0f3f6] hover:bg-[#e2e7ec] rounded-full transition-colors cursor-pointer"
              >
                Meet our team
              </button>
            </div>

            {/* Bottom Card: Doctor Portrait */}
            <div className="h-44 sm:h-52 rounded-2xl overflow-hidden shadow-lg border border-white/10 group relative">
              <img
                src="/src/assets/images/dentist_doctor_portrait_1792217537428.jpg"
                alt="Expert Dentist at Avni Dental Clinic"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-2.5 left-3 text-[11px] font-semibold text-white/90">
                Dr. Specialist · Avni Dental
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
