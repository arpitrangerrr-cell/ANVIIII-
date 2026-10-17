import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { REVIEWS } from '../data/clinicData';

interface FeedbackSectionProps {
  onSeeAllReviews: () => void;
}

export const FeedbackSection: React.FC<FeedbackSectionProps> = ({
  onSeeAllReviews,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentReview = REVIEWS[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % REVIEWS.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);
  };

  return (
    <section id="reviews" className="py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Heading, description, and button */}
          <div className="lg:col-span-5 flex flex-col justify-start">
            <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-white mb-4">
              Our Patients' Feedback
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed mb-6">
              Modern treatments tailored to your unique needs ensure a comfortable,
              satisfying dental experience.
            </p>
            <div>
              <button
                onClick={onSeeAllReviews}
                className="px-6 py-2.5 text-xs sm:text-sm font-semibold text-white/90 hover:text-white bg-transparent border border-white/30 hover:border-white/60 rounded-full transition-all active:scale-95 cursor-pointer"
              >
                See all reviews
              </button>
            </div>
          </div>

          {/* Right Column: Slate Blue Review Card matching template */}
          <div className="lg:col-span-7">
            <div className="relative bg-[#36577e] text-white rounded-3xl p-8 sm:p-10 shadow-2xl border border-white/10 overflow-hidden">
              {/* Top Overlapping Avatars */}
              <div className="flex items-center justify-center -space-x-3 mb-6">
                {REVIEWS.slice(0, 3).map((r, i) => (
                  <img
                    key={r.id}
                    src={r.avatar}
                    alt={r.author}
                    className={`w-11 h-11 rounded-full object-cover border-2 border-[#36577e] shadow-md ${
                      i === 1 ? 'w-13 h-13 z-10 scale-110 ring-2 ring-white/30' : 'opacity-85'
                    }`}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                ))}
              </div>

              {/* Reviewer Details */}
              <div className="text-center mb-4">
                <h3 className="text-lg sm:text-xl font-bold tracking-tight text-white">
                  {currentReview.author}
                </h3>
                <p className="text-xs text-sky-200/80 font-medium mt-0.5">
                  {currentReview.role} · {currentReview.location}
                </p>
              </div>

              {/* Review Text */}
              <p className="text-center text-xs sm:text-sm text-slate-100/90 leading-relaxed max-w-lg mx-auto mb-6 italic">
                "{currentReview.comment}"
              </p>

              {/* Rating block & Carousel controls */}
              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <button
                  onClick={handlePrev}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
                  title="Previous review"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                <div className="flex flex-col sm:flex-row items-center gap-1.5 text-xs font-semibold text-white">
                  <span>5.0/5.0 rating</span>
                  <div className="flex items-center text-amber-300">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="text-[11px] text-sky-200/70 font-normal">
                    ({currentIndex + 1} of {REVIEWS.length})
                  </span>
                </div>

                <button
                  onClick={handleNext}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
                  title="Next review"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
