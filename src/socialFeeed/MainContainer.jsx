import React from "react";
import LeftSideber from "./LeftSideber";
import Post from "./Post";
import RifghtSideber from "./RifghtSideber";
import PostCard from "./MainBar";
import SocialFeed from "./MainBar";

export default function Maincontainer() {
  return (
   <>
     <div className="flex min-h-screen relative">
         <div className="w-md border-r border-gray-700  shadow hidden lg:block">
             <LeftSideber/>
         </div>
         <div className="flex-1 relative">
             <div className=" w-full backdrop-blur-md bg-black/50 z-50 p-4 sticky top-0">
               <Post/>
             </div>
             <div className="m-10 space-y-10">
                <SocialFeed/>
             </div>
         </div>

         <div className="w-xl border-l border-r-gray-700 hidden xl:block">
           <RifghtSideber/>
         </div>
     </div>
   </>
  );
}
