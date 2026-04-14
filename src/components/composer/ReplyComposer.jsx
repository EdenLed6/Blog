import { useState } from "react";
import Avatar from "../ui/Avatar.jsx";
import { useApp } from "../../context/AppContext.jsx";

export default function ReplyComposer({ postId, onSubmit }) {
  const { currentUser, addReply } = useApp();
  const [body, setBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const trimmed = body.trim();
    if (!trimmed) return;
    addReply(postId, trimmed);
    setBody("");
    onSubmit?.();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-2.5"
      onClick={(e) => e.stopPropagation()}
    >
      <Avatar user={currentUser} size="sm" />
      <div className="flex-1">
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="Write a reply..."
          rows={2}
          maxLength={280}
          className="w-full bg-transparent text-sm text-slate-200 placeholder:text-slate-600 resize-none outline-none border-b border-border focus:border-accent-blue pb-1 leading-relaxed"
        />
        <div className="flex items-center justify-between mt-1.5">
          {body.length > 240 && (
            <span className={`text-xs ${body.length > 270 ? "text-red-400" : "text-slate-500"}`}>
              {280 - body.length}
            </span>
          )}
          <div className="ml-auto">
            <button
              type="submit"
              disabled={!body.trim()}
              className="px-4 py-1 rounded-full text-xs font-semibold bg-accent-blue hover:bg-blue-500 text-white disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              Reply
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
