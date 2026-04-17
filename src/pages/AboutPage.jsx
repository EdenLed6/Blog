import { Bot, Users, BookOpen, ExternalLink } from "lucide-react";

const TEAM = [
  { name: "Eden Ledom", handle: "edenledom", initials: "EL", color: "bg-indigo-500", role: "Research lead, technology analysis" },
  { name: "Orianne Blum", handle: "oriblum", initials: "OB", color: "bg-purple-500", role: "Legal frameworks, GDPR analysis" },
  { name: "Dan Vered", handle: "danvered", initials: "DV", color: "bg-blue-500", role: "AI architecture, technical deep dives" },
  { name: "Shir Schipper", handle: "shirschipper", initials: "SS", color: "bg-emerald-500", role: "Ethics, policy strategy" },
];

const REFS = [
  { short: "Calo (2010)", full: "Calo, R. Robots and Privacy. MIT Press." },
  { short: "Figure AI (2026)", full: "Figure AI. Helix 02 — Product documentation." },
  { short: "EU AI Act (2024)", full: "European Parliament. Regulation on Artificial Intelligence." },
  { short: "GDPR Art. 25", full: "General Data Protection Regulation, Article 25 — Privacy by Design." },
  { short: "NIST AI RMF", full: "NIST AI Risk Management Framework (2023)." },
  { short: "Illinois BIPA", full: "Biometric Information Privacy Act, 740 ILCS 14." },
];

export default function AboutPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8 space-y-8">

      {/* Hero */}
      <div className="text-center space-y-3">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent-blue to-accent-purple flex items-center justify-center mx-auto">
          <Bot size={32} className="text-white" />
        </div>
        <h1 className="text-2xl font-bold text-white">HelixWatch</h1>
        <p className="text-slate-400 text-base leading-relaxed">
          Tracking what happens to your privacy when humanoid robots go to work.
        </p>
      </div>

      {/* What this is */}
      <section className="bg-card border border-border rounded-2xl p-5 space-y-3">
        <h2 className="text-white font-semibold text-base">What is this?</h2>
        <p className="text-slate-300 text-sm leading-relaxed">
          Figure AI just deployed Helix 02 in real warehouses. It works next to humans, watches them, learns from them, and collects biometric data around the clock. Nobody asked the workers if that was okay.
        </p>
        <p className="text-slate-300 text-sm leading-relaxed">
          This blog is our research project turned into a live conversation. We spent a semester studying what humanoid robots like Helix actually mean for worker privacy, what the law says (and doesn't say), and what a real governance framework should look like.
        </p>
        <p className="text-slate-300 text-sm leading-relaxed">
          Think of it as the academic paper, but one that talks back.
        </p>
      </section>

      {/* Why it matters */}
      <section className="bg-card border border-border rounded-2xl p-5 space-y-3">
        <h2 className="text-white font-semibold text-base">Why does it matter?</h2>
        <p className="text-slate-300 text-sm leading-relaxed">
          Humanoid robots are not just cameras on legs. They move through your space, track your face, your gait, your voice, and learn your habits. The sensors that help Helix hand you a package are the same ones that can infer your mood, your health, and your relationships.
        </p>
        <p className="text-slate-300 text-sm leading-relaxed">
          The law has not caught up. Product liability law was built for faulty brake pads. Data protection law was built for websites. Neither was built for a robot that learns from you while you earn a living.
        </p>
        <p className="text-slate-300 text-sm leading-relaxed">
          That gap is what we are here to document and challenge.
        </p>
      </section>

      {/* Topics */}
      <section className="bg-card border border-border rounded-2xl p-5 space-y-3">
        <h2 className="text-white font-semibold text-base">What we cover</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {[
            { topic: "Technology", desc: "How Helix actually works, what data it collects and why it matters", color: "text-blue-400" },
            { topic: "Legal", desc: "Where US and EU law falls short, and what exposure looks like", color: "text-amber-400" },
            { topic: "Privacy", desc: "Frameworks, paradoxes, and the chilling effect of a robot that watches", color: "text-rose-400" },
            { topic: "Ethics", desc: "Consent, labor, the ACM Code, and questions without clean answers", color: "text-purple-400" },
            { topic: "Strategy", desc: "Our 4-tier governance model and the case for privacy by design", color: "text-emerald-400" },
          ].map(({ topic, desc, color }) => (
            <div key={topic} className="rounded-xl bg-white/4 p-3 space-y-1">
              <p className={`text-sm font-semibold ${color}`}>{topic}</p>
              <p className="text-xs text-slate-400 leading-snug">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="bg-card border border-border rounded-2xl p-5 space-y-4">
        <div className="flex items-center gap-2">
          <Users size={16} className="text-accent-purple" />
          <h2 className="text-white font-semibold text-base">The team</h2>
        </div>
        <p className="text-slate-400 text-sm">Group 8 - academic research project.</p>
        <ul className="space-y-3">
          {TEAM.map((m) => (
            <li key={m.handle} className="flex items-center gap-3">
              <div className={`w-9 h-9 rounded-full ${m.color} flex items-center justify-center flex-shrink-0`}>
                <span className="text-xs font-bold text-white">{m.initials}</span>
              </div>
              <div className="min-w-0">
                <p className="text-sm font-medium text-white">{m.name}</p>
                <p className="text-xs text-slate-500">@{m.handle} · {m.role}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* References */}
      <section className="bg-card border border-border rounded-2xl p-5 space-y-3">
        <div className="flex items-center gap-2">
          <BookOpen size={16} className="text-amber-400" />
          <h2 className="text-white font-semibold text-base">Key references</h2>
        </div>
        <ul className="space-y-2">
          {REFS.map(({ short, full }) => (
            <li key={short} className="text-xs text-slate-400 leading-relaxed">
              <span className="text-slate-300 font-medium">{short}</span> — {full}
            </li>
          ))}
        </ul>
      </section>

    </div>
  );
}
