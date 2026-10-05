import { motion } from "motion/react";
import { Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { CareerMilestone } from "../types";

export default function Experience() {
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
      "role": "Consultant & Systems Automation Architect",
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
    <section className="py-16 md:py-24 border-b border-onyx bg-onyx-dark/30 scroll-mt-24" id="experience">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-white tracking-tight">Experience</h2>
        </div>

        <div className="relative border-l border-onyx pl-6 md:pl-10 space-y-10 max-w-5xl">
          {milestones.map((m) => (
            <motion.article
              key={`${m.organization}-${m.period}`}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4 }}
              className="relative p-6 rounded-xl border border-onyx/80 bg-onyx/40"
            >
              <div className="absolute -left-[31px] md:-left-[47px] top-7 w-3 h-3 rounded-full bg-gold" />

              <header className="flex flex-col md:flex-row md:items-start justify-between gap-3 mb-4">
                <div>
                  <h3 className="font-display text-lg md:text-xl font-bold text-white">{m.role}</h3>
                  <div className="text-sm text-gray-300 mt-0.5 flex items-center gap-2 flex-wrap">
                    <span className="text-gold-hover font-semibold">{m.organization}</span>
                    <span className="text-gray-500">&bull;</span>
                    <span className="text-gray-400 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" /> {m.location}
                    </span>
                  </div>
                </div>
                <span className="text-xs text-gray-400 bg-onyx px-3 py-1 rounded-full border border-onyx-dark flex items-center gap-1.5 self-start shrink-0">
                  <Calendar className="w-3.5 h-3.5 text-gold-hover" />
                  {m.period}
                </span>
              </header>

              <ul className="space-y-3">
                {m.highlights.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-gold mt-1 shrink-0" style={{ strokeWidth: 1.5 }} />
                    <span dangerouslySetInnerHTML={{ __html: bullet }} className="leading-relaxed" />
                  </li>
                ))}
              </ul>

              <dl className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-5 pt-5 border-t border-onyx/40">
                {m.metrics.map((metric) => (
                  <div key={metric.label} className="p-3.5 bg-onyx-dark rounded-lg border border-onyx-dark">
                    <dt className="text-xs text-gray-400">{metric.label}</dt>
                    <dd className="text-lg font-bold text-white font-display mt-1">{metric.value}</dd>
                    <dd className="text-xs text-gray-400 mt-0.5 leading-relaxed">{metric.description}</dd>
                  </div>
                ))}
              </dl>

              {m.architecturalLayer && (
                <details className="mt-5 pt-5 border-t border-onyx/40">
                  <summary className="cursor-pointer text-sm text-gold hover:text-gold-hover">
                    {m.architecturalLayer.title}
                  </summary>
                  <pre className="mt-3 bg-onyx-dark/95 p-4 rounded-lg font-mono text-xs text-slate-300 border border-onyx/80 overflow-x-auto leading-normal">
                    {m.architecturalLayer.diagram.join("\n")}
                  </pre>
                  <p className="text-sm text-slate-400 mt-3 leading-relaxed">{m.architecturalLayer.explanation}</p>
                </details>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
