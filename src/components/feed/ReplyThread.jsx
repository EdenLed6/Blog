import { useState } from "react";
import ReplyCard from "./ReplyCard.jsx";
import ReplyComposer from "../composer/ReplyComposer.jsx";
import { useApp } from "../../context/AppContext.jsx";

export default function ReplyThread({ replyIds, postId, showComposer, onComposerClose }) {
  const { replyMap } = useApp();
  const [showAll, setShowAll] = useState(false);

  const replies = replyIds
    .map((id) => replyMap[id])
    .filter(Boolean)
    .sort((a, b) => a.createdAt - b.createdAt);

  const PREVIEW_COUNT = 2;
  const visible = showAll ? replies : replies.slice(0, PREVIEW_COUNT);
  const hasMore = replies.length > PREVIEW_COUNT && !showAll;

  return (
    <div className="pl-1 border-l-2 border-border ml-1">
      {visible.map((reply) => (
        <ReplyCard key={reply.id} reply={reply} />
      ))}

      {hasMore && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            setShowAll(true);
          }}
          className="text-xs text-accent-blue hover:underline py-1 pl-2.5"
        >
          Show {replies.length - PREVIEW_COUNT} more {replies.length - PREVIEW_COUNT === 1 ? "reply" : "replies"}
        </button>
      )}

      {showComposer && (
        <div className="pt-2 pl-1">
          <ReplyComposer postId={postId} onSubmit={onComposerClose} />
        </div>
      )}
    </div>
  );
}
