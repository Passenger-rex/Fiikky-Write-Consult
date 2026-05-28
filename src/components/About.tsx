import React, { useState } from "react";
import { ArrowRight, ChevronRight, PenTool, Radio, Layout, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import CountUp from "./CountUp";

export default function About() {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [showProcess, setShowProcess] = useState<boolean>(false);

  const steps = [
    {
      title: "01. Manuscript Auditing & Clarity Sessions",
      subtitle: "IP Extraction & Ideation Strategy",
      description: "We conduct deep strategic clarity consultations to audit raw manuscripts and extract your authentic voice, unique conversational vocabulary, and core messages. This establishes the vital intellectual property foundation for your literary project.",
      icon: <Radio className="w-5 h-5 text-primary" />,
      tag: "Vigorously capturing organic author voice"
    },
    {
      title: "02. Developmental Co-Creation",
      subtitle: "Structuring Elegant Frameworks",
      description: "Our core developmental process formats your ideas into a rigorous layout design and narrative blueprint. We construct exhaustive chapter outlines to maintain compelling structural flows and professional readability.",
      icon: <Layout className="w-5 h-5 text-primary" />,
      tag: "Building professional-grade architecture"
    },
    {
      title: "03. Book Coaching & Mentoring",
      subtitle: "The Profitable Penman Standard",
      description: "Rooted in our signature 'Profitable Penman' guidelines, we mentor and collaborate closely with busy leaders, authors, and corporate visionaries, meticulously crafting chapters with consistent feedback loops.",
      icon: <PenTool className="w-5 h-5 text-primary" />,
      tag: "Guiding drafts to executive excellence"
    },
    {
      title: "04. Global Launch & Distribution",
      subtitle: "KDP Publishing, Printing & ISBNs",
      description: "We navigate complete publishing execution—including high-end interior typesetting, international ISBN registration, Kindle Direct Publishing (KDP) setups, print negotiation, and direct global distribution channels.",
      icon: <CheckCircle className="w-5 h-5 text-primary" />,
      tag: "Launching masterpieces onto searchlists"
    }
  ];

  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-8 bg-surface-low border-b border-neutral-200">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Profile image container with geometric outline decoration with scroll animation */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative group" 
            id="about-image-wrapper"
          >
            <div className="aspect-[4/5] overflow-hidden border border-neutral-200 shadow-sm">
              <img
                id="about-profile-img"
                alt="Aaron Fikayomi"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-103"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYQbTW_vMUvG7zOIN9PMGRt9ATXMZnU3rTVf8vn9ik-OQK1YIdzw-ck6Xr-v3ZxEiv2N_wV4IKbu-e9fEJ4ReYRB78bCFZz6xx-6iPitMKS_YloKf2BH5heyBiWoKEheExzTxvlXWugIbEajEdo8y16CJGuRlV-fymZEWXXmEVIxmg1qEW4FRLk8G-WDSz5YQHOHZLc31ky7Z7hN_uEY_xeA1meh86aHGw9qowElXB2JRNvGjfwS0P6RBEyfpiDiQDyd0m6JJZqYE"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Elegant off-center border element representing print frames */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 border border-primary/20 -z-10 hidden md:block"></div>
          </motion.div>

          {/* Biography content with scroll animation */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 space-y-8" 
            id="about-content-wrapper"
          >
            <span className="font-sans text-xs uppercase tracking-widest font-semibold text-primary block">
              The Visionary Founder
            </span>
            
            <h2 id="about-title" className="font-serif text-3xl md:text-5xl text-text-dark leading-tight font-bold tracking-tight">
              Aaron Fikayomi: The Architect of Literary Legacies
            </h2>
            
            <div id="about-description" className="font-sans text-text-muted space-y-6 leading-relaxed">
              <p>
                Aaron Fikayomi is a multi-award-winning writer, author, and ghostwriter living with a physical disability that affects her mobility. Through Fikky Write Consult, she has turned her limitations into a lighthouse, helping others birth their stories, heal through writing, and walk in purpose with confidence.
              </p>
              <p>
                Her writing is raw, faith-filled, emotionally intelligent, and deeply compassionate. She leads every project with a sense of mission and creativity that reflects her personal journey and her unshakable belief that words can heal. At the intersection of storytelling, healing, and purpose-driven publishing, she guides clients to birth timeless masterpieces.
              </p>
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <button
                id="toggle-process-btn"
                onClick={() => setShowProcess(!showProcess)}
                className="font-sans text-xs uppercase font-bold text-text-dark border-b-2 border-primary pb-2 hover:text-primary transition-colors inline-flex items-center gap-2 group cursor-pointer"
              >
                {showProcess ? "Hide Editorial Process" : "Our Editorial Process"}
                <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1.5 transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>

        {/* Dynamic Specialty, Vision & Mission Section extracted from PDF with scroll animation */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-left" 
          id="about-pillars-container"
        >
          <div className="p-8 bg-white border border-neutral-200/80 shadow-xs space-y-4">
            <span className="text-[10px] font-bold text-primary tracking-widest uppercase block">01. Our Specialty</span>
            <h3 className="font-serif text-2xl font-bold text-text-dark">Midwifing Sacred Messages</h3>
            <p className="font-sans text-xs text-text-muted leading-relaxed">
              We specialize in Ghostwriting, Content Creation, Editing, Coaching, and Digital Publishing across Nigeria, the United States, and the United Kingdom. Whether navigating a painful past, sharing a faith journey, or building a brand voice, we midwife your message with excellence, empathy, and spiritual sensitivity.
            </p>
          </div>
          
          <div className="p-8 bg-white border border-neutral-200/80 shadow-xs space-y-4">
            <span className="text-[10px] font-bold text-primary tracking-widest uppercase block">02. Our Vision</span>
            <h3 className="font-serif text-2xl font-bold text-text-dark">Timeless Impact</h3>
            <p className="font-sans text-xs text-text-muted leading-relaxed">
              Dedicated to helping individuals share their stories and publish their books with ease. Our team guides clients through every step, offering hands-on support and training to develop professional writing skills, aiming to create timeless works that leave a lasting impact on the world.
            </p>
          </div>

          <div className="p-8 bg-white border border-neutral-200/80 shadow-xs space-y-4">
            <span className="text-[10px] font-bold text-primary tracking-widest uppercase block">03. Our Mission</span>
            <h3 className="font-serif text-2xl font-bold text-text-dark">Creative Support</h3>
            <p className="font-sans text-xs text-text-muted leading-relaxed">
              To support individuals in achieving their writing and publishing goals by providing creative, engaging, and enlightening expert services that nurture ideas into completed publications of immense intellectual worth.
            </p>
          </div>
        </motion.div>

        {/* Impact Metrics Component */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <CountUp
            end={25}
            suffix="+"
            title="Books Authored & Edited"
            description="Ghostwritten and edited works published with confidence in various genres across Nigeria, the UK, and the USA."
          />
          <CountUp
            end={15}
            suffix="+"
            title="Writers Trained"
            description="Aspiring writers and content creators trained through personalized, hands-on writing coaching and mentoring."
          />
          <CountUp
            end={100}
            suffix="+"
            title="Impactful Post & Campaigns"
            description="Created powerful stories and viral content for social impact, faith-based movements, and trauma healing projects."
          />
        </motion.div>

        {/* Dynamic Interactive Editorial Process component */}
        <AnimatePresence>
          {showProcess && (
            <motion.div
              id="about-process-container"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-20 pt-12 border-t border-neutral-300 overflow-hidden"
            >
              <div className="text-center md:text-left mb-12">
                <span className="text-xs font-semibold uppercase tracking-widest text-primary">Workflow Excellence</span>
                <p className="text-neutral-500 text-sm mt-4">Four rigorous stages from capturing voice to global publication.</p>
              </div>

              {/* Grid-based flow layout */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4" id="about-process-grid">
                {steps.map((step, idx) => (
                  <div
                    key={idx}
                    onClick={() => setActiveTab(idx)}
                    className={`p-6 border text-left transition-all duration-300 cursor-pointer ${
                      activeTab === idx
                        ? "border-primary bg-white shadow-sm"
                        : "border-neutral-200 hover:border-neutral-400 bg-neutral-50/50"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-4">
                      {step.icon}
                      <span className="font-serif text-sm text-neutral-400 font-medium">Phase 0{idx + 1}</span>
                    </div>
                    <h4 className="font-serif text-md text-text-dark font-bold font-semibold mb-2">{step.subtitle}</h4>
                    <p className="text-xs text-neutral-400 line-clamp-2 md:line-clamp-3">{step.title}</p>
                  </div>
                ))}
              </div>

              {/* Active step narrative focus details */}
              <div className="mt-8 bg-white border border-neutral-200 p-8 flex flex-col md:flex-row gap-8 items-center justify-between shadow-sm">
                <div className="space-y-3 max-w-3xl text-left">
                  <span className="text-xs bg-blue-50 text-primary px-3 py-1 font-sans uppercase font-semibold border border-blue-200">
                    {steps[activeTab].subtitle}
                  </span>
                  <p className="font-serif text-lg md:text-xl font-bold text-text-dark pt-1">
                    {steps[activeTab].title}
                  </p>
                  <p className="font-sans text-sm text-text-muted leading-relaxed">
                    {steps[activeTab].description}
                  </p>
                </div>
                <div className="w-full md:w-auto shrink-0 bg-neutral-50 p-6 border border-neutral-200 self-stretch flex flex-col justify-center text-left">
                  <p className="font-serif text-sm font-bold text-text-dark italic">
                    "{steps[activeTab].tag}"
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Movements and Initiatives from Page 9 of PDF with scroll animation */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mt-24 border-t border-neutral-200 pt-20 text-left" 
          id="about-movements-section"
        >
          <div className="max-w-3xl mb-12">
            <span className="text-xs uppercase tracking-widest text-primary font-bold block mb-2">Social &amp; Spiritual Impact</span>
            <h3 className="font-serif text-3xl md:text-4xl text-text-dark font-bold">Movements &amp; Initiatives We Lead</h3>
            <p className="font-sans text-xs text-text-muted mt-2 leading-relaxed">
              We also lead and support socially impactful storytelling campaigns that bring hope, faith, and transformation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" id="about-movements-grid">
            <div className="p-8 bg-neutral-50 border border-neutral-200 space-y-4 hover:border-primary/50 transition-colors">
              <h4 className="font-serif text-xl font-bold text-text-dark">H.E.A.L Movement</h4>
              <p className="font-sans text-[10px] font-bold text-primary tracking-widest uppercase mb-1">Healed to Excel Above Limitations</p>
              <p className="font-sans text-xs text-text-muted leading-relaxed">
                A highly-acclaimed trauma healing series and content campaign specifically designed to address and heal the lasting, hidden impact of childhood trauma in individuals.
              </p>
            </div>

            <div className="p-8 bg-neutral-50 border border-neutral-200 space-y-4 hover:border-primary/50 transition-colors">
              <h4 className="font-serif text-xl font-bold text-text-dark">Moments With Fikayomi</h4>
              <p className="font-sans text-[10px] font-bold text-primary tracking-widest uppercase mb-1">Hope &amp; Faith Platform</p>
              <p className="font-sans text-xs text-text-muted leading-relaxed">
                An inspirational platform offering hope, deep emotional healing, and narrative-based storytelling rooted in a personal place of faith and transformation.
              </p>
            </div>

            <div className="p-8 bg-neutral-50 border border-neutral-200 space-y-4 hover:border-primary/50 transition-colors">
              <h4 className="font-serif text-xl font-bold text-text-dark">Faith, Healing &amp; Writing</h4>
              <p className="font-sans text-[10px] font-bold text-primary tracking-widest uppercase mb-1">Author-in-Waiting Classes</p>
              <p className="font-sans text-xs text-text-muted leading-relaxed">
                Empowering workshops and custom writing classes curated for Christian writers, trauma survivors, and prospective author-in-waiting cohorts looking to hone their craft.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
