import React, { useState } from "react";
import { Github, Linkedin, Mail, ShieldCheck } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  const [showNotification, setShowNotification] = useState<boolean>(false);

  const handleRedirectWarning = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Shows a polite overlay confirmation before redirecting from the preview iframe
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 4000);
  };

  return (
    <footer className="bg-onyx-dark pb-16 pt-16 relative" id="contact-footer">
      <div className="max-w-6xl mx-auto px-6 relative" id="footer-container">
        
        {/* Call to action card */}
        <div 
          className="bg-onyx/60 border border-gold/15 rounded-xl p-8 md:p-10 mb-14 grid grid-cols-1 md:grid-cols-12 gap-8 items-center hover:border-gold/30 transition-all duration-300 shadow-2xl relative"
          id="cta-client-box"
        >
          {/* Subtle back decorative grid */}
          <div className="absolute inset-0 bg-radial-gradient from-gold/5 via-transparent to-transparent opacity-50 rounded-xl pointer-events-none" />

          <div className="md:col-span-7 space-y-3 relative z-10" id="cta-info">
            <span className="text-[10px] uppercase font-mono tracking-widest text-gold bg-gold/10 px-2 py-0.5 rounded">
              NOW ACCEPTING CONSULTING COMMISSIONS
            </span>
            <h3 className="font-display text-xl md:text-2xl font-bold text-white tracking-tight">
              Let’s Optimize Your Operational Velocity
            </h3>
            <p className="text-sm text-gray-400 font-light max-w-lg leading-relaxed">
              Seeking high-impact AI operational audits, enterprise workflow automation, or robust systems process optimization? Let’s partner through MGML Ventures to eliminate technical drag and scale your organizational capacity.
            </p>
          </div>

          <div className="md:col-span-5 flex flex-col sm:flex-row gap-4 relative z-10 justify-end" id="cta-actions">
            <a
              href="mailto:mayaguarimichael@gmail.com"
              className="px-6 py-3 border border-gray-600 hover:border-gold text-white font-display font-medium text-sm rounded-lg flex items-center justify-center gap-2 hover:bg-onyx transition-all duration-300"
              id="email-contact-link"
            >
              <Mail className="w-4 h-4" />
              <span>Contact Direct</span>
            </a>

            <a
              href="https://mgmayaguari.github.io"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleRedirectWarning}
              className="px-6 py-3 bg-gradient-to-r from-gold to-gold-hover text-onyx-dark font-display font-bold text-sm rounded-lg flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-gold/15 transition-all duration-300"
              id="enterprise-redirect-link"
            >
              <span>Enterprise Solutions: MGML Ventures</span>
            </a>
          </div>
        </div>

        {/* Dynamic Redirect Prompt (Elegant warning for users browsing inside the preview frame) */}
        {showNotification && (
          <div className="fixed bottom-6 right-6 z-50 bg-onyx border border-gold p-4 rounded-lg shadow-2xl max-w-xs animate-slide-in font-mono text-xs text-gray-300" id="redirect-modal">
            <div className="flex items-center gap-2 text-gold font-bold uppercase mb-1">
              <ShieldCheck className="w-4 h-4" /> Outbound Redirection
            </div>
            <span>Preparing to load external asset 'mgmayaguari.github.io' via MGML Ventures redirection policies.</span>
          </div>
        )}

        {/* Footer Meta Row */}
        <div className="border-t border-onyx pt-10 flex flex-col md:flex-row md:items-center justify-between gap-6" id="footer-meta-row">
          
          {/* Brand */}
          <div className="space-y-1.5" id="footer-identity-col">
            <div className="font-display text-base font-bold text-white flex items-center gap-2.5">
              <Logo className="w-5 h-5 text-gold" />
              <span>Michael Mayaguari</span>
            </div>
            <div className="font-mono text-xs text-gray-550">
              Founder & Systems Automation Architect
            </div>
          </div>

          {/* Social Profiles */}
          <div className="flex items-center gap-6" id="footer-social-col">
            <a 
              href="https://github.com/mgmayaguari" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white flex items-center gap-1.5 text-xs font-mono transition-colors"
              id="footer-github"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            
            <a 
              href="https://www.linkedin.com/in/michaelmayaguari/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white flex items-center gap-1.5 text-xs font-mono transition-colors"
              id="footer-linkedin"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
          </div>

          {/* Copryight info */}
          <div className="text-right" id="footer-copyright-col">
            <div className="text-[10px] font-mono text-gray-600 uppercase">
              Current Location: EST (NY/Remote)
            </div>
            <div className="text-xs font-mono text-gray-550 mt-1">
              &copy; {new Date().getFullYear()} MGML Ventures LLC. All Rights Reserved.
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
}
