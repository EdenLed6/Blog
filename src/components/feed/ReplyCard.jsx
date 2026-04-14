import { Heart } from "lucide-react";
import Avatar from "../ui/Avatar.jsx";
import { useApp } from "../../context/AppContext.jsx";
import { formatTimestamp } from "../../utils/helpers.js";

export default function ReplyCard({ reply }) {
  const { userMap, currentUser, likeReply } = useApp();
  const author = userMap[reply.authorId];
  if (!author) return null;
  const liked = reply.likes.includes(currentUser?.id);

  return (
    <div className="flex gap-2.5 py-2.5">
      <Avatar user={author} size="sm" />
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className="text-sm font-semibold text-white">{author.name}</span>
          <span className="text-xs text-slate-500">@{author.handle}</span>
          <span className="text-slate-600 text-xs">·</span>
          <span className="text-xs text-slate-500">{formatTimestamp(reply.createdAt)}</span>
        </div>
        <p className="text-sm text-slate-300 mt-0.5 leading-relaxed">{reply.body}</p>
        <button
          onClick={(e) => {
            e.stopPropagation();
            likeReply(reply.id);
          }}
          className={`flex items-center gap-1 mt-1 text-xs ${
            liked ? "text-rose-400" : "text-slate-500 hover:text-slate-300"
          }`}
        >
          <Heart size={13} fill={liked ? "currentColor" : "none"} />
          {reply.likes.length > 0 && <span>{reply.likes.length}</span>}
        </button>
      </div>
    </div>
  );
}
