// US vs EU Legal Framework Comparison
export default function LegalComparison() {
  const rows = [
    { label: "Approach", us: "Reactive — fix after harm", eu: "Preventive — mandate before deployment" },
    { label: "Basis", us: "FTC Act §5, state BIPA, CCPA", eu: "GDPR Art. 25 + EU AI Act" },
    { label: "Privacy by Design", us: "Voluntary (NIST guidelines)", eu: "Legally mandatory" },
    { label: "Biometric Data", us: "State-level only (IL, TX, WA)", eu: "Special category — strict consent" },
    { label: "Impact Assessment", us: "Not required", eu: "Required for high-risk AI" },
    { label: "Enforcement", us: "Post-violation litigation", eu: "Pre-deployment DPA approval" },
  ];

  return (
    <div className="rounded-xl overflow-hidden border border-border bg-card mt-3">
      <div className="grid grid-cols-3 text-xs font-semibold">
        <div className="px-3 py-2 text-slate-500 bg-white/5 border-b border-r border-border">Criterion</div>
        <div className="px-3 py-2 text-blue-300 bg-blue-900/20 border-b border-r border-border flex items-center gap-1">
          🇺🇸 United States
        </div>
        <div className="px-3 py-2 text-indigo-300 bg-indigo-900/20 border-b border-border flex items-center gap-1">
          🇪🇺 European Union
        </div>
      </div>
      {rows.map((row, i) => (
        <div key={i} className={`grid grid-cols-3 text-xs ${i < rows.length - 1 ? "border-b border-border" : ""}`}>
          <div className="px-3 py-2.5 text-slate-400 font-medium border-r border-border bg-white/[0.02]">{row.label}</div>
          <div className="px-3 py-2.5 text-slate-300 border-r border-border">{row.us}</div>
          <div className="px-3 py-2.5 text-slate-300">{row.eu}</div>
        </div>
      ))}
      <div className="px-3 py-2 bg-indigo-900/20 border-t border-border">
        <p className="text-xs text-indigo-300">
          Verdict: EU offers stronger ex ante protections for humanoid robot deployment
        </p>
      </div>
    </div>
  );
}
