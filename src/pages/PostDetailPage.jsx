import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Avatar from "../components/ui/Avatar.jsx";
import TopicBadge from "../components/ui/TopicBadge.jsx";
import PostMedia from "../components/feed/PostMedia.jsx";
import PostActions from "../components/feed/PostActions.jsx";
import ReplyCard from "../components/feed/ReplyCard.jsx";
import ReplyComposer from "../components/composer/ReplyComposer.jsx";
import { useApp } from "../context/AppContext.jsx";
import { formatTimestamp } from "../utils/helpers.js";

function parseBody(body, userMap) {
  const parts = body.split(/(@\w+|#\w+)/g);
  return parts.map((part, i) => {
    if (part.startsWith("@")) {
      return (
        <span key={i} className="text-accent-blue hover:underline cursor-pointer">
          {part}
        </span>
      );
    }
    if (part.startsWith("#")) {
      return (
        <span key={i} className="text-accent-indigo hover:underline cursor-pointer">
          {part}
        </span>
      );
    }
    return part.split("\n").map((line, j, arr) => (
      <span key={`${i}-${j}`}>
        {line}
        {j < arr.length - 1 && <br />}
      </span>
    ));
  });
}

export default function PostDetailPage() {
  const { id } = useParams();
  const { postMap, replyMap, userMap } = useApp();

  const post = postMap[id];

  if (!post) {
    return (
      <div className="flex flex-col items-center justify-center py-32 text-slate-500">
        <p className="text-lg font-medium">Post not found</p>
        <Link to="/" className="mt-3 text-accent-blue hover:underline text-sm">
          ← Back to Home
        </Link>
      </div>
    );
  }

  const author = userMap[post.authorId];
  const replies = post.replyIds
    .map((rid) => replyMap[rid])
    .filter(Boolean)
    .sort((a, b) => a.createdAt - b.createdAt);

  return (
    <div>
      {/* Header */}
      <div className="sticky top-0 z-20 bg-background/90 backdrop-blur border-b border-border px-4 py-3 flex items-center gap-3">
        <Link
          to="/"
          className="p-1.5 rounded-full hover:bg-white/10 text-slate-400 hover:text-white"
        >
          <ArrowLeft size={18} />
        </Link>
        <h1 className="font-bold text-white text-base">Post</h1>
      </div>

      {/* Post body */}
      <article className="px-4 pt-5 pb-4 border-b border-border">
        <div className="flex gap-3">
          <Avatar user={author} size="md" />
          <div>
            <p className="font-semibold text-white">{author?.name}</p>
            <p className="text-sm text-slate-500">@{author?.handle}</p>
          </div>
        </div>

        <div className="mt-3 text-slate-200 text-base leading-relaxed">
          {parseBody(post.body, userMap)}
        </div>

        <PostMedia media={post.media} />

        <div className="mt-3 flex items-center gap-2">
          <span className="text-slate-500 text-sm">
            {new Date(post.createdAt).toLocaleString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
              hour: "numeric",
              minute: "2-digit",
            })}
          </span>
          <span className="text-slate-600">·</span>
          <TopicBadge topic={post.topic} />
        </div>

        {/* Stats */}
        <div className="mt-3 pt-3 border-t border-border flex gap-5 text-sm text-slate-400">
          <span><strong className="text-white">{post.reposts.length}</strong> Reposts</span>
          <span><strong className="text-white">{post.likes.length}</strong> Likes</span>
          <span><strong className="text-white">{post.bookmarks.length}</strong> Bookmarks</span>
        </div>

        <div className="border-t border-border mt-2">
          <PostActions post={post} />
        </div>
      </article>

      {/* Reply composer */}
      <div className="px-4 py-3 border-b border-border">
        <ReplyComposer postId={post.id} />
      </div>

      {/* Replies */}
      <div>
        {replies.length === 0 ? (
          <div className="py-12 text-center text-slate-600 text-sm">No replies yet — be the first to respond.</div>
        ) : (
          replies.map((reply) => (
            <div key={reply.id} className="px-4 border-b border-border">
              <ReplyCard reply={reply} />
            </div>
          ))
        )}
      </div>
    </div>
  );
}
