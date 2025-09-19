// Post.jsx
import { Button, Textarea, User } from "@heroui/react";
import { MdPhoto } from "react-icons/md";
import { Input } from "@heroui/react";

function Post() {
  return (
    <section className="flex flex-col gap-2  sticky top-0">
      <div className="flex items-center gap-2 w-full">
        <div className="text-3xl text-white">
          <User />
        </div>
        <Input
         label="What's Happening?"
         type="text"
         color="#fff"
         classNames={{  label: "text-white" }}
         className=" text-white text-lg placeholder:text-white "
         variant="bordered"   
        />
        <Button color="primary" className="py-6 px-8">
          Post
        </Button>
      </div>
      <div className="flex gap-5 items-center">
        {[...Array(5)].map((_, i) => (
          <Button key={i}>
            <MdPhoto className="text-2xl text-green-600" />
          </Button>
        ))}
      </div>
    </section>
  );
}

export default Post;
