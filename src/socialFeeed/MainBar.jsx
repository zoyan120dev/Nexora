// PostCard.jsx
import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Avatar, Button } from "@heroui/react";
import { FiHeart, FiMessageCircle, FiShare2 } from "react-icons/fi";
import { User } from "@heroui/user";

function PostCard() {
  return (
    <section className="flex flex-col gap-5"> 
      <Card className="w-full bg-white shadow-lg rounded-2xl p-3">
        <CardHeader className="flex items-center gap-3">
          <User/>
          <div className="flex flex-col">
            <h4 className="text-md font-semibold text-gray-800">@Jihad120</h4>
            <p className="text-xs text-gray-500">2h ago</p>
          </div>
        </CardHeader>
        <CardBody className="px-2">
          <p className="text-gray-700 text-sm">
            Just finished working on my new Nexora feature 🚀🔥 Check it out and let me know your feedback!
          </p>
          <div className="mt-3">
            <img src="anime.jpg" alt="post-img" className="rounded-xl w-full h-[500px] object-cover"/>
          </div>
        </CardBody>
        <CardFooter className="flex justify-between items-center px-2">
          <Button variant="light" size="sm" startContent={<FiHeart />} className="text-gray-700">Like</Button>
          <Button variant="light" size="sm" startContent={<FiMessageCircle />} className="text-gray-700">Comment</Button>
          <Button variant="light" size="sm" startContent={<FiShare2 />} className="text-gray-700">Share</Button>
        </CardFooter>
      </Card>
    </section>
  );
}

export default PostCard;
