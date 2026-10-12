import { Github } from "lucide-react";
import { Project } from "../types";

const skills = [
  { label: "Languages & Frameworks", items: ["Python", "TypeScript/JavaScript", "Ruby", "SQL", "FastAPI", "Ruby on Rails", "Node.js", "React"] },
  { label: "Integrations", items: ["REST APIs", "OAuth", "Webhook and sync design", "ETL pipelines"] },
  { label: "AI Systems", items: ["Tool-calling agents", "Retrieval-augmented generation (BM25)", "Guardrail/validator design", "Scored eval harnesses"] },
  { label: "Data & Cloud", items: ["PostgreSQL", "MySQL", "Redshift", "AWS (Lambda, S3)", "Docker", "GitHub Actions CI/CD", "Datadog"] },
];

const flagship: Project[] = [
  {
    name: "applied-ai-system-project",
    description:
      "A retrieval-grounded planning agent. BM25 retrieval with a measured relevance cutoff that separates in-scope from out-of-scope queries, chosen by testing rather than by default. A bounded plan → act → check → repair loop with named guardrail validators for citation grounding, category coverage, and time conflicts, plus a scored eval harness and full test suite. Built through CodePath's Applied AI Engineering track.",
    href: "https://github.com/mgmayaguari/applied-ai-system-project",
  },
  {
    name: "portfolio-copilot",
    description:
      "A multi-account brokerage intelligence platform with OAuth integration and a tool-calling LLM agent over deterministic financial tools. Includes an eval suite with a dedicated refusal set.",
    inProgress: true,
  },
];

function renderProject(project: Project) {
  const title = (
    <h4 className="font-display text-base font-bold text-white flex items-center gap-2 break-all">
      {project.href && <Github className="w-4 h-4 text-gold/85 shrink-0" style={{ strokeWidth: 1.5 }} />}
      {project.name}
    </h4>
  );

  return (
    <article key={project.name} className="bg-onyx/40 border border-onyx/80 rounded-xl p-6 flex flex-col gap-3 hover:border-gold/50 transition-colors">
      <div className="flex items-start justify-between gap-3">
        {project.href ? (
          <a href={project.href} target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">
            {title}
          </a>
        ) : (
          title
        )}
        {project.inProgress && (
          <span className="shrink-0 text-xs text-gold bg-gold/10 px-2 py-0.5 rounded">In progress</span>
        )}
      </div>
      <p className="text-sm text-gray-300 leading-relaxed">{project.description}</p>
    </article>
  );
}

export default function Projects() {
  return (
    <section className="py-16 md:py-24 border-b border-onyx scroll-mt-24" id="projects">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-white tracking-tight mb-8">Projects</h2>

        <dl className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-4 mb-12 pb-8 border-b border-onyx">
          {skills.map((group) => (
            <div key={group.label}>
              <dt className="text-xs text-gray-500 uppercase tracking-wider mb-1">{group.label}</dt>
              <dd className="text-sm text-gray-200">{group.items.join(", ")}</dd>
            </div>
          ))}
        </dl>

        <div className="flex items-baseline justify-between mb-4">
          <h3 className="font-display text-lg font-semibold text-white">Flagship</h3>
          <a
            href="https://github.com/mgmayaguari"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-400 hover:text-gold transition-colors"
          >
            github.com/mgmayaguari &rarr;
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {flagship.map(renderProject)}
        </div>
      </div>
    </section>
  );
}
