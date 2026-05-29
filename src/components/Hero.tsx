import React, { useState } from "react";
import { motion } from "motion/react";
import { Cpu, Code2, ShieldAlert, Sparkles, Database, Layers, Github, Linkedin, Mail, FileText, Compass } from "lucide-react";
import Logo from "./Logo";

export default function Hero() {
  const [activePhilosophy, setActivePhilosophy] = useState<number>(0);

  const philosophies = [
    {
      id: "growth",
      title: "Pragmatic Architecture",
      icon: Cpu,
      valueMapping: "Growth",
      desc: "Prioritizing sustainable system health and long-term codebase evolution over transient technical hype. Engineering on robust, battle-tested foundations to support steady operational scale while systematically minimizing maintenance overhead."
    },
    {
      id: "experiences",
      title: "High-Fidelity Experiences",
      icon: Compass,
      valueMapping: "Experiences",
      desc: "Translating the extreme adaptability and fluid navigation forged across 25 countries into resilient software design. Building highly responsive user journeys engineered to gracefully absorb real-world friction and fluctuating system constraints."
    },
    {
      id: "contribution",
      title: "High-Impact Contribution",
      icon: Sparkles,
      valueMapping: "Contribution",
      desc: "Driven by the core operating maxim of leaving every system better than I found it. Aggressively dismantling technical debt, refactoring legacy bottlenecks, and directly driving measurable 30% operational velocity gains."
    }
  ];

  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 border-b border-onyx overflow-hidden scroll-mt-24" id="hero-section">
      {/* Decorative Golden Ambient Backlight (Slight and refined) */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" 
        id="hero-glow-bg"
      />

      {/* Embedded High-Fidelity Custom Brand Monogram Watermark */}
      <div className="absolute right-[5%] top-1/2 -translate-y-1/2 w-[340px] h-[340px] text-gold/5 pointer-events-none hidden lg:block select-none" id="hero-watermark-container">
        <Logo className="w-full h-full" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10" id="hero-container">
        {/* Brand Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch" id="hero-layout">
          
          {/* Column 1: Profile Portrait & Contacts (Recruiter Magnet) */}
          <motion.div 
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3 flex flex-col items-center text-center p-6 bg-onyx/25 border border-onyx/80 rounded-2xl relative"
            id="hero-profile-portrait-card"
          >
            {/* Elegant branding glow around Michael's actual portrait */}
            <div className="relative w-36 h-36 mb-4 group" id="portrait-frame">
              <div className="absolute inset-0 bg-gradient-to-tr from-gold/40 to-transparent rounded-full animate-spin-slow opacity-75 blur-[2px] border border-dashed border-gold/30" />
              <div className="absolute inset-1.5 bg-onyx rounded-full border border-onyx-dark overflow-hidden flex items-center justify-center">
                <img 
                  src="https://github.com/mgmayaguari.png" 
                  alt="Michael Mayaguari" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 rounded-full"
                  referrerPolicy="no-referrer"
                  id="portrait-avatar-image"
                />
              </div>

            </div>

            <div className="space-y-1 mb-4">
              <p className="font-mono text-[10px] text-gold uppercase tracking-wider">Based in New York</p>
              <p className="font-sans text-[12px] text-slate-400 font-light mt-1">
                B.S. Computer Science<br/>City College of NY<br/>
                <span className="text-gold/90 font-mono text-[10px] mt-0.5 block tracking-wide">Certified AI Professional (Google)</span>
              </p>
            </div>

            {/* Quick action buttons for recruiters */}
            <div className="w-full space-y-2 mt-auto" id="recruiter-quick-actions">
              <a 
                href="https://linkedin.com/in/michaelmayaguari/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center justify-center gap-2 w-full py-1.5 bg-onyx hover:bg-onyx-dark border border-gold/30 hover:border-gold rounded-lg text-xs font-mono text-gray-300 hover:text-white transition-all duration-300"
              >
                <Linkedin className="w-3.5 h-3.5 text-gold/80 hover:text-gold transition-colors" style={{ strokeWidth: 1.5 }} />
                <span>LinkedIn</span>
              </a>
              <a 
                href="https://github.com/mgmayaguari" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center justify-center gap-2 w-full py-1.5 bg-onyx hover:bg-onyx-dark border border-gold/30 hover:border-gold rounded-lg text-xs font-mono text-gray-300 hover:text-white transition-all duration-300"
              >
                <Github className="w-3.5 h-3.5 text-gold/80 hover:text-gold transition-colors" style={{ strokeWidth: 1.5 }} />
                <span>GitHub</span>
              </a>
            </div>
          </motion.div>

          {/* Column 2: Michael's Name & Statement */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6" id="hero-info">
            <div className="space-y-4">
              <motion.h1 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-white leading-none mt-2"
                id="hero-title"
              >
                Michael Mayaguari
              </motion.h1>
              
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-base font-mono text-gold font-medium flex items-center gap-2"
                id="hero-subtitle-container"
              >
                <span>Founder & Systems Automation Architect</span>
              </motion.div>

              <motion.p 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed text-justify"
                id="hero-desc"
              >
                Born in Ecuador, raised in the New York metropolitan area since 2011, and now NYC-based, my engineering and operational approach is shaped by global travel across 25 countries—including extensive solo backpacking expeditions—instilling a relentless drive to leave everything better than I found it. As a systems automation architect and founder of MGML Ventures LLC, I apply this philosophy to both physical workflows and codebase design: refactoring legacy architectures, eliminating technical debt, and streamlining integration mechanics to maximize B2B scaling and user journey efficiency.
              </motion.p>
            </div>
            
            {/* Quick Stats Grid - Real systems numbers */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2"
              id="hero-stats-grid"
            >
              <div className="p-3 bg-onyx/30 border border-onyx rounded-lg hover:border-gold/20 transition-all duration-300" id="stat-rails">
                <div className="font-mono text-[9px] text-gray-500 uppercase tracking-wider mb-0.5">Framework Core</div>
                <div className="font-display text-xs font-semibold text-white">Ruby on Rails</div>
              </div>
              <div className="p-3 bg-onyx/30 border border-onyx rounded-lg hover:border-gold/20 transition-all duration-300" id="stat-runtime">
                <div className="font-mono text-[9px] text-gray-500 uppercase tracking-wider mb-0.5">State & Control</div>
                <div className="font-display text-xs font-semibold text-white">TS & React</div>
              </div>
              <div className="p-3 col-span-2 sm:col-span-1 bg-onyx/30 border border-onyx rounded-lg hover:border-gold/20 transition-all duration-300" id="stat-persistence">
                <div className="font-mono text-[9px] text-gray-500 uppercase tracking-wider mb-0.5">Primary DB</div>
                <div className="font-display text-xs font-semibold text-white">PostgreSQL</div>
              </div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="lg:col-span-4 bg-onyx/50 border border-onyx rounded-xl p-5 relative flex flex-col justify-between shadow-2xl"
            id="hero-philosophy-card"
          >
            <div id="philsophy-header">
              <div className="text-xs uppercase tracking-widest font-mono text-gold mb-3 flex items-center gap-2">
                <Code2 className="w-4 h-4 text-gold" />
                <span>Core Engineering Tenets</span>
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-4" id="philosophy-title">System Beliefs</h3>
            </div>
            
            <div className="space-y-3" id="philosophy-selectors">
              {philosophies.map((p, index) => {
                const Icon = p.icon;
                const isSelected = activePhilosophy === index;
                return (
                  <button
                    key={index}
                    id={`philosophy-btn-${index}`}
                    onClick={() => setActivePhilosophy(index)}
                    className={`w-full text-left p-3 rounded-lg border transition-all duration-300 flex items-start gap-3 ${
                      isSelected 
                        ? "bg-onyx border-gold text-white" 
                        : "bg-transparent border-transparent hover:bg-onyx/30 text-gray-400 hover:text-gray-200"
                    }`}
                  >
                    <div className={`p-1.5 rounded ${isSelected ? "bg-gold/10 text-gold" : "bg-onyx/60 text-gray-500"}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-2">
                        <div className="font-display text-sm font-semibold text-white leading-snug">
                          {p.title}
                        </div>
                        <span className="w-fit self-start sm:self-center shrink-0 font-mono text-[9px] uppercase tracking-wider text-gold/80 px-1.5 py-0.5 bg-onyx-dark/60 rounded border border-gold/10">
                          {p.valueMapping}
                        </span>
                      </div>
                      {isSelected && (
                        <p className="text-xs text-slate-300 mt-2 font-light leading-relaxed">
                          {p.desc}
                        </p>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
            
            <div className="mt-6 pt-4 border-t border-onyx text-[11px] font-mono text-gray-500 text-right" id="philosophy-footer">
              Select tenet to explore methodology
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
