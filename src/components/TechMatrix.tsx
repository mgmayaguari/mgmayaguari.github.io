import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { BarChart3 } from "lucide-react";
import { Skill } from "../types";

export default function TechMatrix() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeSkill, setActiveSkill] = useState<number>(0);
  
  // Interactive Optimizer Sandbox State
  const [queryType, setQueryType] = useState<string>("exact");

  const skills: Skill[] = [
    {
      name: "Ruby on Rails",
      category: "Backend",
      mastery: 75,
      description: "Deep competence in architecting scalable modular monoliths and background job queues. Expert database abstraction layer tuning, middleware scripting, and robust integration patterns.",
      keywords: ["ActiveRecord", "Sidekiq / Redis", "Custom Rack Middleware", "RSpec Testing", "Rails Engine Design"],
      architectureDetail: "Engineered high-integrity data flow systems including automated billing reconciliation engines and Sidekiq background processors, ensuring extreme execution consistency and minimizing data drift.",
    },
    {
      name: "Advanced SQL & PostgreSQL",
      category: "Data & DB",
      mastery: 80,
      description: "Precise database design, index strategies (B-Tree, GIN, expression), query path auditing (EXPLAIN ANALYZE), concurrency isolation overrides, and structural table optimization.",
      keywords: ["EXPLAIN ANALYZE", "GIN / Expression Indexing", "Table Partitioning", "Window Functions", "VACUUM Tuning"],
      architectureDetail: "Tuned expensive data pipelines to run in single-digit milliseconds by analyzing query plans and implementing advanced expression and GIN indexing, securing fast read speeds for heavy transaction volumes.",
    },
    {
      name: "TypeScript",
      category: "Frontend",
      mastery: 80,
      description: "Formulating strict, type-safe application structures. Leveraging advanced generics, discriminated unions, utility types, and strict static analysis to prevent runtime software bugs.",
      keywords: ["Strict Types", "Discriminated Unions", "Mapped Types", "Webpack / Vite Custom Configurations", "Utility Generics"],
      architectureDetail: "Constructed comprehensive data-validation wrappers for API payloads, enforcing strict interface conformity across frontend views and preventing multi-device state synchronization failures.",
    },
    {
      name: "React",
      category: "Frontend",
      mastery: 80,
      description: "Building responsive, highly polished user interfaces and modern state flows. Specialized in low-latency forms, fast rendering, state memoization, and interactive layout animations.",
      keywords: ["State Memoization", "React Hooks", "Custom Event Dispatchers", "Framer Motion", "Concurrent Features"],
      architectureDetail: "Re-engineered patient check-in interfaces and modular user flows, optimizing React component rendering strategies and state management to dramatically lower interactive latencies.",
    },
    {
      name: "AWS & Systems",
      category: "Systems & Cloud",
      mastery: 60,
      description: "Deploying secure, isolated system blueprints. Configuring networks (VPCs, Security Groups), container orchestrations (ECS/Fargate), database instances, and CI/CD pipelines.",
      keywords: ["ECS / Fargate", "VPC & Security Groups", "Terraform / CloudFormation", "S3 / CloudFront", "GitHub Actions CI/CD"],
      architectureDetail: "Provisioned secure multi-tier Fargate container clusters, orchestrating automated CI/CD deployments and centralizing credential stores to guarantee air-tight config security.",
    },
    {
      name: "Python",
      category: "Backend",
      mastery: 75,
      description: "Developing robust automation frameworks, data sanitization systems, and server-side utilities. Experienced in custom scripting and QA automation.",
      keywords: ["FastAPI / Asyncio", "ETL Data Wrangling", "Pandas & Numpy", "Automation Scripts", "Pytest Suite"],
      architectureDetail: "Wrote extensive QA regression frameworks, system testing suites, and data extraction utilities that crawl partner API services to validate payload correctness before ingestion.",
    }
  ];

  const categories = ["All", "Backend", "Frontend", "Systems & Cloud", "Data & DB"];

  const filteredSkills = selectedCategory === "All" 
    ? skills 
    : skills.filter(s => s.category === selectedCategory);

  // PostgreSQL Optimizer Simulation Engine helper
  const optimizerPresets: Record<string, {
    query: string;
    unoptimizedText: string;
    unoptimizedCost: string;
    optimizedText: string;
    optimizedCost: string;
    indexDdl: string;
    strategy: string;
  }> = {
    exact: {
      query: "SELECT * FROM transactions WHERE user_id = 90721;",
      unoptimizedText: "Seq Scan on transactions  (cost=0.00..45201.00 rows=1 width=128) (Filter: (user_id = 90721))",
      unoptimizedCost: "45,201 ms (Sequential Table Scan)",
      optimizedText: "Index Scan using idx_transactions_user_id on transactions (cost=0.15..8.20 rows=1 width=128)",
      optimizedCost: "8 ms (Index Scan)",
      indexDdl: "CREATE INDEX idx_transactions_user_id ON transactions (user_id);",
      strategy: "B-Tree Indexing"
    },
    expression: {
      query: "SELECT * FROM customers WHERE LOWER(email) = 'michael@mgml.com';",
      unoptimizedText: "Seq Scan on customers  (cost=0.00..18205.10 rows=4 width=94) (Filter: (lower((email)::text) = 'michael@mgml.com'::text))",
      unoptimizedCost: "18,205 ms (Standard column check fails index)",
      optimizedText: "Index Scan using idx_customers_lower_email on customers (cost=0.12..6.45 rows=1 width=94)",
      optimizedCost: "6 ms (Functional Index Scan)",
      indexDdl: "CREATE INDEX idx_customers_lower_email ON customers (LOWER(email));",
      strategy: "Expression Indexing"
    },
    jsonb: {
      query: "SELECT * FROM reports WHERE metadata @> '{\"status\": \"active\"}';",
      unoptimizedText: "Seq Scan on reports  (cost=0.00..72430.00 rows=380 width=210) (Filter: (metadata @> '{\"status\": \"active\"}'::jsonb))",
      unoptimizedCost: "72,430 ms (Parsing JSON document per row)",
      optimizedText: "Bitmap Heap Scan on reports (cost=12.20..350.40 rows=380 width=210)",
      optimizedCost: "15 ms (Bitmap Index Scan using JSONB operator)",
      indexDdl: "CREATE INDEX idx_reports_metadata_gin ON reports USING GIN (metadata jsonb_path_ops);",
      strategy: "GIN (Generalized Inverted Index)"
    }
  };

  const activePreset = optimizerPresets[queryType];

  const renderSkillDeepView = (s: Skill, isMobile: boolean) => {
    const isActiveSql = s.name === "Advanced SQL & PostgreSQL";
    return (
      <div className={`${isMobile ? "mt-4 pt-4 border-t border-onyx/50 space-y-4" : "space-y-5"}`}>
        {/* Meta details only on mobile */}
        {isMobile && (
          <div className="flex justify-between items-center" id="mobile-meta">
            <span className="text-[10px] font-mono text-gold uppercase tracking-widest bg-gold/10 px-2 py-0.5 rounded">
              {s.category}
            </span>
            <div className="text-right">
              <span className="text-[10px] font-mono text-gray-500 uppercase mr-1.5">Mastery</span>
              <span className="text-sm font-mono font-bold text-gold">{s.mastery}%</span>
            </div>
          </div>
        )}

        {/* Primary Overview Description */}
        <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
          {s.description}
        </p>

        {/* Structured text detail */}
        <div className="space-y-1">
          <h4 className="font-display text-[11px] sm:text-xs font-semibold text-white uppercase tracking-wider">
            Architectural Milestones & Performance Rules
          </h4>
          <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed">
            {s.architectureDetail}
          </p>
        </div>

        {/* Key sub-skills tag field */}
        <div className="space-y-1.5">
          <h4 className="font-mono text-[10px] text-gray-500 uppercase tracking-widest">
            Production Skillsets
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {s.keywords.map((kw, i) => (
              <span 
                key={i} 
                className="text-[10px] sm:text-xs font-mono bg-onyx px-2.5 py-1 rounded text-gray-300 border border-onyx-dark hover:border-gold/20 transition-colors"
              >
                {kw}
              </span>
            ))}
          </div>
        </div>

        {/* Specialized Interactive Lab: Advanced SQL & PostgreSQL */}
        {isActiveSql && (
          <div className="mt-4 pt-4 border-t border-onyx space-y-3" id={isMobile ? "sql-sandbox-mobile" : "sql-sandbox-desktop"}>
            <div className="flex justify-between items-center">
              <h4 className="font-display text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                <BarChart3 className="w-3.5 h-3.5 text-gold" />
                <span>Interactive optimization lab</span>
              </h4>
              <span className="text-[9px] sm:text-[10px] font-mono text-gold-hover bg-gold/5 px-2 py-0.5 rounded">
                Simulated PG Plan
              </span>
            </div>

            <div className="grid grid-cols-3 gap-1 sm:gap-2 bg-onyx-dark/80 p-1 rounded border border-onyx">
              {Object.keys(optimizerPresets).map((presetKey) => (
                <button
                  key={presetKey}
                  onClick={(e) => {
                    e.stopPropagation(); // Avoid triggering card toggling
                    setQueryType(presetKey);
                  }}
                  className={`py-1.5 px-1 text-[9px] sm:text-xs font-mono rounded transition-colors text-center truncate ${
                    queryType === presetKey
                      ? "bg-gold/10 text-gold border border-gold/30"
                      : "text-gray-400 hover:text-gray-200 bg-transparent border border-transparent"
                  }`}
                >
                  {presetKey === "exact" ? "Key Match" : presetKey === "expression" ? "Expr Match" : "JSONB GIN"}
                </button>
              ))}
            </div>

            <div className="bg-onyx-dark/95 p-3 sm:p-4 rounded-lg font-mono text-[10px] sm:text-xs border border-onyx/80 space-y-3 overflow-hidden text-left">
              <div>
                <div className="text-[9px] text-gray-500 uppercase tracking-wider mb-1">Target Statement</div>
                <div className="text-gray-200 bg-onyx/50 p-2 rounded max-w-full overflow-x-auto select-all whitespace-pre leading-normal">
                  {activePreset.query}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="border border-red-500/10 bg-red-950/15 p-2 rounded">
                  <div className="text-[8px] sm:text-[9px] text-red-400 uppercase font-bold tracking-wide mb-1">Unoptimized SQL Scan</div>
                  <div className="text-red-350 font-bold mb-1 text-[10px] sm:text-[11px] leading-tight">{activePreset.unoptimizedCost}</div>
                  <p className="text-[9px] sm:text-[10px] text-gray-550 line-clamp-2 leading-snug">{activePreset.unoptimizedText}</p>
                </div>
                <div className="border border-green-500/10 bg-green-950/15 p-2 rounded">
                  <div className="text-[8px] sm:text-[9px] text-green-400 uppercase font-bold tracking-wide mb-1">Optimized ({activePreset.strategy})</div>
                  <div className="text-green-350 font-bold mb-1 text-[10px] sm:text-[11px] leading-tight">{activePreset.optimizedCost}</div>
                  <p className="text-[9px] sm:text-[10px] text-gray-650 line-clamp-2 leading-snug">{activePreset.optimizedText}</p>
                </div>
              </div>

              <div className="pt-2 border-t border-onyx">
                <div className="text-[9px] text-gold uppercase tracking-wider mb-1">Optimum Index DDL</div>
                <div className="text-[10px] sm:text-[11px] text-gold/90 bg-gold/5 p-2 rounded select-all max-w-full overflow-x-auto whitespace-pre leading-normal">
                  {activePreset.indexDdl}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <section className="py-16 md:py-24 border-b border-onyx relative scroll-mt-24" id="tech-matrix-section">
      <div className="max-w-6xl mx-auto px-6" id="tech-matrix-container">
        
        {/* Section Header */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6" id="tech-matrix-header">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-gold mb-2 flex items-center gap-1.5">
              <span>01 / CORE COMPETENCY</span>
            </div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-white tracking-tight">
              The Technical Matrix
            </h2>
            <p className="text-sm text-gray-400 mt-2 max-w-xl font-light">
              Meticulously maintained and battle-tested technologies. Select a skill to review deep engineering applications and code design philosophies.
            </p>
          </div>

          {/* Category Filter Buttons */}
          <div className="flex flex-wrap gap-2" id="category-filters">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => {
                  setSelectedCategory(c);
                  const firstMatch = skills.findIndex(s => c === "All" || s.category === c);
                  if (firstMatch !== -1) setActiveSkill(skills[firstMatch].name === skills[activeSkill]?.name ? activeSkill : firstMatch);
                }}
                className={`px-3 py-1 text-xs font-mono rounded-lg border transition-all duration-300 ${
                  selectedCategory === c 
                    ? "bg-gold/10 border-gold text-gold" 
                    : "bg-onyx/20 border-onyx text-gray-400 hover:text-white hover:border-gray-600"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* Matrix Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start" id="skills-matrix-layout">
          
          {/* Left Column: Skill progress & selector */}
          <div className="lg:col-span-5 space-y-3" id="skills-selector">
            {filteredSkills.map((s) => {
              const globalIndex = skills.findIndex(item => item.name === s.name);
              const isActive = activeSkill === globalIndex;
              return (
                <div
                  key={s.name}
                  id={`skill-card-${s.name.replace(/\s+/g, "-")}`}
                  onClick={() => {
                    const isMobile = window.innerWidth < 1024;
                    const isClosing = isActive;
                    const nextSkill = (isMobile && isClosing) ? -1 : globalIndex;
                    setActiveSkill(nextSkill);
                    if (isMobile && !isClosing) {
                      setTimeout(() => {
                        const el = document.getElementById(`skill-card-${s.name.replace(/\s+/g, "-")}`);
                        el?.scrollIntoView({ behavior: "smooth", block: "nearest" });
                      }, 120);
                    }
                  }}
                  className={`p-4 rounded-xl border cursor-pointer transition-all duration-300 group ${
                    isActive 
                      ? "bg-onyx border-gold shadow-lg" 
                      : "bg-onyx/30 border-onyx/60 hover:bg-onyx/50 hover:border-gray-750"
                  }`}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-display text-sm font-semibold text-white group-hover:text-gold transition-colors">
                      {s.name}
                    </span>
                    <span className="font-mono text-xs text-gold">
                      {s.mastery}%
                    </span>
                  </div>
                  
                  {/* Progress Bar Container */}
                  <div className="h-1 w-full bg-onyx-dark rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${s.mastery}%` }}
                      transition={{ duration: 0.8 }}
                      className="h-full bg-gold rounded-full" 
                    />
                  </div>

                  {/* Mobile Details expand inline */}
                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="lg:hidden overflow-hidden"
                      >
                        {renderSkillDeepView(s, true)}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Right Column: Deep Architectural Detail & PostgreSQL Indexing Playground (Desktop Only) */}
          <div className="lg:col-span-7 space-y-6 hidden lg:block" id="architectural-insights">
            {skills[activeSkill] && (
              <motion.div
                key={skills[activeSkill].name}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                className="bg-onyx/60 border border-onyx p-6 rounded-xl space-y-5 shadow-inner relative"
                id="active-skill-deep-view"
              >
                {/* Meta details */}
                <div className="flex justify-between items-start border-b border-onyx pb-4">
                  <div>
                    <span className="text-[10px] font-mono text-gold uppercase tracking-widest bg-gold/10 px-2 py-0.5 rounded">
                      {skills[activeSkill].category}
                    </span>
                    <h3 className="font-display text-xl font-bold text-white mt-2">
                      {skills[activeSkill].name} Core Architecture
                    </h3>
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] font-mono text-gray-500 uppercase">Engineered Mastery</div>
                    <div className="text-lg font-mono font-bold text-gold">{skills[activeSkill].mastery}%</div>
                  </div>
                </div>

                {renderSkillDeepView(skills[activeSkill], false)}
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
