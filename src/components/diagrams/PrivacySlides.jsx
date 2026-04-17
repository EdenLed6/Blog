import { useState, useRef } from "react";

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
        Privacy Risks — Humanoid Robots
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
