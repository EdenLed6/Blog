import { Bot, Users, BookOpen, ExternalLink, Sparkles } from "lucide-react";

const TEAM = [
  { name: "Eden Ledom", handle: "edenledom", initials: "EL", color: "bg-indigo-500", role: "Strategy and governance" },
  { name: "Orianne Blum", handle: "oriblum", initials: "OB", color: "bg-purple-500", role: "Legal and regulatory analysis" },
  { name: "Dan Vered", handle: "danvered", initials: "DV", color: "bg-blue-500", role: "Technology and AI architecture" },
  { name: "Shir Schipper", handle: "shirschipper", initials: "SS", color: "bg-emerald-500", role: "Ethics and consent frameworks" },
  { name: "Amir Unikovski", handle: "amirunikovski", initials: "AU", color: "bg-amber-500", role: "Privacy and data governance" },
];

const TOPICS = [
  { topic: "Technology", desc: "Helix 02 as a vision-language-action humanoid robot, and how continuous sensing turns ordinary activity into data.", color: "text-blue-400" },
  { topic: "Legal", desc: "Differences between fragmented U.S. privacy rules and the more preventive EU approach under the GDPR and AI governance.", color: "text-amber-400" },
  { topic: "Privacy", desc: "How Calo's three channels of harm and the privacy paradox apply to humanoid and social robots.", color: "text-rose-400" },
  { topic: "Ethics", desc: "How trust, consent, and \"normal life as training data\" raise ethical questions for workers and bystanders.", color: "text-purple-400" },
  { topic: "Strategy", desc: "Why humanoid robots need a hybrid governance model: privacy by design, impact assessments, and a clear line between functional data and data used for learning.", color: "text-emerald-400" },
];

const REFS = [
  {
    short: "Calo (2012)",
    full: "Calo, R. (2012). Robots and Privacy. In P. Lin, K. Abney, & G. A. Bekey (Eds.), Robot Ethics: The Ethical and Social Implications of Robotics (pp. 187-201). MIT Press.",
    url: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=1599189",
  },
  {
    short: "EDPS (2016)",
    full: "European Data Protection Supervisor. (2016, October 19). Artificial intelligence, robotics, privacy and data protection.",
    url: "https://www.edps.europa.eu/data-protection/our-work/publications/other-documents/artificial-intelligence-robotics-privacy-and_en",
  },
  {
    short: "Figure AI. Helix (2025)",
    full: "Figure AI. (2025, February 19). Helix: A vision-language-action model for generalist humanoid control.",
    url: "https://www.figure.ai/news/helix",
  },
  {
    short: "Figure AI. Helix 02 (2026)",
    full: "Figure AI. (2026, January 26). Introducing Helix 02: Full-body autonomy.",
    url: "https://www.figure.ai/news/helix-02",
  },
  {
    short: "Figure AI. Privacy policy",
    full: "Figure AI. (2026, January 20). Privacy policy.",
    url: "https://www.figure.ai/privacy-policy",
  },
  {
    short: "GDPR Art. 25",
    full: "Regulation (EU) 2016/679. Article 25: Data protection by design and by default.",
    url: "https://www.eur-lex.europa.eu/eli/reg/2016/679/oj",
  },
  {
    short: "EU AI Act (2024)",
    full: "Regulation (EU) 2024/1689 of the European Parliament and of the Council, 13 June 2024.",
    url: "https://www.eur-lex.europa.eu/eli/reg/2024/1689/oj",
  },
  {
    short: "Social robots & privacy (2021)",
    full: "Do privacy concerns about social robots affect use intentions? Frontiers in Robotics and AI (2021).",
    url: "https://www.frontiersin.org/journals/robotics-and-ai/articles/10.3389/frobt.2021.627958/full",
  },
  {
    short: "TechGDPR (2025)",
    full: "TechGDPR. (2025, June 3). AI and the GDPR: Understanding the foundations of compliance.",
    url: "https://techgdpr.com/blog/ai-and-the-gdpr-understanding-the-foundations-of-compliance/",
  },
  {
    short: "NIST AI RMF (2023)",
    full: "National Institute of Standards and Technology. (2023). Artificial Intelligence Risk Management Framework (AI RMF 1.0).",
    url: "https://www.nist.gov/itl/ai-risk-management-framework",
  },
  {
    short: "ACM Code of Ethics",
    full: "Association for Computing Machinery. (2018). ACM Code of Ethics and Professional Conduct.",
    url: "https://www.acm.org/code-of-ethics",
  },
  {
    short: "FTC Act, Section 5",
    full: "Federal Trade Commission Act, Section 5: Unfair or deceptive acts or practices. 15 U.S.C. § 45.",
    url: "https://www.ftc.gov/legal-library/browse/statutes/federal-trade-commission-act",
  },
  {
    short: "Illinois BIPA",
    full: "Biometric Information Privacy Act. 740 ILCS 14. Illinois General Assembly.",
    url: "https://www.ilga.gov/legislation/ilcs/ilcs3.asp?ActID=3004&ChapterID=57",
  },
  {
    short: "CCPA / CPRA",
    full: "California Consumer Privacy Act of 2018, as amended by the California Privacy Rights Act.",
    url: "https://oag.ca.gov/privacy/ccpa",
  },
];

