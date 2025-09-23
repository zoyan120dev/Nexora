import { useState, useEffect, useRef, useCallback } from "react";
import { useInView } from "react-intersection-observer";
import { FaHeart, FaRegComment, FaShare } from "react-icons/fa";

const API_KEY = "AIzaSyC4S23Hy2Pwk4KILzSQAHYCP0Dv53V4KuM";

// -------------------- Single Reel --------------------
function Reel({ videoId, description }) {
  const iframeRef = useRef();
  const { ref, inView } = useInView({ threshold: 0.6 });

  useEffect(() => {
    if (iframeRef.current) {
      // autoplay only when in view
      if (inView) {
        iframeRef.current.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}`;
      } else {
        iframeRef.current.src = `https://www.youtube.com/embed/${videoId}?autoplay=0&mute=1`;
      }
    }
  }, [inView, videoId]);

  return (
    <div
      ref={ref}
      className="snap-start h-screen w-full flex items-center justify-center relative"
    >
      <iframe
        ref={iframeRef}
        title={description}
        className="h-full w-auto object-contain rounded-xl"
        style={{ aspectRatio: "9/16" }}
        allow="autoplay; encrypted-media"
      />
      <div className="absolute bottom-16 left-6 text-white max-w-xs">
        <p className="text-lg font-semibold">{description}</p>
      </div>
      <div className="absolute right-6 bottom-32 flex flex-col items-center space-y-6 text-white">
        <button className="flex flex-col items-center">
          <FaHeart className="text-3xl mb-1" />
          <span className="text-sm">25K</span>
        </button>
        <button className="flex flex-col items-center">
          <FaRegComment className="text-3xl mb-1" />
          <span className="text-sm">255</span>
        </button>
        <button className="flex flex-col items-center">
          <FaShare className="text-3xl mb-1" />
          <span className="text-sm">Share</span>
        </button>
      </div>
    </div>
  );
}

// -------------------- Reel Section --------------------
export default function ReelSection() {
  const [reels, setReels] = useState([]);
  const [pageToken, setPageToken] = useState("");
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const observer = useRef();

  const fetchReels = async () => {
    if (loading || !hasMore) return;
    setLoading(true);

    try {
      const res = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=5&q=shorts&pageToken=${pageToken}&key=${API_KEY}`
      );
      const data = await res.json();

      if (!data.items || data.items.length === 0) {
        setHasMore(false);
        return;
      }

      const newReels = data.items.map((item) => ({
        id: item.id.videoId,
        videoId: item.id.videoId,
        description: item.snippet.title,
      }));

      setReels((prev) => [...prev, ...newReels]);
      setPageToken(data.nextPageToken || "");
      if (!data.nextPageToken) setHasMore(false);
    } catch (err) {
      console.error("Error fetching YouTube reels:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReels(); // Initial load
  }, []);

  const lastReelRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          fetchReels();
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  return (
    <div className="snap-y snap-mandatory">
      {reels.map((reel, index) => {
        const isLast = index === reels.length - 1;
        return (
          <Reel
            key={reel.id}
            videoId={reel.videoId}
            description={reel.description}
            ref={isLast ? lastReelRef : null}
          />
        );
      })}
      {loading && <p className="text-center text-white my-4">Loading more reels...</p>}
      {!hasMore && <p className="text-center text-white my-4">No more reels</p>}
    </div>
  );
}
