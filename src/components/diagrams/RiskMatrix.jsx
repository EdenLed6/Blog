// Interactive Risk Matrix — Humanoid Robot Data Governance
export default function RiskMatrix() {
  const points = [
    {
      label: "Helix 02 (US)",
      x: 88, y: 82, // x=collection intensity, y=distance from bottom (low regulation)
      color: "bg-red-500",
      border: "border-red-400",
      text: "text-red-300",
      desc: "High collection, no federal framework",
    },
    {
      label: "Helix 02 (EU)",
      x: 88, y: 32,
      color: "bg-amber-500",
      border: "border-amber-400",
      text: "text-amber-300",
      desc: "High collection, GDPR + AI Act applies",
    },
    {
      label: "Tesla Optimus",
      x: 55, y: 72,
      color: "bg-orange-400",
      border: "border-orange-300",
      text: "text-orange-300",
      desc: "Opt-in consent clause in purchase agreement",
    },
    {
      label: "Atlas (research)",
      x: 22, y: 50,
      color: "bg-blue-400",
      border: "border-blue-300",
      text: "text-blue-300",
      desc: "Research only, no commercial deployment",
    },
    {
      label: "Ideal design",
      x: 18, y: 18,
      color: "bg-emerald-400",
      border: "border-emerald-300",
      text: "text-emerald-300",
      desc: "On-device processing + full DPIA compliance",
    },
  ];

  return (
    <div className="rounded-xl overflow-hidden border border-border bg-card p-4 mt-3">
      <p className="text-xs text-slate-500 uppercase tracking-wide font-medium mb-3">
        Humanoid Robot Privacy Risk Matrix
      </p>

      {/* Matrix area */}
      <div className="relative w-full" style={{ paddingBottom: "62%" }}>
        <div className="absolute inset-0">
          {/* Quadrant backgrounds */}
          <div className="absolute inset-0 grid grid-cols-2 grid-rows-2">
            <div className="bg-blue-900/10 border-r border-b border-slate-700/50 flex items-center justify-center">
              <span className="text-xs text-slate-600 font-medium">LOW RISK</span>
            </div>
            <div className="bg-amber-900/10 border-b border-slate-700/50 flex items-center justify-center">
              <span className="text-xs text-slate-600 font-medium">MANAGED</span>
            </div>
            <div className="bg-slate-800/20 border-r border-slate-700/50 flex items-center justify-center">
              <span className="text-xs text-slate-600 font-medium">BENIGN</span>
            </div>
            <div className="bg-red-900/20 flex items-center justify-center">
              <span className="text-xs text-red-700 font-semibold">DANGER ZONE</span>
            </div>
          </div>

          {/* Data points */}
          {points.map((p) => (
            <div
              key={p.label}
              className="absolute group"
              style={{ left: `${p.x}%`, top: `${p.y}%`, transform: "translate(-50%, -50%)" }}
            >
              <div className={`w-3 h-3 rounded-full ${p.color} border-2 ${p.border} cursor-pointer transition-transform group-hover:scale-150`} />
              {/* Tooltip */}
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block z-10 w-36 bg-slate-900 border border-slate-600 rounded-lg p-2 shadow-xl pointer-events-none">
                <p className={`text-xs font-semibold ${p.text}`}>{p.label}</p>
                <p className="text-xs text-slate-400 mt-0.5">{p.desc}</p>
              </div>
              {/* Label */}
              <p className={`absolute top-4 left-1/2 -translate-x-1/2 text-xs whitespace-nowrap ${p.text} font-medium`}>
                {p.label}
              </p>
            </div>
          ))}

          {/* Axes labels */}
          <div className="absolute bottom-0 left-0 right-0 flex justify-between px-1">
            <span className="text-xs text-slate-600">Low collection</span>
            <span className="text-xs text-slate-500 font-medium">← Data Collection Intensity →</span>
            <span className="text-xs text-slate-600">High collection</span>
          </div>
          <div className="absolute top-0 bottom-6 left-0 flex flex-col justify-between py-1">
            <span className="text-xs text-slate-600" style={{ writingMode: "vertical-lr", transform: "rotate(180deg)" }}>High coverage</span>
            <span className="text-xs text-slate-600" style={{ writingMode: "vertical-lr", transform: "rotate(180deg)" }}>Low coverage</span>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="mt-4 flex flex-wrap gap-2">
        {points.map((p) => (
          <div key={p.label} className="flex items-center gap-1.5">
            <div className={`w-2 h-2 rounded-full ${p.color}`} />
            <span className={`text-xs ${p.text}`}>{p.label}</span>
          </div>
        ))}
      </div>
      <p className="text-xs text-slate-600 mt-2 text-center">Hover over points for details. Y-axis = Regulatory Coverage (top = high)</p>
    </div>
  );
}
