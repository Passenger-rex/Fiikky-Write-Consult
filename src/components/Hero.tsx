import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section id="hero" className="relative pt-24 pb-24 px-6 md:px-8 bg-surface-bg overflow-hidden flex flex-col justify-center min-h-[50vh]">
      {/* Editorial Watermark background */}
      <div className="absolute right-[-10%] top-[10%] text-[24vw] font-serif font-extrabold text-neutral-200/20 select-none pointer-events-none tracking-tighter leading-none hidden xl:block">
        LEGACY
      </div>

      <div className="max-w-[1000px] mx-auto w-full text-center relative z-10">
        <div
          id="hero-badge-container"
          className="inline-block border-b border-primary mb-3"
        >
          <p className="font-sans text-xs md:text-sm text-primary uppercase tracking-[0.25em] pb-3 font-semibold">
            Crafting Intellectual Excellence
          </p>
        </div>

        <h1
          id="hero-title"
          className="font-serif text-4xl md:text-7xl lg:text-8xl leading-[1.1] mb-8 text-text-dark max-w-5xl mx-auto tracking-tight font-bold"
        >
          Turn Your Ideas Into <br />
          <span className="italic font-normal text-primary">Published Books.</span>
        </h1>

        <p
          id="hero-subtitle"
          className="font-sans text-base md:text-lg text-text-muted max-w-3xl mx-auto mb-12 leading-relaxed font-light"
        >
          Fikky Write Consult is a premium writing, ghostwriting, and publishing agency founded by award-winning author <span className="font-semibold text-text-dark">Aaron Fikayomi</span>. We transform raw, insightful concepts into enduring literary legacies.
        </p>

        <div
          id="hero-buttons"
          className="flex flex-col sm:flex-row justify-center items-center gap-5 md:gap-6"
        >
          <Link
            id="hero-view-work-link"
            to="/portfolio"
            className="w-full sm:w-auto bg-primary text-white border border-primary px-10 py-5 font-sans text-xs uppercase tracking-[0.2em] font-bold text-center hover:bg-primary-hover transition-all duration-300 shadow-sm outline-none"
          >
            View My Work
          </Link>
          <Link
            id="hero-contact-link"
            to="/contact"
            className="w-full sm:w-auto border-2 border-text-dark bg-transparent text-text-dark px-10 py-5 font-sans text-xs uppercase tracking-[0.2em] font-bold text-center hover:bg-text-dark hover:text-white transition-all duration-300"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
}
