import { motion } from "motion/react";
import { MapPin } from "lucide-react";
import { Position } from "../types";

const positions: Position[] = [
  {
    title: "Independent Software Consultant",
    location: "Remote",
    period: "Jul 2023 - Present",
    note: "Incorporated as MGML Ventures LLC, 2025. Engagements delivered while traveling across Southeast Asia, and Latin America.",
    bullets: [
      "Built custom Google Apps Script and Sheets inventory/POS systems for two Ecuadorian retailers, replacing manual ledgers with automated stock decrementing and tax-ready records. Deployed into owners' environment with hands-on training; both systems remain in daily active use two years later.",
      "Delivered Spanish-English clinical interpretation for remote AposHealth consultations, leading to a full-time staff role.",
    ],
  },
  {
    title: "Technical Operations Coordinator",
    organization: "AposHealth",
    location: "New York, NY (Hybrid)",
    period: "Aug 2024 - Sep 2026",
    note: "Previously Clinical Product Specialist",
    bullets: [
      "Cut patient registration-to-treatment time from 15 to 7 minutes by proposing and driving adoption of a self-service registration platform to replace manual EHR entry, acting as liaison between clinical staff, billing, and the vendor's implementation team under HIPAA constraints. Reduced manual data-entry errors and freed more of each time-limited event appointment for physical therapist evaluation.",
      "Diagnosed and fixed the data-accuracy root cause behind a high insurance claim-rejection rate, cutting rejections from roughly 40% to roughly 10% and reducing rework on returned claims. Established an escalation path and served as the point of contact for issues across internal IT and third-party vendors, holding one of the few full-access ticket queues.",
      "Built the field-operations playbook from scratch as the program scaled from home visits to community events, creating a single source of truth for new hires and running recurring training sessions for review and feedback.",
      "Owned device security and compliance (password manager rollout, device updates) and automated recurring reporting in Monday.com.",
      "Delivered in-person patient care alongside remote licensed physical therapists, fitting and calibrating an FDA-cleared medical device, and managed on-site event logistics including insurance verification, registration, scheduling, and patient communications.",
    ],
  },
  {
    title: "Full-Stack Software Engineer",
    organization: "Betterment",
    location: "New York, NY (Hybrid)",
    period: "Jun 2021 - Feb 2023",
    bullets: [
      "Led a Plaid OAuth integration upgrade for bank account linking, partnering with Plaid's product and engineering teams and internal stakeholders to refactor legacy models and deliver a more secure, lower-friction funding experience for customers.",
      "Shipped production features on Ruby on Rails and TypeScript, including REST APIs consumed by Betterment's Flutter mobile application.",
      "Contributed to team delivery and code quality through Datadog instrumentation, Redshift reporting, and GitHub Actions CI/CD; reviewed peer code and maintained test coverage with RSpec and Jest.",
    ],
  },
  {
    title: "Data Science Intern",
    organization: "Pfizer",
    location: "New York, NY (On-site)",
    period: "Jul 2019 - Dec 2019",
    bullets: [
      "Built a voice-controlled Alexa Skill on AWS Lambda in Python to predict disease probability from patient-reported input.",
      "Built ETL pipelines in Python and Dataiku DSS to clean and transform clinical research data.",
      "Developed a JavaScript/PHP map widget using the Google Maps API to visualize trial-site locations.",
    ],
  },
];

const earlier = [
  { role: "Lead Instructor, CodeAdvantage", period: "2020 - 2021", detail: "Designed and taught a Python and Lua curriculum for 40+ young learners." },
];

const trade = [
  { role: "Apprentice Electrician, JG Electric Corp", period: "Sep 2026 - Present" },
];

export default function Experience() {
  return (
    <section className="py-16 md:py-24 border-b border-onyx bg-onyx-dark/30 scroll-mt-24" id="experience">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-white tracking-tight mb-8">Experience</h2>

        <div className="space-y-8 max-w-3xl">
          {positions.map((pos) => (
            <motion.article
              key={pos.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4 }}
              className="p-6 rounded-xl border border-onyx/80 bg-onyx/40"
            >
              <header className="mb-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <h3 className="font-display text-lg md:text-xl font-bold text-white">{pos.title}</h3>
                  <span className="text-sm text-gray-400 shrink-0">{pos.period}</span>
                </div>
                <div className="text-sm mt-1 flex items-center gap-2 flex-wrap">
                  {pos.organization && <span className="text-gold-hover font-semibold">{pos.organization}</span>}
                  <span className="text-gray-400 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" /> {pos.location}
                  </span>
                </div>
                {pos.note && <p className="text-sm text-gray-400 italic mt-2">{pos.note}</p>}
              </header>

              <ul className="list-disc pl-5 space-y-2 text-sm text-gray-300 leading-relaxed marker:text-gold/60">
                {pos.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mt-10">
          <div>
            <h3 className="font-display text-base font-semibold text-white mb-3">Earlier</h3>
            <ul className="space-y-3 text-sm">
              {earlier.map((e) => (
                <li key={e.role}>
                  <div className="text-gray-200">
                    {e.role} <span className="text-gray-400">({e.period})</span>
                  </div>
                  <div className="text-gray-400 leading-relaxed">{e.detail}</div>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-display text-base font-semibold text-white mb-3">Trade Experience</h3>
            <ul className="space-y-3 text-sm">
              {trade.map((t) => (
                <li key={t.role} className="text-gray-200">
                  {t.role} <span className="text-gray-400">({t.period})</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
