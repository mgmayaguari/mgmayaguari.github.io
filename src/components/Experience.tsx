import { motion } from "motion/react";
import { MapPin } from "lucide-react";
import { Position } from "../types";

const positions: Position[] = [
  {
    organization: "AposHealth",
    location: "New York, NY",
    roles: [
      {
        title: "Technical Operations Coordinator",
        period: "Jan 2025 – Sep 2026",
        bullets: [
          "Reduced patient registration-to-treatment time 53% (15 → 7 min) via a self-service registration platform (YosiHealth) that I proposed and drove adoption of.",
          "Cut the claim-rejection rate from ~40% to ~10% by fixing the data-accuracy root cause at intake, acting as the liaison between clinical staff, billing, and the vendor's implementation team.",
        ],
      },
      {
        title: "Clinical Product Specialist",
        period: "Aug 2024 – Jan 2025",
        bullets: [
          "Built the field-operations playbook from scratch as the program scaled from home visits to community events, and trained incoming staff.",
        ],
      },
    ],
  },
  {
    organization: "Betterment",
    location: "New York, NY",
    roles: [
      {
        title: "Full-Stack Software Engineer",
        period: "Jun 2021 – Feb 2023",
        bullets: [
          "Led a Plaid OAuth integration upgrade.",
          "Shipped RESTful APIs consumed by the Flutter mobile app.",
          "Contributed to a 15% reduction in code issues.",
        ],
      },
    ],
  },
  {
    organization: "Pfizer",
    location: "New York, NY",
    roles: [
      {
        title: "Data Science Intern",
        period: "Jul 2019 – Dec 2019",
        bullets: [
          "Built a voice-controlled Alexa Skill using AWS Lambda and Python to predict disease probability from patient-reported input.",
          "Built ETL pipelines in Python and Dataiku DSS to clean and transform clinical research data, and a JavaScript/PHP map widget on the Google Maps API to visualize trial site locations.",
        ],
      },
    ],
  },
];

const other = [
  "Founder, MGML Ventures LLC (Apr 2025 – Present)",
  "Apprentice Electrician, JG Electric Corp (Sep 2026 – Present)",
  "Spanish Interpreter, Freelance (Jun 2024 – Aug 2024)",
];

export default function Experience() {
  return (
    <section className="py-16 md:py-24 border-b border-onyx bg-onyx-dark/30 scroll-mt-24" id="experience">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-white tracking-tight mb-8">Experience</h2>

        <ul className="mb-10 space-y-1.5 text-sm text-gray-300 max-w-3xl">
          {other.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>

        <div className="space-y-8 max-w-3xl">
          {positions.map((pos) => (
            <motion.article
              key={pos.organization}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4 }}
              className="p-6 rounded-xl border border-onyx/80 bg-onyx/40"
            >
              <header className="mb-5 flex items-center gap-3 flex-wrap">
                <h3 className="font-display text-xl font-bold text-white">{pos.organization}</h3>
                <span className="text-sm text-gray-400 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" /> {pos.location}
                </span>
              </header>

              <div className="space-y-6">
                {pos.roles.map((role) => (
                  <div key={role.title}>
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-2">
                      <h4 className="font-display text-base font-semibold text-gold-hover">{role.title}</h4>
                      <span className="text-sm text-gray-400">{role.period}</span>
                    </div>
                    <ul className="list-disc pl-5 space-y-2 text-sm text-gray-300 leading-relaxed marker:text-gold/60">
                      {role.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
