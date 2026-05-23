// 4-Tier Hybrid Governance Model, mobile-first redesign
export default function GovernanceModel() {
  const tiers = [
    {
      n: 1,
      title: "Privacy by design",
      subtitle: "Architectural mandates",
      desc: "On-device processing, auto-anonymization, and no raw biometric egress by default.",
      timing: "Pre-market",
      border: "border-blue-700",
      bg: "bg-blue-900/20",
      badge: "bg-blue-700",
      label: "text-blue-300",
    },
    {
      n: 2,
      title: "Impact assessment",
      subtitle: "Per sector, pre-deployment",
      desc: "A DPIA required before deploying in warehouses, homes, hospitals, or schools.",
      timing: "Pre-deployment",
      border: "border-indigo-700",
      bg: "bg-indigo-900/20",
      badge: "bg-indigo-700",
      label: "text-indigo-300",
    },
    {
      n: 3,
      title: "Data distinction",
      subtitle: "Functional vs training",
      desc: "Legal separation of real-time operational data from retained training data.",
      timing: "Ongoing",
      border: "border-purple-700",
      bg: "bg-purple-900/20",
      badge: "bg-purple-700",
      label: "text-purple-300",
    },
    {
      n: 4,
      title: "International convergence",
      subtitle: "GDPR floor, US overlay",
      desc: "GDPR and the EU AI Act as the global baseline, with US sectoral rules layered on top.",
      timing: "Policy",
      border: "border-emerald-700",
      bg: "bg-emerald-900/20",
      badge: "bg-emerald-700",
      label: "text-emerald-300",
    },
  ];

  return (
    <div className="rounded-xl border border-border bg-card p-4 mt-3">
      <p className="text-xs text-slate-500 uppercase tracking-wide font-medium mb-4">
        Proposed hybrid governance model, Group 8
      </p>
      <div className="space-y-3">
        {tiers.map((t) => (
          <div key={t.n} className={`rounded-lg border ${t.border} ${t.bg} p-3`}>
            <div className="flex items-center gap-2.5 mb-1">
              <span className={`flex-shrink-0 ${t.badge} text-white text-xs font-bold px-2 py-1 rounded-md`}>
                Tier {t.n}
              </span>
              <p className={`text-sm font-semibold ${t.label} flex-1 min-w-0 leading-tight`}>{t.title}</p>
              <span className="hidden sm:inline-block text-xs bg-white/10 text-slate-400 px-2 py-0.5 rounded-full flex-shrink-0">
                {t.timing}
              </span>
            </div>
            <p className="text-xs text-slate-400 mb-1.5">{t.subtitle}</p>
            <p className="text-sm text-slate-300 leading-relaxed">{t.desc}</p>
            <p className="text-[11px] text-slate-500 mt-2 sm:hidden">
              <span className="font-medium">When:</span> {t.timing}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
