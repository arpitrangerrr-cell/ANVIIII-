import React, { useState } from 'react';
import { X, Calendar, Clock, CheckCircle2, Phone, User, ArrowRight, Loader2 } from 'lucide-react';
import { CLINIC_INFO, SERVICES, ServiceItem } from '../data/clinicData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: ServiceItem | null;
}

// Paste your Make.com webhook URL here (or set via VITE_BOOKING_WEBHOOK_URL env variable)
const WEBHOOK_URL = import.meta.env.VITE_BOOKING_WEBHOOK_URL || '';

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preselectedService,
}) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedServiceId, setSelectedServiceId] = useState(
    preselectedService ? preselectedService.id : 'cleaning'
  );
  const [date, setDate] = useState(() => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  });
  const [timeSlot, setTimeSlot] = useState('10:00 AM');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  if (!isOpen) return null;

  const timeSlots = [
    '09:30 AM',
    '10:30 AM',
    '11:30 AM',
    '01:00 PM',
    '02:30 PM',
    '03:30 PM',
    '04:30 PM',
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const ref = `AVN-${Math.floor(100000 + Math.random() * 900000)}`;
    const activeService = SERVICES.find((s) => s.id === selectedServiceId) || SERVICES[0];

    const payload = {
      bookingRef: ref,
      patientName: fullName,
      phone: phone,
      service: activeService.title,
      category: activeService.category,
      date: date,
      timeSlot: timeSlot,
      notes: notes || 'None',
      clinic: CLINIC_INFO.name,
      submittedAt: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
    };

    try {
      if (WEBHOOK_URL) {
        await fetch(WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
      }
    } catch (err) {
      // Fail silently — booking confirmation is still shown to patient
      console.error('Webhook notification failed:', err);
    } finally {
      setBookingRef(ref);
      setIsSubmitted(true);
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFullName('');
    setPhone('');
    setNotes('');
    onClose();
  };

  const activeService = SERVICES.find((s) => s.id === selectedServiceId) || SERVICES[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fade-in">
      <div className="bg-[#18283e] text-white w-full max-w-lg rounded-3xl border border-white/10 shadow-2xl overflow-hidden relative">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10 bg-[#142235]">
          <div>
            <h3 className="text-lg font-bold tracking-tight text-white flex items-center gap-2">
              <Calendar className="w-5 h-5 text-sky-400" />
              <span>Schedule Your Visit</span>
            </h3>
            <p className="text-xs text-slate-300 mt-0.5">
              Avni Dental Clinic · Trimurti Nagar, Nagpur
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-slate-300 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6">
          {isSubmitted ? (
            <div className="text-center py-6">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4 border border-emerald-500/30">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">
                Appointment Requested!
              </h4>
              <p className="text-xs text-slate-300 max-w-xs mx-auto mb-5 leading-relaxed">
                Thank you, <span className="font-semibold text-white">{fullName}</span>.
                We have registered your appointment for{' '}
                <span className="font-semibold text-sky-300">{activeService.title}</span> on{' '}
                <span className="font-semibold text-white">{date}</span> at{' '}
                <span className="font-semibold text-white">{timeSlot}</span>.
              </p>

              <div className="p-4 rounded-2xl bg-[#131f30] border border-white/5 text-left mb-6 space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-slate-400">Booking Reference:</span>
                  <span className="font-mono font-bold text-amber-300">{bookingRef}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Clinic Contact:</span>
                  <a href={`tel:${CLINIC_INFO.phone}`} className="text-sky-300 hover:underline">
                    {CLINIC_INFO.phoneFormatted}
                  </a>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Location:</span>
                  <span className="text-slate-200">Trimurti Nagar, Nagpur</span>
                </div>
              </div>

              <button
                onClick={handleReset}
                className="w-full py-3 text-xs sm:text-sm font-semibold text-white bg-[#3b5e8c] hover:bg-[#466fa5] rounded-full transition-all cursor-pointer"
              >
                Close & Return
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Service Selection */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wider">
                  Select Treatment
                </label>
                <select
                  value={selectedServiceId}
                  onChange={(e) => setSelectedServiceId(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#121f31] border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-sky-400 transition-colors"
                  required
                >
                  {SERVICES.map((s) => (
                    <option key={s.id} value={s.id} className="bg-[#121f31] text-white">
                      {s.title} ({s.category})
                    </option>
                  ))}
                </select>
              </div>

              {/* Patient Name & Phone Number */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wider">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-[#121f31] border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-sky-400 transition-colors placeholder:text-slate-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wider">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-[#121f31] border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-sky-400 transition-colors placeholder:text-slate-500"
                    />
                  </div>
                </div>
              </div>

              {/* Date & Time Slot */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wider">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl bg-[#121f31] border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-sky-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wider">
                    Time Slot (09:00 AM - 5:00 PM)
                  </label>
                  <select
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl bg-[#121f31] border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-sky-400 transition-colors"
                  >
                    {timeSlots.map((ts) => (
                      <option key={ts} value={ts} className="bg-[#121f31] text-white">
                        {ts}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Note / Symptom */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wider">
                  Notes or Symptoms (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Tell us about your dental concern, toothache, or consultation request..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-[#121f31] border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-sky-400 transition-colors placeholder:text-slate-500 resize-none"
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 text-xs sm:text-sm font-semibold text-white bg-[#3b5e8c] hover:bg-[#466fa5] disabled:opacity-60 disabled:cursor-not-allowed rounded-full transition-all shadow-md active:scale-98 cursor-pointer flex items-center justify-center gap-2 mt-4"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Confirm Appointment</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
