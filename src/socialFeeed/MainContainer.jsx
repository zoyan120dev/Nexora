import React from "react";
import LeftSideber from "./LeftSideber";
import Post from "./Post";
import RifghtSideber from "./RifghtSideber";
import PostCard from "./MainBar";

export default function Maincontainer() {
  return (
   <>
       <div className="w-full h-screen flex bg-black-mood overflow-x-hidden">

      {/* Left Sidebar */}
      <div className="hidden md:flex flex-col w-1/4 h-screen fixed top-0 left-0 border-r border-gray-600 overflow-hidden">
        <LeftSideber />
      </div>

      {/* Right Sidebar */}
      <div className="hidden lg:flex flex-col w-1/4 h-screen fixed top-0 right-0 border-l border-gray-600 overflow-hidden">
        <RifghtSideber />
      </div>

      {/* Center Feed */}
      <div className="flex-1 flex flex-col ml-0 md:ml-[25%] lg:ml-[25%] mr-0 lg:mr-[25%]">

        {/* Top Post Box (fixed in layout) */}
        <div className="flex-shrink-0 p-4 border-b border-gray-600 bg-black-mood-second-color z-10">
          <Post />
        </div>

        {/* PostCard list (scrollable) */}
        <div className="flex-1  p-4 space-y-6">
          {Array.from({ length: 30 }).map((_, i) => (
            <PostCard key={i} />
          ))}
        </div>

      </div>

    </div>
   </>
  );
}
