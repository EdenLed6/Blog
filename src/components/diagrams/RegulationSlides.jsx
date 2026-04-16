import { useState } from "react";

const slides = [
  {
    title: "EU AI Act (2023)",
    icon: "🇪🇺",
    color: "border-indigo-700 bg-indigo-900/20",
    points: [
      "Humanoid robots classified as high-risk AI systems",
      "DPIA (Data Protection Impact Assessment) mandatory before deployment",
      "Continuous monitoring and transparency requirements",
      "Fines up to €30M or 6% of global annual turnover",
    ],
    verdict: "The most comprehensive AI regulation framework currently in force.",
  },
  {
    title: "GDPR Article 25",
    icon: "🔐",
    color: "border-blue-700 bg-blue-900/20",
    points: [
      "Privacy by design and by default — legally mandatory",
      "Data minimization: collect only what's strictly necessary",
      "Purpose limitation: can't use data beyond original purpose",
      "Applies to any company processing EU residents' data",
    ],
    verdict: "Helix deployed in Europe would face immediate DPA scrutiny under Art. 25.",
  },
  {
    title: "US Approach",
    icon: "🇺🇸",
    color: "border-red-700 bg-red-900/20",
    points: [
      "No equivalent to EU AI Act at federal level",
      "NIST AI Risk Management Framework is voluntary",
      "FTC can act on unfair/deceptive practices — post-harm",
      "State-by-state patchwork: IL, TX, WA have biometric laws",
    ],
    verdict: "Reactive, fragmented, and ill-equipped for humanoid robot deployment at scale.",
  },
  {
    title: "Our Proposal: 4-Tier Model",
    icon: "🏗️",
    color: "border-purple-700 bg-purple-900/20",
    points: [
      "Tier 1: Privacy by Design — architectural mandates, pre-market",
      "Tier 2: DPIA — per sector, before deployment",
      "Tier 3: Functional/Training data distinction — separate legal treatment",
      "Tier 4: GDPR as global floor + US sectoral overlay",
    ],
    verdict: "This is the distance between where law is and where it needs to be.",
  },
  {
    title: "International Convergence",
    icon: "🌐",
    color: "border-emerald-700 bg-emerald-900/20",
    points: [
      "Figure AI needs both EU and US markets at scale",
      "Building to GDPR/AI Act standards protects both markets",
      "Regulatory arbitrage has hard limits when revenue depends on compliance",
      "Privacy-by-design as competitive advantage, not just cost",
    ],
    verdict: "GDPR will become the de facto global floor for humanoid robot governance.",
  },
];

export default function RegulationSlides() {
  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrent((c) => (c + 1) % slides.length);
  const s = slides[current];

  return (
    <div className="rounded-xl overflow-hidden border border-border bg-card p-4 mt-3">
      <div className="flex items-center justify-between mb-3">
        <p className="text-xs text-slate-500 uppercase tracking-wide font-medium">
          Regulatory Landscape — AI &amp; Humanoid Robots
        </p>
        <span className="text-xs text-slate-600">{current + 1} / {slides.length}</span>
      </div>

      <div className={`rounded-lg border ${s.color} p-4 min-h-[160px] transition-all`}>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xl">{s.icon}</span>
          <h3 className="text-sm font-bold text-white">{s.title}</h3>
        </div>
        <ul className="space-y-1.5 mb-3">
          {s.points.map((p, i) => (
            <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
              <span className="text-slate-500 mt-0.5">•</span>{p}
            </li>
          ))}
        </ul>
        <p className="text-xs text-slate-400 italic border-t border-white/10 pt-2">{s.verdict}</p>
      </div>

      <div className="flex items-center justify-between mt-3">
        <button onClick={prev} className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs transition-colors">
          ← Prev
        </button>
        <div className="flex gap-1.5">
          {slides.map((_, i) => (
            <button key={i} onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-colors ${i === current ? "bg-indigo-400" : "bg-slate-700"}`} />
          ))}
        </div>
        <button onClick={next} className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs transition-colors">
          Next →
        </button>
      </div>
    </div>
  );
}
