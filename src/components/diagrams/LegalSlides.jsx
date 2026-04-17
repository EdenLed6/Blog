import { useState, useRef } from "react";

const slides = [
  {
    title: "No Federal Framework",
    icon: "🇺🇸",
    color: "border-red-700 bg-red-900/20",
    badge: "bg-red-700",
    points: [
      "FTC Act §5 — covers \"unfair\" practices, reactive only",
      "BIPA — Illinois only, biometric data",
      "CCPA/CPRA — California consumers only",
      "No unified federal robotics or AI privacy law",
    ],
    verdict: "The robot walks into your warehouse and the law shrugs.",
  },
  {
    title: "Illinois BIPA Exposure",
    icon: "⚖️",
    color: "border-orange-700 bg-orange-900/20",
    badge: "bg-orange-700",
    points: [
      "$1,000 per negligent violation",
      "$5,000 per intentional violation",
      "Private right of action — no regulator needed",
      "No proof of actual harm required",
    ],
    verdict: "Warehouses are Helix's primary market. This is not hypothetical.",
  },
  {
    title: "GDPR vs NIST",
    icon: "🌍",
    color: "border-blue-700 bg-blue-900/20",
    badge: "bg-blue-700",
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
    badge: "bg-purple-700",
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
    badge: "bg-emerald-700",
    points: [
      "No law specifically governs AI training data collection",
      "Functional data (real-time use) vs training data (retained) not legally distinguished",
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
      <div className="flex items-center justify-between mb-3">
        <p className="text-xs sm:text-sm text-slate-500 uppercase tracking-wide font-medium">
          Key Legal Challenges — Humanoid Robots
        </p>
        <span className="text-xs sm:text-sm text-slate-600">{current + 1} / {slides.length}</span>
      </div>

      <div className={`rounded-lg border ${s.color} p-4 sm:p-5 transition-all select-none`}>
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
        <button onClick={prev} className="px-4 py-2.5 min-h-[44px] rounded-lg bg-slate-800 hover:bg-slate-700 active:bg-slate-600 text-slate-300 text-sm font-medium transition-colors touch-manipulation">
          ← Prev
        </button>
        <div className="flex gap-2 items-center">
          {slides.map((_, i) => (
            <button key={i} onClick={() => setCurrent(i)} aria-label={`Slide ${i + 1}`}
              className={`w-2.5 h-2.5 rounded-full transition-colors touch-manipulation ${i === current ? "bg-blue-400" : "bg-slate-700"}`} />
          ))}
        </div>
        <button onClick={next} className="px-4 py-2.5 min-h-[44px] rounded-lg bg-slate-800 hover:bg-slate-700 active:bg-slate-600 text-slate-300 text-sm font-medium transition-colors touch-manipulation">
          Next →
        </button>
      </div>
    </div>
  );
}
