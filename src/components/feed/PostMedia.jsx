import { lazy, Suspense } from "react";

const DIAGRAMS = {
  CaloFramework: lazy(() => import("../diagrams/CaloFramework.jsx")),
  LegalComparison: lazy(() => import("../diagrams/LegalComparison.jsx")),
  DataFlow: lazy(() => import("../diagrams/DataFlow.jsx")),
  GovernanceModel: lazy(() => import("../diagrams/GovernanceModel.jsx")),
  HelixVLA: lazy(() => import("../diagrams/HelixVLA.jsx")),
};

export default function PostMedia({ media }) {
  if (!media || media.length === 0) return null;

  return (
    <>
      {media.map((item, i) => {
        if (item.type === "image") {
          return (
            <img
              key={i}
              src={item.url}
              alt={item.alt || "Post image"}
              className="mt-3 w-full object-cover max-h-80 rounded-xl border border-border"
              loading="lazy"
              onError={(e) => { e.currentTarget.style.display = "none"; }}
            />
          );
        }
        if (item.type === "video") {
          return (
            <video
              key={i}
              src={item.url}
              controls
              preload="metadata"
              className="mt-3 w-full max-h-80 bg-black rounded-xl border border-border"
              poster={item.poster}
            />
          );
        }
        if (item.type === "embed" && item.platform === "youtube") {
          return (
            <div key={i} className="mt-3 relative w-full aspect-video bg-black rounded-xl overflow-hidden border border-border">
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube-nocookie.com/embed/${item.videoId}`}
                title="Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          );
        }
        if (item.type === "diagram") {
          const Diagram = DIAGRAMS[item.component];
          if (!Diagram) return null;
          return (
            <Suspense key={i} fallback={
              <div className="mt-3 h-32 rounded-xl border border-border bg-card animate-pulse" />
            }>
              <Diagram />
            </Suspense>
          );
        }
        return null;
      })}
    </>
  );
}
