// PostCard.jsx
import React, { useEffect, useState } from "react";
import { Card, CardHeader, CardBody, CardFooter, Avatar, Button } from "@heroui/react";
import { FiHeart, FiMessageCircle, FiShare2 } from "react-icons/fi";

const videoUrls = [
  "https://www.w3schools.com/html/mov_bbb.mp4",
  "https://www.w3schools.com/html/movie.mp4",
  "https://sample-videos.com/video123/mp4/480/asdasdas.mp4"
];

export default function PostCard() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(data => {
        const repeatedPosts = [];
        for (let i = 0; i < 1000; i++) {
          const post = data[i % data.length];
          repeatedPosts.push({
            ...post,
            id: i + 1,
            userId: (i % 100) + 1
          });
        }
        setPosts(repeatedPosts);
      })
      .catch(err => console.log(err));
  }, []);

  if (!posts.length) return <p className="text-white text-center mt-10">Loading posts...</p>;

  return (
    <>
      {posts.map(post => (
        <Card
          key={post.id}
          className="w-full max-w-3xl mx-auto bg-black-mood-second-color  rounded-2xl shadow-lg p-4 hover:shadow-2xl transition-shadow duration-300"
        >
          {/* Header */}
          <CardHeader className="flex items-center gap-3">
            <Avatar
              src={`https://i.pravatar.cc/150?u=${post.userId}`}
              isBordered
              color="primary"
              size="lg"
            />
            <div className="flex flex-col">
              <h4 className="text-md font-semibold text-black-mood-second-text-color">
                @user{post.userId}
              </h4>
              <p className="text-xs text-gray-500 dark:bg-black-mood-second-text-color">{post.id}h ago</p>
            </div>
          </CardHeader>

          {/* Body */}
          <CardBody className="mt-3">
            <p className="text-black-mood-text-color text-sm">{post.body}</p>

            {/* Image or Video */}
            <div className="mt-3 w-full h-64 overflow-hidden rounded-xl">
              {post.id % 5 === 0 ? (
                <video
                  src={videoUrls[post.id % videoUrls.length]}
                  controls
                  className="w-full h-full object-cover rounded-xl"
                />
              ) : (
                <img
                  src={`https://picsum.photos/seed/${post.id}/600/400`}
                  alt="post-img"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              )}
            </div>
          </CardBody>

          {/* Footer */}
          <CardFooter className="flex justify-between mt-3">
            <Button
              variant="light"
              size="sm"
              startContent={<FiHeart />}
              className="text-black-mood-second-text-color hover:text-red-500 text-xl"
            >
              Like
            </Button>
            <Button
              variant="light"
              size="sm"
              startContent={<FiMessageCircle />}
              className="text-black-mood-second-text-color hover:text-blue-500 text-xl"
            >
              Comment
            </Button>
            <Button
              variant="light"
              size="sm"
              startContent={<FiShare2 />}
              className="text-black-mood-second-text-color hover:text-green-500 text-xl"
            >
              Share
            </Button>
          </CardFooter>
        </Card>
      ))}
    </>
  );
}
