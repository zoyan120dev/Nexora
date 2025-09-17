import React from "react";
import { User } from "@heroui/react";
import { Textarea } from "@heroui/react";
import { Button } from "@heroui/react";import { MdPhoto } from "react-icons/md";
function Post() {
  return (
    <section className="flex gap-2  justify-center flex-col gap-2">
      <div className="flex items-center gap-2 w-full">
        <div className="text-3xl text-white">
          <User />
        </div>

        <Textarea
          isRequired
          className="flex-1 w-full min-h-[80px]"

          labelPlacement="outside"
          placeholder="What's Happening ?"
        />

        <Button  color="primary" className="py-6 px-8">
          Post
        </Button>
      </div>

      <div className="flex gap-5 items-center">
       <Button className="">
         <MdPhoto className="text-2xl text-green-600"/>
       </Button>

       <Button className="">
         <MdPhoto className="text-2xl text-green-600"/>
       </Button>

       <Button className="">
         <MdPhoto className="text-2xl text-green-600"/>
       </Button>
       <Button className="">
         <MdPhoto className="text-2xl text-green-600"/>
       </Button>

       <Button className="">
         <MdPhoto className="text-2xl text-green-600"/>
       </Button>
      </div>
    </section>
  );
}

export default Post;
