import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Globe2, Compass, AlertCircle, RefreshCw, Zap, ShieldAlert, WifiOff } from "lucide-react";
import { TravelVignette } from "../types";

export default function GlobalExplorer() {
  const [activeRegion, setActiveRegion] = useState<number>(0);

  const vignettes: TravelVignette[] = [
    {
      id: "south-east-asia",
      selectTitle: "South East Asia",
      selectSubtitle: "Vietnam, Thailand, Laos, Indonesia",
      focusTitle: "Indochina & Sunda Landscapes",
      iconName: "Zap",
      mapCountries: ["VN", "TH", "LA", "ID"],
      challengeTitle: "Unpredictable Environments",
      challengeDesc: "Navigating severe monsoon washouts and total cellular signal blackouts across Laos and Vietnam.",
      engineeringTitle: "Building Redundant Systems",
      engineeringDesc: "Designed dynamic routing paths and offline safety backups to ensure travel velocity never dropped.",
      businessValue: "Symmetric Fault Tolerance"
    },
    {
      id: "south-american-cordillera",
      selectTitle: "South American Cordillera",
      selectSubtitle: "Ecuador, Colombia, Peru, Bolivia, Chile, Argentina, Uruguay, Brazil",
      focusTitle: "High-Altitude Andean Traverses",
      iconName: "ShieldAlert",
      mapCountries: ["EC", "CO", "PE", "BO", "CL", "AR", "UY", "BR"],
      challengeTitle: "Severe Resource Constraints",
      challengeDesc: "Managing strict logistics and unpredictable blizzards through isolated mountain passes scaling 5,000 meters.",
      engineeringTitle: "Peak Resource Optimization",
      engineeringDesc: "Prioritized critical cargo allocations and tightly managed safety margins under harsh, shifting conditions.",
      businessValue: "Resource Optimization"
    },
    {
      id: "central-american-isthmus",
      selectTitle: "Central American Isthmus",
      selectSubtitle: "Panama, El Salvador, Guatemala, Mexico",
      focusTitle: "Pan-American Transit Hubs",
      iconName: "Compass",
      mapCountries: ["PA", "SV", "GT", "MX"],
      challengeTitle: "Complex Compliance Gateways",
      challengeDesc: "Negotiating volatile overland border checkpoints and changing cross-border regulatory entry protocols.",
      engineeringTitle: "Multi-Stage Verification",
      engineeringDesc: "Implemented thorough manual document checks and proactive protocol validations to eliminate transit delays.",
      businessValue: "Multi-Stage Validation"
    },
    {
      id: "european-transit-systems",
      selectTitle: "European Transit Systems",
      selectSubtitle: "Spain, Ireland, Germany, UK, France",
      focusTitle: "Multi-Jurisdiction Intermodal Grids",
      iconName: "RefreshCw",
      mapCountries: ["ES", "IE", "DE", "GB", "FR"],
      challengeTitle: "Decentralized Network Sync",
      challengeDesc: "Coordinating connections across distinct international high-speed networks during unexpected local outages.",
      engineeringTitle: "Distributed Management",
      engineeringDesc: "Monitored multiple scheduling telemetry channels in real time to seamlessly adapt routes on the fly.",
      businessValue: "Distributed Coordination"
    },
    {
      id: "island-protocol-outposts",
      selectTitle: "Island Protocol Outposts",
      selectSubtitle: "Cuba, Dominican Republic, Puerto Rico",
      focusTitle: "Disconnected Island Topologies",
      iconName: "WifiOff",
      mapCountries: ["CU", "DO", "PR"],
      challengeTitle: "Total Infrastructure Collapse",
      challengeDesc: "Operating efficiently through complete power grid failures and hardware shortages across isolated Caribbean zones.",
      engineeringTitle: "Offline-First Strategies",
      engineeringDesc: "Designed self-contained local plans that functioned flawlessly without relying on live upstream services.",
      businessValue: "Air-Gapped Self-Reliance"
    },
    {
      id: "cross-border-infrastructure",
      selectTitle: "Cross-Border Infrastructure",
      selectSubtitle: "USA, Canada",
      focusTitle: "High-Velocity Nearshore Corridors",
      iconName: "Globe",
      mapCountries: ["US", "CA"],
      challengeTitle: "High-Velocity Logistics",
      challengeDesc: "Traversing complex international distribution networks with strict delivery timelines and regional rules.",
      engineeringTitle: "Strategic Edge Routing",
      engineeringDesc: "Optimized geographic transit paths to stay compliant while maximizing end-to-end delivery speed.",
      businessValue: "Optimized Edge Delivery"
    }
  ];

  const getTelemetryMetrics = (id: string) => {
    switch (id) {
      case "south-east-asia":
        return { status: "DEGRADED", uplink: "INTERMITTENT", alertLevel: "CRITICAL", latency: "780ms" };
      case "south-american-cordillera":
        return { status: "THROTTLED", uplink: "NOMINAL", alertLevel: "WARNING", latency: "120ms" };
      case "central-american-isthmus":
        return { status: "SECURITY_CHECK", uplink: "STABLE", alertLevel: "WARNING", latency: "340ms" };
      case "european-transit-systems":
        return { status: "SYNCHRONIZED", uplink: "STABLE", alertLevel: "NOMINAL", latency: "14ms" };
      case "island-protocol-outposts":
        return { status: "DETACHED", uplink: "AIR_GAPPED", alertLevel: "CRITICAL", latency: "N/A" };
      case "cross-border-infrastructure":
        return { status: "ACTIVE", uplink: "OPTIMIZED", alertLevel: "NOMINAL", latency: "42ms" };
      default:
        return { status: "NOMINAL", uplink: "STABLE", alertLevel: "NOMINAL", latency: "45ms" };
    }
  };

  // Helper matching state icon
  const renderIcon = (name: string) => {
    switch (name) {
      case "Zap": return <Zap className="w-4 h-4 text-gold" />;
      case "ShieldAlert": return <ShieldAlert className="w-4 h-4 text-gold" />;
      case "RefreshCw": return <RefreshCw className="w-4 h-4 text-gold" />;
      case "Compass": return <Compass className="w-4 h-4 text-gold" />;
      case "Globe": return <Globe2 className="w-4 h-4 text-gold" />;
      default: return <WifiOff className="w-4 h-4 text-gold" />;
    }
  };

  const renderSVGWorldMap = () => {
    const activeVignette = vignettes[activeRegion] || vignettes[0];
    const highlightedCountries = activeVignette.mapCountries;

    const isSoutheastAsiaActive = highlightedCountries.includes("VN");
    const isSouthAmericaActive = highlightedCountries.includes("PE");
    const isCentralAmericaActive = highlightedCountries.includes("MX");
    const isEuropeActive = highlightedCountries.includes("DE");
    const isCaribbeanActive = highlightedCountries.includes("CU");
    const isNorthAmericaActive = highlightedCountries.includes("US");

    // Coordinates to draw pulsing radar hubs for visual telemetry
    const points = [
      { id: 0, x: 595, y: 145, label: "SEA", active: isSoutheastAsiaActive },
      { id: 1, x: 215, y: 245, label: "Andean Cordillera", active: isSouthAmericaActive },
      { id: 2, x: 165, y: 175, label: "Central Isthmus", active: isCentralAmericaActive },
      { id: 3, x: 345, y: 78,  label: "Euro-Transit", active: isEuropeActive },
      { id: 4, x: 196, y: 144, label: "Islands Outpost", active: isCaribbeanActive },
      { id: 5, x: 135, y: 80,  label: "Cross-Border", active: isNorthAmericaActive }
    ];

    return (
      <div className="relative bg-onyx-dark/30 border border-onyx p-4 rounded-xl overflow-hidden mb-6" id="svg-telemetry-map-panel">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-onyx-dark/40 pointer-events-none" />
        {/* Panel header inside the map */}
        <div className="flex items-center justify-between pb-3 border-b border-onyx/40 mb-3 relative z-10">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-gold"></span>
            </span>
            <span className="font-mono text-[9px] uppercase tracking-wider text-gray-400">
              Expedition Real-Time Telemetry Grid
            </span>
          </div>
          <div className="font-mono text-[8px] text-gold/70 uppercase tracking-widest hidden sm:block">
            System Origin: 40.7128° N, 74.0060° W
          </div>
        </div>

        {/* SVG Drawing */}
        <div className="w-full h-auto aspect-[850/310]">
          <svg viewBox="0 0 850 310" className="w-full h-full select-none" id="vector-world-telemetry">
            {/* 1. Grid underlayer */}
            <g className="opacity-[0.06] pointer-events-none">
              {Array.from({ length: 18 }).map((_, i) => (
                <line
                  key={`v-${i}`}
                  x1={i * 50}
                  y1="0"
                  x2={i * 50}
                  y2="310"
                  stroke="#C5A059"
                  strokeWidth="0.75"
                  strokeDasharray="4 4"
                />
              ))}
              {Array.from({ length: 7 }).map((_, i) => (
                <line
                  key={`h-${i}`}
                  x1="0"
                  y1={i * 50}
                  x2="850"
                  y2={i * 50}
                  stroke="#C5A059"
                  strokeWidth="0.75"
                  strokeDasharray="4 4"
                />
              ))}
            </g>

            {/* Greenland (Passive Background) */}
            <path
              d="M 235,15 L 280,15 L 265,45 L 230,35 Z"
              className="fill-onyx-dark/20 stroke-zinc-800/40 pointer-events-none stroke-[1]"
            />

            {/* Africa (Passive Background) */}
            <path
              d="M 330,135 L 405,140 L 440,175 L 430,230 L 415,265 L 398,265 L 372,205 Z"
              className="fill-onyx-dark/20 stroke-zinc-800/40 pointer-events-none stroke-[1]"
            />

            {/* Asia Core (Passive Background) */}
            <path
              d="M 380,45 L 630,45 L 660,110 L 615,120 L 580,105 L 535,110 L 410,95 Z"
              className="fill-onyx-dark/20 stroke-zinc-800/40 pointer-events-none stroke-[1]"
            />

            {/* Madagascar (Passive Background) */}
            <path
              d="M 430,240 L 440,255 L 432,260 Z"
              className="fill-onyx-dark/20 stroke-zinc-800/40 pointer-events-none stroke-[1]"
            />

            {/* Australia (Passive Background) */}
            <path
              d="M 610,215 L 665,220 L 675,255 L 625,255 Z"
              className="fill-onyx-dark/20 stroke-zinc-800/40 pointer-events-none stroke-[1]"
            />

            {/* Interactive North America */}
            <path
              d="M 60,35 L 205,35 L 205,50 L 190,55 L 200,95 L 180,105 L 155,130 L 135,115 L 120,125 L 105,100 L 95,100 L 65,85 Z"
              className={`transition-all duration-300 cursor-pointer stroke-[1.25] ${
                isNorthAmericaActive 
                  ? 'fill-gold/25 stroke-gold filter drop-shadow-[0_0_6px_rgba(197,160,89,0.3)]' 
                  : 'fill-onyx/30 stroke-zinc-700 hover:fill-onyx/60 hover:stroke-zinc-500'
              }`}
              onClick={() => setActiveRegion(5)}
            />

            {/* Interactive Central America & Mexico */}
            <path
              d="M 120,125 L 135,115 L 155,130 L 140,150 L 165,170 L 180,165 L 185,175 L 165,185 L 145,160 Z M 165,185 L 175,190 L 185,185 L 190,195 L 182,205 L 175,200 Z"
              className={`transition-all duration-300 cursor-pointer stroke-[1.25] ${
                isCentralAmericaActive
                  ? 'fill-gold/25 stroke-gold filter drop-shadow-[0_0_6px_rgba(197,160,89,0.3)]' 
                  : 'fill-onyx/30 stroke-zinc-700 hover:fill-onyx/60 hover:stroke-zinc-500'
              }`}
              onClick={() => setActiveRegion(2)}
            />

            {/* Interactive South America */}
            <path
              d="M 185,200 L 210,195 L 230,225 L 245,245 L 215,315 L 200,315 L 185,260 L 180,220 Z"
              className={`transition-all duration-300 cursor-pointer stroke-[1.25] ${
                isSouthAmericaActive
                  ? 'fill-gold/25 stroke-gold filter drop-shadow-[0_0_6px_rgba(197,160,89,0.3)]' 
                  : 'fill-onyx/30 stroke-zinc-700 hover:fill-onyx/60 hover:stroke-zinc-500'
              }`}
              onClick={() => setActiveRegion(1)}
            />

            {/* Interactive Caribbean */}
            <g className="cursor-pointer" onClick={() => setActiveRegion(4)}>
              <ellipse 
                cx="178" 
                cy="142" 
                rx="8" 
                ry="2" 
                className={`transition-all duration-300 stroke-[1] ${
                  isCaribbeanActive ? 'fill-gold/25 stroke-gold' : 'fill-onyx/30 stroke-zinc-700 hover:stroke-zinc-500'
                }`} 
              />
              <ellipse 
                cx="196" 
                cy="144" 
                rx="5" 
                ry="2" 
                className={`transition-all duration-300 stroke-[1] ${
                  isCaribbeanActive ? 'fill-gold/25 stroke-gold' : 'fill-onyx/30 stroke-zinc-700 hover:stroke-zinc-500'
                }`} 
              />
              <ellipse 
                cx="206" 
                cy="145" 
                rx="3.5" 
                ry="1.5" 
                className={`transition-all duration-300 stroke-[1] ${
                  isCaribbeanActive ? 'fill-gold/25 stroke-gold' : 'fill-onyx/30 stroke-zinc-700 hover:stroke-zinc-500'
                }`} 
              />
            </g>

            {/* Interactive Europe */}
            <path
              d="M 315,50 L 375,50 L 390,75 L 360,110 L 345,115 L 315,90 Z M 305,60 L 315,62 L 312,75 L 302,70 Z"
              className={`transition-all duration-300 cursor-pointer stroke-[1.25] ${
                isEuropeActive
                  ? 'fill-gold/25 stroke-gold filter drop-shadow-[0_0_6px_rgba(197,160,89,0.3)]' 
                  : 'fill-onyx/30 stroke-zinc-700 hover:fill-onyx/60 hover:stroke-zinc-500'
              }`}
              onClick={() => setActiveRegion(3)}
            />

            {/* Interactive South East Asia & Indochina */}
            <g className="cursor-pointer" onClick={() => setActiveRegion(0)}>
              <path
                d="M 580,120 L 610,125 L 615,155 L 600,165 L 590,145 L 580,140 Z"
                className={`transition-all duration-300 stroke-[1.25] ${
                  isSoutheastAsiaActive
                    ? 'fill-gold/25 stroke-gold filter drop-shadow-[0_0_6px_rgba(197,160,89,0.3)]' 
                    : 'fill-onyx/30 stroke-zinc-700 hover:fill-onyx/60 hover:stroke-zinc-500'
                }`}
              />
              <path
                d="M 570,180 L 605,178 L 625,190 L 640,185 L 650,195 L 615,200 L 595,195 L 570,185 Z"
                className={`transition-all duration-300 stroke-[1.25] ${
                  isSoutheastAsiaActive
                    ? 'fill-gold/25 stroke-gold filter drop-shadow-[0_0_6px_rgba(197,160,89,0.3)]' 
                    : 'fill-onyx/30 stroke-zinc-700 hover:fill-onyx/60 hover:stroke-zinc-500'
                }`}
              />
            </g>

            {/* Telemetry Radar pulses on key hubs */}
            {points.map((pt) => {
              if (!pt.active) {
                return (
                  <circle
                    key={pt.id}
                    cx={pt.x}
                    cy={pt.y}
                    r="3.5"
                    className="fill-gold/50 cursor-pointer hover:fill-gold transition-colors duration-200"
                    onClick={() => setActiveRegion(pt.id)}
                  />
                );
              }
              return (
                <g key={pt.id} className="cursor-pointer" onClick={() => setActiveRegion(pt.id)}>
                  <circle
                    cx={pt.x}
                    cy={pt.y}
                    r="11"
                    className="fill-none stroke-gold animate-pulse stroke-[1.25]"
                  />
                  <circle
                    cx={pt.x}
                    cy={pt.y}
                    r="6"
                    className="fill-none stroke-gold/70 animate-ping stroke-[0.75]"
                  />
                  <circle
                    cx={pt.x}
                    cy={pt.y}
                    r="3"
                    className="fill-gold"
                  />
                  <text
                    x={pt.x + 8}
                    y={pt.y + 3}
                    className="fill-white font-mono text-[7.5px] tracking-wider uppercase font-semibold pointer-events-none drop-shadow-[0_1.5px_3px_rgba(0,0,0,0.8)]"
                  >
                    • {pt.label}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>
      </div>
    );
    };

  const renderVignetteDeepView = (v: TravelVignette, isMobile: boolean) => {
    const metrics = getTelemetryMetrics(v.id);

    return (
      <div className="space-y-5 text-left" id={`vignette-deep-view-${v.id}`}>
        {/* Detail Title Header Row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-onyx pb-3 gap-2">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 bg-gold/10 rounded-md border border-gold/25 flex items-center justify-center">
              {renderIcon(v.iconName)}
            </div>
            <div>
              <span className="font-mono text-[9px] text-gray-550 uppercase tracking-widest block">Systems Origin Hub</span>
              <h4 className="font-display font-bold text-sm text-white leading-tight">
                {v.selectTitle} <span className="text-gold font-normal"> / {v.focusTitle}</span>
              </h4>
            </div>
          </div>
          <div className="p-1 px-2.5 bg-onyx-dark/80 rounded border border-onyx/80 self-start sm:self-center flex items-center gap-2">
            <span className={`w-1.5 h-1.5 rounded-full inline-block ${
              metrics.alertLevel === "CRITICAL" ? "bg-red-500 animate-pulse" : metrics.alertLevel === "WARNING" ? "bg-amber-500 animate-pulse" : "bg-emerald-500"
            }`} />
            <span className="font-mono text-[8.5px] text-gray-300 font-bold tracking-wider">{metrics.status}</span>
          </div>
        </div>

        {/* Telemetry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Section 1: Environmental Friction Payload */}
          <div className="p-4 rounded-xl bg-onyx-dark/50 border border-onyx/50 flex flex-col justify-between space-y-3">
            <div>
              <div className="flex items-center gap-1.5 text-[9.5px] font-mono text-gray-400 uppercase tracking-widest mb-3 pb-1 border-b border-onyx/25">
                <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                <span>Environmental Challenge</span>
              </div>
              <div className="space-y-1.5 text-[10px] font-mono">
                <div className="flex items-center justify-between text-gray-500">
                  <span>METRIC_SIG:</span>
                  <span className="text-gold font-medium tracking-tight">INCIDENT-{v.id.substring(0, 4).toUpperCase()}</span>
                </div>
                <div className="flex items-center justify-between text-gray-500">
                  <span>NODAL_GEO:</span>
                  <span className="text-white shrink-0 font-medium">{v.mapCountries.join(", ")}</span>
                </div>
                <div className="flex items-center justify-between text-gray-500">
                  <span>CONN_LINK:</span>
                  <span className="text-zinc-300 font-medium">{metrics.uplink}</span>
                </div>
              </div>
            </div>

            <div className="p-3 bg-onyx/40 rounded-lg border border-onyx/40 mt-2">
              <span className="font-mono text-[9px] text-gold uppercase tracking-wider block mb-1">{v.challengeTitle}</span>
              <p className="text-[11px] text-gray-300 font-sans tracking-wide leading-relaxed">
                {v.challengeDesc}
              </p>
            </div>
          </div>

          {/* Section 2: Logical Systems Isomorphism Payload */}
          <div className="p-4 rounded-xl bg-onyx-dark/50 border border-onyx/50 flex flex-col justify-between space-y-3">
            <div>
              <div className="flex items-center gap-1.5 text-[9.5px] font-mono text-gold-hover uppercase tracking-widest mb-3 pb-1 border-b border-onyx/25">
                <AlertCircle className="w-3.5 h-3.5 text-gold-hover" />
                <span>Systems Engineering</span>
              </div>
              <div className="space-y-1.5 text-[10px] font-mono">
                <div className="flex items-center justify-between text-gray-500">
                  <span>ISO_SIGMA:</span>
                  <span className="text-gold font-medium tracking-tight">ISO-{v.id.substring(0, 4).toUpperCase()}</span>
                </div>
                <div className="flex items-center justify-between text-gray-500">
                  <span>FORGED_STR:</span>
                  <span className="text-white font-bold">{v.businessValue}</span>
                </div>
                <div className="flex items-center justify-between text-gray-500">
                  <span>LAT_SIGMA:</span>
                  <span className="text-zinc-300">{metrics.latency}</span>
                </div>
              </div>
            </div>

            <div className="p-3 bg-onyx/40 rounded-lg border border-onyx/40 mt-2">
              <span className="font-mono text-[9px] text-gold uppercase tracking-wider block mb-1">{v.engineeringTitle}</span>
              <p className="text-[11px] text-gray-300 font-sans tracking-wide leading-relaxed">
                {v.engineeringDesc}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Forged Strength Summary */}
        <div className="pt-3 border-t border-onyx/50 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <span className="text-[9px] font-mono text-gray-550 uppercase tracking-widest block">Systemic Trait Synthesized</span>
            <span className="font-mono text-[11px] text-white font-medium">
              Adapting code architectures for environmental resilience
            </span>
          </div>
          <div className="px-3 py-1.5 bg-gold/10 border border-gold/30 rounded-md text-left sm:text-right self-start sm:self-center shrink-0">
            <span className="font-mono text-[8px] text-gold uppercase tracking-wider block">FORGED CAPACITY</span>
            <div className="font-display font-bold text-white text-[11px]">{v.businessValue}</div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="py-16 md:py-24 border-b border-onyx relative overflow-hidden scroll-mt-24" id="global-explorer-section">
      <div className="max-w-6xl mx-auto px-6 relative z-10" id="global-explorer-container">
        
        {/* Header content */}
        <div className="mb-12" id="explorer-header">
          <div className="text-xs font-mono uppercase tracking-widest text-gold mb-2 flex items-center gap-1.5">
            <Globe2 className="w-4 h-4 text-gold animate-spin-slow" />
            <span>04 / THE HUMAN ACCENT</span>
          </div>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-white tracking-tight">
            The Global Perspective
          </h2>
          <p className="text-sm text-gray-400 mt-2 max-w-2xl font-light">
            The Global Perspective: Years of extensive travel across 25 countries—anchored by rugged, autonomous solo backpacking expeditions through dense global hubs and remote mountain ranges—has shaped a design approach centering on high-velocity communication, extreme adaptability, and composed problem-solving under sudden structural friction.
          </p>
        </div>

        {/* Dynamic Display Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch" id="explorer-layout-grid">
          
          {/* Left Side: Interactive Map Timeline nodes */}
          <div className="lg:col-span-4 space-y-3" id="vignette-selector-panels">
            <div className="text-xs font-mono text-gray-550 uppercase tracking-widest px-2 mb-1">
              Select Expeditions
            </div>
            {vignettes.map((v, idx) => {
              const isSelected = activeRegion === idx;
              return (
                <div key={idx} className="flex flex-col">
                  <button
                    onClick={() => {
                      const isMobile = window.innerWidth < 1024;
                      const isClosing = isSelected;
                      const nextRegion = (isMobile && isClosing) ? -1 : idx;
                      setActiveRegion(nextRegion);
                      if (isMobile && !isClosing) {
                        setTimeout(() => {
                          const el = document.getElementById(`explorer-button-${idx}`);
                          el?.scrollIntoView({ behavior: "smooth", block: "nearest" });
                        }, 120);
                      }
                    }}
                    className={`w-full text-left p-4 rounded-xl border transition-all duration-300 flex items-center justify-between group ${
                      isSelected 
                        ? "bg-onyx border-gold shadow-lg" 
                        : "bg-onyx/30 border-onyx/60 hover:bg-onyx/50 hover:border-gray-700"
                    }`}
                    id={`explorer-button-${idx}`}
                  >
                    <div>
                      <div className="font-display text-sm font-semibold text-white group-hover:text-gold transition-colors">
                        {v.selectTitle}
                      </div>
                      <div className="font-mono text-[10px] text-gray-400 mt-1 leading-normal">
                        {v.selectSubtitle}
                      </div>
                    </div>
                    <div className={`p-1.5 rounded transition-all duration-300 hidden sm:block ${
                      isSelected ? "bg-gold/10 text-gold" : "bg-onyx-dark/80 text-gray-500 group-hover:text-gray-300"
                    }`}>
                      <Compass className="w-4 h-4 animate-spin-slow" />
                    </div>
                  </button>

                  {/* Inline panel on mobile */}
                  <AnimatePresence initial={false}>
                    {isSelected && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="lg:hidden overflow-hidden bg-onyx/30 border border-onyx/60 p-4 rounded-xl mb-3 mt-3"
                      >
                        {renderVignetteDeepView(v, true)}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Right Side: Analytical analog cards showing trait synthesis (Desktop Only) */}
          <div className="lg:col-span-8 hidden lg:flex flex-col" id="explorer-details-panel">
            {/* SVG Interactive World Map - Top Half */}
            {renderSVGWorldMap()}

            {/* Dashboard Telemetry Metrics - Bottom Half */}
            <div className="flex-1">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeRegion}
                  initial={{ opacity: 0, scale: 0.99, y: 5 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.99, y: -5 }}
                  transition={{ duration: 0.25 }}
                  className="bg-onyx/40 border border-onyx/60 p-6 rounded-xl h-full flex flex-col justify-between shadow-2xl relative"
                  id="explorer-deepview-details"
                >
                  {/* Visual glow on background */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

                  {renderVignetteDeepView(vignettes[activeRegion] || vignettes[0], false)}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>

        {/* Instagram travel photography highlight */}
        <div className="mt-12 p-6 rounded-xl bg-onyx/20 border border-onyx/80 max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4" id="instagram-travel-addon">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gold/5 border border-gold/30 flex items-center justify-center font-mono text-gold text-lg animate-pulse">
              📸
            </div>
            <div className="text-left">
              <h4 className="font-display font-medium text-white text-sm">Visual Ethnography & Travel Photography</h4>
              <p className="text-xs text-slate-400 font-light mt-0.5">Ingesting high-fidelity RAW telemetry, architectural geometry, and unstructured ethnographic data across remote global nodes.</p>
            </div>
          </div>
          <a
            href="https://www.instagram.com/by.mgml"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gold/10 hover:bg-gold/20 border border-gold/30 hover:border-gold/65 text-xs font-mono text-gold transition-all duration-300 shadow-md"
            id="instagram-travel-link"
          >
            <span>Query Database: @by.mgml</span>
            <Compass className="w-3.5 h-3.5 animate-spin-slow" />
          </a>
        </div>

      </div>
    </section>
  );
}
