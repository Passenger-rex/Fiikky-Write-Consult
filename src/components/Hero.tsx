import React from "react";
import { ArrowRight, BookOpen, Clock, Award } from "lucide-react";
import { motion } from "motion/react";

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <section id="hero" className="relative pt-44 pb-32 px-6 md:px-8 bg-surface-bg overflow-hidden flex flex-col justify-center min-h-[90vh]">
      {/* Editorial Watermark background */}
      <div className="absolute right-[-10%] top-[10%] text-[24vw] font-serif font-extrabold text-neutral-200/20 select-none pointer-events-none tracking-tighter leading-none hidden xl:block">
        LEGACY
      </div>

      <div className="max-w-[1200px] mx-auto w-full text-center relative z-10">
        <motion.div
          id="hero-badge-container"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block border-b border-primary mb-8"
        >
          <p className="font-sans text-xs md:text-sm text-primary uppercase tracking-[0.25em] pb-3 font-semibold">
            Crafting Intellectual Excellence
          </p>
        </motion.div>

        <motion.h1
          id="hero-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-serif text-4xl md:text-7xl lg:text-8xl leading-[1.1] mb-8 text-text-dark max-w-5xl mx-auto tracking-tight font-bold"
        >
          Turn Your Ideas Into <br />
          <span className="italic font-normal text-primary">Published Books.</span>
        </motion.h1>

        <motion.p
          id="hero-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-sans text-lg md:text-xl text-text-muted max-w-3xl mx-auto mb-12 leading-relaxed font-light"
        >
          Fikky Write Consult is a premium writing, ghostwriting, and publishing agency founded by award-winning author <span className="font-semibold text-text-dark">Aaron Fikayomi</span>. We transform raw, insightful concepts into enduring literary legacies.
        </motion.p>

        <motion.div
          id="hero-buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-5 md:gap-6"
        >
          <button
            id="hero-view-work-btn"
            onClick={() => onNavigate("portfolio")}
            className="w-full sm:w-auto bg-primary text-white border border-primary px-10 py-5 font-sans text-xs uppercase tracking-[0.2em] font-bold text-center hover:bg-primary-hover transition-all duration-300 shadow-sm outline-none"
          >
            View My Work
          </button>
          <button
            id="hero-contact-btn"
            onClick={() => onNavigate("contact")}
            className="w-full sm:w-auto border-2 border-text-dark bg-transparent text-text-dark px-10 py-5 font-sans text-xs uppercase tracking-[0.2em] font-bold text-center hover:bg-text-dark hover:text-white transition-all duration-300"
          >
            Get in Touch
          </button>
        </motion.div>
      </div>
    </section>
  );
}
