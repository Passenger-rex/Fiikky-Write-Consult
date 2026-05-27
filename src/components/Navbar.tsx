import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
  activeSection: string;
}

export default function Navbar({ onNavigate, activeSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "About", id: "about" },
    { name: "Services", id: "services" },
    { name: "Portfolio", id: "portfolio" },
    { name: "Testimonials", id: "testimonials" },
    { name: "Contact", id: "contact" },
  ];

  const logoUrl = "https://i.postimg.cc/K8FsPKQ5/logo.png";

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setIsOpen(false);
  };

  return (
    <>
      <nav
        id="navbar"
        className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
          scrolled
            ? "bg-white/95 backdrop-blur-md py-4 shadow-sm border-neutral-200"
            : "bg-surface-bg/90 backdrop-blur-md py-6 border-outline-variant"
        }`}
      >
        <div className="flex justify-between items-center max-w-[1200px] mx-auto px-6 md:px-8">
          <a
            id="nav-logo-link"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick("hero");
            }}
            className="flex items-center gap-3 group focus:outline-none"
          >
            <img
              id="nav-logo-img"
              alt="FIKKY WRITE CONSULT"
              className="object-contain h-[64px] transition-all duration-300 group-hover:scale-102"
              src={logoUrl}
              referrerPolicy="no-referrer"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.id}
                id={`nav-link-${item.id}`}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(item.id);
                }}
                className={`text-sm tracking-widest uppercase transition-colors duration-200 font-medium ${
                  activeSection === item.id
                    ? "text-primary border-b-2 border-primary pb-1"
                    : "text-neutral-600 hover:text-primary pb-1 border-b-2 border-transparent"
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-neutral-800 hover:text-primary transition-colors focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu-overlay"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 bg-neutral-900 z-[60] flex flex-col items-center justify-center space-y-8 md:hidden"
          >
            <button
              id="mobile-menu-close-btn"
              onClick={() => setIsOpen(false)}
              className="absolute top-8 right-8 text-neutral-200 hover:text-white transition-colors focus:outline-none"
              aria-label="Close menu"
            >
              <X className="w-8 h-8" />
            </button>

            <div className="flex flex-col items-center space-y-8">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  id={`mobile-nav-link-${item.id}`}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(item.id);
                  }}
                  className={`text-2xl font-serif tracking-wide transition-colors duration-200 ${
                    activeSection === item.id
                      ? "text-blue-400 font-semibold"
                      : "text-neutral-300 hover:text-blue-400"
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
