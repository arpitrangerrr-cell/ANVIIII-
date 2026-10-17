import React, { useState } from 'react';
import { X, Star, MessageSquarePlus, CheckCircle, ThumbsUp } from 'lucide-react';
import { REVIEWS, CLINIC_INFO } from '../data/clinicData';

interface ReviewsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBookAppointment: () => void;
}

export const ReviewsModal: React.FC<ReviewsModalProps> = ({
  isOpen,
  onClose,
  onBookAppointment,
}) => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [newAuthor, setNewAuthor] = useState('');
  const [newRating, setNewRating] = useState(5);
  const [newComment, setNewComment] = useState('');
  const [newTreatment, setNewTreatment] = useState('Dental Checkup');
  const [submittedReview, setSubmittedReview] = useState(false);

  if (!isOpen) return null;

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedReview(true);
    setTimeout(() => {
      setShowAddForm(false);
      setSubmittedReview(false);
      setNewAuthor('');
      setNewComment('');
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="bg-[#18283e] text-white w-full max-w-2xl rounded-3xl border border-white/10 shadow-2xl overflow-hidden relative max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-white/10 bg-[#142235] flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold tracking-tight text-white">
                Patient Feedback & Reviews
              </h3>
              <span className="text-xs bg-amber-400/20 text-amber-300 px-2 py-0.5 rounded-full font-bold">
                ★ 5.0
              </span>
            </div>
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
          {/* Average Rating Banner */}
          <div className="p-5 rounded-2xl bg-[#121f31] border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-extrabold text-white">5.0</span>
                <span className="text-xs text-slate-400">out of 5 stars</span>
              </div>
              <div className="flex items-center text-amber-400 mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-xs text-slate-300 mt-1">
                100% positive experience based on 5 patient evaluations
              </p>
            </div>

            <button
              onClick={() => setShowAddForm(!showAddForm)}
              className="px-4 py-2 text-xs font-semibold text-white bg-white/10 hover:bg-white/15 rounded-full transition-colors self-start sm:self-center flex items-center gap-1.5 cursor-pointer"
            >
              <MessageSquarePlus className="w-3.5 h-3.5" />
              <span>{showAddForm ? 'Cancel Review' : 'Write a Review'}</span>
            </button>
          </div>

          {/* Add Review Form */}
          {showAddForm && (
            <div className="p-5 rounded-2xl bg-[#132236] border border-sky-400/30">
              {submittedReview ? (
                <div className="text-center py-4 text-emerald-400 text-xs font-semibold flex items-center justify-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>Thank you! Your review has been submitted for verification.</span>
                </div>
              ) : (
                <form onSubmit={handleReviewSubmit} className="space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
                    Share Your Dental Experience
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      required
                      placeholder="Your Full Name"
                      value={newAuthor}
                      onChange={(e) => setNewAuthor(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl bg-[#0f1b2b] border border-white/10 text-white text-xs focus:outline-none focus:border-sky-400"
                    />
                    <select
                      value={newTreatment}
                      onChange={(e) => setNewTreatment(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl bg-[#0f1b2b] border border-white/10 text-white text-xs focus:outline-none focus:border-sky-400"
                    >
                      <option>Dental Cleaning & Hygiene</option>
                      <option>Orthodontics & Aligners</option>
                      <option>Dental Implants</option>
                      <option>Root Canal Treatment</option>
                      <option>Pediatric Dentistry</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[11px] text-slate-400 mb-1">Rating</label>
                    <div className="flex gap-1 text-amber-400 cursor-pointer">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          type="button"
                          key={star}
                          onClick={() => setNewRating(star)}
                          className="p-1 hover:scale-110 transition-transform cursor-pointer"
                        >
                          <Star
                            className={`w-4 h-4 ${
                              star <= newRating ? 'fill-current text-amber-400' : 'text-slate-600'
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                  <textarea
                    rows={2}
                    required
                    placeholder="Describe your treatment experience, clinic staff, painless procedures..."
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-[#0f1b2b] border border-white/10 text-white text-xs focus:outline-none focus:border-sky-400 resize-none"
                  />
                  <button
                    type="submit"
                    className="px-5 py-2 text-xs font-semibold text-white bg-sky-600 hover:bg-sky-500 rounded-full transition-colors cursor-pointer"
                  >
                    Submit Review
                  </button>
                </form>
              )}
            </div>
          )}

          {/* All 5 Reviews List */}
          <div className="space-y-4">
            {REVIEWS.map((review) => (
              <div
                key={review.id}
                className="p-5 rounded-2xl bg-[#142337] border border-white/5 hover:border-white/10 transition-colors"
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div className="flex items-center gap-3">
                    <img
                      src={review.avatar}
                      alt={review.author}
                      className="w-9 h-9 rounded-full object-cover border border-white/10"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-white">
                        {review.author}
                      </h4>
                      <p className="text-[11px] text-slate-400">
                        {review.role} · {review.location}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center text-amber-400 shrink-0">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                </div>

                <p className="text-xs text-slate-200 leading-relaxed mt-2.5">
                  "{review.comment}"
                </p>

                <div className="mt-3 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="text-sky-300/80 font-medium">{review.treatment}</span>
                  <span>{review.date}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Book Appointment CTA from reviews */}
          <div className="pt-2">
            <button
              onClick={() => {
                onClose();
                onBookAppointment();
              }}
              className="w-full py-3 text-xs sm:text-sm font-semibold text-white bg-[#3b5e8c] hover:bg-[#4770a6] rounded-full transition-all text-center cursor-pointer"
            >
              Experience 5-Star Care · Book Appointment Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
