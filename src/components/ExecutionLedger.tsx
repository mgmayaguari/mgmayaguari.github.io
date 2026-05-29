import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Calendar, MapPin, Plus, Minus, Layers, CheckCircle2 } from "lucide-react";
import { CareerMilestone } from "../types";

export default function ExecutionLedger() {
  const [expandedIndex, setExpandedIndex] = useState<number>(0);

  const milestones: CareerMilestone[] = [
    {
      role: "Senior Product Specialist / QA Analyst & Operations",
      organization: "AposHealth",
      location: "New York, NY",
      period: "June 2024 - Present",
      isConsulting: false,
      highlights: [
        "Led the end-to-end implementation of <strong>YosiHealth</strong>, successfully reducing patient registration time <strong>from 15 to 7 minutes</strong> (a <strong>53% speedup</strong>), improving operational speed <strong>by 30%</strong> with seamless <strong>AthenaHealth EHR API</strong> integrations.",
        "Optimized patient billing workflows and automated verification routines, resolving insurance discrepancies and decreasing overall claims rejections <strong>by 20%</strong>.",
        "Managed secure IT onboarding, systems deployment, data QA security, and equipment compliance adhering strictly to sensitive <strong>HIPAA-compliant</strong> rules."
      ],
      metrics: [
        { label: "Registration Time", value: "-53%", description: "Reduced Patient Check-in from 15 to 7 min" },
        { label: "Operational efficiency", value: "+30%", description: "Streamlined EHR integrations" },
        { label: "Claim Rejections", value: "-20%", description: "Billing workflow optimization" }
      ],
      architecturalLayer: {
        title: "YosiHealth To AthenaHealth EHR Integration Map",
        diagram: [
          "[YosiHealth Registration Portal] --> [Secure HL7/API Gateway Node]",
          "                                           |",
          "                       [Data Cleansing & Error Check Validation]",
          "                                           |",
          "                                           v",
          "                       [AthenaHealth EHR Integration Subsystem]",
          "                                           |",
          "                       +-------------------+-------------------+",
          "                       |                                       |",
          "          [Patient Demographic Records]             [Insurance Eligibility Cache]"
        ],
        explanation: "Spearheaded the secure, rapid transmission of clinical intake datasets. Configured HIPAA-compliant schemas ensuring zero data collisions during high-traffic clinic registrations."
      }
    },
    {
      "role": "Systems Automation Architect & Founder",
      "organization": "MGML Ventures LLC",
      "location": "New York, NY (Remote / Global)",
      "period": "April 2025 - Present",
      "isConsulting": true,
      "highlights": [
        "Delivering high-impact enterprise operational audits, workflow automation pipelines, and robust system process optimizations for mid-market companies.",
        "Engineered secure multi-system API integrations that accelerated client organizational throughput by 30% and slashed operational bottlenecks.",
        "Dismantled complex technical debt and optimized distributed database engines, converting high-friction legacy logic into clean, high-performance architectures."
      ],
      "metrics": [
        { "label": "Workflow Latency", "value": "-53%", "description": "Streamlined critical data ingestion check-ins" },
        { "label": "Operational Speed", "value": "+30%", "description": "Efficiency velocity gains via secure APIs" },
        { "label": "Compliance Audit", "value": "-20%", "description": "Reduced transactional discrepancies and workflow faults" }
      ],
      "architecturalLayer": {
        "title": "Enterprise Automation & Integration Topology",
        "diagram": [
          "[Third-Party API Webhooks / Client SDKs] --> [Secure API Gateway & Auth Ingestion Layer]",
          "                                                    |",
          "                                 +------------------+------------------+",
          "                                 |                                     |",
          "                     [Asynchronous Worker Queues]         [Distributed System Routers]",
          "                     [Background Automation Jobs]         [Zero-Trust Private Environments]",
          "                                 |                                     |",
          "                                 +------------------+------------------+",
          "                                                    |",
          "                                      [Optimized Database Cluster (PostgreSQL)]"
        ],
        "explanation": "Architected utilizing a zero-trust model. Integrated asynchronous queue patterns and automated webhooks to securely bridge distinct platforms, protecting sensitive transactional data fields while optimizing multi-system processing speed."
      }
    },
    {
      role: "Full-Stack Software Engineer",
      organization: "Betterment",
      location: "New York, NY",
      period: "June 2021 - February 2023",
      isConsulting: false,
      highlights: [
        "Directed the <strong>Plaid OAuth upgrade</strong> for critical fintech institution linkages, partnering directly with Plaid and internal product leaders to refactor legacy models.",
        "Pioneered critical new features on a core <strong>Ruby on Rails & TypeScript</strong> stack, deploying fast <strong>RESTful APIs</strong> supporting Betterment's mobile ecosystems.",
        "Utilized <strong>Datadog, Redshift, and GitHub Actions</strong> to optimize CI/CD pipelines, decreasing system alerts and enhancing team delivery speed <strong>by 15%</strong>."
      ],
      metrics: [
        { label: "Developer Workflows", value: "+15%", description: "Team efficiency gains via review improvements" },
        { label: "Platform Tech Stack", value: "Rails / TS", description: "Consolidated React, Flutter, and Backend controllers" },
        { label: "Integrations Led", value: "Plaid", description: "Secure financial asset synchronization" }
      ],
      architecturalLayer: {
        title: "Plaid OAuth Connection Architecture",
        diagram: [
          "[Betterment Frontend UI] --> [Betterment Web App Node] --> [Plaid Link SDK Handshake]",
          "                                       |",
          "                        [Callback Event Webhook Listener]",
          "                                       |",
          "                        [Secure OAuth Token Query Retrieval]",
          "                                       |",
          "                        +--------------+--------------+",
          "                        |                             |",
          "              [Secure Credential Vault]       [Redshift Financial Analytics]"
        ],
        explanation: "Synchronized multiple high-impact institution authentications securely. Leveraged robust callback status assertions to preemptively resolve dead transactions before committing states."
      }
    },
    {
      role: "Data Science Intern",
      organization: "Pfizer",
      location: "New York, NY",
      period: "July 2019 - December 2019",
      isConsulting: false,
      highlights: [
        "Built serverless speech-classification applications using <strong>AWS Lambda and Python</strong> to forecast clinical indicators based on patient diagnostic records.",
        "Created optimized database transformations and ingestion procedures handling large volumes of clinical research rows via <strong>Python and Dataiku DSS</strong>.",
        "Designed responsive interactive map widgets utilizing <strong>PHP, JavaScript, and Google Maps API</strong> to visualize pipeline trial locations worldwide."
      ],
      metrics: [
        { label: "Serverless Deployment", value: "AWS Lambda", description: "Microsecond speech analytics models" },
        { label: "Data Pipeline Tooling", value: "Dataiku DSS", description: "ETL and cleaning streams" },
        { label: "Geospatial plugins", value: "Google Maps", description: "Realtime clinical site visualization" }
      ],
      architecturalLayer: {
        title: "Voice-Based Disease Prediction Pipeline",
        diagram: [
          "[Patient Speech Input] --> [Alexa Voice Interface Engine] --> [AWS Lambda Handler]",
          "                                                                    |",
          "                                                       [Python Classification Code]",
          "                                                                    |",
          "                                                       [Dataiku DSS Model Sync]",
          "                                                                    |",
          "                                                                    v",
          "                                                       [Probability Matrix Output]"
        ],
        explanation: "Asynchronous lambda pipeline running light classification models. Built mapping plugins matching location records against visual global clusters with high geographic accuracy."
      }
    }
  ];

  return (
    <section className="py-16 md:py-24 border-b border-onyx relative bg-onyx-dark/30 scroll-mt-24" id="experience-ledger-section">
      <div className="max-w-6xl mx-auto px-6" id="experience-ledger-container">
        
        {/* Section Header */}
        <div className="mb-14 text-center md:text-left" id="ledger-header">
          <div className="text-xs font-mono uppercase tracking-widest text-gold mb-2">
            <span>02 / EXECUTION HISTORY</span>
          </div>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-white tracking-tight">
            The Ledger of Execution
          </h2>
          <p className="text-sm text-gray-400 mt-2 max-w-2xl font-light">
            A history of backend scaling, database tuning, and customized engineering services. Click an entry below to inspect architectural blueprints and core metrics.
          </p>
        </div>

        {/* Career Timeline */}
        <div className="relative border-l border-onyx pl-6 md:pl-10 space-y-12 max-w-5xl mx-auto" id="ledger-timeline">
          {milestones.map((m, index) => {
            const isExpanded = expandedIndex === index;
            return (
              <div key={index} className="relative group" id={`timeline-group-${index}`}>
                
                {/* Timeline Dot Indicator */}
                <div 
                  className={`absolute -left-[31px] md:-left-[47px] top-1.5 w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                    isExpanded 
                      ? "bg-gold border-gold scale-125 shadow-lg shadow-gold/25" 
                      : "bg-onyx border-gold/40 group-hover:border-gold"
                  }`} 
                  id={`timeline-dot-${index}`}
                />

                <div 
                  className={`p-6 rounded-xl border transition-all duration-300 ${
                    isExpanded 
                      ? "bg-onyx border-gold shadow-2xl" 
                      : "bg-onyx/40 border-onyx/80 hover:bg-onyx/60 hover:border-gray-700 cursor-pointer"
                  }`}
                  onClick={() => {
                    const isClosing = isExpanded;
                    setExpandedIndex(isClosing ? -1 : index);
                    if (!isClosing) {
                      setTimeout(() => {
                        const el = document.getElementById(`timeline-card-${index}`);
                        el?.scrollIntoView({ behavior: "smooth", block: "nearest" });
                      }, 120);
                    }
                  }}
                  id={`timeline-card-${index}`}
                >
                  {/* Ledger Card Meta Header */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                    <div>
                      {m.isConsulting && (
                        <span className="inline-flex text-[9px] font-mono font-bold uppercase tracking-widest text-gold bg-gold/10 px-2 py-0.5 rounded mb-2">
                          Primary Enterprise Focus
                        </span>
                      )}
                      <h3 className="font-display text-lg md:text-xl font-bold text-white group-hover:text-gold transition-colors flex items-center gap-2">
                        <span>{m.role}</span>
                      </h3>
                      <div className="text-sm font-medium text-gray-300 mt-0.5 font-display flex items-center gap-2 flex-wrap">
                        <span className="text-gold-hover font-semibold">{m.organization}</span>
                        <span className="text-gray-650">•</span>
                        <span className="text-gray-400 flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" /> {m.location}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 self-start md:self-center font-mono">
                      <span className="text-xs text-gray-400 bg-onyx px-3 py-1 rounded-full border border-onyx-dark flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-gold-hover" />
                        {m.period}
                      </span>
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          setExpandedIndex(isExpanded ? -1 : index);
                        }}
                        className="p-1 rounded-full bg-onyx-dark hover:bg-onyx text-gray-400 hover:text-white transition-colors"
                        id={`timeline-toggle-button-${index}`}
                      >
                        {isExpanded ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  {/* Expanded block content: Metrics & Blueprint */}
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                        id={`timeline-expanded-${index}`}
                      >
                        <div className="mt-3 pt-3 border-t border-onyx/40 space-y-4">
                          
                          {/* Highlight bullets */}
                          <div className="space-y-3">
                            {m.highlights.map((bullet, i) => (
                              <div key={i} className="flex items-start gap-2.5 text-sm font-light text-gray-300">
                                <CheckCircle2 className="w-4 h-4 text-gold mt-1 flex-shrink-0" style={{ strokeWidth: 1.5 }} />
                                <span dangerouslySetInnerHTML={{ __html: bullet }} className="leading-relaxed" />
                              </div>
                            ))}
                          </div>

                          {/* Metrics Rows */}
                          <div className="pt-4 border-t border-onyx/40">
                            <div className="text-[10px] font-mono text-gold uppercase tracking-wider mb-3">Verified Performance Impact</div>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4" id={`metrics-row-${index}`}>
                              {m.metrics.map((metric, i) => (
                                <div key={i} className="p-3.5 bg-shadow bg-onyx-dark rounded-lg border border-onyx-dark">
                                  <div className="text-xs font-mono text-gray-550 uppercase">{metric.label}</div>
                                  <div className="text-lg font-bold text-white font-display mt-1">{metric.value}</div>
                                  <div className="text-[11px] text-gray-400 mt-0.5 leading-relaxed">{metric.description}</div>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Architectural Systems Blueprint */}
                          {m.architecturalLayer && (
                            <div className="pt-4 border-t border-onyx/40 space-y-3">
                              <div className="flex items-center gap-1.5 text-[10px] font-mono text-gold uppercase tracking-wider">
                                <Layers className="w-3.5 h-3.5 text-gold-hover animate-pulse" />
                                <span>{m.architecturalLayer.title}</span>
                              </div>
                              <div className="bg-onyx-dark/95 p-4 rounded-lg font-mono text-[10.5px] text-slate-300 border border-onyx/80 overflow-x-auto whitespace-pre leading-normal select-all">
                                {m.architecturalLayer.diagram.join("\n")}
                              </div>
                              <p className="text-xs text-slate-400 font-light leading-relaxed">
                                {m.architecturalLayer.explanation}
                              </p>
                            </div>
                          )}

                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
