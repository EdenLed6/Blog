import { useState, memo } from "react";
import { Link, useNavigate } from "react-router-dom";
import Avatar from "../ui/Avatar.jsx";
import TopicBadge from "../ui/TopicBadge.jsx";
import PostMedia from "./PostMedia.jsx";
import PostActions from "./PostActions.jsx";
import ReplyThread from "./ReplyThread.jsx";
import { useApp } from "../../context/AppContext.jsx";

function parseBody(body, userMap) {
  const parts = body.split(/(@\w+|#\w+)/g);
  return parts.map((part, i) => {
    if (part.startsWith("@")) {
      const handle = part.slice(1);
      const mentioned = Object.values(userMap).find((u) => u.handle === handle);
      return (
        <span key={i} className="text-accent-blue hover:underline cursor-pointer" title={mentioned ? mentioned.name : handle}>
          {part}
        </span>
      );
    }
    if (part.startsWith("#")) {
      return <span key={i} className="text-accent-indigo hover:underline cursor-pointer">{part}</span>;
    }
    return part.split("\n").map((line, j, arr) => (
      <span key={`${i}-${j}`}>{line}{j < arr.length - 1 && <br />}</span>
    ));
  });
}

const PostCard = memo(function PostCard({ post, expandReplies = false }) {
  const { userMap } = useApp();
  const navigate = useNavigate();
  const [repliesOpen, setRepliesOpen] = useState(expandReplies);
  const [replyComposerOpen, setReplyComposerOpen] = useState(false);

  const author = userMap[post.authorId];
  if (!author) return null;

  const handleCardClick = (e) => {
    if (e.target.closest("a, button, iframe, video")) return;
    navigate(`/post/${post.id}`);
  };

  return (
    <article
      className="border-b border-border px-3 sm:px-4 pt-4 pb-1 hover:bg-card-hover cursor-pointer relative group"
      onClick={handleCardClick}
    >
      {/* Left accent on hover */}
      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-blue to-accent-purple opacity-0 group-hover:opacity-100 transition-opacity" />

      <div className="flex gap-3">
        <div className="flex-shrink-0">
          <Avatar user={author} size="md" />
        </div>

        <div className="flex-1 min-w-0">
          {/* Author + meta */}
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="font-bold text-white text-sm">{author.name}</span>
            <span className="text-slate-500 text-sm">@{author.handle}</span>
            <TopicBadge topic={post.topic} size="xs" />
          </div>

          {/* Body */}
          <div className="mt-2 text-slate-200 text-sm leading-relaxed">
            {parseBody(post.body, userMap)}
          </div>

          {/* Media */}
          <PostMedia media={post.media} />

          {/* Actions */}
          <PostActions
            post={post}
            onReplyClick={() => { setRepliesOpen(true); setReplyComposerOpen(true); }}
          />

          {/* Reply Thread */}
          {repliesOpen && post.replyIds.length > 0 && (
            <div className="mt-2" onClick={(e) => e.stopPropagation()}>
              <ReplyThread
                replyIds={post.replyIds}
                postId={post.id}
                showComposer={replyComposerOpen}
                onComposerClose={() => setReplyComposerOpen(false)}
              />
            </div>
          )}

          {/* Collapsed replies toggle */}
          {!repliesOpen && post.replyIds.length > 0 && (
            <button
              onClick={(e) => { e.stopPropagation(); setRepliesOpen(true); setReplyComposerOpen(false); }}
              className="mb-2 text-sm text-accent-blue hover:underline font-medium"
            >
              {post.replyIds.length} {post.replyIds.length === 1 ? "reply" : "replies"}
            </button>
          )}

          {replyComposerOpen && post.replyIds.length === 0 && (
            <div className="mt-2" onClick={(e) => e.stopPropagation()}>
              <ReplyThread replyIds={[]} postId={post.id} showComposer onComposerClose={() => setReplyComposerOpen(false)} />
            </div>
          )}
        </div>
      </div>
    </article>
  );
});

export default PostCard;
