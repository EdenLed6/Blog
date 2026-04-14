export const TOPIC_CONFIG = {
  Technology: {
    bg: "bg-blue-900/40",
    text: "text-blue-300",
    border: "border-blue-700",
    dot: "bg-blue-400",
    accent: "#3B82F6",
    path: "/technology",
  },
  Legal: {
    bg: "bg-purple-900/40",
    text: "text-purple-300",
    border: "border-purple-700",
    dot: "bg-purple-400",
    accent: "#8B5CF6",
    path: "/legal",
  },
  Privacy: {
    bg: "bg-red-900/40",
    text: "text-red-300",
    border: "border-red-700",
    dot: "bg-red-400",
    accent: "#EF4444",
    path: "/privacy",
  },
  Ethics: {
    bg: "bg-amber-900/40",
    text: "text-amber-300",
    border: "border-amber-700",
    dot: "bg-amber-400",
    accent: "#F59E0B",
    path: "/ethics",
  },
  Strategy: {
    bg: "bg-green-900/40",
    text: "text-green-300",
    border: "border-green-700",
    dot: "bg-green-400",
    accent: "#10B981",
    path: "/strategy",
  },
};

export const TOPICS = Object.keys(TOPIC_CONFIG);

export function formatTimestamp(ms) {
  const diff = Date.now() - ms;
  const sec = 1000;
  const min = 60 * sec;
  const hr = 60 * min;
  const day = 24 * hr;
  if (diff < min) return `${Math.floor(diff / sec)}s`;
  if (diff < hr) return `${Math.floor(diff / min)}m`;
  if (diff < day) return `${Math.floor(diff / hr)}h`;
  if (diff < 7 * day) return `${Math.floor(diff / day)}d`;
  return new Date(ms).toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

let counter = Date.now();
export function generateId(prefix = "id") {
  return `${prefix}_${(++counter).toString(36)}`;
}
