import { useState, useRef } from "react";

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
      "Privacy by design and by default, legally mandatory",
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
      "FTC can act on unfair/deceptive practices, post-harm",
      "State-by-state patchwork: IL, TX, WA have biometric laws",
    ],
    verdict: "Reactive, fragmented, and ill-equipped for humanoid robot deployment at scale.",
  },
  {
    title: "Our Proposal: 4-Tier Model",
    icon: "🏗️",
    color: "border-purple-700 bg-purple-900/20",
    points: [
      "Tier 1: Privacy by Design, architectural mandates, pre-market",
      "Tier 2: DPIA, per sector, before deployment",
      "Tier 3: Functional/Training data distinction, separate legal treatment",
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
  const touchX = useRef(null);
  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrent((c) => (c + 1) % slides.length);
  const s = slides[current];

  const onTouchStart = (e) => { touchX.current = e.touches[0].clientX; };
  const onTouchEnd = (e) => {
    if (touchX.current === null) return;
    const delta = touchX.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 50) delta > 0 ? next() : prev();
    touchX.current = null;
  };

  return (
    <div
      className="rounded-xl overflow-hidden border border-border bg-card p-3 sm:p-4 mt-3"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      style={{ touchAction: "pan-y" }}
    >
      <p className="text-xs text-slate-500 uppercase tracking-wide font-medium mb-2">
        Regulatory Landscape, AI &amp; Humanoid Robots
      </p>

      <div className="flex gap-1 mb-3">
        {slides.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)} aria-label={`Slide ${i + 1}`}
            className="flex-1 h-1 rounded-full bg-slate-700/60 overflow-hidden touch-manipulation">
            <div className={`h-full rounded-full transition-all duration-300 ${
              i < current ? "bg-white/50 w-full" : i === current ? "bg-white w-full" : "w-0"
            }`} />
          </button>
        ))}
      </div>

      <div key={current} className={`rounded-lg border ${s.color} p-4 sm:p-5 select-none slide-animate`}>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-2xl flex-shrink-0">{s.icon}</span>
          <h3 className="text-base sm:text-lg font-bold text-white leading-tight">{s.title}</h3>
        </div>
        <ul className="space-y-2.5 mb-4">
          {s.points.map((p, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-slate-300 leading-snug">
              <span className="text-slate-500 mt-0.5 flex-shrink-0">•</span>{p}
            </li>
          ))}
        </ul>
        <p className="text-sm text-slate-400 italic border-t border-white/10 pt-3 leading-snug">{s.verdict}</p>
      </div>

      <div className="flex items-center justify-between mt-3">
        <button onClick={prev}
          className="w-11 h-11 rounded-full bg-white/8 hover:bg-white/15 active:bg-white/25 flex items-center justify-center text-white text-xl transition-colors touch-manipulation">
          ‹
        </button>
        <span className="text-xs text-slate-500">{current + 1} / {slides.length}</span>
        <button onClick={next}
          className="w-11 h-11 rounded-full bg-white/8 hover:bg-white/15 active:bg-white/25 flex items-center justify-center text-white text-xl transition-colors touch-manipulation">
          ›
        </button>
      </div>
    </div>
  );
}
