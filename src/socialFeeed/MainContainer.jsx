import React from "react";
import LeftSideber from "./LeftSideber";
import Post from "./Post";
import RifghtSideber from "./RifghtSideber";
import { MdPhoto } from "react-icons/md";
import PostCard from "./MainBar";

export default function App() {
  return (
    <div className="flex min-h-screen w-full bg-black-mood">
      {/* Left Sidebar */}
      <div className="w-1/4 border-r border-gray-600 h-screen overflow-auto">
        <LeftSideber />
      </div>

      {/* Center Content */}
      <div className="w-1/2 overflow-auto">
        <div className="bg-black-mood-second-color p-5 border-b-1 border-gray-600">
          <Post />
        </div>
        <div className="m-10">
          <PostCard/>
          {/* Long content */}
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="w-1/4 border-l border-gray-600 h-screen overflow-auto">
        <RifghtSideber />
      </div>
    </div>
  );
}
