/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const PageTransition = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    className="w-full"
  >
    {children}
  </motion.div>
);

export default function App() {
  const location = useLocation();

  return (
    <div id="app-root-container" className="min-h-screen bg-surface-bg text-text-dark font-sans antialiased selection:bg-primary selection:text-white flex flex-col">
      {/* Sticky Top Header */}
      <Navbar />

      {/* Main Content Layout Block */}
      <main id="main-content-flow" className="flex-grow pt-24">
        <AnimatePresence mode="wait">
          <Routes location={location}>
            {/* Home Route */}
            <Route path="/" element={<PageTransition><Hero /></PageTransition>} />
            
            {/* Dedicated Individual Pages */}
            <Route path="/about" element={<PageTransition><About /></PageTransition>} />
            <Route path="/services" element={<PageTransition><Services /></PageTransition>} />
            <Route path="/portfolio" element={<PageTransition><Portfolio /></PageTransition>} />
            <Route path="/testimonials" element={<PageTransition><Testimonials /></PageTransition>} />
            <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
          </Routes>
        </AnimatePresence>
      </main>

      {/* Dynamic footer branding */}
      <Footer />
    </div>
  );
}

