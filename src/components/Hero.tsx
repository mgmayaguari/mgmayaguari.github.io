import { useState } from "react";
import { motion } from "motion/react";
import { Cpu, Code2, Sparkles, Github, Linkedin, Compass } from "lucide-react";
import Logo from "./Logo";

export default function Hero() {
  const [activePhilosophy, setActivePhilosophy] = useState<number>(0);

  const philosophies = [
    {
      id: "growth",
      title: "Adoption over novelty",
      icon: Cpu,
      valueMapping: "Growth",
      desc: "I build inside the tools people already know. For two retail shops in Ecuador that meant Google Sheets and Apps Script instead of a new app, because adoption was the real risk, not the code. A system the owner can run alone on day one is one that keeps running after I leave."
    },
    {
      id: "experiences",
      title: "Designing for real constraints",
      icon: Compass,
      valueMapping: "Experiences",
      desc: "Client work across Southeast Asia and Latin America, and travel through 26 countries taught me to plan for limited connectivity, no technical staff, and requirements that change mid-project."
    },
    {
      id: "contribution",
      title: "Root causes over workarounds",
      icon: Sparkles,
      valueMapping: "Contribution",
      desc: "At AposHealth, a high claim-rejection rate traced back to data accuracy at intake. Fixing it there, rather than reworking claims one at a time, took rejections from roughly 40% to roughly 10%."
    }
  ];

  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 border-b border-onyx overflow-hidden scroll-mt-24">
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px] pointer-events-none"

      />
      <div className="absolute right-[5%] top-1/2 -translate-y-1/2 w-[340px] h-[340px] text-gold/5 pointer-events-none hidden lg:block select-none">
        <Logo className="w-full h-full" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3 flex flex-col items-center text-center p-6 bg-onyx/25 border border-onyx/80 rounded-2xl relative"
          >
            <div className="relative w-36 h-36 mb-4 group">
              <div className="absolute inset-0 bg-gradient-to-tr from-gold/40 to-transparent rounded-full animate-spin-slow opacity-75 blur-[2px] border border-dashed border-gold/30" />
              <div className="absolute inset-1.5 bg-onyx rounded-full border border-onyx-dark overflow-hidden flex items-center justify-center">
                <img
                  src="https://github.com/mgmayaguari.png"
                  alt="Michael Mayaguari"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 rounded-full"
                  referrerPolicy="no-referrer"

                />
              </div>

            </div>

            <div className="space-y-1 mb-4">
              <p className="font-sans text-[10px] text-gold uppercase tracking-wider">Based in New York</p>
              <p className="font-sans text-[12px] text-slate-400 font-light mt-1">
                B.S. Computer Science, 2021<br/>City College of New York<br/>
                {/* TODO: add once I complete the AWS Solutions Architect, Associate certification */}
                {/* <span className="text-gold/90 font-sans text-[10px] mt-0.5 block tracking-wide">AWS Solutions Architect, Associate</span> */}
              </p>
            </div>
            <div className="w-full space-y-2 mt-auto">
              <a
                href="https://linkedin.com/in/michaelmayaguari/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-1.5 bg-onyx hover:bg-onyx-dark border border-gold/30 hover:border-gold rounded-lg text-xs font-sans text-gray-300 hover:text-white transition-all duration-300"
              >
                <Linkedin className="w-3.5 h-3.5 text-gold/80 hover:text-gold transition-colors" style={{ strokeWidth: 1.5 }} />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/mgmayaguari"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-1.5 bg-onyx hover:bg-onyx-dark border border-gold/30 hover:border-gold rounded-lg text-xs font-sans text-gray-300 hover:text-white transition-all duration-300"
              >
                <Github className="w-3.5 h-3.5 text-gold/80 hover:text-gold transition-colors" style={{ strokeWidth: 1.5 }} />
                <span>GitHub</span>
              </a>
            </div>
          </motion.div>
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-white leading-none mt-2"
              >
                Michael Mayaguari
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-base font-sans text-gold font-medium flex items-center gap-2"
              >
                <span>Software Engineer, Integrations and Applied AI</span>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed text-justify"
              >
                Bilingual engineer (native Spanish) working where software meets the people who use it. I shipped production code at Betterment, including a Plaid OAuth integration built directly with Plaid's engineering team, and drove a platform implementation at AposHealth that cut patient registration from 15 minutes to 7. I also build and support systems for small businesses in the US and Ecuador, two of which are still in daily use two years on. I'm currently building agentic AI systems with measured eval harnesses, and I'm open to Forward Deployed, Solutions, and Implementation Engineering roles.
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2"
            >
              <div className="p-3 bg-onyx/30 border border-onyx rounded-lg hover:border-gold/20 transition-all duration-300">
                <div className="font-sans text-[9px] text-gray-500 uppercase tracking-wider mb-0.5">Languages</div>
                <div className="font-display text-xs font-semibold text-white">Python, TypeScript, Ruby</div>
              </div>
              <div className="p-3 bg-onyx/30 border border-onyx rounded-lg hover:border-gold/20 transition-all duration-300">
                <div className="font-sans text-[9px] text-gray-500 uppercase tracking-wider mb-0.5">Integrations</div>
                <div className="font-display text-xs font-semibold text-white">REST, OAuth, Webhooks</div>
              </div>
              <div className="p-3 col-span-2 sm:col-span-1 bg-onyx/30 border border-onyx rounded-lg hover:border-gold/20 transition-all duration-300">
                <div className="font-sans text-[9px] text-gray-500 uppercase tracking-wider mb-0.5">AI Systems</div>
                <div className="font-display text-xs font-semibold text-white">Agents, RAG, Evals</div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="lg:col-span-4 bg-onyx/50 border border-onyx rounded-xl p-5 relative flex flex-col justify-between shadow-2xl"
          >
            <div>
              <div className="text-xs uppercase tracking-widest font-sans text-gold mb-3 flex items-center gap-2">
                <Code2 className="w-4 h-4 text-gold" />
                <span>How I Work</span>
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-4">Principles</h3>
            </div>

            <div className="space-y-3">
              {philosophies.map((p, index) => {
                const Icon = p.icon;
                const isSelected = activePhilosophy === index;
                return (
                  <button
                    key={index}

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
                        <span className="w-fit self-start sm:self-center shrink-0 font-sans text-[9px] uppercase tracking-wider text-gold/80 px-1.5 py-0.5 bg-onyx-dark/60 rounded border border-gold/10">
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

            <div className="mt-6 pt-4 border-t border-onyx text-[11px] font-sans text-gray-500 text-right">
              Select a principle to read more
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
