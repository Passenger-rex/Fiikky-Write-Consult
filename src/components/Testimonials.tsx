import React, { useState, useRef } from "react";
import { Star, MessageSquare, Plus, PenTool, CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Testimonial } from "../types";

export default function Testimonials() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const scrollAmount = current.clientWidth; // scroll exactly 1 item width
      current.scrollBy({ left: direction === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" });
    }
  };

  const [testimonials, setTestimonials] = useState<Testimonial[]>([
    {
      text: "Aaron made my story come alive with authenticity and grace. I will recommend Fikky Write Consult to any author.",
      author: "Memoir Client",
      role: "Published Memoir Author"
    },
    {
      text: "She doesn't just edit; she helps you hear your own voice more clearly, capturing conversational rhythms perfectly.",
      author: "Corporate Executive",
      role: "Business Legacy Bio Client"
    },
    {
      text: "Working with her was healing in itself. She understood my pain and helped me tell my truth.",
      author: "Trauma Survivor & Author",
      role: "Trauma Healing Journal Author"
    },
    {
      text: "She’s a bundle of talent. I always love working with her.",
      author: "Client Review",
      role: "Published Author Cohort"
    },
    {
      text: "I always love working with you because you are fast and you understand the concept I want for my books. Thank you.",
      author: "Returning Author",
      role: "Active Amazon Direct & Selar Publisher"
    }
  ]);

  const [newReviewText, setNewReviewText] = useState<string>("");
  const [newReviewAuthor, setNewReviewAuthor] = useState<string>("");
  const [newReviewRole, setNewReviewRole] = useState<string>("");
  const [showReviewWriter, setShowReviewWriter] = useState<boolean>(false);
  const [submittedMessage, setSubmittedMessage] = useState<boolean>(false);

  const handleReviewSubmission = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReviewText || !newReviewAuthor) return;

    const newTestimonial: Testimonial = {
      text: newReviewText,
      author: newReviewAuthor,
      role: newReviewRole || "Published Author"
    };

    setTestimonials([newTestimonial, ...testimonials]);
    setNewReviewText("");
    setNewReviewAuthor("");
    setNewReviewRole("");
    setSubmittedMessage(true);

    setTimeout(() => {
      setSubmittedMessage(false);
      setShowReviewWriter(false);
    }, 3000);
  };

  return (
    <section id="testimonials" className="py-24 md:py-32 px-6 md:px-8 bg-white border-b border-neutral-200">
      <div className="max-w-[1200px] mx-auto text-center">
        
        {/* Classy centered title styled italic consistent with mockup with scroll animation */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20 text-center" 
          id="testimonials-header-box"
        >
          <span className="text-xs uppercase tracking-widest text-primary font-semibold block mb-2">Prestige Affiliation Testimonies</span>
          <h2 id="testimonials-title" className="font-serif text-3xl md:text-5xl text-text-dark font-bold font-semibold italic">
            Voices of Excellence
          </h2>
          <p className="font-sans text-xs text-text-light max-w-md mx-auto mt-2 uppercase tracking-wider font-semibold">
            Institutional Endorsements &amp; Author Appraisals
          </p>
        </motion.div>

        {/* Swipeable Testimonials Carousel Container */}
        <div className="relative group mx-auto w-full max-w-4xl">
          {/* Left Arrow (Desktop & Tablet) */}
          <button 
            onClick={() => scroll("left")}
            className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md border border-neutral-200 text-text-dark hover:text-primary transition-colors p-3 rounded-full hidden sm:flex items-center justify-center"
            aria-label="Previous testimonials"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-4 pb-8 mb-8 snap-x snap-mandatory scroll-smooth [&::-webkit-scrollbar]:hidden w-full" 
            id="testimonials-carousel"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {testimonials.map((t, idx) => (
              <motion.div
                key={idx}
                className="w-full shrink-0 snap-center border border-neutral-100 bg-neutral-50/50 p-8 md:p-12 space-y-6 flex flex-col justify-center items-center text-center rounded-lg shadow-sm"
              >
                <div className="space-y-6 flex flex-col items-center">
                  <div className="flex gap-1 justify-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="font-serif text-xl md:text-2xl text-text-dark italic leading-relaxed max-w-2xl mx-auto">
                    "{t.text}"
                  </p>
                </div>
                <footer className="font-sans text-sm uppercase tracking-widest font-bold text-text-dark pt-6 mt-4 border-t border-neutral-200 w-full max-w-xs mx-auto">
                  <span>{t.author}</span>
                  {t.role && <span className="text-text-light block text-[10px] sm:text-xs font-normal tracking-wide lowercase mt-1.5">{t.role}</span>}
                </footer>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Arrow (Desktop & Tablet) */}
          <button 
            onClick={() => scroll("right")}
            className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md border border-neutral-200 text-text-dark hover:text-primary transition-colors p-3 rounded-full hidden sm:flex items-center justify-center"
            aria-label="Next testimonials"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Interactive Experience Submission Toggle */}
        <div className="mt-12" id="client-review-box">
          <button
            id="write-testimonial-toggle-btn"
            onClick={() => setShowReviewWriter(!showReviewWriter)}
            className="inline-flex items-center gap-2 border-2 border-primary bg-white text-primary px-8 py-4 text-xs font-sans uppercase tracking-widest font-bold hover:bg-primary hover:text-white transition-all active:scale-[0.98] cursor-pointer outline-none"
          >
            <MessageSquare className="w-4 h-4" /> Share Your Launch Review
          </button>
        </div>

        {/* Submission panel in fine Royal Blue style */}
        <AnimatePresence>
          {showReviewWriter && (
            <motion.div
              id="testimonial-form-box"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              className="max-w-xl mx-auto border-t-4 border-t-primary border-x border-b border-neutral-200 p-8 mt-8 bg-neutral-50/50 text-left relative shadow-xs"
            >
              <h3 className="font-serif text-lg font-bold text-text-dark mb-4 flex items-center gap-2">
                <PenTool className="w-4 h-4 text-primary" /> Record Clinical Author Feedback
              </h3>

              {submittedMessage ? (
                <div className="py-8 text-center space-y-2 text-primary">
                  <CheckCircle className="w-12 h-12 mx-auto" />
                  <p className="font-serif text-lg font-semibold">Review Added Successfully!</p>
                  <p className="text-xs text-text-muted">Your reflection has been displayed at the front of our ledger.</p>
                </div>
              ) : (
                <form onSubmit={handleReviewSubmission} className="space-y-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-primary">Feedback Statement (Quote)</label>
                    <textarea
                      placeholder="e.g., 'Aaron and his consulting suite brought clinical precision into my draft creation...'"
                      value={newReviewText}
                      onChange={(e) => setNewReviewText(e.target.value)}
                      required
                      rows={3}
                      className="w-full border border-neutral-300 bg-white px-4 py-3 text-xs text-text-dark focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-primary">Author Designation</label>
                      <input
                        type="text"
                        placeholder="e.g., Brenda Miller"
                        value={newReviewAuthor}
                        onChange={(e) => setNewReviewAuthor(e.target.value)}
                        required
                        className="w-full border border-neutral-300 bg-white px-4 py-3 text-xs text-text-dark focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-primary">Publishing Standard / Role</label>
                      <input
                        type="text"
                        placeholder="e.g., Business Biographer"
                        value={newReviewRole}
                        onChange={(e) => setNewReviewRole(e.target.value)}
                        className="w-full border border-neutral-300 bg-white px-4 py-3 text-xs text-text-dark focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all"
                      />
                    </div>
                  </div>
                  <button
                    id="submit-testimonial-btn"
                    type="submit"
                    className="w-full bg-primary hover:bg-primary-hover text-white py-4 font-sans text-xs uppercase tracking-widest font-bold transition-all mt-4 outline-none cursor-pointer shadow-sm rounded-sm"
                  >
                    Add Ledger Testimony
                  </button>
                </form>
              )}
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
