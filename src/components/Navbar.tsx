import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top when location changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const navItems = [
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "Contact", path: "/contact" },
  ];

  const logoUrl = "https://i.postimg.cc/K8FsPKQ5/logo.png";

  return (
    <>
      <nav
        id="navbar"
        className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
          scrolled
            ? "bg-white py-4 shadow-sm border-neutral-200"
            : "bg-surface-bg py-6 border-transparent"
        }`}
      >
        <div className="flex justify-between items-center max-w-[1200px] mx-auto px-6 md:px-8">
          <Link
            id="nav-logo-link"
            to="/"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 group focus:outline-none"
          >
            <img
              id="nav-logo-img"
              alt="FIKKY WRITE CONSULT"
              className="object-contain h-[64px] transition-all duration-300 group-hover:scale-102"
              src={logoUrl}
              referrerPolicy="no-referrer"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                id={`nav-link-${item.path.substring(1)}`}
                to={item.path}
                className={({ isActive }) => 
                  `text-sm tracking-widest uppercase transition-colors duration-200 font-medium pb-1 border-b-2 ${
                    isActive
                      ? "text-primary border-primary"
                      : "text-neutral-600 hover:text-primary border-transparent"
                  }`
                }
              >
                {item.name}
              </NavLink>
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
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-neutral-900/60 backdrop-blur-sm z-[60] md:hidden"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              id="mobile-menu-drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 250, mass: 0.9 }}
              className="fixed top-0 right-0 h-full w-[85%] max-w-[400px] bg-white shadow-2xl z-[70] md:hidden flex flex-col justify-center items-center"
            >
              <button
                id="mobile-menu-close-btn"
                onClick={() => setIsOpen(false)}
                className="absolute top-6 right-6 p-3 text-text-dark hover:text-primary transition-colors focus:outline-none bg-neutral-50 hover:bg-neutral-100 rounded-full"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="flex flex-col items-center space-y-6 w-full px-8">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  <Link
                    id="mobile-nav-link-home"
                    to="/"
                    onClick={() => setIsOpen(false)}
                    className={`text-2xl font-serif tracking-wide transition-colors duration-200 block py-2 ${
                      location.pathname === "/" ? "text-primary font-bold italic" : "text-text-dark hover:text-primary"
                    }`}
                  >
                    Home
                  </Link>
                </motion.div>
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3, delay: 0.1 + (i + 1) * 0.05 }}
                  >
                    <NavLink
                      id={`mobile-nav-link-${item.path.substring(1)}`}
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={({ isActive }) => 
                        `text-2xl font-serif tracking-wide transition-colors duration-200 block py-2 ${
                          isActive
                            ? "text-primary font-bold italic"
                            : "text-text-dark hover:text-primary"
                        }`
                      }
                    >
                      {item.name}
                    </NavLink>
                  </motion.div>
                ))}
              </div>
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="absolute bottom-12 text-center"
              >
                <p className="text-[10px] font-sans tracking-widest uppercase text-text-muted">
                  Fikky Write Consult
                </p>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
