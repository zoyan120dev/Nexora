import { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { FaHeart, FaRegComment, FaShare } from "react-icons/fa";
import { GoHomeFill, GoQuote, GoBookmarkFill } from "react-icons/go";
import { FaSearch } from "react-icons/fa";
import { MdOutlineOndemandVideo, MdPeopleAlt } from "react-icons/md";
import { IoIosNotificationsOutline } from "react-icons/io";
import { AiOutlineUser } from "react-icons/ai";

// -------------------- Sidebar --------------------
function LeftSideber() {
  const items = [
    { icone: <GoHomeFill />, title: "Home" },
    { icone: <MdOutlineOndemandVideo />, title: "Reel" },
    { icone: <GoQuote />, title: "Create Post" },
    { icone: <GoBookmarkFill />, title: "BookMark" },
    { icone: <FaSearch />, title: "Search" },
    { icone: <MdPeopleAlt />, title: "Friend" },
    { icone: <IoIosNotificationsOutline />, title: "Notifications" },
    { icone: <AiOutlineUser />, title: "Profile" },
  ];

  return (
    <div className="flex flex-col gap-6 p-4 text-white bg-black h-screen fixed left-0 top-0 w-64">
      <h1 className="text-2xl font-bold mb-6">Nexora</h1>
      {items.map((item, i) => (
        <div
          key={i}
          className="flex items-center gap-3 cursor-pointer hover:text-gray-300"
        >
          <span className="text-2xl">{item.icone}</span>
          <span className="text-lg">{item.title}</span>
        </div>
      ))}
    </div>
  );
}

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

      {/* Description */}
      <div className="absolute bottom-16 left-6 text-white max-w-xs">
        <p className="text-lg font-semibold">{description}</p>
      </div>

      {/* Actions */}
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

  useEffect(() => {
    const data = [
      { videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", description: "Nature Reel 🌿" },
      { videoUrl: "https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4", description: "City Life 🏙️" },
      { videoUrl: "https://www.w3schools.com/html/movie.mp4", description: "Animals 🐶🐱" },
      { videoUrl: "https://samplelib.com/lib/preview/mp4/sample-5s.mp4", description: "Adventure Reel 🏞️" },
      { videoUrl: "https://samplelib.com/lib/preview/mp4/sample-10s.mp4", description: "Travel Vibes ✈️" },

      { videoUrl: "https://samplelib.com/lib/preview/mp4/sample-15s.mp4", description: "Beach 🏖️" },
      { videoUrl: "https://samplelib.com/lib/preview/mp4/sample-20s.mp4", description: "Cars 🚗" },
      { videoUrl: "https://samplelib.com/lib/preview/mp4/sample-30s.mp4", description: "Tech 💻" },
      { videoUrl: "https://samplelib.com/lib/preview/mp4/sample-40s.mp4", description: "Cooking 🍳" },
      { videoUrl: "https://samplelib.com/lib/preview/mp4/sample-50s.mp4", description: "Sports ⚽" },

      { videoUrl: "https://samplelib.com/lib/preview/mp4/sample-1mb.mp4", description: "Mountains ⛰️" },
      { videoUrl: "https://samplelib.com/lib/preview/mp4/sample-2mb.mp4", description: "Desert 🏜️" },
      { videoUrl: "https://samplelib.com/lib/preview/mp4/sample-3mb.mp4", description: "Festival 🎉" },
      { videoUrl: "https://samplelib.com/lib/preview/mp4/sample-5mb.mp4", description: "Workout 💪" },
      { videoUrl: "https://samplelib.com/lib/preview/mp4/sample-7mb.mp4", description: "Dance 💃" },

      { videoUrl: "https://samplelib.com/lib/preview/mp4/sample-10mb.mp4", description: "Drone Shots 🚁" },
      { videoUrl: "https://samplelib.com/lib/preview/mp4/sample-12mb.mp4", description: "Slow Motion 🎥" },
      { videoUrl: "https://samplelib.com/lib/preview/mp4/sample-15mb.mp4", description: "Travel Blog 🌍" },
      { videoUrl: "https://samplelib.com/lib/preview/mp4/sample-20mb.mp4", description: "Waterfall 💦" },
      { videoUrl: "https://samplelib.com/lib/preview/mp4/sample-30mb.mp4", description: "Skateboarding 🛹" },

      { videoUrl: "https://samplelib.com/lib/preview/mp4/sample-40mb.mp4", description: "Snow ❄️" },
      { videoUrl: "https://samplelib.com/lib/preview/mp4/sample-50mb.mp4", description: "Nightlife 🌃" },
      { videoUrl: "https://samplelib.com/lib/preview/mp4/sample-60mb.mp4", description: "Skydiving 🪂" },
      { videoUrl: "https://samplelib.com/lib/preview/mp4/sample-70mb.mp4", description: "Surfing 🏄" },
      { videoUrl: "https://samplelib.com/lib/preview/mp4/sample-80mb.mp4", description: "Wildlife 🦁" },

      { videoUrl: "https://samplelib.com/lib/preview/mp4/sample-90mb.mp4", description: "Art 🎨" },
      { videoUrl: "https://samplelib.com/lib/preview/mp4/sample-100mb.mp4", description: "Concert 🎶" },
      { videoUrl: "https://samplelib.com/lib/preview/mp4/sample-200mb.mp4", description: "Sky 🌌" },
      { videoUrl: "https://samplelib.com/lib/preview/mp4/sample-300mb.mp4", description: "Drone City 🏢" },
      { videoUrl: "https://samplelib.com/lib/preview/mp4/sample-400mb.mp4", description: "Gaming 🎮" },

      { videoUrl: "https://samplelib.com/lib/preview/mp4/sample-500mb.mp4", description: "Coding 👨‍💻" },
      { videoUrl: "https://samplelib.com/lib/preview/mp4/sample-600mb.mp4", description: "Football 🏈" },
      { videoUrl: "https://samplelib.com/lib/preview/mp4/sample-700mb.mp4", description: "Basketball 🏀" },
      { videoUrl: "https://samplelib.com/lib/preview/mp4/sample-800mb.mp4", description: "Cricket 🏏" },
      { videoUrl: "https://samplelib.com/lib/preview/mp4/sample-900mb.mp4", description: "Racing 🏎️" },

      { videoUrl: "https://samplelib.com/lib/preview/mp4/sample-1s.mp4", description: "Test Short ⏱️" },
      { videoUrl: "https://samplelib.com/lib/preview/mp4/sample-2s.mp4", description: "Fast Clip ⚡" },
      { videoUrl: "https://samplelib.com/lib/preview/mp4/sample-3s.mp4", description: "Mini Scene 🎬" },
      { videoUrl: "https://samplelib.com/lib/preview/mp4/sample-4s.mp4", description: "Quick Reel ⏩" },
      { videoUrl: "https://samplelib.com/lib/preview/mp4/sample-6s.mp4", description: "Short Travel ✈️" },

      { videoUrl: "https://samplelib.com/lib/preview/mp4/sample-8s.mp4", description: "Moments 💫" },
      { videoUrl: "https://samplelib.com/lib/preview/mp4/sample-9s.mp4", description: "Dog 🐕" },
      { videoUrl: "https://samplelib.com/lib/preview/mp4/sample-11s.mp4", description: "Cat 🐈" },
      { videoUrl: "https://samplelib.com/lib/preview/mp4/sample-13s.mp4", description: "Bird 🐦" },
      { videoUrl: "https://samplelib.com/lib/preview/mp4/sample-14s.mp4", description: "Food 🍔" },

      { videoUrl: "https://samplelib.com/lib/preview/mp4/sample-16s.mp4", description: "Nature 🌲" },
      { videoUrl: "https://samplelib.com/lib/preview/mp4/sample-18s.mp4", description: "Running 🏃" },
      { videoUrl: "https://samplelib.com/lib/preview/mp4/sample-19s.mp4", description: "Climbing 🧗" },
      { videoUrl: "https://samplelib.com/lib/preview/mp4/sample-21s.mp4", description: "Skiing 🎿" },
      { videoUrl: "https://samplelib.com/lib/preview/mp4/sample-22s.mp4", description: "Boxing 🥊" },
    ];
    setReels(data);
  }, []);

  return (
    <div>
      <div>
        {reels.map((r, i) => (
          <Reel key={i} videoUrl={r.videoUrl} description={r.description} />
        ))}
      </div>
    </div>
  );
}
