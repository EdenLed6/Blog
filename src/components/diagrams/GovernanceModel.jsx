// 4-Tier Hybrid Governance Model
export default function GovernanceModel() {
  const tiers = [
    {
      tier: "Tier 1",
      title: "Privacy by Design",
      subtitle: "Architectural mandates",
      desc: "On-device processing, auto-anonymization, no raw biometric egress by default",
      color: "from-blue-900/40 to-blue-900/10",
      border: "border-blue-700",
      badge: "bg-blue-700",
      icon: "🏗️",
      timing: "Pre-market",
    },
    {
      tier: "Tier 2",
      title: "Impact Assessment",
      subtitle: "Per sector, pre-deployment",
      desc: "DPIA required before deploying in warehouses, homes, hospitals, or schools",
      color: "from-indigo-900/40 to-indigo-900/10",
      border: "border-indigo-700",
      badge: "bg-indigo-700",
      icon: "📋",
      timing: "Pre-deployment",
    },
    {
      tier: "Tier 3",
      title: "Data Distinction",
      subtitle: "Functional vs training",
      desc: "Legal separation of real-time operational data from retained training data",
      color: "from-purple-900/40 to-purple-900/10",
      border: "border-purple-700",
      badge: "bg-purple-700",
      icon: "⚖️",
      timing: "Ongoing",
    },
    {
      tier: "Tier 4",
      title: "International Convergence",
      subtitle: "GDPR floor + US overlay",
      desc: "GDPR/EU AI Act as global baseline; US sectoral rules applied on top",
      color: "from-emerald-900/40 to-emerald-900/10",
      border: "border-emerald-700",
      badge: "bg-emerald-700",
      icon: "🌐",
      timing: "Policy",
    },
  ];

  return (
    <div className="rounded-xl overflow-hidden border border-border bg-card p-4 mt-3">
      <p className="text-xs text-slate-500 uppercase tracking-wide font-medium mb-4">
        Proposed Hybrid Governance Model — Group 8
      </p>
      <div className="space-y-2">
        {tiers.map((t) => (
          <div key={t.tier} className={`rounded-lg border ${t.border} bg-gradient-to-r ${t.color} p-3`}>
            <div className="flex items-start gap-3">
              <div className={`w-14 flex-shrink-0 ${t.badge} rounded-md px-1.5 py-0.5 text-center`}>
                <p className="text-[9px] text-white/70 font-medium">{t.tier}</p>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-sm">{t.icon}</span>
                  <span className="text-sm font-semibold text-white">{t.title}</span>
                  <span className="text-xs text-slate-400">— {t.subtitle}</span>
                  <span className="text-[10px] bg-white/10 text-slate-400 px-1.5 py-0.5 rounded-full ml-auto">{t.timing}</span>
                </div>
                <p className="text-xs text-slate-400 mt-1">{t.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
