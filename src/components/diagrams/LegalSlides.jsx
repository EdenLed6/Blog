import { useState } from "react";

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
  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrent((c) => (c + 1) % slides.length);
  const s = slides[current];

  return (
    <div className="rounded-xl overflow-hidden border border-border bg-card p-4 mt-3">
      <div className="flex items-center justify-between mb-3">
        <p className="text-xs text-slate-500 uppercase tracking-wide font-medium">
          Key Legal Challenges — Humanoid Robots
        </p>
        <span className="text-xs text-slate-600">{current + 1} / {slides.length}</span>
      </div>

      {/* Slide */}
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

      {/* Navigation */}
      <div className="flex items-center justify-between mt-3">
        <button onClick={prev} className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs transition-colors">
          ← Prev
        </button>
        <div className="flex gap-1.5">
          {slides.map((_, i) => (
            <button key={i} onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-colors ${i === current ? "bg-blue-400" : "bg-slate-700"}`} />
          ))}
        </div>
        <button onClick={next} className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs transition-colors">
          Next →
        </button>
      </div>
    </div>
  );
}
