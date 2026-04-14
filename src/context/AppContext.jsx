import { createContext, useContext, useReducer, useEffect, useMemo, useCallback } from "react";
import { SEED_USERS } from "../data/users.js";
import { SEED_POSTS, SEED_REPLIES } from "../data/posts.js";
import { generateId } from "../utils/helpers.js";

const STORAGE_KEY = "helixblog_state_v1";

function buildSeedState() {
  const userMap = {};
  SEED_USERS.forEach((u) => { userMap[u.id] = u; });

  const postMap = {};
  SEED_POSTS.forEach((p) => { postMap[p.id] = p; });

  const replyMap = {};
  SEED_REPLIES.forEach((r) => { replyMap[r.id] = r; });

  return {
    userMap,
    postMap,
    replyMap,
    currentUserId: "u1",
  };
}

function initializeState() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      // Sanity check: ensure required keys exist
      if (parsed.userMap && parsed.postMap && parsed.replyMap) return parsed;
    }
  } catch {
    // fall through to seed
  }
  return buildSeedState();
}

function appReducer(state, action) {
  switch (action.type) {
    case "ADD_POST": {
      const { post } = action;
      return {
        ...state,
        postMap: { [post.id]: post, ...state.postMap },
      };
    }
    case "ADD_REPLY": {
      const { reply } = action;
      const post = state.postMap[reply.postId];
      if (!post) return state;
      return {
        ...state,
        replyMap: { ...state.replyMap, [reply.id]: reply },
        postMap: {
          ...state.postMap,
          [post.id]: {
            ...post,
            replyIds: [...post.replyIds, reply.id],
          },
        },
      };
    }
    case "TOGGLE_LIKE": {
      const { postId, userId } = action;
      const post = state.postMap[postId];
      if (!post) return state;
      const liked = post.likes.includes(userId);
      return {
        ...state,
        postMap: {
          ...state.postMap,
          [postId]: {
            ...post,
            likes: liked
              ? post.likes.filter((id) => id !== userId)
              : [...post.likes, userId],
          },
        },
      };
    }
    case "TOGGLE_REPOST": {
      const { postId, userId } = action;
      const post = state.postMap[postId];
      if (!post) return state;
      const reposted = post.reposts.includes(userId);
      return {
        ...state,
        postMap: {
          ...state.postMap,
          [postId]: {
            ...post,
            reposts: reposted
              ? post.reposts.filter((id) => id !== userId)
              : [...post.reposts, userId],
          },
        },
      };
    }
    case "TOGGLE_BOOKMARK": {
      const { postId, userId } = action;
      const post = state.postMap[postId];
      if (!post) return state;
      const bookmarked = post.bookmarks.includes(userId);
      return {
        ...state,
        postMap: {
          ...state.postMap,
          [postId]: {
            ...post,
            bookmarks: bookmarked
              ? post.bookmarks.filter((id) => id !== userId)
              : [...post.bookmarks, userId],
          },
        },
      };
    }
    case "LIKE_REPLY": {
      const { replyId, userId } = action;
      const reply = state.replyMap[replyId];
      if (!reply) return state;
      const liked = reply.likes.includes(userId);
      return {
        ...state,
        replyMap: {
          ...state.replyMap,
          [replyId]: {
            ...reply,
            likes: liked
              ? reply.likes.filter((id) => id !== userId)
              : [...reply.likes, userId],
          },
        },
      };
    }
    case "SET_CURRENT_USER": {
      return { ...state, currentUserId: action.userId };
    }
    default:
      return state;
  }
}

const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, undefined, initializeState);

  // Persist to localStorage on every state change
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      // quota exceeded — ignore
    }
  }, [state]);

  const currentUser = state.userMap[state.currentUserId];

  // Sorted posts array (newest first) — recomputed only when postMap changes
  const posts = useMemo(
    () =>
      Object.values(state.postMap).sort((a, b) => b.createdAt - a.createdAt),
    [state.postMap]
  );

  // Actions
  const addPost = useCallback((fields) => {
    const post = {
      id: generateId("p"),
      authorId: state.currentUserId,
      likes: [],
      reposts: [],
      bookmarks: [],
      replyIds: [],
      tags: [],
      media: [],
      createdAt: Date.now(),
      ...fields,
    };
    dispatch({ type: "ADD_POST", post });
  }, [state.currentUserId]);

  const addReply = useCallback((postId, body) => {
    const reply = {
      id: generateId("r"),
      postId,
      authorId: state.currentUserId,
      body,
      likes: [],
      createdAt: Date.now(),
    };
    dispatch({ type: "ADD_REPLY", reply });
  }, [state.currentUserId]);

  const toggleLike = useCallback((postId) => {
    dispatch({ type: "TOGGLE_LIKE", postId, userId: state.currentUserId });
  }, [state.currentUserId]);

  const toggleRepost = useCallback((postId) => {
    dispatch({ type: "TOGGLE_REPOST", postId, userId: state.currentUserId });
  }, [state.currentUserId]);

  const toggleBookmark = useCallback((postId) => {
    dispatch({ type: "TOGGLE_BOOKMARK", postId, userId: state.currentUserId });
  }, [state.currentUserId]);

  const likeReply = useCallback((replyId) => {
    dispatch({ type: "LIKE_REPLY", replyId, userId: state.currentUserId });
  }, [state.currentUserId]);

  const value = useMemo(() => ({
    posts,
    postMap: state.postMap,
    replyMap: state.replyMap,
    userMap: state.userMap,
    currentUser,
    addPost,
    addReply,
    toggleLike,
    toggleRepost,
    toggleBookmark,
    likeReply,
  }), [
    posts, state.postMap, state.replyMap, state.userMap,
    currentUser, addPost, addReply, toggleLike, toggleRepost, toggleBookmark, likeReply,
  ]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used within AppProvider");
  return ctx;
}
