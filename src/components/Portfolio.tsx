import React, { useState } from "react";
import { PortfolioItem } from "../types";
import { Search, X, ArrowUpRight, BookOpen, Calendar, Download } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Portfolio() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);
  
  const [downloadUrl, setDownloadUrl] = useState<string>("/FIKKY.pdf");

  const portfolioItems: PortfolioItem[] = [
    {
      id: "jesus-is-the-balm",
      title: "Jesus is the Balm: From Pain to Purpose",
      author: "Brenda Miller",
      category: "Book Publishing",
      description: "An inspiring journey of moving from pain to purpose, finding grace through challenges.",
      image: "https://images-na.ssl-images-amazon.com/images/P/B0DY63B84N.01.LZZZZZZZ.jpg",
      imageAlt: "Jesus is the Balm Cover",
      fullStory: `A profoundly emotional and spiritually uplifting book by Brenda Miller focusing on navigating life's painful struggles and discovering true purpose through faith.`
    },
    {
      id: "crushed-a-testament-to-grace",
      title: "Crushed: A Testament to Grace",
      author: "Aaron Fikayomi",
      category: "Ghostwriting & Editing",
      description: "A testament to enduring grace, healing from trauma, and trusting the spiritual process.",
      image: "https://images-na.ssl-images-amazon.com/images/P/B0BVQHRXNX.01.LZZZZZZZ.jpg",
      imageAlt: "Crushed Cover",
      fullStory: `Written by Fikky Write Consult's founder Aaron Fikayomi, Crushed is a powerful narrative on overcoming the darkest trials of life by understanding and leaning into the limitless grace that restores us.`
    },
    {
      id: "dear-mummy",
      title: "Dear Mummy: Letters to my future children",
      author: "Fikayomi Aaron",
      category: "Content Strategy",
      description: "A beautiful collection of letters filled with wisdom and vulnerability.",
      image: "https://images-na.ssl-images-amazon.com/images/P/B08KNP7WTT.01.LZZZZZZZ.jpg",
      imageAlt: "Dear Mummy Cover",
      fullStory: `In this touching book, Fikayomi Aaron shares heartfelt letters meant for her future children, capturing vital life lessons, faith-filled advice, and inter-generational wisdom.`
    },
    {
      id: "promise-keepers",
      title: "Promise Keepers",
      author: "Akintunde Alexander Olanrewaju",
      category: "Publishing",
      description: "A deeply resonant book emphasizing the power and importance of keeping covenants.",
      image: "https://images-na.ssl-images-amazon.com/images/P/B0FR2L5PRJ.01.LZZZZZZZ.jpg",
      imageAlt: "Promise Keepers Cover",
      fullStory: `Expertly ghostwritten and published by Fikky Write Consult, Promise Keepers dives into the importance of integrity, covenant-keeping, and the foundational pillars of trust in both natural and spiritual relationships.`
    },
    {
      id: "finance-in-marriage",
      title: "Finance in Marriage",
      author: "Peter Asuata",
      category: "Co-Publishing",
      description: "Building and strengthening relationships through wise financial alignment.",
      image: "https://images-na.ssl-images-amazon.com/images/P/9785100804.01.LZZZZZZZ.jpg",
      imageAlt: "Finance in Marriage Cover",
      fullStory: `Finance in Marriage: Building and Strengthening Relationship is a practical guide layout exploring the intricacies of handling money within matrimony.`
    },
    {
      id: "365-faith-journal",
      title: "365 Days Faith Bucket Journal",
      author: "Fikayomi Aaron",
      category: "Design & Layout",
      description: "A daily devotional and journal mapping out 365 days of intentional faith-building exercises.",
      image: "https://images-na.ssl-images-amazon.com/images/P/B0CZLMKG6F.01.LZZZZZZZ.jpg",
      imageAlt: "Faith Bucket Journal Cover",
      fullStory: `A beautifully designed daily journal offering 365 reflections. Created with a strong focus on typography, usability, and inspiring interior page designs.`
    },
    {
      id: "submission-made-easy",
      title: "Submission Made Easy: A Handbook for Women",
      author: "Fikayomi Aaron",
      category: "Ghostwriting & Editing",
      description: "A thoughtful, contextual handbook exploring submission through a lens of grace.",
      image: "https://images-na.ssl-images-amazon.com/images/P/B0BWV333MY.01.LZZZZZZZ.jpg",
      imageAlt: "Submission Made Easy Cover",
      fullStory: `This handbook provides clarity on deeply misunderstood topics, using Aaron's signature emotionally-intelligent writing to address relationships from a faith-based perspective.`
    },
    {
      id: "the-sons-light",
      title: "The Son's Light",
      author: "Missionary Brenda Miller",
      category: "Book Publishing",
      description: "Devotional guidance and encouragement for staying in God's light.",
      image: "https://images-na.ssl-images-amazon.com/images/P/B0DRSXPPLX.01.LZZZZZZZ.jpg",
      imageAlt: "The Sons Light Cover",
      fullStory: `Working diligently with Missionary Brenda Miller to bring her devotional guidance and encouragement into a polished publication.`
    },
    {
      id: "18-years-and-a-day",
      title: "18 Years and a Day",
      author: "Aaron Fikayomi",
      category: "Memoir",
      description: "A personal timeline exploring life, healing, and moving forward.",
      image: "https://images-na.ssl-images-amazon.com/images/P/B0DXQ45G6Y.01.LZZZZZZZ.jpg",
      imageAlt: "18 Years and a Day Cover",
      fullStory: `A captivating timeline of life experiences and wisdom, professionally structured and formatted to guide the reader through an 18-year journey of transformation.`
    },
    {
      id: "is-disability-truly-a-burden",
      title: "Is Disability Truly A Burden?",
      author: "Fikayomi Aaron",
      category: "Social Impact Publishing",
      description: "Empowering perspectives on ability, purpose, and changing societal narratives.",
      image: "https://images-na.ssl-images-amazon.com/images/P/9786160118.01.LZZZZZZZ.jpg",
      imageAlt: "Is Disability Truly A Burden Cover",
      fullStory: `As a multi-award-winning author living with a physical disability, Aaron addresses the narrative around disability directly—teaching caregivers and people living with disabilities how to shift their mindset from burden to blessing.`
    },
    {
      id: "spiritual-sentinels",
      title: "Spiritual Sentinels - The Family Crusade",
      author: "Brenda Miller",
      category: "Book Publishing",
      description: "A clarion call for family intercession and spiritual guardianship.",
      image: "https://images-na.ssl-images-amazon.com/images/P/B0FGCG2724.01.LZZZZZZZ.jpg",
      imageAlt: "Spiritual Sentinels Cover",
      fullStory: `We edited and laid out this incredibly powerful book by Brenda Miller focusing on creating strong family intercessors and equipping readers for the spiritual frontline.`
    },
    {
      id: "charityes-garden",
      title: "Charitye's Garden of Friends",
      author: "Brenda Miller",
      category: "Children's Book Design",
      description: "A delightful story about friendship, faith, and growing together.",
      image: "https://images-na.ssl-images-amazon.com/images/P/B0DT3JSDDY.01.LZZZZZZZ.jpg",
      imageAlt: "Charitye's Garden Cover",
      fullStory: `A beautifully illustrated and designed children's book that helps instil core values of kindness, community, and friendship in younger readers.`
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
              Some of our published and ghostwritten works include: Crushed, Mountain Top Devotional, Dear Mummy, 365 Days Journal of Faith, From Grass to Grace, Loving Mr. Right, In the Sonslight, Promise Keepers, 18 Years and a Day, Is Disability Truly A Burden?, Where Do We Go From Here?, Charityes Garden of Friends, and more.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 items-center mt-6 md:mt-0">
            <a
              id="download-portfolio-btn"
              href={downloadUrl}
              download="FIKKY.pdf"
              className="bg-primary text-white hover:bg-primary-hover px-6 py-4 font-sans text-xs uppercase tracking-wider font-bold transition-all active:scale-[0.98] flex items-center justify-center w-full sm:w-auto gap-2 border border-primary outline-none cursor-pointer whitespace-nowrap"
            >
              <Download className="w-4 h-4" /> Download Portfolio
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
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.imageAlt}
                    className="w-full h-full object-cover blur-2xl scale-110 opacity-50 bg-black"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-neutral-900 via-neutral-900/60 to-transparent p-6 md:p-8 text-left h-full flex flex-col justify-end">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-black bg-white/90 px-2.5 py-1 rounded-sm inline-block self-start mb-2">
                      {selectedProject.category} Case Study
                    </span>
                    <h3 className="font-serif text-2xl md:text-3xl text-white font-bold mt-1">
                      {selectedProject.title}
                    </h3>
                    <p className="text-xs text-neutral-200 mt-2 font-medium">
                      Collaboratively led by Author <span className="text-white font-bold">{selectedProject.author}</span>
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
