// Regulatory & Industry Timeline, Robotics Privacy
const events = [
  { year: "2008", title: "Illinois BIPA", desc: "First biometric privacy law in the US, $1-5K per violation", type: "law" },
  { year: "2018", title: "GDPR Effective", desc: "EU comprehensive data protection, Art. 25 mandates privacy by design", type: "law" },
  { year: "2019", title: "EU AI Ethics", desc: "EU High-Level Expert Group publishes Ethics Guidelines for Trustworthy AI", type: "policy" },
  { year: "2021", title: "EU AI Act Draft", desc: "European Commission proposes risk-based AI regulation framework", type: "law" },
  { year: "2022", title: "ChatGPT Launch", desc: "Generative AI goes mainstream, public debate on data & consent explodes", type: "industry" },
  { year: "2023", title: "EU AI Act Passed", desc: "Humanoid robots classified as high-risk systems requiring DPIA", type: "law" },
  { year: "2024", title: "Figure AI $675M", desc: "Figure AI raises $675M, begins BMW factory deployment with Helix", type: "industry" },
  { year: "2025", title: "Helix + OpenAI", desc: "Figure AI + OpenAI demo first conversational humanoid robot", type: "industry" },
  { year: "2026", title: "Boao Forum", desc: "Adcock confirms: workers are contributing to Helix's training dataset", type: "milestone" },
];

const typeStyle = {
  law:      { dot: "bg-blue-500",    line: "bg-blue-500",    label: "text-blue-300",    badge: "bg-blue-900/40 text-blue-300 border-blue-700" },
  policy:   { dot: "bg-indigo-500",  line: "bg-indigo-500",  label: "text-indigo-300",  badge: "bg-indigo-900/40 text-indigo-300 border-indigo-700" },
  industry: { dot: "bg-purple-500",  line: "bg-purple-500",  label: "text-purple-300",  badge: "bg-purple-900/40 text-purple-300 border-purple-700" },
  milestone:{ dot: "bg-rose-500",    line: "bg-rose-500",    label: "text-rose-300",    badge: "bg-rose-900/40 text-rose-300 border-rose-700" },
};

export default function Timeline() {
  return (
    <div className="rounded-xl overflow-hidden border border-border bg-card p-4 mt-3">
      <p className="text-xs text-slate-500 uppercase tracking-wide font-medium mb-4">
        Robotics Privacy, Regulatory &amp; Industry Timeline
      </p>

      {/* Legend */}
      <div className="flex flex-wrap gap-2 mb-4">
        {[["law","Legislation"],["policy","Policy"],["industry","Industry"],["milestone","Milestone"]].map(([type, label]) => (
          <span key={type} className={`text-xs px-2 py-0.5 rounded-full border ${typeStyle[type].badge}`}>{label}</span>
        ))}
      </div>

      {/* Scrollable timeline */}
      <div className="overflow-x-auto pb-2">
        <div className="flex items-start gap-0 min-w-max">
          {events.map((ev, i) => {
            const s = typeStyle[ev.type];
            return (
              <div key={ev.year} className="flex items-start">
                {/* Event column */}
                <div className="flex flex-col items-center w-28">
                  {/* Card */}
                  <div className={`rounded-lg border ${s.badge.split(" ").filter(c => c.startsWith("border")).join(" ")} bg-slate-800/60 p-2 w-full mb-2`}>
                    <p className={`text-sm font-bold ${s.label}`}>{ev.year}</p>
                    <p className="text-xs text-white font-medium leading-tight mt-0.5">{ev.title}</p>
                    <p className="text-xs text-slate-400 mt-1 leading-tight">{ev.desc}</p>
                  </div>
                  {/* Dot */}
                  <div className={`w-3 h-3 rounded-full ${s.dot} border-2 border-slate-900 z-10 flex-shrink-0`} />
                </div>

                {/* Connector line (not after last) */}
                {i < events.length - 1 && (
                  <div className="flex items-end pb-[6px] self-end">
                    <div className="h-0.5 w-4 bg-slate-700" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
