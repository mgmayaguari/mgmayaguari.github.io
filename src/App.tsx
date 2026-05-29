import React, { useState } from "react";
import Hero from "./components/Hero";
import TechMatrix from "./components/TechMatrix";
import ExecutionLedger from "./components/ExecutionLedger";
import OpenSource from "./components/OpenSource";
import GlobalExplorer from "./components/GlobalExplorer";
import Footer from "./components/Footer";
import { Mail, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import Logo from "./components/Logo";

export default function App() {
  const activeTheme = "gold";
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const currentStyles = {
    "--color-gold": "#C5A059",
    "--color-gold-hover": "#D6B26A",
  } as React.CSSProperties;

  const navLinks = [
    { label: "About", href: "#hero-section" },
    { label: "Skills", href: "#tech-matrix-section" },
    { label: "Experience", href: "#experience-ledger-section" },
    { label: "Projects", href: "#curated-open-source-section" },
    { label: "Travels", href: "#global-explorer-section" },
  ];

  return (
    <div
      className="min-h-screen bg-charcoal text-slate-300 font-sans selection:bg-gold/35 selection:text-white antialiased transition-all duration-500"
      id="mgm-portfolio-root"
      style={currentStyles}
    >
      
      {/* Top Fixed Signature Bar */}
      <header className="fixed top-0 left-0 w-full z-50 bg-[#0B0C10]/85 backdrop-blur-md border-b border-onyx px-6 py-4" id="signature-nav-header">
        <div className="max-w-6xl mx-auto flex items-center justify-between" id="signature-nav-container">
          
          {/* Logo/Monogram & Mobile menu toggle */}
          <div className="flex items-center gap-3 select-none text-gold" id="nav-brand-logo">
            <div className="p-1 px-1.5 rounded-lg bg-onyx border border-gold/45 flex items-center justify-center shadow-md">
              <Logo className="w-6 h-6 text-gold" />
            </div>
            <span className="font-display font-bold text-sm text-white tracking-widest uppercase hidden xs:inline">
              MGML
            </span>
          </div>

          {/* Eye-Friendly Navigation Menu for Recruiters */}
          <nav className="hidden md:flex items-center gap-8 font-mono text-xs text-gray-400" id="header-nav-menu">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-gold border-b border-transparent hover:border-gold pb-0.5 transition-all duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Navigation Action */}
          <div className="flex items-center gap-3 sm:gap-4" id="nav-actions">
            <a 
              href="mailto:mayaguarimichael@gmail.com" 
              className="text-xs font-mono font-medium text-gold hover:text-white flex items-center gap-1.5 px-4 py-2 rounded-lg bg-gold/10 hover:bg-gold border border-gold/25 hover:border-gold hover:text-black transition-all duration-300 shadow-md"
              id="nav-cta-email"
            >
              <Mail className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Inquire</span>
            </a>

            {/* Mobile Menu Button - Masterfully Integrated */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-onyx border border-onyx/85 hover:border-gold/40 text-gray-400 hover:text-gold transition-all duration-300 flex items-center justify-center"
              aria-label="Toggle navigation menu"
              id="mobile-menu-toggle-btn"
            >
              {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>

        </div>
      </header>

      {/* Advanced Mobile Dropdown Overlay Sheet */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="fixed top-[69px] left-0 w-full z-45 bg-[#0B0C10] border-b border-onyx shadow-2xl md:hidden overflow-hidden"
            id="mobile-nav-panel"
          >
            <div className="p-6 space-y-4">
              <nav className="flex flex-col space-y-1 font-mono text-sm text-gray-400" id="mobile-nav-links-container">
                {navLinks.map((link, idx) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.04 }}
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-onyx/40 text-gray-300 hover:text-gold border border-transparent hover:border-onyx/60 transition-all duration-200"
                  >
                    <span>{link.label}</span>
                    <span className="text-[10px] text-gray-650 font-mono">0{idx + 1} // SYS</span>
                  </motion.a>
                ))}
              </nav>

              <div className="pt-4 border-t border-onyx/40 flex flex-col gap-3">
                <div className="flex items-center justify-between text-[10px] font-mono text-gray-500 uppercase tracking-widest px-1">
                  <span>System Linkage Status</span>
                  <span className="text-gold animate-pulse">• ONLINE</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Single Page Content */}
      <main className="relative" id="portfolio-main-content">
        
        {/* Decorative Grid Line Accents (Elite modern styling) */}
        <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-full max-w-6xl border-x border-onyx/20 pointer-events-none z-0" />
        
        <div className="relative z-10" id="sections-wrapper">
          <Hero />
          
          <TechMatrix />
          
          <ExecutionLedger />
          
          <OpenSource />
          
          <GlobalExplorer />
        </div>
      </main>

      {/* Deluxe Footer */}
      <Footer />
      
    </div>
  );
}
