import { useState, useEffect, useRef, useCallback } from "react";
import { useInView } from "react-intersection-observer";
import { FaHeart, FaRegComment, FaShare } from "react-icons/fa";

// Sample video URLs (replace with real API if available)
const videoUrls = [
  "https://www.w3schools.com/html/mov_bbb.mp4",
  "https://www.w3schools.com/html/movie.mp4",
  "https://samplelib.com/lib/preview/mp4/sample-5s.mp4",
  "https://samplelib.com/lib/preview/mp4/sample-10s.mp4",
  "https://samplelib.com/lib/preview/mp4/sample-15s.mp4"
];

// -------------------- Single Reel --------------------
function Reel({ videoUrl, description }) {
  const videoRef = useRef();
  const { ref, inView } = useInView({ threshold: 0.6 });

  useEffect(() => {
    if (videoRef.current) {
      if (inView) videoRef.current.play();
      else {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    }
  }, [inView]);

  return (
    <div
      ref={ref}
      className="snap-start h-screen w-full flex items-center justify-center relative"
    >
      <video
        ref={videoRef}
        src={videoUrl}
        controls
        loop
        muted
        className="h-full w-auto object-contain rounded-xl"
        style={{ aspectRatio: "9/16" }}
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
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const observer = useRef();

  const fetchReels = async () => {
    if (loading || !hasMore) return;
    setLoading(true);

    try {
      const res = await fetch(`https://randomuser.me/api/?results=5&page=${page}`);
      const data = await res.json();
      if (!data.results || data.results.length === 0) {
        setHasMore(false);
        return;
      }

      const newReels = data.results.map((user, i) => ({
        id: reels.length + i + 1,
        videoUrl: videoUrls[(reels.length + i) % videoUrls.length],
        description: `Reel by ${user.name.first} ${user.name.last}`,
      }));

      setReels((prev) => [...prev, ...newReels]);
      setPage((prev) => prev + 1);
    } catch (err) {
      console.error("Error fetching reels:", err);
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
          videoUrl={reel.videoUrl}
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
