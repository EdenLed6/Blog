import { useState } from "react";

const slides = [
  {
    title: "Continuous Biometric Capture",
    icon: "👁️",
    color: "border-red-700 bg-red-900/20",
    points: [
      "RGB cameras + depth sensors at ~20 fps",
      "Captures faces, gait, voice — simultaneously",
      "Even bystanders not interacting are in every frame",
      "20 biometric snapshots per second, per person in range",
    ],
    verdict: "This isn't occasional data collection. It's ambient, continuous surveillance.",
  },
  {
    title: "The Panopticon Effect",
    icon: "🏛️",
    color: "border-amber-700 bg-amber-900/20",
    points: [
      "Bentham's panopticon: uncertainty of being watched changes behavior",
      "With Helix: no uncertainty — you know it's always watching",
      "Workers self-censor, modify behavior, feel psychological stress",
      "Calo: 'social meaning' harm — the chilling effect IS the injury",
    ],
    verdict: "The harm happens before any data is breached.",
  },
  {
    title: "Inference Risks",
    icon: "🧠",
    color: "border-purple-700 bg-purple-900/20",
    points: [
      "Emotional state inferred from micro-expressions",
      "Health conditions detected from gait patterns",
      "Relationship maps built from proximity over time",
      "Political leanings inferred from body language",
    ],
    verdict: "The robot doesn't need to store data to cause harm. Inferences are more dangerous.",
  },
  {
    title: "Trust Exploitation",
    icon: "🤝",
    color: "border-blue-700 bg-blue-900/20",
    points: [
      "HRI research: people disclose more to humanoid robots than screens",
      "The face creates perceived empathy and trust",
      "Anthropomorphization lowers privacy guard",
      "Workers may share personal info they'd never tell a camera",
    ],
    verdict: "The humanoid form is itself a privacy vulnerability.",
  },
  {
    title: "Privacy by Design Gaps",
    icon: "🔒",
    color: "border-emerald-700 bg-emerald-900/20",
    points: [
      "❌ No on-device processing mandate",
      "❌ No automatic face/voice anonymization",
      "❌ No user-accessible data audit trail",
      "❌ No consent logging or minimum retention schedules",
    ],
    verdict: "Zero of six basic privacy-by-design principles present in Figure AI's public docs.",
  },
];

export default function PrivacySlides() {
  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrent((c) => (c + 1) % slides.length);
  const s = slides[current];

  return (
    <div className="rounded-xl overflow-hidden border border-border bg-card p-4 mt-3">
      <div className="flex items-center justify-between mb-3">
        <p className="text-xs text-slate-500 uppercase tracking-wide font-medium">
          Privacy Risks — Humanoid Robots
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
              className={`w-2 h-2 rounded-full transition-colors ${i === current ? "bg-purple-400" : "bg-slate-700"}`} />
          ))}
        </div>
        <button onClick={next} className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs transition-colors">
          Next →
        </button>
      </div>
    </div>
  );
}
