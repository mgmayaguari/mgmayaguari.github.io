import { Github, Linkedin, Mail, Instagram } from "lucide-react";
import Logo from "./Logo";

const landmass = "fill-onyx-dark/20 stroke-zinc-800/40 stroke-[1]";
const visited = "fill-gold/25 stroke-gold stroke-[1.25]";

function TravelMap() {
  return (
    <svg
      viewBox="0 0 850 310"
      className="w-full h-auto"
      role="img"
      aria-label="World map with visited regions highlighted: North America, Central America, South America, the Caribbean, Europe and Southeast Asia"
    >
      <path d="M 235,15 L 280,15 L 265,45 L 230,35 Z" className={landmass} />
      <path d="M 330,135 L 405,140 L 440,175 L 430,230 L 415,265 L 398,265 L 372,205 Z" className={landmass} />
      <path d="M 380,45 L 630,45 L 660,110 L 615,120 L 580,105 L 535,110 L 410,95 Z" className={landmass} />
      <path d="M 430,240 L 440,255 L 432,260 Z" className={landmass} />
      <path d="M 610,215 L 665,220 L 675,255 L 625,255 Z" className={landmass} />

      <path d="M 60,35 L 205,35 L 205,50 L 190,55 L 200,95 L 180,105 L 155,130 L 135,115 L 120,125 L 105,100 L 95,100 L 65,85 Z" className={visited} />
      <path d="M 120,125 L 135,115 L 155,130 L 140,150 L 165,170 L 180,165 L 185,175 L 165,185 L 145,160 Z M 165,185 L 175,190 L 185,185 L 190,195 L 182,205 L 175,200 Z" className={visited} />
      <path d="M 185,200 L 210,195 L 230,225 L 245,245 L 215,315 L 200,315 L 185,260 L 180,220 Z" className={visited} />
      <ellipse cx="178" cy="142" rx="8" ry="2" className={visited} />
      <ellipse cx="196" cy="144" rx="5" ry="2" className={visited} />
      <ellipse cx="206" cy="145" rx="3.5" ry="1.5" className={visited} />
      <path d="M 315,50 L 375,50 L 390,75 L 360,110 L 345,115 L 315,90 Z M 305,60 L 315,62 L 312,75 L 302,70 Z" className={visited} />
      <path d="M 580,120 L 610,125 L 615,155 L 600,165 L 590,145 L 580,140 Z" className={visited} />
      <path d="M 570,180 L 605,178 L 625,190 L 640,185 L 650,195 L 615,200 L 595,195 L 570,185 Z" className={visited} />
    </svg>
  );
}

const linkClass =
  "inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-600 hover:border-gold text-sm text-white hover:bg-onyx transition-colors";

export default function About() {
  return (
    <section className="bg-onyx-dark pt-16 md:pt-24 pb-12 scroll-mt-24" id="about">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-white tracking-tight mb-4">About</h2>
        <p className="text-sm md:text-base text-gray-300 max-w-2xl leading-relaxed mb-8">
          Born in Ecuador and raised in the New York area since 2011. I've traveled to 25 countries and Puerto Rico,
          mostly solo with a backpack, through Southeast Asia, the Andes, Central America, Europe, and the Caribbean,
          and delivered client work along the way. Working in places where plans change quickly taught me to stay calm,
          adapt, and design for the conditions people actually work in.
        </p>

        <div className="bg-onyx-dark/30 border border-onyx rounded-xl p-4 mb-16">
          <TravelMap />
        </div>

        <div className="scroll-mt-24 border-t border-onyx pt-12" id="contact">
          <h2 className="font-display text-2xl font-bold text-white tracking-tight mb-3">Contact</h2>
          <p className="text-sm text-gray-400 max-w-lg leading-relaxed mb-6">
            Open to Forward Deployed, Solutions, and Implementation Engineering roles.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="mailto:mayaguarimichael@gmail.com" className={linkClass}>
              <Mail className="w-4 h-4" /> Email
            </a>
            <a href="https://www.linkedin.com/in/michaelmayaguari/" target="_blank" rel="noopener noreferrer" className={linkClass}>
              <Linkedin className="w-4 h-4" /> LinkedIn
            </a>
            <a href="https://github.com/mgmayaguari" target="_blank" rel="noopener noreferrer" className={linkClass}>
              <Github className="w-4 h-4" /> GitHub
            </a>
            <a href="https://www.instagram.com/by.mgml" target="_blank" rel="noopener noreferrer nofollow" className={linkClass}>
              <Instagram className="w-4 h-4" /> @by.mgml
            </a>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-onyx flex items-center gap-2 text-xs text-gray-500">
          <Logo className="w-4 h-4 text-gold" />
          <span>&copy; {new Date().getFullYear()} MGML Ventures LLC</span>
        </div>
      </div>
    </section>
  );
}
