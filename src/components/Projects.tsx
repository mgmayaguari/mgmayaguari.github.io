import { Github, Star, GitFork } from "lucide-react";
import { Repositories } from "../types";

const skills = [
  { label: "Backend", items: ["Ruby on Rails", "Python"] },
  { label: "Frontend", items: ["TypeScript", "React"] },
  { label: "Data", items: ["PostgreSQL", "Advanced SQL"] },
  { label: "Cloud", items: ["AWS", "GitHub Actions CI/CD"] },
];

const repos: Repositories[] = [
  {
    name: "Validify",
    description: "A lightweight React application that validates credit card numbers using the Luhn algorithm, with card brand matching and real-time input checks.",
    techStack: ["React", "TypeScript", "Luhn Algorithm"],
    stars: 12,
    forks: 3,
    highlight: "Client-side validation with instant card brand detection.",
  },
  {
    name: "robinhood-portfolio-automation",
    description: "Python pipeline that syncs Robinhood trade metrics and portfolio balances to Google Sheets using encrypted credentials and a scheduled weekly refresh.",
    techStack: ["Python", "OAuth2", "Google Sheets API", "Docker"],
    stars: 38,
    forks: 7,
    highlight: "Encrypted credential storage; runs unattended in a container once a week.",
  },
  {
    name: "EthereumRoullette",
    description: "A blockchain roulette game with on-chain outcome logic and a React client.",
    techStack: ["Solidity", "React", "Web3JS"],
    stars: 56,
    forks: 14,
    highlight: "Gas-optimized roll verification that emits events to the React client.",
  },
];

export default function Projects() {
  return (
    <section className="py-16 md:py-24 border-b border-onyx scroll-mt-24" id="projects">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-white tracking-tight">Flagship Projects</h2>
          <a
            href="https://github.com/mgmayaguari"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-400 hover:text-gold transition-colors"
          >
            github.com/mgmayaguari &rarr;
          </a>
        </div>

        <dl className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-4 mb-10 pb-8 border-b border-onyx">
          {skills.map((group) => (
            <div key={group.label}>
              <dt className="text-xs text-gray-500 uppercase tracking-wider mb-1">{group.label}</dt>
              <dd className="text-sm text-gray-200">{group.items.join(" · ")}</dd>
            </div>
          ))}
        </dl>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {repos.map((repo) => (
            <article
              key={repo.name}
              className="bg-onyx/40 border border-onyx/80 rounded-xl p-6 hover:border-gold/50 transition-colors flex flex-col"
            >
              <div className="flex justify-between items-start gap-3 mb-3">
                <a
                  href={`https://github.com/mgmayaguari/${repo.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors"
                >
                  <h3 className="font-mono text-base font-bold text-white flex items-center gap-2 break-all">
                    <Github className="w-4 h-4 text-gold/85 shrink-0" style={{ strokeWidth: 1.5 }} />
                    {repo.name}
                  </h3>
                </a>
                <div className="flex items-center gap-3 text-gray-500 text-xs shrink-0">
                  <span className="flex items-center gap-1"><Star className="w-3.5 h-3.5 text-gold" /> {repo.stars}</span>
                  <span className="flex items-center gap-1"><GitFork className="w-3.5 h-3.5" /> {repo.forks}</span>
                </div>
              </div>

              <p className="text-sm text-gray-300 mb-3 leading-relaxed">{repo.description}</p>
              <p className="text-sm text-gray-400 border-l-2 border-gold/30 pl-3 mb-4">{repo.highlight}</p>

              <ul className="flex flex-wrap gap-1.5 mt-auto pt-3 border-t border-onyx">
                {repo.techStack.map((tech) => (
                  <li key={tech} className="text-xs bg-onyx px-2 py-0.5 rounded text-gray-400 border border-onyx-dark">
                    {tech}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
