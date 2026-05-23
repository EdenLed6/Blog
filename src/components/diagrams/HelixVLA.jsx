// Helix VLA Architecture, redesigned for mobile-first responsive layout
export default function HelixVLA() {
  const inputs = ["RGB camera", "Depth sensor", "Microphone", "Proprioception"];
  const vla = [
    { label: "Vision", desc: "Perceive scene" },
    { label: "Language", desc: "Understand task" },
    { label: "Action", desc: "Plan movement" },
  ];

  return (
    <div className="rounded-xl border border-border bg-card p-4 mt-3">
      <p className="text-xs text-slate-500 uppercase tracking-wide font-medium mb-4">
        Helix 02 vision-language-action architecture
      </p>

      {/* Step 1: Sensor input */}
      <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-3">
        <div className="flex items-center gap-2 mb-2">
          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-slate-700 text-white text-xs flex items-center justify-center font-bold">1</span>
          <span className="text-sm font-semibold text-slate-200">Sensor input</span>
        </div>
        <div className="flex flex-wrap gap-1.5 mb-2">
          {inputs.map((s) => (
            <span key={s} className="text-xs bg-slate-700 text-slate-300 px-2 py-1 rounded-full">{s}</span>
          ))}
        </div>
        <p className="text-xs text-red-400">Continuously captures bystanders, faces, and voices.</p>
      </div>

      {/* Connector: rate */}
      <div className="flex flex-col items-center my-2">
        <div className="w-px h-3 bg-slate-600" />
        <span className="text-xs text-slate-500 px-2 py-0.5 rounded-full bg-slate-800 border border-slate-700">every ~50 ms</span>
        <div className="w-px h-3 bg-slate-600" />
      </div>

      {/* Step 2: VLA model */}
      <div className="rounded-lg border border-blue-700 bg-blue-900/20 p-3">
        <div className="flex items-center gap-2 mb-3">
          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-700 text-white text-xs flex items-center justify-center font-bold">2</span>
          <span className="text-sm font-semibold text-blue-200">Vision-language-action model</span>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {vla.map(({ label, desc }) => (
            <div key={label} className="bg-blue-900/40 rounded p-2 text-center">
              <p className="text-xs text-blue-300 font-medium">{label}</p>
              <p className="text-[11px] text-slate-400 mt-0.5 leading-tight">{desc}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-blue-400 mt-2 text-center">A single unified forward pass.</p>
      </div>

      {/* Connector: split */}
      <div className="flex flex-col items-center my-2">
        <div className="w-px h-3 bg-slate-600" />
        <span className="text-xs text-slate-500 px-2 py-0.5 rounded-full bg-slate-800 border border-slate-700">outputs split</span>
        <div className="w-px h-3 bg-slate-600" />
      </div>

      {/* Step 3: Two outputs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        <div className="rounded-lg border border-green-700 bg-green-900/20 p-3">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-700 text-white text-[10px] flex items-center justify-center font-bold">3a</span>
            <span className="text-sm font-semibold text-green-200">Immediate action</span>
          </div>
          <p className="text-xs text-slate-400 mb-1.5">Whole-body controller executes movement in real time.</p>
          <p className="text-xs text-green-400">Functional data, should be discarded.</p>
        </div>
        <div className="rounded-lg border border-red-700 bg-red-900/20 p-3">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-red-700 text-white text-[10px] flex items-center justify-center font-bold">3b</span>
            <span className="text-sm font-semibold text-red-200">Model update</span>
          </div>
          <p className="text-xs text-slate-400 mb-1.5">Experience retained for gradient-descent training.</p>
          <p className="text-xs text-red-400">Training data, needs consent.</p>
        </div>
      </div>

      <p className="text-xs text-slate-500 mt-4 text-center">
        Source: Figure AI (2026), Helix 02: Full-Body Autonomy
      </p>
    </div>
  );
}
