// Regulatory & Industry Timeline, vertical mobile-first layout
const events = [
  { year: "2008", title: "Illinois BIPA", desc: "First biometric privacy law in the US. $1,000 to $5,000 per violation.", type: "law" },
  { year: "2018", title: "GDPR effective", desc: "EU comprehensive data protection. Article 25 mandates privacy by design.", type: "law" },
  { year: "2019", title: "EU AI ethics", desc: "EU High-Level Expert Group publishes Ethics Guidelines for Trustworthy AI.", type: "policy" },
  { year: "2021", title: "EU AI Act draft", desc: "European Commission proposes a risk-based AI regulation framework.", type: "law" },
  { year: "2022", title: "ChatGPT launch", desc: "Generative AI goes mainstream. Public debate on data and consent explodes.", type: "industry" },
  { year: "2023", title: "EU AI Act passed", desc: "Humanoid robots classified as high-risk systems requiring a DPIA.", type: "law" },
  { year: "2024", title: "Figure AI $675M", desc: "Figure AI raises $675M and begins BMW factory deployment with Helix.", type: "industry" },
  { year: "2025", title: "Helix and OpenAI", desc: "Figure AI and OpenAI demo the first conversational humanoid robot.", type: "industry" },
  { year: "2026", title: "Boao Forum", desc: "Adcock confirms workers are contributing to Helix's training dataset.", type: "milestone" },
];

const typeStyle = {
  law:       { dot: "bg-blue-500",    text: "text-blue-300",    label: "Legislation" },
  policy:    { dot: "bg-indigo-500",  text: "text-indigo-300",  label: "Policy" },
  industry:  { dot: "bg-purple-500",  text: "text-purple-300",  label: "Industry" },
  milestone: { dot: "bg-rose-500",    text: "text-rose-300",    label: "Milestone" },
};

export default function Timeline() {
  return (
    <div className="rounded-xl border border-border bg-card p-4 mt-3">
      <p className="text-xs text-slate-500 uppercase tracking-wide font-medium mb-4">
        Robotics privacy, regulatory and industry timeline
      </p>

      {/* Legend */}
      <div className="flex flex-wrap gap-3 mb-5">
        {Object.entries(typeStyle).map(([type, s]) => (
          <span key={type} className="flex items-center gap-1.5 text-xs text-slate-400">
            <span className={`w-2 h-2 rounded-full ${s.dot}`} />
            {s.label}
          </span>
        ))}
      </div>

      {/* Vertical timeline */}
      <ol className="relative border-l-2 border-slate-700 pl-5 space-y-5">
        {events.map((ev) => {
          const s = typeStyle[ev.type];
          return (
            <li key={ev.year} className="relative">
              <span className={`absolute -left-[27px] top-1 w-3.5 h-3.5 rounded-full ${s.dot} border-2 border-card`} />
              <div className="flex items-baseline gap-2 flex-wrap mb-1">
                <span className={`text-sm font-bold ${s.text}`}>{ev.year}</span>
                <span className="text-sm font-semibold text-white">{ev.title}</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">{ev.desc}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
