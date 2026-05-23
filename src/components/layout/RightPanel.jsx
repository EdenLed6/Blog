import { useMemo } from "react";
import { Link } from "react-router-dom";
import { BookOpen, TrendingUp, Users } from "lucide-react";
import Avatar from "../ui/Avatar.jsx";
import { useApp } from "../../context/AppContext.jsx";
import { TOPIC_CONFIG, TOPICS } from "../../utils/helpers.js";

export default function RightPanel() {
  const { posts, userMap } = useApp();

  const topicCounts = useMemo(() => {
    const counts = {};
    TOPICS.forEach((t) => { counts[t] = 0; });
    posts.forEach((p) => { if (counts[p.topic] !== undefined) counts[p.topic]++; });
    return counts;
  }, [posts]);

  const suggestedUsers = useMemo(() => {
    // Show the human researchers behind the project (exclude the HelixWatch bot account).
    return Object.values(userMap).filter((u) => u.handle !== "helixwatch");
  }, [userMap]);

  return (
    <aside className="sticky top-0 h-screen py-6 px-4 overflow-y-auto space-y-6 hidden lg:block">
      {/* Topic Trending */}
      <section className="bg-card border border-border rounded-2xl p-4">
        <div className="flex items-center gap-2 mb-3">
          <TrendingUp size={16} className="text-accent-blue" />
          <h3 className="text-sm font-semibold text-white">Topics</h3>
        </div>
        <ul className="space-y-1">
          {TOPICS.map((topic) => {
            const cfg = TOPIC_CONFIG[topic];
            return (
              <li key={topic}>
                <Link
                  to={cfg.path}
                  className="flex items-center justify-between px-2 py-1.5 rounded-lg hover:bg-white/5 group"
                >
                  <div className="flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${cfg.dot}`} />
                    <span className="text-sm text-slate-300 group-hover:text-white">{topic}</span>
                  </div>
                  <span className="text-xs text-slate-500">{topicCounts[topic]} posts</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>

      {/* Suggested Users */}
      <section className="bg-card border border-border rounded-2xl p-4">
        <div className="flex items-center gap-2 mb-3">
          <Users size={16} className="text-accent-purple" />
          <h3 className="text-sm font-semibold text-white">Researchers</h3>
        </div>
        <ul className="space-y-3">
          {suggestedUsers.map((user) => (
            <li key={user.id} className="flex items-center gap-3">
              <Avatar user={user} size="sm" />
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-white truncate">{user.name}</p>
                <p className="text-xs text-slate-500 truncate">@{user.handle}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* About this project */}
      <section className="bg-card border border-border rounded-2xl p-4">
        <div className="flex items-center gap-2 mb-3">
          <BookOpen size={16} className="text-amber-400" />
          <h3 className="text-sm font-semibold text-white">About this project</h3>
        </div>
        <p className="text-xs text-slate-300 leading-relaxed">
          A semester-long research deep-dive into what humanoid robots like Figure AI's Helix mean for worker privacy, and whether the law is anywhere close to ready.
        </p>
        <p className="text-xs text-slate-500 mt-2">
          By Eden, Orianne, Dan, Shir & Amir · Group 8
        </p>
        <div className="mt-3 pt-3 border-t border-border space-y-1.5">
          <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">Built on</p>
          <p className="text-xs text-slate-400">Calo, R. (2010). Robots and Privacy.</p>
          <p className="text-xs text-slate-400">Figure AI. (2026). Helix 02.</p>
          <p className="text-xs text-slate-400">EU AI Act · GDPR Art. 25</p>
        </div>
      </section>
    </aside>
  );
}
