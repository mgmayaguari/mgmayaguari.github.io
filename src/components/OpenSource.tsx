import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Github, FolderGit2, Star, GitFork, Play, Check, AlertCircle, RefreshCw, Terminal } from "lucide-react";
import { Repositories } from "../types";

export default function OpenSource() {
  const [activeTab, setActiveTab] = useState<string>("all");
  
  // Interactive Sandbox state
  const [inputText, setInputText] = useState<string>(
    `POST /api/v2/auth {\n  "uid": "mgmayaguari-7091",\n  "scope": ["admin", "read:pipelines"],\n  "active": true,\n  "session_ttl_sec": 3600\n}`
  );
  const [parseResult, setParseResult] = useState<{
    success: boolean;
    durationMs: number;
    tokensCount: number;
    method: string;
    route: string;
    schema: Record<string, string>;
    error?: string;
  } | null>(null);
  const [isParsing, setIsParsing] = useState<boolean>(false);

  const repos: Repositories[] = [
    {
      name: "Validify",
      description: "A lightweight, user-friendly React application designed to validate credit card numbers using the Luhn Algorithm. This project demonstrates core JavaScript concepts, state verification, and modular React principles.",
      techStack: ["React", "TypeScript", "Luhn Algorithm", "Component Architecture"],
      stars: 12,
      forks: 3,
      highlight: "Features instant card brand matching, real-time input tokenization, and mathematical validation logic ensuring full client-side accuracy under milliseconds.",
      sandboxEnabled: true
    },
    {
      name: "robinhood-portfolio-automation",
      description: "Automated, secure engineering pipeline that securely synchronizes Robinhood trade metrics and portfolio balances with Google Sheets using encrypted credentials and scheduled weekly cron-trigger refreshes.",
      techStack: ["Python", "OAuth2", "Google Sheets API", "Docker Sync"],
      stars: 38,
      forks: 7,
      highlight: "Features seamless backend credentials encryption safeguarding token storage. Fully containerized script architecture running autonomously once a week.",
      sandboxEnabled: false
    },
    {
      name: "EthereumRoullette",
      description: "A decentralized, high-fidelity blockchain casino game featuring fully deterministic web-state logic integrated with EVM consensus layers.",
      techStack: ["Solidity", "React", "Web3JS", "Ethereum Smart Contracts"],
      stars: 56,
      forks: 14,
      highlight: "Designed gas-optimized random roll verification routines that handle game outcomes safely on-chain while dispatching event hooks to the React client.",
      sandboxEnabled: false
    }
  ];

  const handleParse = () => {
    setIsParsing(true);
    setParseResult(null);

    setTimeout(() => {
      try {
        const lines = inputText.trim().split("\n");
        if (lines.length === 0 || !inputText.trim()) {
          throw new Error("Payload stream is empty.");
        }

        const firstLine = lines[0].trim();
        const requestLineRegex = /^(GET|POST|PUT|DELETE|PATCH)\s+([^\s]+)$/i;
        const match = firstLine.match(requestLineRegex);

        if (!match) {
          throw new Error("Invalid prefix directive. Request line must start with Method and URI Route (e.g. 'POST /api/v2/auth').");
        }

        const method = match[1].toUpperCase();
        const route = match[2];

        // Rest is JSON body
        const jsonBodyString = lines.slice(1).join("\n").trim();
        if (!jsonBodyString) {
          throw new Error("RequestBody payload omitted. Please provide valid JSON on line 2.");
        }

        const parsedJson = JSON.parse(jsonBodyString);
        if (typeof parsedJson !== "object" || parsedJson === null) {
          throw new Error("Payload body must be a valid JSON key-value map.");
        }

        // Schema extraction
        const schema: Record<string, string> = {};
        let tokensCount = 2; // Method + Route are 2 tokens
        
        Object.entries(parsedJson).forEach(([key, val]) => {
          tokensCount += 2; // Key and Value count as token entries
          if (Array.isArray(val)) {
            schema[key] = `Array<${typeof val[0] || "any"}>`;
          } else {
            schema[key] = typeof val;
          }
        });

        setParseResult({
          success: true,
          durationMs: +(Math.random() * 0.12 + 0.02).toFixed(4), // ultra fast microsecond simulations
          tokensCount,
          method,
          route,
          schema
        });
      } catch (err: any) {
        setParseResult({
          success: false,
          durationMs: +(Math.random() * 0.04 + 0.01).toFixed(4),
          tokensCount: 0,
          method: "",
          route: "",
          schema: {},
          error: err.message || "Failed parsing payload streams."
        });
      } finally {
        setIsParsing(false);
      }
    }, 450); // small delay for realistic micro-feel
  };

  const loadPreset = (preset: "auth" | "pipeline" | "error") => {
    if (preset === "auth") {
      setInputText(`POST /api/v2/auth {\n  "uid": "mgmayaguari-7091",\n  "scope": ["admin", "read:pipelines"],\n  "active": true,\n  "session_ttl_sec": 3600\n}`);
    } else if (preset === "pipeline") {
      setInputText(`PUT /api/v1/jobs {\n  "pipeline_id": "etl-sync-098",\n  "concurrency_limit": 8,\n  "targets": ["postgresql", "redis"],\n  "retry_strategy": "exponential_backoff"\n}`);
    } else {
      setInputText(`GET /invalid-stream-payload\n{\n  broken-json: omitted_quotes\n}`);
    }
    setParseResult(null);
  };

  return (
    <section className="py-16 md:py-24 border-b border-onyx scroll-mt-24" id="curated-open-source-section">
      <div className="max-w-6xl mx-auto px-6" id="curated-container">
        
        {/* Section Title */}
        <div className="mb-14 flex flex-col md:flex-row md:items-end justify-between gap-6" id="curated-header">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-gold mb-2">
              <span>03 / CURATED CODEBASE</span>
            </div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-white tracking-tight">
              Curated Open Source
            </h2>
            <p className="text-sm text-gray-400 mt-2 max-w-xl font-light">
              Highly technical utility structures hosted publicly on GitHub. Run the interactive lexer simulation to see compiling validation logic.
            </p>
          </div>
          
          <a 
            href="https://github.com/mgmayaguari"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border-b border-onyx pb-1 hover:border-gold/50 text-gray-400 hover:text-gold transition-all duration-300" 
            id="curated-view-meta"
          >
            <FolderGit2 className="w-4 h-4 text-gold-hover" />
            <span className="font-mono text-xs text-white group-hover:text-gold">github.com/mgmayaguari</span>
          </a>
        </div>

        {/* Layout: Repos cards + Interactive Sandbox Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start" id="curated-layout-grid">
          
          {/* Left Column: Repository Cards */}
          <div className="lg:col-span-6 space-y-6" id="repo-cards-stack">
            {repos.map((repo, i) => (
              <div 
                key={i} 
                id={`repo-card-${repo.name}`}
                className="bg-onyx/40 border border-onyx/80 rounded-xl p-6 hover:border-gold/50 hover:bg-onyx/60 shadow-lg group transition-all duration-300 relative flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start mb-3">
                    <a 
                      href={`https://github.com/mgmayaguari/${repo.name}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/title inline-block"
                      id={`repo-link-title-${repo.name}`}
                    >
                      <h3 className="font-mono text-base font-bold text-white flex items-center gap-2 group-hover/title:text-gold group-hover:text-gold transition-colors">
                        <Github className="w-4 h-4 text-gold/85" style={{ strokeWidth: 1.5 }} />
                        <span className="underline decoration-gold/20 group-hover/title:decoration-gold/80 transition-all">{repo.name}</span>
                      </h3>
                    </a>
                    <div className="flex items-center gap-3 text-gray-500 font-mono text-xs">
                      <span className="flex items-center gap-1 hover:text-gold">
                        <Star className="w-3.5 h-3.5 text-gold" /> {repo.stars}
                      </span>
                      <span className="flex items-center gap-1">
                        <GitFork className="w-3.5 h-3.5" /> {repo.forks}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-gray-300 font-light mb-4 leading-relaxed">
                    {repo.description}
                  </p>

                  <blockquote className="border-l-2 border-gold/30 pl-3 italic text-[11px] text-gray-400 mb-4 bg-onyx-dark/25 py-2 pr-2 rounded-r">
                    <span className="font-sans font-semibold not-italic block text-gold text-[10px] uppercase tracking-wider mb-0.5">Core Innovation</span>
                    {repo.highlight}
                  </blockquote>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-onyx">
                  {repo.techStack.map((tech, idx) => (
                    <span 
                      key={idx} 
                      className="text-[10px] font-mono bg-onyx px-2 py-0.5 rounded text-gray-400 border border-onyx-dark select-none"
                    >
                      {tech}
                    </span>
                  ))}
                  
                  {repo.sandboxEnabled ? (
                    <span className="ml-auto text-[10px] uppercase tracking-wider font-mono text-gold-hover flex items-center gap-1 animate-pulse">
                      <Terminal className="w-3 h-3" /> Sandbox Connected
                    </span>
                  ) : (
                    <a 
                      href={`https://github.com/mgmayaguari/${repo.name}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-auto text-[10px] uppercase tracking-wider font-mono text-gray-400 hover:text-gold flex items-center gap-1 transition-all border-b border-transparent hover:border-gold/50"
                      id={`repo-link-footer-${repo.name}`}
                    >
                      View Code &rarr;
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Live Interactive Parser Sandbox */}
          <div className="lg:col-span-6 bg-onyx/50 border border-onyx rounded-xl p-6 shadow-2xl relative" id="parser-sandbox-container">
            <div className="flex justify-between items-center border-b border-onyx pb-4 mb-4" id="sandbox-header">
              <div>
                <span className="text-[10px] font-mono text-gold uppercase tracking-widest block">Featured Interactive Demo</span>
                <h3 className="font-display text-base font-bold text-white flex items-center gap-2 mt-1">
                  JSON Schema Validation Playground
                </h3>
              </div>
              
              <div className="flex gap-2">
                <button 
                  onClick={() => loadPreset("auth")}
                  className="px-2 py-1 text-[10px] font-mono bg-onyx-dark hover:bg-onyx hover:text-gold border border-onyx text-gray-400 rounded transition-colors"
                >
                  Auth JWT
                </button>
                <button 
                  onClick={() => loadPreset("pipeline")}
                  className="px-2 py-1 text-[10px] font-mono bg-onyx-dark hover:bg-onyx hover:text-gold border border-onyx text-gray-400 rounded transition-colors"
                >
                  ETL Stream
                </button>
                <button 
                  onClick={() => loadPreset("error")}
                  className="px-2 py-1 text-[10px] font-mono bg-onyx-dark hover:bg-onyx hover:text-gold border border-onyx text-gray-400 rounded transition-colors"
                >
                  Malform Error
                </button>
              </div>
            </div>

            <p className="text-xs text-gray-400 mb-4 font-light leading-relaxed">
              Test Michael's stream tokenization and payload validation logic. Declare an HTTP request line, provide structural JSON arguments below, and verify execution times:
            </p>

            {/* Input payload terminal */}
            <div className="space-y-4" id="sandbox-workspace">
              <div className="relative font-mono text-xs rounded-lg overflow-hidden border border-onyx-dark bg-onyx-dark/95 shadow-inner" id="sandbox-ide">
                <div className="bg-onyx px-4 py-2 flex items-center justify-between border-b border-onyx-dark text-gray-500 text-[10px]">
                  <span>REQUEST STREAM CONSOLE</span>
                  <span className="text-gold-hover animate-pulse">● INPUT READY</span>
                </div>
                
                <textarea
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  className="w-full h-40 p-4 bg-transparent text-gray-200 outline-none resize-none leading-relaxed font-mono focus:ring-1 focus:ring-gold/30"
                  placeholder="Method Route\n{\n  JSON body...\n}"
                  spellCheck="false"
                  id="sandbox-textarea-field"
                />

                <div className="absolute bottom-3 right-3">
                  <button
                    onClick={handleParse}
                    disabled={isParsing}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-gold hover:bg-gold-hover text-onyx-dark font-display text-xs font-semibold rounded-lg shadow-md hover:shadow-gold/25 transition-all duration-300 disabled:opacity-50"
                    id="compile-schema-button"
                  >
                    {isParsing ? (
                      <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                    ) : (
                      <Play className="w-3.5 h-3.5 fill-onyx-dark text-onyx-dark" />
                    )}
                    <span>{isParsing ? "Compiling..." : "Run Parser Engine"}</span>
                  </button>
                </div>
              </div>

              {/* Execution outputs details */}
              <div className="min-h-[105px]" id="sandbox-output-panel">
                <AnimatePresence mode="wait">
                  {parseResult ? (
                    <motion.div
                      key={parseResult.success ? "success" : "failure"}
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      transition={{ duration: 0.25 }}
                      className={`p-4 rounded-lg font-mono text-xs border ${
                        parseResult.success 
                          ? "bg-green-950/15 border-green-500/20 text-green-300" 
                          : "bg-red-950/15 border-red-500/20 text-red-350"
                      }`}
                      id="analysis-result-panel"
                    >
                      <div className="flex justify-between items-center mb-2.5 border-b border-current/10 pb-2">
                        <span className="font-bold flex items-center gap-1">
                          {parseResult.success ? (
                            <><Check className="w-4 h-4 text-green-400" /> PARSED OK</>
                          ) : (
                            <><AlertCircle className="w-4 h-4 text-red-400" /> LEXICAL SYNTAX ERROR</>
                          )}
                        </span>
                        <span>Execution time: {parseResult.durationMs} ms</span>
                      </div>

                      {parseResult.success ? (
                        <div className="space-y-2">
                          <div className="grid grid-cols-2 gap-4 text-[11px] text-gray-400">
                            <div>
                              <span className="text-[10px] text-gray-500 block uppercase">Protocol Route</span>
                              <span className="text-white font-semibold font-mono">{parseResult.method}</span> {parseResult.route}
                            </div>
                            <div>
                              <span className="text-[10px] text-gray-500 block uppercase">Token Count</span>
                              <span className="text-white font-semibold font-mono">{parseResult.tokensCount} tokens matched</span>
                            </div>
                          </div>

                          <div className="pt-2">
                            <span className="text-[10px] text-gray-500 block uppercase mb-1">Generated Schema Model</span>
                            <div className="grid grid-cols-2 gap-1.5 bg-onyx-dark/50 p-2 rounded max-h-32 overflow-y-auto">
                              {Object.entries(parseResult.schema).map(([k, v]) => (
                                <div key={k} className="flex justify-between border-b border-onyx/30 pb-0.5 text-[11px]">
                                  <span className="text-gray-300">{k}:</span>
                                  <span className="text-gold font-semibold">{v}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      ) : (
                        <p className="text-xs text-red-400 leading-relaxed font-light">
                          {parseResult.error}
                        </p>
                      )}
                    </motion.div>
                  ) : (
                    <div className="bg-onyx-dark/25 border border-onyx/40 border-dashed rounded-lg h-24 flex items-center justify-center text-xs text-gray-500 font-mono" id="sandbox-default-message">
                      Click "Run Parser Engine" above to view AST validation models
                    </div>
                  )}
                </AnimatePresence>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
