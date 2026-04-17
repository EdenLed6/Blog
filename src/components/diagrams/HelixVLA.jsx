// Helix VLA Architecture Explainer
export default function HelixVLA() {
  return (
    <div className="rounded-xl overflow-hidden border border-border bg-card p-4 mt-3">
      <p className="text-xs text-slate-500 uppercase tracking-wide font-medium mb-4">
        How Helix 02 Works — VLA Architecture
      </p>

      <div className="space-y-2">
        {/* Layer 1 - Input */}
        <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-3">
          <p className="text-xs font-semibold text-slate-300 mb-2">① Sensor Input Layer</p>
          <div className="flex flex-wrap gap-2">
            {["RGB Camera", "Depth Sensor", "Microphone", "Proprioception"].map((s) => (
              <span key={s} className="text-sm bg-slate-700 text-slate-300 px-2 py-0.5 rounded-full">{s}</span>
            ))}
          </div>
          <p className="text-xs text-red-400 mt-2">⚠ Captures bystanders, faces, voices — continuously</p>
        </div>

        {/* Arrow */}
        <div className="flex justify-center">
          <div className="text-slate-600 text-sm">↓ every ~50ms</div>
        </div>

        {/* Layer 2 - VLA */}
        <div className="rounded-lg border border-blue-700 bg-blue-900/20 p-3">
          <p className="text-xs font-semibold text-blue-300 mb-2">② Vision-Language-Action Model</p>
          <div className="grid grid-cols-3 gap-2 text-center">
            <div className="bg-blue-900/40 rounded p-2">
              <p className="text-xs text-blue-300 font-medium">Vision</p>
              <p className="text-xs text-slate-400">Perceive scene</p>
            </div>
            <div className="bg-blue-900/40 rounded p-2">
              <p className="text-xs text-blue-300 font-medium">Language</p>
              <p className="text-xs text-slate-400">Understand task</p>
            </div>
            <div className="bg-blue-900/40 rounded p-2">
              <p className="text-xs text-blue-300 font-medium">Action</p>
              <p className="text-xs text-slate-400">Plan movement</p>
            </div>
          </div>
          <p className="text-xs text-blue-400 mt-2">Single unified forward pass — no separate modules</p>
        </div>

        {/* Arrow fork */}
        <div className="flex justify-center">
          <div className="text-slate-600 text-sm">↓ outputs split into two streams</div>
        </div>

        {/* Layer 3 - Two outputs */}
        <div className="grid grid-cols-2 gap-2">
          <div className="rounded-lg border border-green-700 bg-green-900/20 p-2.5">
            <p className="text-sm font-semibold text-green-300 mb-1">③a Immediate Action</p>
            <p className="text-xs text-slate-400">Whole-body controller executes movement in real time</p>
            <p className="text-xs text-green-400 mt-1">✓ Functional data — should be discarded</p>
          </div>
          <div className="rounded-lg border border-red-700 bg-red-900/20 p-2.5">
            <p className="text-sm font-semibold text-red-300 mb-1">③b Model Update</p>
            <p className="text-xs text-slate-400">Experience retained for gradient descent training</p>
            <p className="text-xs text-red-400 mt-1">⚠ Training data — needs consent</p>
          </div>
        </div>
      </div>

      <p className="text-xs text-slate-500 mt-3 text-center">
        Source: Figure AI (2026) — Helix 02: Full-Body Autonomy
      </p>
    </div>
  );
}
