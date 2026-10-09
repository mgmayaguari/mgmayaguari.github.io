import { Github } from "lucide-react";
import { Project } from "../types";

const skills = [
  { label: "Languages", items: ["Python", "TypeScript", "Ruby", "SQL", "Swift"] },
  { label: "Frameworks", items: ["React", "FastAPI", "Ruby on Rails"] },
  { label: "AI systems", items: ["Tool-calling agentic AI", "RAG", "Guardrail/eval design"] },
  { label: "Cloud", items: ["AWS (pursuing Solutions Architect - Associate)"] },
  { label: "Other", items: ["Selenium", "Solidity", "Figma"] },
];

const flagship: Project[] = [
  {
    name: "portfolio-copilot",
    description:
      "A multi-account brokerage intelligence platform with OAuth integration and a tool-calling LLM agent over deterministic financial tools. Includes an eval suite with a dedicated refusal set.",
    inProgress: true,
  },
  {
    name: "Travel itinerary planner",
    description:
      "A retrieval-grounded travel itinerary planner, ported from an existing pet-care agent architecture: BM25 retrieval, a plan → act → check → repair loop, and named guardrail validators.",
    inProgress: true,
  },
];

const openSource: Project[] = [
  {
    name: "robinhood-portfolio-automation",
    description:
      "A Python/Selenium pipeline that syncs brokerage data to Google Sheets, with encrypted credentials.",
    href: "https://github.com/mgmayaguari/robinhood-portfolio-automation",
  },
  {
    name: "applied-ai-system-project",
    description: "A retrieval-augmented planning agent with guardrails and an eval harness.",
    href: "https://github.com/mgmayaguari/applied-ai-system-project",
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

        <dl className="grid grid-cols-2 md:grid-cols-5 gap-x-6 gap-y-4 mb-12 pb-8 border-b border-onyx">
          {skills.map((group) => (
            <div key={group.label}>
              <dt className="text-xs text-gray-500 uppercase tracking-wider mb-1">{group.label}</dt>
              <dd className="text-sm text-gray-200">{group.items.join(", ")}</dd>
            </div>
          ))}
        </dl>

        <h3 className="font-display text-lg font-semibold text-white mb-4">Flagship</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {flagship.map(renderProject)}
        </div>

        <div className="flex items-baseline justify-between mb-4">
          <h3 className="font-display text-lg font-semibold text-white">Open source</h3>
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
          {openSource.map(renderProject)}
        </div>
      </div>
    </section>
  );
}
