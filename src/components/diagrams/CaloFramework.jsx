// Calo's Three-Channel Privacy Framework diagram
export default function CaloFramework() {
  return (
    <div className="rounded-xl overflow-hidden border border-border bg-card p-4 mt-3">
      <p className="text-xs text-slate-500 uppercase tracking-wide font-medium mb-4">
        Calo (2010), Three Channels of Robotic Privacy Harm
      </p>
      <div className="flex flex-col sm:flex-row gap-3">
        {[
          {
            num: "1",
            title: "Direct Surveillance",
            desc: "Robot observes people in spaces where they don't expect monitoring, home, office, warehouse.",
            color: "border-red-700 bg-red-900/20",
            textColor: "text-red-300",
            numColor: "bg-red-700",
          },
          {
            num: "2",
            title: "Increased Access",
            desc: "Sensor streams aggregated by manufacturer or third parties, face, gait, voice, room layout.",
            color: "border-amber-700 bg-amber-900/20",
            textColor: "text-amber-300",
            numColor: "bg-amber-700",
          },
          {
            num: "3",
            title: "Social Meaning",
            desc: "Being watched by an embodied machine changes how people speak and behave, even if no data is stored.",
            color: "border-purple-700 bg-purple-900/20",
            textColor: "text-purple-300",
            numColor: "bg-purple-700",
          },
        ].map((item) => (
          <div key={item.num} className={`flex-1 rounded-lg border ${item.color} p-3`}>
            <div className="flex items-center gap-2 mb-2">
              <span className={`w-5 h-5 rounded-full ${item.numColor} text-white text-xs flex items-center justify-center font-bold flex-shrink-0`}>
                {item.num}
              </span>
              <span className={`text-sm font-semibold ${item.textColor}`}>{item.title}</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
      <div className="mt-3 pt-3 border-t border-border flex items-center gap-2">
        <div className="flex-1 h-px bg-gradient-to-r from-red-700 via-amber-700 to-purple-700 opacity-60" />
        <span className="text-xs text-slate-500">Applied to Helix 02 → all 3 channels active simultaneously</span>
        <div className="flex-1 h-px bg-gradient-to-r from-purple-700 via-amber-700 to-red-700 opacity-60" />
      </div>
    </div>
  );
}
