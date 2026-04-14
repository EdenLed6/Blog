import { useState, useRef, useEffect } from "react";
import { Image, Link as LinkIcon, ChevronDown, X } from "lucide-react";
import Avatar from "../ui/Avatar.jsx";
import TopicBadge from "../ui/TopicBadge.jsx";
import { useApp } from "../../context/AppContext.jsx";
import { TOPICS } from "../../utils/helpers.js";

export default function PostComposer({ onSubmit, defaultTopic }) {
  const { currentUser, userMap, addPost } = useApp();

  const [body, setBody] = useState("");
  const [topic, setTopic] = useState(defaultTopic || TOPICS[0]);
  const [mediaUrl, setMediaUrl] = useState("");
  const [showMediaInput, setShowMediaInput] = useState(false);
  const [topicOpen, setTopicOpen] = useState(false);
  const [mentionQuery, setMentionQuery] = useState(null); // null or string
  const [mentionPos, setMentionPos] = useState(0); // caret position when @ was typed
  const [expanded, setExpanded] = useState(!!onSubmit); // modal mode is always expanded

  const textareaRef = useRef(null);
  const topicRef = useRef(null);

  // Close topic dropdown on outside click
  useEffect(() => {
    const handler = (e) => {
      if (topicRef.current && !topicRef.current.contains(e.target)) {
        setTopicOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // @mention detection
  const handleBodyChange = (e) => {
    const val = e.target.value;
    setBody(val);

    const caret = e.target.selectionStart;
    // Find if we're inside a @mention token
    const textUpToCaret = val.slice(0, caret);
    const match = textUpToCaret.match(/@(\w*)$/);
    if (match) {
      setMentionQuery(match[1].toLowerCase());
      setMentionPos(caret - match[0].length); // position of '@'
    } else {
      setMentionQuery(null);
    }
  };

  const mentionSuggestions =
    mentionQuery !== null
      ? Object.values(userMap).filter(
          (u) =>
            u.id !== currentUser?.id &&
            u.handle.toLowerCase().startsWith(mentionQuery)
        )
      : [];

  const insertMention = (handle) => {
    const before = body.slice(0, mentionPos);
    const after = body.slice(textareaRef.current.selectionStart);
    const newBody = `${before}@${handle} ${after}`;
    setBody(newBody);
    setMentionQuery(null);
    // Re-focus textarea
    setTimeout(() => {
      if (textareaRef.current) {
        const pos = mentionPos + handle.length + 2;
        textareaRef.current.focus();
        textareaRef.current.setSelectionRange(pos, pos);
      }
    }, 0);
  };

  const handleSubmit = (e) => {
    e?.preventDefault();
    const trimmed = body.trim();
    if (!trimmed) return;

    const media = [];
    if (mediaUrl.trim()) {
      const url = mediaUrl.trim();
      const isVideo =
        url.match(/\.(mp4|webm|ogg)$/i) ||
        url.includes("youtube.com") ||
        url.includes("youtu.be");
      if (url.includes("youtube.com/watch") || url.includes("youtu.be")) {
        const idMatch = url.match(/(?:v=|youtu\.be\/)([^&?/]+)/);
        if (idMatch) {
          media.push({ type: "embed", platform: "youtube", videoId: idMatch[1] });
        }
      } else if (isVideo) {
        media.push({ type: "video", url });
      } else {
        media.push({ type: "image", url, alt: "User uploaded image" });
      }
    }

    // Extract @mentions from body
    const tagMatches = trimmed.matchAll(/@(\w+)/g);
    const tags = [...new Set([...tagMatches].map((m) => m[1]))];

    addPost({ body: trimmed, topic, media, tags });
    setBody("");
    setMediaUrl("");
    setShowMediaInput(false);
    onSubmit?.();
  };

  const charCount = body.length;
  const overLimit = charCount > 280;
  const nearLimit = charCount > 240;

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4"
      onClick={() => setExpanded(true)}
    >
      <div className="flex gap-3">
        <Avatar user={currentUser} size="md" />
        <div className="flex-1 min-w-0">
          {/* Topic selector */}
          {expanded && (
            <div className="mb-2 relative" ref={topicRef}>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setTopicOpen((o) => !o);
                }}
                className="flex items-center gap-1.5 text-xs border border-border rounded-full px-2.5 py-1 hover:bg-white/5 text-slate-400"
              >
                <TopicBadge topic={topic} size="xs" />
                <ChevronDown size={12} />
              </button>
              {topicOpen && (
                <ul className="absolute top-full mt-1 left-0 z-30 bg-card border border-border rounded-xl shadow-xl py-1 w-40">
                  {TOPICS.map((t) => (
                    <li key={t}>
                      <button
                        type="button"
                        className="w-full text-left px-3 py-2 hover:bg-white/10 text-sm text-slate-300"
                        onClick={() => {
                          setTopic(t);
                          setTopicOpen(false);
                        }}
                      >
                        <TopicBadge topic={t} size="xs" />
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}

          {/* Textarea */}
          <div className="relative">
            <textarea
              ref={textareaRef}
              value={body}
              onChange={handleBodyChange}
              placeholder={expanded ? "Share your analysis... Use @handle to tag researchers" : "What's your take on humanoid robotics privacy?"}
              rows={expanded ? 4 : 2}
              className="w-full bg-transparent text-slate-200 placeholder:text-slate-600 resize-none outline-none text-sm leading-relaxed"
            />

            {/* @mention autocomplete dropdown */}
            {mentionSuggestions.length > 0 && (
              <ul className="absolute top-full left-0 z-30 bg-card border border-border rounded-xl shadow-xl py-1 w-52">
                {mentionSuggestions.map((user) => (
                  <li key={user.id}>
                    <button
                      type="button"
                      className="w-full text-left px-3 py-2 hover:bg-white/10 flex items-center gap-2"
                      onMouseDown={(e) => {
                        e.preventDefault();
                        insertMention(user.handle);
                      }}
                    >
                      <span
                        className={`w-6 h-6 rounded-full ${user.avatarColor} text-white text-xs flex items-center justify-center font-bold`}
                      >
                        {user.initials}
                      </span>
                      <div>
                        <p className="text-sm text-white font-medium">{user.name}</p>
                        <p className="text-xs text-slate-500">@{user.handle}</p>
                      </div>
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Media URL input */}
          {showMediaInput && (
            <div className="flex items-center gap-2 mt-2 p-2 bg-white/5 rounded-lg border border-border">
              <LinkIcon size={14} className="text-slate-500 flex-shrink-0" />
              <input
                type="url"
                value={mediaUrl}
                onChange={(e) => setMediaUrl(e.target.value)}
                placeholder="Image or YouTube URL..."
                className="flex-1 bg-transparent text-sm text-slate-300 placeholder:text-slate-600 outline-none"
              />
              {mediaUrl && (
                <button type="button" onClick={() => setMediaUrl("")}>
                  <X size={14} className="text-slate-500 hover:text-white" />
                </button>
              )}
            </div>
          )}

          {/* Bottom bar */}
          {expanded && (
            <div className="flex items-center justify-between mt-3 pt-2 border-t border-border">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowMediaInput((v) => !v);
                  }}
                  className={`p-1.5 rounded-full hover:bg-white/10 ${showMediaInput ? "text-accent-blue" : "text-slate-500"}`}
                  title="Add media URL"
                >
                  <Image size={16} />
                </button>
              </div>

              <div className="flex items-center gap-3">
                {nearLimit && (
                  <span className={`text-xs ${overLimit ? "text-red-400" : "text-slate-500"}`}>
                    {280 - charCount}
                  </span>
                )}
                <button
                  type="submit"
                  disabled={!body.trim() || overLimit}
                  className="px-5 py-1.5 rounded-full text-sm font-semibold bg-accent-blue hover:bg-blue-500 text-white disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                >
                  Post
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </form>
  );
}
