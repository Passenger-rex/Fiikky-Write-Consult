import React from "react";
import { BookOpen, PenTool, Globe, Printer, Volume2, Users, Award, Search, Sparkles, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Services() {
  const servicesList = [
    {
      title: "Ghostwriting",
      icon: <PenTool className="w-8 h-8 text-primary" />,
      description: "Nurturing ideas into finished manuscripts. Specializing in Memoirs, Devotionals, Faith-based Books, Children’s Stories, Healing Narratives, Comic Books, Novels, and more...",
      bullets: ["Authentic Voice-Capture", "Memoir & Legacy Structuring", "Faith & Devotional Curation"]
    },
    {
      title: "Book Editing",
      icon: <BookOpen className="w-8 h-8 text-primary" />,
      description: "Polishing drafts to industry perfection. We cover comprehensive Structural, Developmental, and line Copy Editing to maximize your storytelling flow.",
      bullets: ["Structural Realignment", "Developmental Rewriting", "Pristine Copy Polish"]
    },
    {
      title: "Content Creation",
      icon: <Sparkles className="w-8 h-8 text-primary" />,
      description: "Formulating compelling authority branding collateral, high-performance social media posts, reviews, blog articles, and consistent brand messaging.",
      bullets: ["Authority Branding Posts", "Blog Curation", "Resonant Brand Voice"]
    },
    {
      title: "Digital Publishing Support",
      icon: <Globe className="w-8 h-8 text-primary" />,
      description: "Directing publishing onboarding across global platforms including custom Amazon Kindle (KDP) setup, Selar Publishing, and international accounts configuration.",
      bullets: ["KDP Digital Account Setups", "Selar Integration", "Global Royalty Setup"]
    },
    {
      title: "Paperback & Hardcover Printing",
      icon: <Printer className="w-8 h-8 text-primary" />,
      description: "Coordinating physical production from interior typesetting and margin layout to premium paperback/hardcover print deliveries with global standard paperweights.",
      bullets: ["Interior Typeset Layout", "Paperweight Selection", "On-Demand Print Sourcing"]
    },
    {
      title: "Transcription Services",
      icon: <Volume2 className="w-8 h-8 text-primary" />,
      description: "Turning raw voice notes and unstructured audio clips into beautifully articulated, manuscript-ready material for fast editing and publishing.",
      bullets: ["Voice-to-Print Transcription", "Audio Narrative Extraction", "Structuring Raw Dictations"]
    },
    {
      title: "Book Coaching & Consultation",
      icon: <Users className="w-8 h-8 text-primary" />,
      description: "One-on-one professional coaching, writing accountability mentorship, and strategy sessions crafted explicitly for new and aspiring authors.",
      bullets: ["Weekly Accountability Loops", "Milestone Mapping", "Writing Blocks Breakthrough"]
    },
    {
      title: "Grant Writing & Review Writing",
      icon: <Award className="w-8 h-8 text-primary" />,
      description: "Strategic writing processes tailored for impact-driven goals, including professional grant proposals, application reviews, and promotional reports.",
      bullets: ["Impact-Driven Pitching", "Strategic Project Narrative", "Rigor Objective Audit"]
    },
    {
      title: "Research Writing",
      icon: <Search className="w-8 h-8 text-primary" />,
      description: "Formulating deeply structured, comprehensive, and well-detailed research documents, academic projects, and corporate assignments with pristine citations.",
      bullets: ["Exhaustive Literature Review", "Clear Data Synthesis", "Rigorous Citation Formatting"]
    }
  ];

  // Parent container animation parameters
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  // Card item individual animation parameters
  const cardVariants = {
    hidden: { opacity: 0, y: 24 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.95,
      transition: { duration: 0.15 }
    }
  };

  return (
    <section id="services" className="py-24 md:py-32 px-6 md:px-8 bg-white border-b border-neutral-200 overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Header section with minimal clean styling */}
        <div className="mb-14 text-left flex flex-col md:flex-row md:items-end justify-between gap-6" id="services-header-box">
          <div className="max-w-xl">
            <motion.span 
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-xs uppercase tracking-widest text-primary font-semibold block mb-2"
            >
              Exquisite Editorial Offerings
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              id="services-title" 
              className="font-serif text-3xl md:text-5xl text-text-dark font-bold mb-4"
            >
              Our Core Services
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              id="services-subtitle" 
              className="font-sans text-xs md:text-sm text-text-muted leading-relaxed"
            >
              Meticulous support for every stage of your creative and professional writing journey, extracted directly from our Service Guide. We support authors globally.
            </motion.p>
          </div>
        </div>

        {/* 9 Column Grid for services with dynamic motion transitions */}
        <motion.div 
          layout="position"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" 
          id="services-cards-grid"
        >
          <AnimatePresence mode="popLayout">
            {servicesList.map((service) => (
              <motion.div
                layout
                variants={cardVariants}
                initial="hidden"
                animate="show"
                exit="exit"
                whileHover={{ y: -8, shadow: "0 12px 30px -10px rgba(0,0,0,0.08)" }}
                key={service.title}
                className="group p-8 border border-neutral-200 hover:border-primary/60 transition-colors duration-300 bg-neutral-50/20 text-left flex flex-col justify-between shadow-xs select-none relative overflow-hidden"
              >
                {/* Visual ink border accent list */}
                <div className="absolute top-0 left-0 w-1.5 h-0 bg-primary group-hover:h-full transition-all duration-300"></div>

                <div>
                  <motion.div 
                    className="mb-6"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="p-3 bg-neutral-50 border border-neutral-100 group-hover:bg-primary/5 group-hover:border-primary/20 transition-all rounded-xs inline-block">
                      {service.icon}
                    </div>
                  </motion.div>
                  <h3 className="font-serif text-xl font-bold mb-3 text-text-dark group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="font-sans text-xs text-text-muted mb-6 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <ul className="space-y-2.5 font-sans text-[10px] uppercase tracking-wider text-text-light border-t border-neutral-100 pt-5">
                  {service.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-center gap-2 group-hover:text-text-dark transition-colors">
                      <ChevronRight className="w-3 h-3 text-primary/70 shrink-0" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
