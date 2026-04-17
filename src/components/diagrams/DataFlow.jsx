// Functional vs Training Data Flow diagram
export default function DataFlow() {
  return (
    <div className="rounded-xl overflow-hidden border border-border bg-card p-4 mt-3">
      <p className="text-xs text-slate-500 uppercase tracking-wide font-medium mb-4">
        The Critical Distinction — How Helix Data Flows
      </p>

      {/* Sensor input */}
      <div className="flex justify-center mb-3">
        <div className="bg-slate-800 border border-slate-600 rounded-lg px-4 py-2 text-center">
          <p className="text-xs text-slate-400 font-medium">Helix 02 Sensors</p>
          <p className="text-xs text-slate-500 mt-0.5">Camera · Depth · Microphone · Encoders</p>
        </div>
      </div>

      {/* Arrow down */}
      <div className="flex justify-center mb-3">
        <div className="flex flex-col items-center">
          <div className="w-px h-4 bg-slate-600" />
          <div className="w-2 h-2 border-r-2 border-b-2 border-slate-600 rotate-45 -mt-1" />
        </div>
      </div>

      {/* Split */}
      <div className="grid grid-cols-2 gap-3">
        {/* Functional */}
        <div className="border border-green-700 bg-green-900/20 rounded-lg p-3">
          <div className="flex items-center gap-1.5 mb-2">
            <div className="w-2 h-2 rounded-full bg-green-400" />
            <span className="text-xs font-semibold text-green-300">Functional Data</span>
          </div>
          <p className="text-sm text-slate-400 leading-relaxed mb-2">
            Used in real-time to complete the task. Processed on-device. Should be deleted immediately after.
          </p>
          <div className="space-y-1">
            <div className="flex items-center gap-1.5 text-sm text-slate-400">
              <span className="text-green-400">✓</span> Obstacle avoidance
            </div>
            <div className="flex items-center gap-1.5 text-sm text-slate-400">
              <span className="text-green-400">✓</span> Grasp planning
            </div>
            <div className="flex items-center gap-1.5 text-sm text-slate-400">
              <span className="text-green-400">✓</span> Human proximity
            </div>
          </div>
          <div className="mt-2 pt-2 border-t border-green-900">
            <p className="text-xs text-green-400">Current law: product telemetry</p>
          </div>
        </div>

        {/* Training */}
        <div className="border border-red-700 bg-red-900/20 rounded-lg p-3">
          <div className="flex items-center gap-1.5 mb-2">
            <div className="w-2 h-2 rounded-full bg-red-400" />
            <span className="text-xs font-semibold text-red-300">Training Data</span>
          </div>
          <p className="text-sm text-slate-400 leading-relaxed mb-2">
            Retained to improve future model versions. Sent to cloud. Requires full data protection law.
          </p>
          <div className="space-y-1">
            <div className="flex items-center gap-1.5 text-sm text-slate-400">
              <span className="text-red-400">⚠</span> Behavior patterns
            </div>
            <div className="flex items-center gap-1.5 text-sm text-slate-400">
              <span className="text-red-400">⚠</span> Voice + face data
            </div>
            <div className="flex items-center gap-1.5 text-sm text-slate-400">
              <span className="text-red-400">⚠</span> Environmental maps
            </div>
          </div>
          <div className="mt-2 pt-2 border-t border-red-900">
            <p className="text-xs text-red-400">Needs: DPIA + explicit consent</p>
          </div>
        </div>
      </div>

      <div className="mt-3 p-2 bg-amber-900/20 border border-amber-700/50 rounded-lg">
        <p className="text-sm text-amber-300 text-center">
          ⚡ Helix's pipeline doesn't separate these — both flow through the same architecture. This is the regulatory gap.
        </p>
      </div>
    </div>
  );
}
