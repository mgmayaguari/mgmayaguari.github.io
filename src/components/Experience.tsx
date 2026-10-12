import { motion } from "motion/react";
import { MapPin } from "lucide-react";
import { Position } from "../types";

const positions: Position[] = [
  {
    title: "Independent Software Consultant",
    location: "Remote",
    period: "Feb 2023 - Present",
    note: "Incorporated as MGML Ventures LLC, 2025. Engagements delivered while traveling across Southeast Asia and Latin America.",
    bullets: [
      "Built inventory systems for two Ecuadorian retail businesses (Papelería y Bazar Lucy; Ferrielectric) in Google Apps Script and Sheets: point-of-sale receipts that automatically decrement stock, restock and return handling, and tax-ready sales records, replacing handwritten ledgers and monthly physical counts. Deployed inside the owners' existing Google environment rather than requiring new software, and trained them to run it independently. Both remain in daily use two years later, and I still handle updates and support.",
      "Implemented Wix CRM and HubSpot for a restaurant client. Built and consolidated the online presence for a tour villa in Sapa, Vietnam, and trained the owners to maintain it themselves.",
      "Currently building the web platform for Kawsay Urcu, a community tourism venture run by families in Azuay, Ecuador, designed for a rural operator with limited connectivity and no technical staff.",
      "Delivered Spanish-English clinical interpretation for remote consultations with AposHealth, an engagement that led to a full-time staff role.",
    ],
  },
  {
    title: "Technical Operations Coordinator",
    organization: "AposHealth",
    location: "New York, NY (Hybrid)",
    period: "Aug 2024 - Sep 2026",
    note: "Previously Clinical Product Specialist",
    bullets: [
      "Reduced patient registration-to-treatment time from 15 minutes to 7 by proposing and driving adoption of a digital self-service registration platform to replace manual EHR entry, serving as liaison between clinical staff, billing, and the vendor's implementation team under HIPAA constraints.",
      "Diagnosed and fixed the data-accuracy root cause behind a high insurance claim-rejection rate, cutting rejections from roughly 40% to roughly 10%. Held one of the few full-access ticket queues through resolution.",
      "Built the field-operations playbook from scratch as the program scaled from home visits to community events, then trained incoming staff.",
    ],
  },
  {
    title: "Full-Stack Software Engineer",
    organization: "Betterment",
    location: "New York, NY",
    period: "Jun 2021 - Feb 2023",
    bullets: [
      "Led a Plaid OAuth integration upgrade for financial-institution account linking, partnering directly with Plaid's engineering team and internal product stakeholders to refactor legacy models.",
      "Shipped production features on Ruby on Rails and TypeScript, including REST APIs consumed by Betterment's Flutter mobile application.",
      "Contributed to team delivery and code quality through Datadog instrumentation, Redshift reporting, and GitHub Actions CI/CD. Reviewed peer code and maintained test coverage with RSpec and Jest.",
    ],
  },
];

const earlier = [
  { role: "Lead Instructor, CodeAdvantage", period: "2020 - 2021", detail: "Designed and taught a Python and Lua curriculum for 40+ young learners." },
  { role: "Data Science Intern, Pfizer", period: "2019", detail: "ETL pipelines in Python and Dataiku DSS; AWS Lambda Alexa Skill for clinical risk prediction." },
];

const trade = [
  { role: "Apprentice Electrician, JG Electric Corp", period: "2026 - Present, part-time" },
  { role: "Apprentice Electrician, Hudson River Electric", period: "2016 - 2017" },
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