export default function AboutPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8 space-y-8">

      {/* Hero */}
      <div className="text-center space-y-3">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent-blue to-accent-purple flex items-center justify-center mx-auto">
          <Bot size={32} className="text-white" />
        </div>
        <h1 className="text-2xl font-bold text-white">HelixWatch</h1>
        <p className="text-slate-400 text-base leading-relaxed">
          Tracking privacy, law, and governance in the age of humanoid robotics.
        </p>
      </div>

      {/* What HelixWatch examines */}
      <section className="bg-card border border-border rounded-2xl p-5 space-y-3">
        <h2 className="text-white font-semibold text-base">What HelixWatch examines</h2>
        <p className="text-slate-300 text-sm leading-relaxed">
          HelixWatch is a research-driven blog about the privacy, legal, ethical, and governance questions raised by humanoid robots in human environments. Using Figure AI's Helix as a core case study, it looks at how systems that continuously perceive, interpret, and act in physical space change the way we need to think about privacy and regulation.
        </p>
      </section>

      {/* Research focus */}
      <section className="bg-card border border-border rounded-2xl p-5 space-y-3">
        <h2 className="text-white font-semibold text-base">Research focus</h2>
        <p className="text-slate-300 text-sm leading-relaxed">
          The central problem addressed by HelixWatch is whether humanoid robots that continuously perceive and record their environments should be regulated as ordinary products or as high-risk data-processing systems.
        </p>
        <p className="text-slate-300 text-sm leading-relaxed">
          As Figure AI's Helix becomes more capable of operating in homes, workplaces, and sensitive environments, it may capture bystander data, spatial layouts, voice, movement patterns, and other information that users may not expect to be processed.
        </p>
      </section>

      {/* What the blog covers */}
      <section className="bg-card border border-border rounded-2xl p-5 space-y-3">
        <h2 className="text-white font-semibold text-base">What the blog covers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {TOPICS.map(({ topic, desc, color }) => (
            <div key={topic} className="rounded-xl bg-white/4 p-3 space-y-1">
              <p className={`text-sm font-semibold ${color}`}>{topic}</p>
              <p className="text-xs text-slate-400 leading-snug">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why this matters */}
      <section className="bg-card border border-border rounded-2xl p-5 space-y-3">
        <h2 className="text-white font-semibold text-base">Why this matters</h2>
        <p className="text-slate-300 text-sm leading-relaxed">
          The literature supports a clear conclusion: humanoid robots intensify privacy risks because they embed continuous sensing into physical social environments. Calo's framework remains a powerful tool for understanding those risks, while Figure's Helix illustrates how quickly the technology is advancing beyond existing legal assumptions.
        </p>
      </section>

      {/* Team */}
      <section className="bg-card border border-border rounded-2xl p-5 space-y-4">
        <div className="flex items-center gap-2">
          <Users size={16} className="text-accent-purple" />
          <h2 className="text-white font-semibold text-base">The team</h2>
        </div>
        <ul className="space-y-3">
          {TEAM.map((m) => (
            <li key={m.handle} className="flex items-center gap-3">
              <div className={`w-9 h-9 rounded-full ${m.color} flex items-center justify-center flex-shrink-0`}>
                <span className="text-xs font-bold text-white">{m.initials}</span>
              </div>
              <div className="min-w-0">
                <p className="text-sm font-medium text-white">{m.name}</p>
                <p className="text-xs text-slate-500">@{m.handle} · {m.role}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* References */}
      <section className="bg-card border border-border rounded-2xl p-5 space-y-3">
        <div className="flex items-center gap-2">
          <BookOpen size={16} className="text-amber-400" />
          <h2 className="text-white font-semibold text-base">Key references</h2>
        </div>
        <ul className="space-y-3">
          {REFS.map(({ short, full, url }) => {
            const body = (
              <>
                <ExternalLink
                  size={13}
                  className={`mt-0.5 flex-shrink-0 transition-colors ${url ? "text-slate-600 group-hover:text-accent-blue" : "text-slate-700"}`}
                />
                <div>
                  <p className={`text-sm font-medium transition-colors ${url ? "text-slate-200 group-hover:text-accent-blue" : "text-slate-200"}`}>{short}</p>
                  <p className="text-xs text-slate-500 leading-relaxed mt-0.5">{full}</p>
                </div>
              </>
            );
            return (
              <li key={short}>
                {url ? (
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start gap-2 rounded-xl p-2.5 hover:bg-white/5 transition-colors"
                  >
                    {body}
                  </a>
                ) : (
                  <div className="flex items-start gap-2 rounded-xl p-2.5">
                    {body}
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </section>

      {/* AI use disclosure */}
      <section className="bg-card border border-border rounded-2xl p-5 space-y-3">
        <div className="flex items-center gap-2">
          <Sparkles size={16} className="text-accent-blue" />
          <h2 className="text-white font-semibold text-base">AI use disclosure</h2>
        </div>
        <p className="text-slate-300 text-sm leading-relaxed">
          AI tools were used in the research and production process. Perplexity and Gemini were used for real-time technical research, literature discovery, and content refinement, while Claude was used in structuring and developing the blog.
        </p>
        <p className="text-slate-300 text-sm leading-relaxed">
          Final source selection, analytical framing, legal interpretation, strategic conclusions, and editorial judgment were completed by the authors.
        </p>
      </section>

    </div>
  );
}
