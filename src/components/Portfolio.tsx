import React, { useState } from "react";
import { PortfolioItem } from "../types";
import { Search, X, ArrowUpRight, BookOpen, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Portfolio() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);

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
    const matchesKeyword = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesKeyword;
  });

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

      </div>
    </section>
  );
}
