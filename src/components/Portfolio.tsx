import React, { useState } from "react";
import { PortfolioItem } from "../types";
import { Filter, Search, Download, FileText, X, ArrowUpRight, BookOpen, Volume2, Calendar, ChevronLeft, ChevronRight, Mail, Phone, MapPin, Award, CheckCircle2, Star, Sparkles, Printer, Users } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Portfolio() {
  const [filterCategory, setFilterCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);
  const [showPrintPortfolio, setShowPrintPortfolio] = useState<boolean>(false);
  const [activeSlide, setActiveSlide] = useState<number>(0);

  const portfolioItems: PortfolioItem[] = [
    {
      id: "jesus-is-the-balm",
      title: "Jesus is the Balm: From Pain to Purpose",
      author: "Ta'Niya Wallace",
      category: "Book Publishing",
      description: "A deeply resonant memoir and trauma healing narrative helping readers transform deep suffering into spiritual purpose.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDPj4Y-UGlgFkIfcJSiCXEhAw2gA5hQfSuFQo9dV2_eaALiSeYuoJpkXjHeVdyYaGuO6KR2aspAgJyIRIjAtYzdkFOiGbxJvHjXPx4EUI1PM-oSKSQgrWgtA4chT-UJkFobkGVqxi2cLFEbi0EdV9NoBl_JeDJ6Cf_ZkQRQaV5koPofW3SLtQD4tDFfQDzAR_gMn7MCdFW0IDutDYZP_SD36F9lnBDlRMQs6GgW7A3yY_Y5iUatwe1baPmbBBHjpJKrAffnrmeaHpQ",
      imageAlt: "A vintage journal and leather book with a gold nib pen",
      fullStory: `Jesus is the Balm: From Pain to Purpose is a masterpiece written in close collaboration with Ta'Niya Wallace. It focuses on trauma healing, faith, and the process of recovering from childhood wounds to step into supreme spiritual destiny.

Fikky Write Consult acted as an empathetic "literary midwife" on this project, working side-by-side with Ta'Niya. Through our specialized speech-to-text capture methodology and weekly accountability workshops, we extracted deep emotional truths and structured them into a beautifully flowing manuscripts.

Since launch, the book has became an anchor-point of healing for faith communities in the United States, providing a practical framework to address unresolved pain.`
    },
    {
      id: "crushed",
      title: "Crushed",
      author: "Barr. Olubunmi Babatunde",
      category: "Book Publishing",
      description: "A profound testimonial publication exploring the themes of faith, resilience, and executive courage under trial.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDPj4Y-UGlgFkIfcJSiCXEhAw2gA5hQfSuFQo9dV2_eaALiSeYuoJpkXjHeVdyYaGuO6KR2aspAgJyIRIjAtYzdkFOiGbxJvHjXPx4EUI1PM-oSKSQgrWgtA4chT-UJkFobkGVqxi2cLFEbi0EdV9NoBl_JeDJ6Cf_ZkQRQaV5koPofW3SLtQD4tDFfQDzAR_gMn7MCdFW0IDutDYZP_SD36F9lnBDlRMQs6GgW7A3yY_Y5iUatwe1baPmbBBHjpJKrAffnrmeaHpQ",
      imageAlt: "An open scripture with sunlight catching the pages",
      fullStory: `Crushed is a raw, emotional biography written by renowned counsel Barr. Olubunmi Babatunde. This text documents the high stakes of personal faith when navigating legal trials, systemic pressure, and spiritual refinement.

Under the direct editorial guidance of Aaron Fikayomi, Fikky Write Consult completed complete Developmental Editing checks. We examined key theme placements, refined legal timelines, polished copy-editing flows, and formatted the printed book margins.

The result is a highly impactful, premium paperback and digital edition that continues to rank prominently among narrative circles in Nigeria.`
    },
    {
      id: "mountain-top-devotional",
      title: "Mountain Top Devotional",
      author: "Dr. David Adeoye Abodunrin",
      category: "Co-Publishing",
      description: "A structured, premium annual spiritual guidebook designed for daily growth, prayer outlines, and scripture studies.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDPj4Y-UGlgFkIfcJSiCXEhAw2gA5hQfSuFQo9dV2_eaALiSeYuoJpkXjHeVdyYaGuO6KR2aspAgJyIRIjAtYzdkFOiGbxJvHjXPx4EUI1PM-oSKSQgrWgtA4chT-UJkFobkGVqxi2cLFEbi0EdV9NoBl_JeDJ6Cf_ZkQRQaV5koPofW3SLtQD4tDFfQDzAR_gMn7MCdFW0IDutDYZP_SD36F9lnBDlRMQs6GgW7A3yY_Y5iUatwe1baPmbBBHjpJKrAffnrmeaHpQ",
      imageAlt: "A majestic mountain range with sunlight rising over the peaks",
      fullStory: `Mountain Top Devotional stands as a premier yearly devotional guide authored by Dr. David Adeoye Abodunrin. It houses 365 daily insights, reflection challenges, and target prayer lines designed to focus minds on deep biblical keys.

Our team at Fikky Write Consult provided full-cycle layout, typesetting, and print production management. This required managing rigid formatting grids, indexing scripture citations, and coordinating global print shipments.

This devotional guide is printed annually with a beautiful premium soft touch cover, representing our highest volume layout assignment and serving thousands of believers globally.`
    },
    {
      id: "dear-mummy",
      title: "Dear Mummy",
      author: "Omole Oluwaseun Remilekun",
      category: "Layout & Design",
      description: "A heartwarming and beautiful children's book featuring custom illustration sizing, playful typography, and parenting insights.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDPj4Y-UGlgFkIfcJSiCXEhAw2gA5hQfSuFQo9dV2_eaALiSeYuoJpkXjHeVdyYaGuO6KR2aspAgJyIRIjAtYzdkFOiGbxJvHjXPx4EUI1PM-oSKSQgrWgtA4chT-UJkFobkGVqxi2cLFEbi0EdV9NoBl_JeDJ6Cf_ZkQRQaV5koPofW3SLtQD4tDFfQDzAR_gMn7MCdFW0IDutDYZP_SD36F9lnBDlRMQs6GgW7A3yY_Y5iUatwe1baPmbBBHjpJKrAffnrmeaHpQ",
      imageAlt: "A stack of colorful children's illustrated storybooks",
      fullStory: `Dear Mummy is a magnificent family legacy book written by child-development advocate Omole Oluwaseun Remilekun. It explores the magical perspective of childhood communication and the bond shared between mothers and their young children.

Fikky Write Consult took charge of the physical page orchestration: we coordinated full typographic pairing, designed colorful caption frames, and ensured illustration contrast met premium printing standards.

This production has been celebrated inside early childhood parenting workshops and has established Oluwaseun's kids-literature catalog.`
    },
    {
      id: "promise-keepers",
      title: "Promise Keepers",
      author: "Pastor Dayo Adeyemi",
      category: "Book Publishing",
      description: "An authoritative guide to covenant-filled leadership and marital fidelity, distributed on Selar and Amazon Direct.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDPj4Y-UGlgFkIfcJSiCXEhAw2gA5hQfSuFQo9dV2_eaALiSeYuoJpkXjHeVdyYaGuO6KR2aspAgJyIRIjAtYzdkFOiGbxJvHjXPx4EUI1PM-oSKSQgrWgtA4chT-UJkFobkGVqxi2cLFEbi0EdV9NoBl_JeDJ6Cf_ZkQRQaV5koPofW3SLtQD4tDFfQDzAR_gMn7MCdFW0IDutDYZP_SD36F9lnBDlRMQs6GgW7A3yY_Y5iUatwe1baPmbBBHjpJKrAffnrmeaHpQ",
      imageAlt: "A clean modern library workspace setup",
      fullStory: `Promise Keepers is a leadership-manual authored by faith-based thinker Pastor Dayo Adeyemi. It addresses modern fidelity, spiritual covenant holding, and the importance of leadership accountability.

We managed the full manuscript proofreading, developmental polishing, and direct publishing systems for this book. Fikky Write Consult onboarded Pastor Dayo on global publication platforms, publishing the book directly to both Amazon Direct KDP and Selar hubs.

This smooth process allowed global audiences in Nigeria, the UK, and the US to access and download the book in paperback and e-book editions easily.`
    },
    {
      id: "finance-in-marriage",
      title: "Finance In Marriage",
      author: "Peter Asuata",
      category: "Book Publishing",
      description: "Comprehensive publishing and production management for this essential guide to marital finance.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDPj4Y-UGlgFkIfcJSiCXEhAw2gA5hQfSuFQo9dV2_eaALiSeYuoJpkXjHeVdyYaGuO6KR2aspAgJyIRIjAtYzdkFOiGbxJvHjXPx4EUI1PM-oSKSQgrWgtA4chT-UJkFobkGVqxi2cLFEbi0EdV9NoBl_JeDJ6Cf_ZkQRQaV5koPofW3SLtQD4tDFfQDzAR_gMn7MCdFW0IDutDYZP_SD36F9lnBDlRMQs6GgW7A3yY_Y5iUatwe1baPmbBBHjpJKrAffnrmeaHpQ",
      imageAlt: "A macro photograph of a vintage typewriter",
      fullStory: `Finance In Marriage is a comprehensive blueprint designed to bring alignment and absolute clarity to spouses managing shared economic futures. Authored by wealth advisor Peter Asuata, this book translates complex fiscal planning into actionable, trust-building marital workflows.

Fikky Write Consult took this initiative through full Developmental Stage processes: from structuring raw chapter frameworks and developmental rewriting to secure full interior layout compilation and digital store deployment. 

The resulting publication received deep industry reviews and continues to remain an authoritative asset inside spiritual and professional marital counseling catalogs worldwide.`
    },
    {
      id: "hold-the-kids",
      title: "Hold the Kids",
      author: "Alexander Olanrewaju Akintunde",
      category: "Layout & Design",
      description: "Expert publishing services and professional interior layout design for this impactful publication.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDPj4Y-UGlgFkIfcJSiCXEhAw2gA5hQfSuFQo9dV2_eaALiSeYuoJpkXjHeVdyYaGuO6KR2aspAgJyIRIjAtYzdkFOiGbxJvHjXPx4EUI1PM-oSKSQgrWgtA4chT-UJkFobkGVqxi2cLFEbi0EdV9NoBl_JeDJ6Cf_ZkQRQaV5koPofW3SLtQD4tDFfQDzAR_gMn7MCdFW0IDutDYZP_SD36F9lnBDlRMQs6GgW7A3yY_Y5iUatwe1baPmbBBHjpJKrAffnrmeaHpQ",
      imageAlt: "Minimalist interior of a modern library",
      fullStory: `Hold the Kids stands as an emotional, highly articulate reference handbook for modern parenting and early youth safeguards. Alexander Olanrewaju Akintunde brings deep experiential leadership into the narratives of this title.

Fikky Write Consult's layout and design suite formulated a clean, responsive interior column layout, styling and balancing margins to optimize high readability. We implemented elegant typographic pairings that align specifically with child advocacy institutions.

By maintaining pristine layout and low-contrast borders, the book was brought in as a primary educational resource across various community platforms.`
    },
    {
      id: "comic-book-project",
      title: "The Comic Book Project",
      author: "Missionary Brenda Miller",
      category: "Layout & Design",
      description: "Returning client success: Dynamic visual story layout, dialogue bubble placement, and print consultation.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDPj4Y-UGlgFkIfcJSiCXEhAw2gA5hQfSuFQo9dV2_eaALiSeYuoJpkXjHeVdyYaGuO6KR2aspAgJyIRIjAtYzdkFOiGbxJvHjXPx4EUI1PM-oSKSQgrWgtA4chT-UJkFobkGVqxi2cLFEbi0EdV9NoBl_JeDJ6Cf_ZkQRQaV5koPofW3SLtQD4tDFfQDzAR_gMn7MCdFW0IDutDYZP_SD36F9lnBDlRMQs6GgW7A3yY_Y5iUatwe1baPmbBBHjpJKrAffnrmeaHpQ",
      imageAlt: "Vintage structural layout blueprint",
      fullStory: `The Comic Book Project is illustrative of Fikky Write Consult's versatility in visual publishing. Under Missionary Brenda Miller's leadership, we handled specialized comic typesetting, panel flow consulting, and digital alignment checks.

The layout maximizes grid proportions, implementing customized lettering fonts to retain narrative pacing while ensuring high contrast for global print distribution. 

Our collaborative approach led Missionary Brenda's team to establish the brand securely, resulting in returning contracts and premium recognition across experimental graphic novel circles.`
    }
  ];

  const filteredItems = portfolioItems.filter((item) => {
    const matchesCategory = filterCategory === "All" || item.category === filterCategory;
    const matchesKeyword = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesKeyword;
  });

  const printDocument = () => {
    window.print();
  };

  return (
    <section id="portfolio" className="py-24 md:py-32 px-6 md:px-8 bg-surface-highest border-b border-neutral-200">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Header section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 text-left" id="portfolio-header">
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-widest text-primary font-semibold block">Editorial Catalog Showcase</span>
            <h2 id="portfolio-title" className="font-serif text-3xl md:text-5xl text-text-dark font-bold">
              Recent &amp; Relevant Work
            </h2>
            <p id="portfolio-subtitle" className="font-sans text-text-muted max-w-xl leading-relaxed">
              A showcase of literary projects and content strategies that have defined our clients' success. Includes returning client successes like the Comic Book Project for Brenda Miller.
            </p>
          </div>
          <div>
            <a
              id="download-portfolio-trigger-lnk"
              href="/FIKKY.pdf"
              download="FIKKY.pdf"
              className="bg-primary text-white hover:bg-primary-hover px-6 py-4 font-sans text-xs uppercase tracking-wider font-bold transition-all active:scale-[0.98] flex items-center gap-2 border border-primary outline-none cursor-pointer"
            >
              <Download className="w-4 h-4" /> Download PDF Portfolio
            </a>
          </div>
        </div>

        {/* Search Bar only (Category filters removed) */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-end border-b border-neutral-300 pb-6 mb-12 text-left" id="portfolio-filters-container">
          {/* Search Input Box */}
          <div className="relative w-full md:w-80" id="portfolio-search-input-box">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-neutral-400">
              <Search className="w-4 h-4" />
            </span>
            <input
              type="text"
              placeholder="Search by Title or Author..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-neutral-200 pl-10 pr-4 py-2.5 text-xs text-text-dark focus:ring-1 focus:ring-primary focus:border-primary outline-none font-sans"
            />
          </div>
        </div>

        {/* Portfolio Cards Grid with scroll animation */}
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.08
              }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" 
          id="portfolio-cards-grid"
        >
          {filteredItems.map((item) => (
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 24 },
                show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
              }}
              key={item.id}
              className="group bg-white border border-neutral-200 flex flex-col h-full overflow-hidden hover:border-text-dark transition-all duration-300 text-left"
            >
              <div className="aspect-video overflow-hidden bg-neutral-100 border-b border-neutral-200 relative">
                <img
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                  src={item.image}
                  alt={item.imageAlt}
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm text-[9px] font-bold text-primary uppercase tracking-widest px-2.5 py-1 border border-neutral-100">
                  {item.category}
                </span>
              </div>
              <div className="p-8 flex flex-col justify-between flex-grow">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.15em] text-neutral-400 font-semibold block mb-1">
                    Client: {item.author}
                  </span>
                  <h4 className="font-serif text-xl font-bold text-text-dark mb-3">
                    {item.title}
                  </h4>
                  <p className="font-sans text-xs text-text-muted line-clamp-3 mb-6 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedProject(item)}
                  className="font-sans text-[11px] font-bold uppercase tracking-widest text-text-dark border-b-2 border-text-dark pb-1 hover:text-primary hover:border-primary transition-all self-start cursor-pointer flex items-center gap-1 group-hover:gap-1.5"
                >
                  Read Case Study <ArrowUpRight className="w-3 h-3 text-neutral-400 group-hover:text-primary" />
                </button>
              </div>
            </motion.div>
          ))}

          {filteredItems.length === 0 && (
            <div className="col-span-1 md:col-span-3 text-center py-16 text-neutral-500 font-sans">
              No project fits current search criteria. Open filters to display more works.
            </div>
          )}
        </motion.div>

        {/* Detailed Case Study Popup Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              id="case-study-modal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 md:p-6"
            >
              <motion.div
                id="case-study-modal-card"
                initial={{ scale: 0.95, y: 15 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 15 }}
                className="bg-white border border-text-dark max-w-3xl w-full max-h-[90vh] overflow-y-auto"
              >
                {/* Image Banner */}
                <div className="relative aspect-video">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.imageAlt}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-neutral-900 via-neutral-900/60 to-transparent p-6 md:p-8 text-left">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-blue-300">
                      {selectedProject.category} Case Study
                    </span>
                    <h3 className="font-serif text-2xl md:text-3xl text-white font-bold mt-1">
                      {selectedProject.title}
                    </h3>
                    <p className="text-xs text-neutral-300 mt-1">
                      Collaboratively led by Author <span className="text-white font-semibold">{selectedProject.author}</span>
                    </p>
                  </div>
                  <button
                    id="case-study-close-btn"
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 bg-white/95 text-neutral-800 hover:text-primary p-2 transition-all outline-none"
                    aria-label="Close Case Study"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Study text narrative details */}
                <div className="p-8 md:p-10 space-y-6 text-left">
                  <div className="flex border-b border-neutral-100 pb-4 justify-between items-center flex-wrap gap-2 text-xs">
                    <div className="flex items-center gap-2 text-text-light font-sans uppercase font-semibold">
                      <BookOpen className="w-4 h-4 text-primary" /> Core Program: {selectedProject.category}
                    </div>
                    <div className="flex items-center gap-2 text-text-light font-sans uppercase font-semibold">
                      <Calendar className="w-4 h-4 text-primary" /> Status: Successfully Published
                    </div>
                  </div>

                  <p className="font-serif text-md md:text-md italic text-text-muted leading-relaxed">
                    "{selectedProject.description}"
                  </p>

                  <div className="font-sans text-sm text-text-dark space-y-4 leading-relaxed whitespace-pre-line border-t border-neutral-100 pt-6">
                    {selectedProject.fullStory}
                  </div>

                  <div className="pt-4 flex justify-end">
                    <button
                      id="close-study-action"
                      onClick={() => setSelectedProject(null)}
                      className="bg-text-dark text-white px-6 py-3 text-xs uppercase tracking-widest font-bold hover:bg-neutral-800 transition-all outline-none"
                    >
                      Close Report
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Modern Printable Portfolio Ledger overlay (Download PDF Portfolio Simulation) */}
        <AnimatePresence>
          {showPrintPortfolio && (
            <motion.div
              id="print-portfolio-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 md:p-8 overflow-y-auto"
            >
              <motion.div
                id="print-portfolio-document"
                initial={{ scale: 0.98, y: 10 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.98, y: 10 }}
                className="bg-[#fafbfc] text-text-dark max-w-5xl w-full max-h-[92vh] md:max-h-[85vh] lg:max-h-[90vh] overflow-y-auto border border-neutral-200 shadow-2xl flex flex-col relative rounded-sm"
              >
                {/* Print Control Bar */}
                <div className="p-4 md:px-6 border-b border-neutral-200 flex items-center justify-between bg-white text-text-dark shrink-0 no-print">
                  <div className="flex items-center gap-2">
                    <FileText className="w-5 h-5 text-primary" />
                    <div>
                      <h4 className="font-serif text-sm font-bold text-text-dark leading-tight">Service &amp; Pricing Guide</h4>
                      <p className="text-[10px] text-text-light font-sans uppercase tracking-wider">14-Page Complete Document Catalog</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <a
                      id="trigger-browser-print"
                      href="/FIKKY.pdf"
                      download="FIKKY.pdf"
                      className="bg-primary hover:bg-primary-hover text-white px-4 py-2 text-xs font-sans uppercase tracking-widest font-bold border border-primary flex items-center gap-2 cursor-pointer outline-none transition-colors"
                    >
                      <Download className="w-3.5 h-3.5" /> Save / Print PDF
                    </a>
                    <button
                      id="close-print-portfolio-btn"
                      onClick={() => setShowPrintPortfolio(false)}
                      className="bg-neutral-100 text-neutral-800 hover:text-black hover:bg-neutral-200 p-2 border border-neutral-200 cursor-pointer outline-none transition-all rounded-sm"
                      title="Close Ledger"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Slides Array content */}
                {(() => {
                  const slidesData = [
                    {
                      title: "Cover Page",
                      bg: "bg-[#002f75]",
                      text: "text-white",
                      content: (
                        <div className="flex flex-col justify-between h-full min-h-[460px] md:min-h-[500px] p-8 md:p-14 relative overflow-hidden">
                          {/* Top row */}
                          <div className="flex justify-between items-start">
                            <div className="bg-white/95 p-3 shadow-xs">
                              <img src="https://i.postimg.cc/K8FsPKQ5/logo.png" alt="Fikky Write Consult Logo" className="h-[70px] md:h-[85px] object-contain filter" referrerPolicy="no-referrer" />
                            </div>
                            <span className="text-[10px] tracking-[0.25em] text-[#e0b024] font-extrabold uppercase">OFFICIAL SERVICE BLUEPRINT</span>
                          </div>

                          {/* Center Banner */}
                          <div className="my-auto space-y-6">
                            <span className="text-xs uppercase tracking-widest font-bold text-[#e0b024] block">WELCOME TO</span>
                            <h2 className="font-serif text-3xl md:text-5xl font-bold leading-tight uppercase tracking-tight">
                              FIKKY WRITE CONSULT <br />
                              <span className="text-[#e0b024] text-2xl md:text-4.5xl block mt-2 font-serif font-semibold italic">SERVICE &amp; PRICING GUIDE</span>
                            </h2>
                            <p className="font-sans text-xs md:text-sm text-neutral-200/90 max-w-2xl leading-relaxed">
                              This document provides a comprehensive overview of our offerings to support your writing and publishing journey. From professional writing and editing to book design, publishing, and distribution, we've got you covered. You'll also find highlights of books and brands we've worked with, as well as client feedback that speaks to our excellence.
                            </p>
                          </div>

                          {/* Slider footer */}
                          <div className="border-t border-white/10 pt-6 mt-6 flex flex-col sm:flex-row justify-between text-[10px] text-neutral-300 gap-4">
                            <p className="font-serif text-xs md:text-sm italic text-[#e0b024]">
                              "...diligently turning your writing and publishing ideas into reality"
                            </p>
                            <div className="flex flex-col sm:items-end gap-1 font-sans">
                              <span>fikkywriteconsult@gmail.com</span>
                              <span>+2349028609199</span>
                              <span className="text-neutral-400">Adeniyi's Street, Egbe, Kogi State Nigeria | Serving Globally</span>
                            </div>
                          </div>
                        </div>
                      )
                    },
                    {
                      title: "About Us",
                      bg: "bg-white",
                      text: "text-text-dark",
                      content: (
                        <div className="flex flex-col justify-between h-full min-h-[460px] md:min-h-[500px] p-8 md:p-14 border border-neutral-200">
                          <div>
                            <span className="text-[10px] font-bold text-primary uppercase tracking-widest block mb-1">PAGE 02</span>
                            <h2 className="font-serif text-3xl font-bold border-b border-neutral-100 pb-3 mb-6 text-text-dark">ABOUT US</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs text-text-muted font-sans leading-relaxed">
                              <div className="space-y-4">
                                <p className="text-sm font-serif italic text-primary font-semibold leading-relaxed">
                                  "At Fikky Write Consult, we stand at the intersection of storytelling, healing, and purpose-driven publishing."
                                </p>
                                <p>
                                  Fikky Write Consult is a full-service writing and publishing agency committed to helping individuals transform their stories into timeless, impactful works.
                                </p>
                              </div>
                              <div className="space-y-4">
                                <p>
                                  Founded by award-winning author and ghostwriter Aaron Fikayomi, our brand stands as a premier advisory and execution team in the editorial world. We operate with a strict standard of aesthetic mastery, spiritual empathy, and authentic representation of our authors' true voices.
                                </p>
                                <p>
                                  Our operations are structured on rigorous ip extraction, author-voice captured workshops, and world-class developmental layouts to guide projects with security and premium excellence.
                                </p>
                              </div>
                            </div>
                          </div>
                          <footer className="text-[9px] uppercase tracking-widest text-text-light border-t border-neutral-100 pt-4 mt-6 flex justify-between">
                            <span>Fikky Write Consult</span>
                            <span>© 2026 Service Guide</span>
                          </footer>
                        </div>
                      )
                    },
                    {
                      title: "Our Specialty",
                      bg: "bg-[#002f75]",
                      text: "text-white",
                      content: (
                        <div className="flex flex-col justify-between h-full min-h-[460px] md:min-h-[500px] p-8 md:p-14">
                          <div>
                            <span className="text-[10px] font-bold text-[#e0b024] uppercase tracking-widest block mb-1">PAGE 03</span>
                            <h2 className="font-serif text-3xl font-bold border-b border-white/10 pb-3 mb-6">OUR SPECIALTY</h2>
                            <p className="font-serif text-base italic text-[#e0b024] mb-6">"Midwifing Sacred Messages with Excellence, Empathy, and Spiritual Sensitivity"</p>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs leading-relaxed">
                              <div className="space-y-4">
                                <p className="text-neutral-200">
                                  We specialize in Ghostwriting, Content Creation, Editing, Coaching, and Digital publishing for clients across Nigeria, the United States, and the United Kingdom.
                                </p>
                                <p className="text-neutral-200">
                                  From first-time authors to seasoned thought leaders, we provide the tools, strategy, and support needed to write and birth books that leave a lasting legacy.
                                </p>
                              </div>
                              <div className="space-y-4 bg-white/5 p-5 border border-white/10 rounded-xs">
                                <p className="text-neutral-300">
                                  At Fikky Write Consult, we understand that every story is sacred and we treat it that way. Whether you're navigating a painful past, sharing a faith journey, writing a timeless book, creating written content for your brand, inspiring writing for your timeline or building a brand voice, our team is here.
                                </p>
                              </div>
                            </div>
                          </div>
                          <footer className="text-[9px] uppercase tracking-widest text-neutral-400 border-t border-white/10 pt-4 mt-6 flex justify-between">
                            <span>Midwifing Messages</span>
                            <span>Aesthetic Publishing Standard</span>
                          </footer>
                        </div>
                      )
                    },
                    {
                      title: "Our Vision",
                      bg: "bg-white",
                      text: "text-text-dark",
                      content: (
                        <div className="flex flex-col justify-between h-full min-h-[460px] md:min-h-[500px] p-8 md:p-14 border border-neutral-200">
                          <div>
                            <span className="text-[10px] font-bold text-primary uppercase tracking-widest block mb-1">PAGE 04</span>
                            <h2 className="font-serif text-3xl font-bold border-b border-neutral-100 pb-3 mb-6 text-text-dark">OUR VISION</h2>
                            <div className="max-w-3xl space-y-6">
                              <p className="font-serif text-2xl italic text-primary leading-relaxed">
                                "Helping individuals share their stories and publish their books with absolute ease."
                              </p>
                              <div className="text-sm font-sans text-text-muted space-y-4 leading-relaxed">
                                <p>
                                  Our expert team guides clients through every step of the writing and publishing journey, offering creative ideas, custom strategy layouts, and hands-on production support.
                                </p>
                                <p>
                                  Furthermore, we train people to develop professional writing and content creation skills, aiming to curate timeless works and campaigns that leave a lasting, healing impact on the world.
                                </p>
                              </div>
                            </div>
                          </div>
                          <footer className="text-[9px] uppercase tracking-widest text-text-light border-t border-neutral-100 pt-4 mt-6 flex justify-between">
                            <span>Vision Statement</span>
                            <span>Fikky Write Consult</span>
                          </footer>
                        </div>
                      )
                    },
                    {
                      title: "Our Mission",
                      bg: "bg-[#002f75]",
                      text: "text-white",
                      content: (
                        <div className="flex flex-col justify-between h-full min-h-[460px] md:min-h-[500px] p-8 md:p-14">
                          <div>
                            <span className="text-[10px] font-bold text-[#e0b024] uppercase tracking-widest block mb-1">PAGE 05</span>
                            <h2 className="font-serif text-3xl font-bold border-b border-white/10 pb-3 mb-6">OUR MISSION</h2>
                            <div className="max-w-3xl space-y-8 pt-6">
                              <p className="font-serif text-3xl font-medium leading-relaxed italic text-[#e0b024]">
                                "To support individuals in achieving their writing and publishing goals by providing creative, engaging, and enlightening expert services."
                              </p>
                              <div className="h-1 w-20 bg-[#e0b024]"></div>
                              <p className="text-xs text-neutral-300 font-sans max-w-xl leading-relaxed">
                                Every protocol, clarity workshop, developmental edit, and graphic typesetting frame we create is meticulously geared toward satisfying this single objective with flawless artistic style and executive standard.
                              </p>
                            </div>
                          </div>
                          <footer className="text-[9px] uppercase tracking-widest text-[#e0b024] border-t border-white/10 pt-4 mt-6 flex justify-between">
                            <span>Mission Framework</span>
                            <span>Fikky Write Consult</span>
                          </footer>
                        </div>
                      )
                    },
                    {
                      title: "Core Services",
                      bg: "bg-white",
                      text: "text-text-dark",
                      content: (
                        <div className="flex flex-col justify-between h-full min-h-[460px] md:min-h-[500px] p-8 md:p-14 border border-neutral-200">
                          <div>
                            <span className="text-[10px] font-bold text-primary uppercase tracking-widest block mb-1">PAGE 06</span>
                            <h2 className="font-serif text-3xl font-bold border-b border-neutral-100 pb-2 mb-4 text-text-dark">OUR CORE SERVICES</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4 text-xs font-sans text-text-muted mt-2">
                              <div className="space-y-2">
                                <p><strong className="text-text-dark">1. Ghostwriting:</strong> Memoirs, Devotionals, Faith-based Books, Children's Stories, Healing Narratives, Novel manuscripts, and more.</p>
                                <p><strong className="text-text-dark">2. Book Editing:</strong> Structural editing, Developmental deep audits, and Copy Editing lines polish.</p>
                                <p><strong className="text-text-dark">3. Content Creation:</strong> Social media timeline posts, reviews, blog articles, authority brand messaging guides.</p>
                                <p><strong className="text-text-dark">4. Digital Publishing:</strong> Direct Amazon Kindle (KDP) & Selar accounts setting. Onboarding of global authors with ease.</p>
                                <p><strong className="text-text-dark">5. Paperback & Hardcover Printing:</strong> Premium grade design covers, typography layouts, and printing delivery.</p>
                              </div>
                              <div className="space-y-2">
                                <p><strong className="text-text-dark">6. Transcription Services:</strong> Converting voice dictations, phone recordings, and raw audios into clean manuscript-ready scripts.</p>
                                <p><strong className="text-text-dark">7. Book Coaching & Consultation:</strong> One-on-one professional coaching, writing block solutions, and roadmap mapping.</p>
                                <p><strong className="text-text-dark">8. Grant & Review Writing:</strong> Writing strategic grant pitches, reviews, and corporate application reports.</p>
                                <p><strong className="text-text-dark">9. Research Writing:</strong> Detailed academic projects, study papers, and corporate analysis assignments with accurate citations.</p>
                              </div>
                            </div>
                          </div>
                          <footer className="text-[9px] uppercase tracking-widest text-text-light border-t border-neutral-100 pt-4 mt-6 flex justify-between">
                            <span>Core Offerings</span>
                            <span>Service Guide Page 6</span>
                          </footer>
                        </div>
                      )
                    },
                    {
                      title: "Our Impact",
                      bg: "bg-[#002f75]",
                      text: "text-white",
                      content: (
                        <div className="flex flex-col justify-between h-full min-h-[460px] md:min-h-[500px] p-8 md:p-14">
                          <div>
                            <span className="text-[10px] font-bold text-[#e0b024] uppercase tracking-widest block mb-1">PAGE 07</span>
                            <h2 className="font-serif text-3xl font-bold border-b border-white/10 pb-3 mb-6">OUR IMPACT</h2>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs leading-relaxed">
                              <ul className="space-y-3.5 list-none">
                                <li className="flex gap-2">
                                  <span className="text-[#e0b024] font-bold">✓</span>
                                  <span>Ghostwritten and edited over <strong>25+ books</strong> in various faith-based, memoir, and children's genres.</span>
                                </li>
                                <li className="flex gap-2">
                                  <span className="text-[#e0b024] font-bold">✓</span>
                                  <span>Helped authors in <strong>Nigeria, the United Kingdom, and the United States</strong> publish with confidence.</span>
                                </li>
                                <li className="flex gap-2">
                                  <span className="text-[#e0b024] font-bold">✓</span>
                                  <span>Trained over <strong>15+ aspiring writers</strong> and content creators through personalized private coaching.</span>
                                </li>
                              </ul>
                              
                              <ul className="space-y-3.5 list-none">
                                <li className="flex gap-2">
                                  <span className="text-[#e0b024] font-bold">✓</span>
                                  <span>Created powerful stories and content for social campaigns, faith-based movements, and trauma healing projects.</span>
                                </li>
                                <li className="flex gap-2">
                                  <span className="text-[#e0b024] font-bold">✓</span>
                                  <span>Serves as the creative hand behind many <strong>viral and deeply resonant posts</strong> across Facebook, Instagram, and LinkedIn timelines.</span>
                                </li>
                              </ul>
                            </div>

                            <p className="font-serif italic text-xs text-[#e0b024] mt-6 border-t border-white/10 pt-4">
                              Featured Works Cataloged: Spiritual Sentinels, The Beautiful Side of the Pain, What is on Your Plate?, Jesus is the Balm: From Pain to Purpose, About the Play, Grace to Grace, Brave Enough to Begin, Finding Me, The Hidden Gift, John, My 365 Days Faith Journal, The Son's Light.
                            </p>
                          </div>
                          <footer className="text-[9px] uppercase tracking-widest text-[#e0b024] border-t border-white/10 pt-4 mt-6 flex justify-between">
                            <span>Proven Impact Track</span>
                            <span>Fikky Write Consult</span>
                          </footer>
                        </div>
                      )
                    },
                    {
                      title: "Books We've Worked With",
                      bg: "bg-white",
                      text: "text-text-dark",
                      content: (
                        <div className="flex flex-col justify-between h-full min-h-[460px] md:min-h-[500px] p-8 md:p-14 border border-neutral-200">
                          <div>
                            <span className="text-[10px] font-bold text-primary uppercase tracking-widest block mb-1">PAGE 08</span>
                            <h2 className="font-serif text-3xl font-bold border-b border-neutral-100 pb-3 mb-6 text-text-dark uppercase">Books &amp; Brands Worked With</h2>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs font-sans text-text-muted leading-relaxed">
                              <div className="space-y-2">
                                <span className="text-[10px] font-bold text-primary tracking-widest uppercase block mb-1">PROMINENT PORTFOLIO COVERS</span>
                                <p className="italic text-text-dark font-medium font-serif text-sm">
                                  Crushed, Mountain Top Devotional, Dear Mummy, 365 Days Journal of Faith, From Grass to Grace, Loving Mr. Right, In the Sonslight, Promise Keepers, 18 Years and a Day, Is Disability Truly A Burden?, Where Do We Go From Here?, Charityes Garden of Friends, etc.
                                </p>
                                <p className="pt-2 text-[11px]">
                                  We specialize in devotionals, memoirs, trauma healing journals, academic and children's literature with beautiful typography.
                                </p>
                              </div>
                              <div className="space-y-2 bg-neutral-50 p-5 border border-neutral-200">
                                <span className="text-[10px] font-bold text-primary tracking-widest uppercase block mb-1">THOUGHT LEADERS &amp; AUTHORS COHORTS</span>
                                <p className="text-[11px] leading-relaxed">
                                  We have had the absolute privilege of working with leading thinkers and leaders including:
                                </p>
                                <p className="font-serif italic text-text-dark text-xs pt-1 leading-relaxed">
                                  Ta'Niya Wallace, Dr. David Adeoye Abodunrin, Missionary Brenda Miller, Omole Oluwaseun Remilekun, Pastor Dayo Adeyemi, Barr. Olubunmi Babatunde, Helen Akinwande Fidelis, Dr. Peter Anosike, Pastor Shola Olayemi, Dr. Peter Asuata, and many more.
                                </p>
                              </div>
                            </div>
                          </div>
                          <footer className="text-[9px] uppercase tracking-widest text-text-light border-t border-neutral-100 pt-4 mt-6 flex justify-between">
                            <span>Authors Credentials</span>
                            <span>Fikky Write Consult</span>
                          </footer>
                        </div>
                      )
                    },
                    {
                      title: "Movements & Initiatives",
                      bg: "bg-[#002f75]",
                      text: "text-white",
                      content: (
                        <div className="flex flex-col justify-between h-full min-h-[460px] md:min-h-[500px] p-8 md:p-14">
                          <div>
                            <span className="text-[10px] font-bold text-[#e0b024] uppercase tracking-widest block mb-1">PAGE 09</span>
                            <h2 className="font-serif text-3xl font-bold border-b border-white/10 pb-3 mb-6">MOVEMENTS &amp; INITIATIVES</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs leading-relaxed pt-2">
                              <div className="border border-white/10 p-5 bg-white/5 space-y-2 rounded-xs">
                                <h4 className="font-serif text-md font-bold text-[#e0b024]">H.E.A.L Movement</h4>
                                <p className="text-[10px] text-neutral-300 uppercase tracking-wider font-semibold">Healed to Excel Above Limitations</p>
                                <p className="text-neutral-200 pt-1 text-[11px]">A highly critical trauma healing editorial, content campaign, and book writing initiative specifically addressing the deep-etched aftermath of childhood trauma.</p>
                              </div>

                              <div className="border border-white/10 p-5 bg-white/5 space-y-2 rounded-xs">
                                <h4 className="font-serif text-md font-bold text-[#e0b024]">Moments With Fikayomi</h4>
                                <p className="text-[10px] text-neutral-300 uppercase tracking-wider font-semibold font-medium">Spiritual Hope Platform</p>
                                <p className="text-neutral-200 pt-1 text-[11px]">A deeply inspirational media outlet distributing weekly notes, trauma survival diaries, and healing resources designed to anchor focus back onto deep faith.</p>
                              </div>

                              <div className="border border-white/10 p-5 bg-white/5 space-y-2 rounded-xs">
                                <h4 className="font-serif text-md font-bold text-[#e0b024]">Faith &amp; Writing Classes</h4>
                                <p className="text-[10px] text-neutral-300 uppercase tracking-wider font-semibold">Writers Accountability Mentoring</p>
                                <p className="text-neutral-200 pt-1 text-[11px]">Specialized development cohorts, structured clarity coaching, and accountability classes designed for Christian authors and writers-in-waiting.</p>
                              </div>
                            </div>
                          </div>
                          <footer className="text-[9px] uppercase tracking-widest text-[#e0b024] border-t border-white/10 pt-4 mt-6 flex justify-between">
                            <span>Impact Initiatives</span>
                            <span>Fikky Write Consult</span>
                          </footer>
                        </div>
                      )
                    },
                    {
                      title: "Our Founder",
                      bg: "bg-white",
                      text: "text-text-dark",
                      content: (
                        <div className="flex flex-col justify-between h-full min-h-[460px] md:min-h-[500px] p-8 md:p-14 border border-neutral-200">
                          <div>
                            <span className="text-[10px] font-bold text-primary uppercase tracking-widest block mb-1">PAGE 10</span>
                            <h2 className="font-serif text-3xl font-bold border-b border-neutral-100 pb-3 mb-6 text-text-dark">OUR FOUNDER: AARON FIKAYOMI</h2>
                            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center text-xs text-text-muted leading-relaxed">
                              {/* Left small avatar */}
                              <div className="md:col-span-4 max-h-[160px] overflow-hidden border border-neutral-200 shadow-xs rounded-sm">
                                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYQbTW_vMUvG7zOIN9PMGRt9ATXMZnU3rTVf8vn9ik-OQK1YIdzw-ck6Xr-v3ZxEiv2N_wV4IKbu-e9fEJ4ReYRB78bCFZz6xx-6iPitMKS_YloKf2BH5heyBiWoKEheExzTxvlXWugIbEajEdo8y16CJGuRlV-fymZEWXXmEVIxmg1qEW4FRLk8G-WDSz5YQHOHZLc31ky7Z7hN_uEY_xeA1meh86aHGw9qowElXB2JRNvGjfwS0P6RBEyfpiDiQDyd0m6JJZqYE" alt="Aaron Fikayomi" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                              </div>
                              <div className="md:col-span-8 space-y-3">
                                <p className="font-serif italic text-primary text-sm font-semibold">
                                  "She has turned her physical limitations into a lighthouse — helping others birth their stories, heal through writing, and walk in purpose."
                                </p>
                                <p>
                                  <strong>Aaron Fikayomi</strong> is a multi-award-winning writer, professional book manuscript editor, and ghostwriter living with a physical disability that affects her mobility.
                                </p>
                                <p>
                                  Through Fikky Write Consult, she serves as a tireless 'literary midwife' utilizing a structured speech-to-text voice capture methodology. Her writing is raw, faith-filled, emotionally intelligent, and deeply compassionate. She leads every single project with a sense of mission and unshakeable confidence.
                                </p>
                              </div>
                            </div>
                          </div>
                          <footer className="text-[9px] uppercase tracking-widest text-text-light border-t border-neutral-100 pt-4 mt-6 flex justify-between">
                            <span>Our Visionary Leader</span>
                            <span>Service Guide Page 10</span>
                          </footer>
                        </div>
                      )
                    },
                    {
                      title: "Let's Work Together",
                      bg: "bg-[#002f75]",
                      text: "text-white",
                      content: (
                        <div className="flex flex-col justify-between h-full min-h-[460px] md:min-h-[500px] p-8 md:p-14">
                          <div>
                            <span className="text-[10px] font-bold text-[#e0b024] uppercase tracking-widest block mb-1">PAGE 11</span>
                            <h2 className="font-serif text-3xl font-bold border-b border-white/10 pb-3 mb-6">LET'S WORK TOGETHER</h2>
                            <div className="max-w-3xl space-y-6 pt-4">
                              <p className="font-serif text-2xl font-medium leading-relaxed italic text-[#e0b024]">
                                "Do you have an untold story to share with the universe? A textbook to publish? A voice that needs clarity and structure?"
                              </p>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs text-neutral-200">
                                <p>
                                  We're fully equipped and ready to support you. We hold deep accountability meetings, weekly voice capture calls, and handle every design, layout, typesetting, editing, and distribution milestone so you can stay focus on your leadership scope.
                                </p>
                                <p>
                                  Whether you are unsure about the writer within you, needing simple roadmaps for a first draft, or looking to level up your writing to a professional enterprise, Fikky Write Consult is your premier advisory.
                                </p>
                              </div>
                            </div>
                          </div>
                          <footer className="text-[9px] uppercase tracking-widest text-[#e0b024] border-t border-white/10 pt-4 mt-6 flex justify-between">
                            <span>Commitment Guide</span>
                            <span>Fikky Write Consult</span>
                          </footer>
                        </div>
                      )
                    },
                    {
                      title: "Client Feedback",
                      bg: "bg-white",
                      text: "text-text-dark",
                      content: (
                        <div className="flex flex-col justify-between h-full min-h-[460px] md:min-h-[500px] p-8 md:p-14 border border-neutral-200">
                          <div>
                            <span className="text-[10px] font-bold text-primary uppercase tracking-widest block mb-1">PAGE 12</span>
                            <h2 className="font-serif text-3xl font-bold border-b border-neutral-100 pb-3 mb-6 text-text-dark">WHAT OUR CLIENTS SAY</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-[10px] md:text-[11px] text-text-muted italic leading-normal pt-1 font-serif">
                              <div className="space-y-3">
                                <p className="border-l-2 border-primary pl-4">
                                  “Aaron made my story come alive with authenticity and grace. I will recommend Fikky Write Consult to any author.”
                                  <span className="block text-[8.5px] font-sans font-bold uppercase tracking-widest text-text-dark not-italic mt-0.5">— Memoir Client</span>
                                </p>
                                <p className="border-l-2 border-primary pl-4">
                                  "She doesn't just edit; she helps you hear your own voice more clearly, capturing conversational rhythms perfectly."
                                  <span className="block text-[8.5px] font-sans font-bold uppercase tracking-widest text-text-dark not-italic mt-0.5">— Corporate Executive</span>
                                </p>
                                <p className="border-l-2 border-primary pl-4">
                                  "Working with her was healing in itself. She understood my pain and helped me tell my truth."
                                  <span className="block text-[8.5px] font-sans font-bold uppercase tracking-widest text-text-dark not-italic mt-0.5">— Trauma Survivor & Author</span>
                                </p>
                              </div>
                              <div className="space-y-4">
                                <p className="border-l-2 border-primary pl-4">
                                  "She’s a bundle of talent. I always love working with her."
                                  <span className="block text-[8.5px] font-sans font-bold uppercase tracking-widest text-text-dark not-italic mt-0.5">— Client Review</span>
                                </p>
                                <p className="border-l-2 border-primary pl-4">
                                  "I always love working with you because you are fast and you understand the concept I want for my books. Thank you."
                                  <span className="block text-[8.5px] font-sans font-bold uppercase tracking-widest text-text-dark not-italic mt-0.5">— Returning Author &amp; Selar Publisher</span>
                                </p>
                              </div>
                            </div>
                          </div>
                          <footer className="text-[9px] uppercase tracking-widest text-text-light border-t border-neutral-100 pt-4 mt-6 flex justify-between">
                            <span>Endorsements Records</span>
                            <span>Service Guide Page 12</span>
                          </footer>
                        </div>
                      )
                    },
                    {
                      title: "Payment & Pricing",
                      bg: "bg-[#002f75]",
                      text: "text-white",
                      content: (
                        <div className="flex flex-col justify-between h-full min-h-[460px] md:min-h-[500px] p-8 md:p-14">
                          <div>
                            <span className="text-[10px] font-bold text-[#e0b024] uppercase tracking-widest block mb-1">PAGE 13</span>
                            <h2 className="font-serif text-3xl font-bold border-b border-white/10 pb-3 mb-6">PAYMENT &amp; PRICING</h2>
                            <div className="max-w-2xl space-y-6 pt-4">
                              <p className="font-serif text-xl italic text-neutral-200">
                                Pricing varies based on project scope, word counts, difficulty, and timeline. We offer highly flexible payment terms structured to comfortably meet your fiscal flow.
                              </p>
                              <div className="border border-white/10 p-6 bg-white/5 rounded-xs">
                                <h4 className="font-serif text-md font-bold text-[#e0b024] mb-2">Request Our Service Rate Card</h4>
                                <p className="text-xs text-neutral-200 leading-relaxed">
                                  Want to explore our detailed ghostwriting packs and editorial milestone retainer fees? Kindly send an inquiry form or launch our direct email communication line to receive the complete, itemized Service Rate Card containing all packages.
                                </p>
                              </div>
                            </div>
                          </div>
                          <footer className="text-[9px] uppercase tracking-widest text-[#e0b024] border-t border-white/10 pt-4 mt-6 flex justify-between">
                            <span>Financial Terms</span>
                            <span>Rate Card Available on Request</span>
                          </footer>
                        </div>
                      )
                    },
                    {
                      title: "Thank You",
                      bg: "bg-[#002f75]",
                      text: "text-white",
                      content: (
                        <div className="flex flex-col justify-between h-full min-h-[460px] md:min-h-[500px] p-8 md:p-14 text-center items-center relative overflow-hidden">
                          <div className="absolute top-4 left-4">
                            <img src="https://i.postimg.cc/K8FsPKQ5/logo.png" alt="Logo" className="h-[55px] object-contain filter brightness-110" referrerPolicy="no-referrer" />
                          </div>
                          
                          <div className="my-auto space-y-6 max-w-2xl">
                            <span className="text-xs uppercase tracking-widest font-bold text-[#e0b024] block">THANK YOU FOR YOUR TRUST</span>
                            <h2 className="font-serif text-3xl md:text-5xl font-bold leading-tight">
                              LET'S BRING YOUR <br />
                              <span className="text-[#e0b024] font-serif font-semibold italic">BOOK TO LIFE!</span>
                            </h2>
                            <p className="font-sans text-xs md:text-sm text-neutral-300 max-w-lg mx-auto leading-relaxed">
                              Thank you for considering Fikky Write Consult to be part of your monumental writing journey. We look forward to working with you and helping your words make a lasting impact.
                            </p>
                          </div>

                          <div className="border-t border-white/10 pt-6 mt-6 w-full text-center text-[10px] text-neutral-400 font-sans tracking-widest flex flex-col md:flex-row justify-between uppercase">
                            <span>FIKKY WRITE CONSULT</span>
                            <span>© 2026 GENERAL SERVICES BLUEPRINT</span>
                            <span>STRICTLY CONFIDENTIAL</span>
                          </div>
                        </div>
                      )
                    }
                  ];

                  // We provide TWO representations:
                  // 1) An interactive slide deck visible on screen
                  // 2) A linear, document-ready multi-page flow visible during browser printing (no-prints are handled dynamically)
                  return (
                    <>
                      {/* 1) Dynamic Slide Deck representation */}
                      <div className="flex-1 p-6 md:p-8 bg-neutral-100 flex flex-col justify-center items-center no-print">
                        <div className={`w-full max-w-3xl aspect-[16/10] sm:aspect-[16/9.5] shadow-xl ${slidesData[activeSlide].bg} ${slidesData[activeSlide].text} transition-all duration-300 rounded-sm`}>
                          {slidesData[activeSlide].content}
                        </div>

                        {/* Slide Pagination Toolbar */}
                        <div className="w-full max-w-3xl mt-6 flex items-center justify-between no-print">
                          <div className="flex gap-2">
                            <button
                              id="prev-slide-btn"
                              disabled={activeSlide === 0}
                              onClick={() => setActiveSlide(prev => Math.max(0, prev - 1))}
                              className="bg-white hover:bg-neutral-50 text-text-dark border border-neutral-300 p-2.5 outline-none cursor-pointer transition-colors disabled:opacity-40 disabled:cursor-not-allowed rounded-xs"
                            >
                              <ChevronLeft className="w-4 h-4" />
                            </button>
                            <button
                              id="next-slide-btn"
                              disabled={activeSlide === slidesData.length - 1}
                              onClick={() => setActiveSlide(prev => Math.min(slidesData.length - 1, prev + 1))}
                              className="bg-white hover:bg-neutral-50 text-text-dark border border-neutral-300 p-2.5 outline-none cursor-pointer transition-colors disabled:opacity-40 disabled:cursor-not-allowed rounded-xs"
                            >
                              <ChevronRight className="w-4 h-4" />
                            </button>
                          </div>

                          <div className="text-xs font-sans text-text-muted">
                            Slide <strong className="text-text-dark">{activeSlide + 1}</strong> of <strong>{slidesData.length}</strong>: {slidesData[activeSlide].title}
                          </div>

                          <div className="hidden sm:block text-[10px] font-mono text-neutral-400 uppercase tracking-widest">
                            {slidesData[activeSlide].bg === "bg-[#002f75]" ? "Premium Navy Theme" : "Aesthetic Light Theme"}
                          </div>
                        </div>
                      </div>

                      {/* 2) Printed Linear Deck - Only rendered under print command, separated by page-breaks */}
                      <div className="hidden print-block print:block space-y-0" id="print-compilation-vault">
                        {slidesData.map((slide, sIdx) => (
                          <div
                            key={sIdx}
                            className={`w-full h-screen aspect-[16/9] page-break p-10 flex flex-col justify-between ${slide.bg} ${slide.text} box-border border-b border-dashed border-neutral-300`}
                            style={{ pageBreakAfter: 'always', breakAfter: 'page' }}
                          >
                            {slide.content}
                          </div>
                        ))}
                      </div>
                    </>
                  );
                })()}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
