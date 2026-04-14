import { Heart, Repeat2, MessageCircle, Bookmark } from "lucide-react";
import { useApp } from "../../context/AppContext.jsx";

function ActionButton({ icon: Icon, count, active, activeClass, onClick, label }) {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        e.preventDefault();
        onClick();
      }}
      aria-label={label}
      className={`flex items-center gap-1.5 text-sm group ${
        active ? activeClass : "text-slate-500 hover:text-slate-300"
      }`}
    >
      <span className="p-1.5 rounded-full group-hover:bg-white/10 transition-colors">
        <Icon
          size={17}
          className={active ? "" : ""}
          fill={active && (label === "Like" || label === "Bookmark") ? "currentColor" : "none"}
        />
      </span>
      {count > 0 && <span className="text-xs">{count}</span>}
    </button>
  );
}

export default function PostActions({ post, onReplyClick }) {
  const { currentUser, toggleLike, toggleRepost, toggleBookmark } = useApp();
  const uid = currentUser?.id;

  const liked = post.likes.includes(uid);
  const reposted = post.reposts.includes(uid);
  const bookmarked = post.bookmarks.includes(uid);

  return (
    <div className="flex items-center gap-1 mt-3 -ml-1.5">
      <ActionButton
        icon={MessageCircle}
        count={post.replyIds.length}
        active={false}
        activeClass="text-blue-400"
        onClick={onReplyClick || (() => {})}
        label="Reply"
      />
      <ActionButton
        icon={Repeat2}
        count={post.reposts.length}
        active={reposted}
        activeClass="text-green-400"
        onClick={() => toggleRepost(post.id)}
        label="Repost"
      />
      <ActionButton
        icon={Heart}
        count={post.likes.length}
        active={liked}
        activeClass="text-rose-400"
        onClick={() => toggleLike(post.id)}
        label="Like"
      />
      <ActionButton
        icon={Bookmark}
        count={post.bookmarks.length}
        active={bookmarked}
        activeClass="text-amber-400"
        onClick={() => toggleBookmark(post.id)}
        label="Bookmark"
      />
    </div>
  );
}
