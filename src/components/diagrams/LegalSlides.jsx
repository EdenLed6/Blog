import { useState, useRef } from "react";

const slides = [
  {
    title: "No Federal Framework",
    icon: "🇺🇸",
    color: "border-red-700 bg-red-900/20",
    points: [
      "FTC Act §5, covers \"unfair\" practices, reactive only",
      "BIPA, Illinois only, biometric data",
      "CCPA/CPRA, California consumers only",
      "No unified federal robotics or AI privacy law",
    ],
    verdict: "The robot walks into your warehouse and the law shrugs.",
  },
  {
    title: "Illinois BIPA Exposure",
    icon: "⚖️",
    color: "border-orange-700 bg-orange-900/20",
    points: [
      "$1,000 per negligent violation",
      "$5,000 per intentional violation",
      "Private right of action, no regulator needed",
      "No proof of actual harm required",
    ],
    verdict: "Warehouses are Helix's primary market. This is not hypothetical.",
  },
  {
    title: "GDPR vs NIST",
    icon: "🌍",
    color: "border-blue-700 bg-blue-900/20",
    points: [
      "EU: Privacy by Design is legally mandatory (Art. 25)",
      "EU: DPA pre-approval required for high-risk AI",
      "US: NIST Privacy Framework is voluntary",
      "US: Enforcement is post-violation litigation",
    ],
    verdict: "Same robot, two continents, completely different legal reality.",
  },
  {
    title: "Product vs Data Law Gap",
    icon: "🕳️",
    color: "border-purple-700 bg-purple-900/20",
    points: [
      "Product liability: designed for physical defects",
      "Data protection: designed for digital processing",
      "Humanoid robots sit in neither category cleanly",
      "A robot misusing biometric data may violate neither",
    ],
    verdict: "The regulatory gap is definitional, not just enforcement.",
  },
  {
    title: "Training Data Gap",
    icon: "🤖",
    color: "border-emerald-700 bg-emerald-900/20",
    points: [
      "No law specifically governs AI training data collection",
      "Functional vs training data not legally distinguished",
      "Current law treats it all as product telemetry",
      "Our proposal: mandatory DPIA + consent for training-purpose retention",
    ],
    verdict: "This is the most urgent legislative gap in embodied AI governance.",
  },
];

export default function LegalSlides() {
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
      {/* Label */}
      <p className="text-xs text-slate-500 uppercase tracking-wide font-medium mb-2">
        Key Legal Challenges, Humanoid Robots
      </p>

      {/* Instagram-style progress bar */}
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

      {/* Slide content with animation */}
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

      {/* Arrow nav */}
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
