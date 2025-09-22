// Maincontainer.jsx
import React from "react";
import LeftSideber from "./LeftSideber";
import SocialFeed from "./MainBar"; // SocialFeed = PostCard
import Post from "./Post";
import RifghtSideber from "./RifghtSideber";

export default function Maincontainer() {
  return (
    <div className="flex min-h-screen relative">
      {/* Left Sidebar */}
      <div className="w-md border-r border-gray-700 shadow hidden lg:block">
        <LeftSideber />
      </div>

      {/* Main Content */}
      <div className="flex-1 relative">
        <div className="w-full backdrop-blur-md bg-black/50 z-50 p-4 sticky top-0">
          <Post />
        </div>

        {/* SocialFeed/PostCard handles infinite scroll itself */}
        <div className="m-10 space-y-10">
          <SocialFeed />
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="w-xl border-l border-r-gray-700 hidden xl:block">
        <RifghtSideber />
      </div>
    </div>
  );
}
