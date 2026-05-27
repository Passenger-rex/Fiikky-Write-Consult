/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [activeSection, setActiveSection] = useState<string>("hero");

  // Smooth scroll helper
  const navigateToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100; // Account for sticky navbar height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  // Track scroll position to update active nav section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "services", "portfolio", "testimonials", "contact"];
      const scrollPos = window.scrollY + 200; // Offset for tracking margin

      for (let i = 0; i < sections.length; i++) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div id="app-root-container" className="min-h-screen bg-surface-bg text-text-dark font-sans antialiased selection:bg-primary selection:text-white">
      {/* Sticky Top Header */}
      <Navbar onNavigate={navigateToSection} activeSection={activeSection} />

      {/* Main Content Layout Block */}
      <main id="main-content-flow">
        {/* Hero Banner Section */}
        <Hero onNavigate={navigateToSection} />

        {/* Narrative bio/Visionary About area with Interactive workflows */}
        <About />

        {/* Services displaying pricing/estimator panel */}
        <Services />

        {/* Portfolios gallery displaying story case review and Ledger Generator */}
        <Portfolio />

        {/* Classy Testimonials blockquotes */}
        <Testimonials />

        {/* Contact area prefilled from estimators & Calendar slots scheduling */}
        <Contact />
      </main>

      {/* Dynamic footer branding */}
      <Footer />
    </div>
  );
}

