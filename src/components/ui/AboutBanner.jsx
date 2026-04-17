import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function AboutBanner() {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-border bg-gradient-to-br from-indigo-950/40 to-slate-900/60 px-4 pt-5 pb-4">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-2.5 flex-wrap">
          <span className="text-2xl leading-none">🤖</span>
          <div>
            <h2 className="text-white font-bold text-base leading-tight">HelixWatch</h2>
            <p className="text-slate-400 text-xs mt-0.5">What happens to your privacy when robots go to work?</p>
          </div>
        </div>
        <button
          onClick={() => setOpen((o) => !o)}
          className="flex-shrink-0 flex items-center gap-1 text-xs text-accent-blue hover:text-white transition-colors py-1 touch-manipulation"
        >
          {open ? "Less" : "About"}
          {open ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
        </button>
      </div>

      {open && (
        <div className="mt-4 space-y-3 text-sm text-slate-300 leading-relaxed">
          <p>
            Figure AI just deployed Helix 02, a humanoid robot that works alongside humans in warehouses,
            watching, learning, and collecting data 24/7. Nobody asked the workers if that was okay.
          </p>
          <p>
            This blog is a research project exploring what that actually means for your privacy.
            We're four students, <span className="text-white font-medium">Eden, Orianne, Dan & Shir</span> -
            who spent a semester digging into the legal gaps, the ethical questions, and what regulations
            (if any) can keep up with this technology.
          </p>
          <p>
            Think of this as the place where the academic paper becomes a real conversation.
            Tech breakdowns, legal analysis, ethical hot takes, and a lot of questions that don't have clean answers yet.
          </p>
          <div className="flex flex-wrap gap-2 pt-1">
            {["Technology", "Legal", "Privacy", "Ethics", "Strategy"].map((t) => (
              <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-white/8 text-slate-300 border border-white/10">
                #{t}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
