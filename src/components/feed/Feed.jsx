import { useMemo } from "react";
import { useApp } from "../../context/AppContext.jsx";
import PostCard from "./PostCard.jsx";
import PostComposer from "../composer/PostComposer.jsx";
import { TOPIC_CONFIG } from "../../utils/helpers.js";

export default function Feed({ topicFilter }) {
  const { posts } = useApp();

  const filtered = useMemo(() => {
    if (!topicFilter) return posts;
    return posts.filter((p) => p.topic === topicFilter);
  }, [posts, topicFilter]);

  const cfg = topicFilter ? TOPIC_CONFIG[topicFilter] : null;

  return (
    <div>
      {/* Page header */}
      <div className="sticky top-0 z-20 bg-background/90 backdrop-blur border-b border-border px-4 py-3">
        {topicFilter ? (
          <div className="flex items-center gap-3">
            <span className={`w-3 h-3 rounded-full ${cfg.dot}`} />
            <h1 className="font-bold text-white text-lg">{topicFilter}</h1>
            <span className="text-slate-500 text-sm">· Topic feed</span>
          </div>
        ) : (
          <h1 className="font-bold text-white text-lg">Home</h1>
        )}
      </div>

      {/* Inline composer at top of feed */}
      <div className="border-b border-border">
        <PostComposer defaultTopic={topicFilter} />
      </div>

      {/* Posts */}
      <div className="feed-scroll">
        {filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-slate-500">
            <p className="text-lg font-medium">No posts yet</p>
            <p className="text-sm mt-1">Be the first to post about {topicFilter || "this topic"}.</p>
          </div>
        ) : (
          filtered.map((post) => <PostCard key={post.id} post={post} />)
        )}
      </div>
    </div>
  );
}
