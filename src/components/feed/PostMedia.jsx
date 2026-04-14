export default function PostMedia({ media }) {
  if (!media || media.length === 0) return null;

  return (
    <div className="mt-3 rounded-xl overflow-hidden border border-border">
      {media.map((item, i) => {
        if (item.type === "image") {
          return (
            <img
              key={i}
              src={item.url}
              alt={item.alt || "Post image"}
              className="w-full object-cover max-h-80"
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
              className="w-full max-h-80 bg-black"
              poster={item.poster}
            />
          );
        }
        if (item.type === "embed" && item.platform === "youtube") {
          return (
            <div key={i} className="relative w-full aspect-video bg-black">
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
        return null;
      })}
    </div>
  );
}
