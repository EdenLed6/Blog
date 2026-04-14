import { TOPIC_CONFIG } from "../../utils/helpers.js";

export default function TopicBadge({ topic, size = "sm" }) {
  const cfg = TOPIC_CONFIG[topic];
  if (!cfg) return null;
  const textSize = size === "xs" ? "text-xs px-1.5 py-0.5" : "text-xs px-2 py-0.5";
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full border ${cfg.bg} ${cfg.text} ${cfg.border} ${textSize} font-medium`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${cfg.dot}`} />
      {topic}
    </span>
  );
}
