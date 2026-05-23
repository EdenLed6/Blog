// Figure AI Legal Gap, physical robot reality vs legal scope
export default function LegalGapVisual() {
  const robotData = [
    { name: "Skeletal mapping", desc: "Full body joint positions and orientations" },
    { name: "Joint telemetry", desc: "Torque, velocity and angle, every ~50ms" },
    { name: "Spatial environment", desc: "Real-time 3D workspace layout and depth" },
    { name: "Human interaction data", desc: "Faces, gait signatures, vocal patterns" },
  ];
  const legalData = [
    { name: "Name and email address", desc: "Contact Us form submissions" },
    { name: "Cookies and IP addresses", desc: "Browser session and network location" },
    { name: "Browser location", desc: "Location-enabled web browser signals" },
    { name: "Contact form inputs", desc: "Contact Us page messages only" },
  ];

  return (
    <div className="rounded-xl border border-border bg-card p-4 mt-3">
      <p className="text-[11px] uppercase font-semibold mb-1" style={{ color: "#888FA8", letterSpacing: "0.12em" }}>
        Figure AI Legal Gap Analysis
      </p>
      <h3 className="text-white font-semibold mb-1" style={{ fontSize: 16 }}>
        The physical robot vs. legal reality
      </h3>
      <p className="text-xs mb-4" style={{ color: "#7A8299" }}>
        What Helix 02 actually collects vs. what Figure AI's terms acknowledge existing.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_64px_1fr] gap-3 lg:gap-2 items-stretch">

        {/* Robot panel */}
        <div className="rounded-xl overflow-hidden" style={{ background: "#131C2E", border: "1px solid #2A4060" }}>
          <div className="flex items-center gap-2.5 px-3 py-3" style={{ borderBottom: "1px solid #2A4060" }}>
            <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0" style={{ background: "#1E3A5A", color: "#5B9BD5" }}>1</div>
            <div>
              <div className="text-xs font-bold" style={{ color: "#C8CEDF" }}>Helix 02</div>
              <div className="text-[10px] uppercase font-medium" style={{ color: "#5B9BD5", letterSpacing: "0.07em" }}>Physical robot, warehouse floor</div>
            </div>
          </div>

          <div className="px-3 py-3 flex flex-col items-center gap-3">
            {/* Robot SVG */}
            <svg width="100" height="140" viewBox="0 0 120 160" fill="none" aria-hidden="true">
              <line x1="0" y1="148" x2="120" y2="148" stroke="#1E3050" strokeWidth="0.5"/>
              <ellipse cx="60" cy="150" rx="22" ry="4" fill="#0D1520" opacity="0.6"/>
              <rect x="48" y="118" width="9" height="30" rx="4" fill="#1E3A5A" stroke="#2A4A70" strokeWidth="0.5"/>
              <rect x="63" y="118" width="9" height="30" rx="4" fill="#1E3A5A" stroke="#2A4A70" strokeWidth="0.5"/>
              <rect x="44" y="144" width="14" height="6" rx="3" fill="#163060" stroke="#2A4A70" strokeWidth="0.5"/>
              <rect x="62" y="144" width="14" height="6" rx="3" fill="#163060" stroke="#2A4A70" strokeWidth="0.5"/>
              <rect x="42" y="72" width="36" height="48" rx="8" fill="#1A3050" stroke="#2A4A70" strokeWidth="0.8"/>
              <circle cx="60" cy="98" r="5" fill="#0D2040" stroke="#5B9BD5" strokeWidth="0.8"/>
              <circle cx="60" cy="98" r="2" fill="#5B9BD5" opacity="0.8"/>
              <rect x="24" y="74" width="16" height="36" rx="7" fill="#1E3A5A" stroke="#2A4A70" strokeWidth="0.5"/>
              <rect x="80" y="74" width="16" height="36" rx="7" fill="#1E3A5A" stroke="#2A4A70" strokeWidth="0.5"/>
              <rect x="22" y="106" width="18" height="10" rx="5" fill="#163060" stroke="#2A4A70" strokeWidth="0.5"/>
              <rect x="80" y="106" width="18" height="10" rx="5" fill="#163060" stroke="#2A4A70" strokeWidth="0.5"/>
              <rect x="55" y="62" width="10" height="12" rx="4" fill="#1A3050" stroke="#2A4A70" strokeWidth="0.5"/>
              <rect x="40" y="30" width="40" height="34" rx="10" fill="#1A3050" stroke="#2A4A70" strokeWidth="0.8"/>
              <rect x="48" y="40" width="10" height="7" rx="3" fill="#0D2040" stroke="#5B9BD5" strokeWidth="0.8"/>
              <rect x="62" y="40" width="10" height="7" rx="3" fill="#0D2040" stroke="#5B9BD5" strokeWidth="0.8"/>
              <rect x="49" y="41" width="8" height="5" rx="2" fill="#5B9BD5" opacity="0.5"/>
              <rect x="63" y="41" width="8" height="5" rx="2" fill="#5B9BD5" opacity="0.5"/>
              <circle cx="60" cy="56" r="3" fill="#0D2040" stroke="#5B9BD5" strokeWidth="0.6"/>
              <circle cx="32" cy="74" r="3.5" fill="#0D2040" stroke="#5B9BD5" strokeWidth="0.8"/>
              <circle cx="88" cy="74" r="3.5" fill="#0D2040" stroke="#5B9BD5" strokeWidth="0.8"/>
              <circle cx="52" cy="120" r="3.5" fill="#0D2040" stroke="#5B9BD5" strokeWidth="0.8"/>
              <circle cx="68" cy="120" r="3.5" fill="#0D2040" stroke="#5B9BD5" strokeWidth="0.8"/>
              <circle cx="60" cy="50" r="55" stroke="#5B9BD5" strokeWidth="0.4" strokeDasharray="3 4" opacity="0.2" fill="none"/>
            </svg>

            <div className="w-full flex flex-col gap-2">
              {robotData.map((item, i) => (
                <div key={i} className="flex items-center gap-2 px-2.5 py-2 rounded-lg" style={{ background: "#1A2840", border: "1px solid #2A4060" }}>
                  <div className="w-6 h-6 rounded flex-shrink-0 flex items-center justify-center" style={{ background: "#1E3A5A", color: "#5B9BD5", fontSize: 14, lineHeight: 1 }}>•</div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[12px] font-semibold" style={{ color: "#C8CEDF" }}>{item.name}</div>
                    <div className="text-[10px]" style={{ color: "#7A8299", lineHeight: 1.4 }}>{item.desc}</div>
                  </div>
                  <span className="text-[9px] font-semibold px-1.5 py-0.5 rounded-full whitespace-nowrap" style={{ background: "#1A3A5A", color: "#5B9BD5", border: "1px solid #2A4A70" }}>Captured</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Gap column */}
        <div className="flex lg:flex-col items-center justify-center py-2 lg:py-0 gap-2">
          <div className="hidden lg:block w-px flex-1" style={{ background: "linear-gradient(to bottom, transparent, #3A3050 30%, #3A3050 70%, transparent)" }}></div>
          <div className="flex flex-col items-center px-3 py-2 rounded-full" style={{ background: "#2A2040", border: "1px solid #4A3A70" }}>
            <div style={{ fontSize: 22, fontWeight: 700, color: "#7B5EA7", lineHeight: 1 }}>?</div>
            <div className="text-[8px] uppercase font-semibold text-center mt-1" style={{ color: "#6A5090", letterSpacing: "0.08em", lineHeight: 1.4 }}>Legal<br/>gap</div>
          </div>
          <div className="hidden lg:block w-px flex-1" style={{ background: "linear-gradient(to bottom, transparent, #3A3050 30%, #3A3050 70%, transparent)" }}></div>
        </div>

        {/* Legal panel */}
        <div className="rounded-xl overflow-hidden" style={{ background: "#1E1610", border: "1px solid #3A2A1A" }}>
          <div className="flex items-center gap-2.5 px-3 py-3" style={{ borderBottom: "1px solid #3A2A1A" }}>
            <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0" style={{ background: "#3A2A10", color: "#C98A35" }}>2</div>
            <div>
              <div className="text-xs font-bold" style={{ color: "#C8CEDF" }}>Figure AI Terms</div>
              <div className="text-[10px] uppercase font-medium" style={{ color: "#C98A35", letterSpacing: "0.07em" }}>Legal scope, "The Site"</div>
            </div>
          </div>

          <div className="px-3 py-3 flex flex-col gap-2.5">
            {/* Browser mockup */}
            <div className="rounded-lg overflow-hidden" style={{ background: "#1A1408", border: "1px solid #4A3520" }}>
              <div className="px-2.5 py-1.5 flex items-center gap-2" style={{ background: "#221A0E", borderBottom: "1px solid #4A3520" }}>
                <div className="flex gap-1">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#3A2A1A" }}></div>
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#3A2A1A" }}></div>
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#3A2A1A" }}></div>
                </div>
                <div className="flex-1 px-2 py-0.5 rounded text-[10px] font-mono" style={{ background: "#2A1E0E", border: "1px solid #4A3520", color: "#C98A35" }}>
                  www.figure.ai
                </div>
              </div>
              <div className="px-3 py-2.5">
                <div className="text-[10px] italic pl-2" style={{ color: "#7A6A50", lineHeight: 1.65, borderLeft: "2px solid #C98A35" }}>
                  The figure.ai website (the <strong style={{ color: "#C98A35", fontStyle: "normal" }}>"Site"</strong>) is comprised of various web pages operated by Figure. The Site is offered to you conditioned on your acceptance of the terms contained herein.
                </div>
              </div>
            </div>

            {/* Doc label */}
            <div className="flex items-center gap-2 px-2.5 py-2 rounded-lg" style={{ background: "#221A0E", border: "1px solid #4A3520" }}>
              <span style={{ color: "#C98A35", fontSize: 18 }}>📄</span>
              <div className="min-w-0">
                <div className="text-[11px] font-semibold" style={{ color: "#C8CEDF" }}>Privacy Policy</div>
                <div className="text-[10px]" style={{ color: "#7A6A50" }}>Standard SaaS template, copied verbatim</div>
              </div>
            </div>

            <div className="w-full flex flex-col gap-1.5">
              {legalData.map((item, i) => (
                <div key={i} className="flex items-center gap-2 px-2.5 py-2 rounded-lg" style={{ background: "#221A0E", border: "1px solid #4A3520" }}>
                  <div className="w-6 h-6 rounded flex-shrink-0 flex items-center justify-center" style={{ background: "#3A2810", color: "#C98A35", fontSize: 14, lineHeight: 1 }}>•</div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[12px] font-semibold" style={{ color: "#C8CEDF" }}>{item.name}</div>
                    <div className="text-[10px]" style={{ color: "#7A8299", lineHeight: 1.4 }}>{item.desc}</div>
                  </div>
                  <span className="text-[9px] font-semibold px-1.5 py-0.5 rounded-full whitespace-nowrap" style={{ background: "#3A2810", color: "#C98A35", border: "1px solid #5A3A18" }}>Listed</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom pills */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3">
        <div className="flex items-center gap-2 px-3 py-2.5 rounded-lg" style={{ background: "#131C2E", border: "1px solid #2A4060" }}>
          <span style={{ color: "#5B9BD5", fontSize: 16, lineHeight: 1 }}>🛡</span>
          <p className="text-[11px]" style={{ color: "#5B9BD5", lineHeight: 1.55 }}>
            Helix 02 captures <strong>biometric, skeletal and spatial data</strong> continuously, in a physical warehouse.
          </p>
        </div>
        <div className="flex items-center gap-2 px-3 py-2.5 rounded-lg" style={{ background: "#1E1414", border: "1px solid #4A2020" }}>
          <span style={{ color: "#E05555", fontSize: 16, lineHeight: 1 }}>⚠</span>
          <p className="text-[11px]" style={{ color: "#E05555", lineHeight: 1.55 }}>
            The legal terms only cover <strong>a website</strong>, zero mention of the robot, its sensors, or workers.
          </p>
        </div>
      </div>

      {/* Verdict */}
      <div className="rounded-lg mt-3 p-3 flex items-start gap-2" style={{ background: "#1E1414", border: "1px solid #4A2020" }}>
        <span style={{ color: "#E05555", marginTop: 2, fontSize: 13 }}>⚠</span>
        <p className="text-xs" style={{ color: "#E05555", lineHeight: 1.7 }}>
          The gap is not an oversight. A robot processing full-body human data in a physical workplace is being governed by a legal agreement written for browser cookies. The workers subject to Helix 02 have no legal acknowledgment that their bodies are being captured at all.
        </p>
      </div>

      <p className="text-[10px] text-center mt-3" style={{ color: "#475569", letterSpacing: "0.05em" }}>
        Source: Figure AI Terms of Service and Privacy Policy · Figure AI (2025), Helix 02
      </p>
    </div>
  );
}
