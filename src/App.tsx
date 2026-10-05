import { useState } from "react";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import About from "./components/About";
import { Mail, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import Logo from "./components/Logo";

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <div
      className="min-h-screen bg-charcoal text-slate-300 font-sans selection:bg-gold/35 selection:text-white antialiased transition-all duration-500"
     
    >
      <header className="fixed top-0 left-0 w-full z-50 bg-[#0B0C10]/85 backdrop-blur-md border-b border-onyx px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3 select-none text-gold">
            <div className="p-1 px-1.5 rounded-lg bg-onyx border border-gold/45 flex items-center justify-center shadow-md">
              <Logo className="w-6 h-6 text-gold" />
            </div>
            <span className="font-display font-bold text-sm text-white tracking-widest uppercase hidden xs:inline">
              MGML
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-8 font-sans text-sm text-gray-400">
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
          <div className="flex items-center gap-3 sm:gap-4">
            <a 
              href="mailto:mayaguarimichael@gmail.com" 
              className="text-sm font-sans font-medium text-gold hover:text-white flex items-center gap-1.5 px-4 py-2 rounded-lg bg-gold/10 hover:bg-gold border border-gold/25 hover:border-gold hover:text-black transition-all duration-300 shadow-md"
             
            >
              <Mail className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Inquire</span>
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-onyx border border-onyx/85 hover:border-gold/40 text-gray-400 hover:text-gold transition-all duration-300 flex items-center justify-center"
              aria-label="Toggle navigation menu"
             
            >
              {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>

        </div>
      </header>
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="fixed top-[69px] left-0 w-full z-45 bg-[#0B0C10] border-b border-onyx shadow-2xl md:hidden overflow-hidden"
           
          >
            <div className="p-6 space-y-4">
              <nav className="flex flex-col space-y-1 font-sans text-sm text-gray-400">
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
                  </motion.a>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <main className="relative">
        <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-full max-w-6xl border-x border-onyx/20 pointer-events-none z-0" />
        
        <div className="relative z-10">
          <Hero />
          <Projects />
          <Experience />
          <About />
        </div>
      </main>
    </div>
  );
}
