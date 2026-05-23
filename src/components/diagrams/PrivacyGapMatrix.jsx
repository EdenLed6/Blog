// Figure AI Privacy Gap, policy disclosure vs robot sensor reality
export default function PrivacyGapMatrix() {
  const policyItems = [
    { label: "Name & email", desc: "First name, last name, email address" },
    { label: "Cookies", desc: "Browser session tracking identifiers" },
    { label: "IP addresses", desc: "Network location of web visitors" },
    { label: "Browser location", desc: "Location-enabled web browser signals" },
    { label: "Contact form inputs", desc: "Messages via Contact Us forms" },
  ];
  const robotItems = [
    { label: "Skeletal mapping data", desc: "Full body joint positions and orientations" },
    { label: "Joint telemetry", desc: "Real-time torque, velocity and angle data" },
    { label: "Spatial environment maps", desc: "Real-time 3D layout of physical workspace" },
    { label: "Worker gait signatures", desc: "Locomotion patterns identifying individuals" },
    { label: "Ambient vocal patterns", desc: "Environmental audio capture in proximity" },
  ];

  return (
    <div className="rounded-xl border border-border bg-card p-4 mt-3">
      <p className="text-[11px] uppercase font-semibold mb-1" style={{ color: "#888FA8", letterSpacing: "0.12em" }}>
        Figure AI Privacy Analysis
      </p>
      <h3 className="text-white font-semibold mb-1" style={{ fontSize: 16 }}>
        What the policy says vs. what the robot sees
      </h3>
      <p className="text-xs mb-4" style={{ color: "#7A8299" }}>
        Figure AI's privacy disclosures were written for a SaaS website. Helix 02 is a full-body humanoid robot.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {/* Policy column */}
        <div className="rounded-lg overflow-hidden" style={{ background: "#1C2235", border: "1px solid #2A3044" }}>
          <div className="px-3 py-2.5" style={{ borderBottom: "1px solid #2A3044" }}>
            <p className="text-[10px] uppercase font-semibold" style={{ color: "#888FA8", letterSpacing: "0.1em" }}>
              Figure AI Privacy Policy
            </p>
            <p className="text-xs font-semibold mt-0.5" style={{ color: "#C8CEDF" }}>
              Data categories disclosed
            </p>
          </div>
          {policyItems.map((item, i) => (
            <div key={i} className="px-3 py-2.5 flex items-start gap-2" style={i < policyItems.length - 1 ? { borderBottom: "1px solid #232A3D" } : {}}>
              <div className="w-6 h-6 rounded flex-shrink-0 flex items-center justify-center" style={{ background: "#232A3D", color: "#888FA8", fontSize: 11 }}>✓</div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold" style={{ color: "#C8CEDF" }}>{item.label}</p>
                <p className="text-[11px] mt-0.5 mb-1.5" style={{ color: "#7A8299", lineHeight: 1.5 }}>{item.desc}</p>
                <span className="inline-block text-[10px] font-semibold px-2 py-0.5 rounded-full" style={{ background: "#1A2840", color: "#5B9BD5", border: "1px solid #2A4060" }}>Listed</span>
              </div>
            </div>
          ))}
        </div>

        {/* Robot reality column */}
        <div className="rounded-lg overflow-hidden" style={{ background: "#1C2235", border: "1px solid #3A2020" }}>
          <div className="px-3 py-2.5" style={{ borderBottom: "1px solid #3A2020" }}>
            <p className="text-[10px] uppercase font-semibold" style={{ color: "#5B9BD5", letterSpacing: "0.1em" }}>
              Helix 02 sensor stream
            </p>
            <p className="text-xs font-semibold mt-0.5" style={{ color: "#C8CEDF" }}>
              Actual inputs captured
            </p>
          </div>
          {robotItems.map((item, i) => (
            <div key={i} className="px-3 py-2.5 flex items-start gap-2" style={i < robotItems.length - 1 ? { borderBottom: "1px solid #2A1E1E" } : {}}>
              <div className="w-6 h-6 rounded flex-shrink-0 flex items-center justify-center" style={{ background: "#1A2840", color: "#5B9BD5", fontSize: 11 }}>⚡</div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold" style={{ color: "#C8CEDF" }}>{item.label}</p>
                <p className="text-[11px] mt-0.5 mb-1.5" style={{ color: "#7A8299", lineHeight: 1.5 }}>{item.desc}</p>
                <span className="inline-block text-[10px] font-semibold px-2 py-0.5 rounded-full" style={{ background: "#2A1A1A", color: "#E05555", border: "1px solid #4A2020" }}>Not disclosed</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="rounded-lg mt-3 overflow-hidden" style={{ background: "#1C2235", border: "1px solid #2A3044" }}>
        <div className="px-3 py-2 text-[11px] uppercase font-semibold flex items-center gap-2" style={{ color: "#888FA8", borderBottom: "1px solid #2A3044", letterSpacing: "0.08em" }}>
          <span style={{ color: "#E05555" }}>⚠</span> The structural blind spot
        </div>
        <div className="grid grid-cols-2">
          <div className="text-center py-4 px-2" style={{ borderRight: "1px solid #2A3044" }}>
            <div style={{ fontSize: 32, fontWeight: 700, color: "#5B9BD5", letterSpacing: "-1px", lineHeight: 1 }}>5</div>
            <div className="text-[11px] mt-1.5" style={{ color: "#7A8299", lineHeight: 1.5 }}>Standard SaaS categories<br />disclosed in policy</div>
          </div>
          <div className="text-center py-4 px-2">
            <div style={{ fontSize: 32, fontWeight: 700, color: "#E05555", letterSpacing: "-1px", lineHeight: 1 }}>0</div>
            <div className="text-[11px] mt-1.5" style={{ color: "#7A8299", lineHeight: 1.5 }}>Physical workplace data<br />fields disclosed</div>
          </div>
        </div>
      </div>

      {/* Footer warning */}
      <div className="rounded-lg mt-3 p-3 flex items-start gap-2" style={{ background: "#1E1414", border: "1px solid #4A2020" }}>
        <span style={{ color: "#E05555", marginTop: 1, fontSize: 13 }}>⚠</span>
        <p className="text-xs" style={{ color: "#E05555", lineHeight: 1.7 }}>
          Figure AI's public disclosures completely omit physical workplace tracking fields. The policy governing Helix 02 was copy-pasted from a standard digital SaaS template, it was never written for a humanoid robot operating next to human bodies.
        </p>
      </div>

      <p className="text-[10px] text-center mt-3" style={{ color: "#475569", letterSpacing: "0.05em" }}>
        Source: Figure AI Terms of Service and Privacy Policy, figure.ai
      </p>
    </div>
  );
}
