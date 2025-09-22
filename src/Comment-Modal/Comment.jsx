import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Textarea,
  Avatar,
  Divider
} from "@heroui/react";
import { Icon } from "@iconify/react";
import { CommentItem } from "./comment-item";

// Sample comment data
const initialComments = [
  {
    id: 1,
    user: {
      name: "Jane Smith",
      avatar: "https://img.heroui.chat/image/avatar?w=40&h=40&u=user2"
    },
    text: "I think AI will revolutionize healthcare and education the most. The potential for personalized learning and early disease detection is incredible.",
    timestamp: "1 hour ago",
    likes: 8,
    isLiked: false,
    replies: []
  },
  {
    id: 2,
    user: {
      name: "Robert Johnson",
      avatar: "https://img.heroui.chat/image/avatar?w=40&h=40&u=user3"
    },
    text: "While I'm excited about the possibilities, I'm also concerned about privacy and job displacement. We need thoughtful regulation alongside innovation.",
    timestamp: "45 minutes ago",
    likes: 5,
    isLiked: true,
    replies: []
  },
  {
    id: 3,
    user: {
      name: "Emily Chen",
      avatar: "https://img.heroui.chat/image/avatar?w=40&h=40&u=user4"
    },
    text: "I work in AI research, and the progress in the last 5 years has been staggering. I think we'll see AI assistants become much more capable and integrated into daily workflows.",
    timestamp: "30 minutes ago",
    likes: 12,
    isLiked: false,
    replies: []
  }
];

interface CommentModalProps {
  isOpen;
  onOpenChange: (isOpen: boolean) => void;
}

export function CommentModal({ isOpen, onOpenChange }: CommentModalProps) {
  const [comments, setComments] = React.useState(initialComments);
  const [newComment, setNewComment] = React.useState("");
  
  const handleAddComment = () => {
    if (newComment.trim() === "") return;
    
    const comment = {
      id: comments.length + 1,
      user: {
        name: "You",
        avatar: "https://img.heroui.chat/image/avatar?w=40&h=40&u=current-user"
      },
      text: newComment,
      timestamp: "Just now",
      likes: 0,
      isLiked: false,
      replies: []
    };
    
    setComments([...comments, comment]);
    setNewComment("");
  };
  
  const handleLikeComment = (id: number) => {
    setComments(
      comments.map(comment => {
        if (comment.id === id) {
          return {
            ...comment,
            likes: comment.isLiked ? comment.likes - 1 : comment.likes + 1,
            isLiked: !comment.isLiked
          };
        }
        return comment;
      })
    );
  };

  return (
    <Modal 
      isOpen={isOpen} 
      onOpenChange={onOpenChange}
      size="lg"
      scrollBehavior="inside"
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1 border-b pb-3">
              <h2 className="text-xl">Comments</h2>
            </ModalHeader>
            <ModalBody>
              <div className="space-y-4">
                {comments.map(comment => (
                  <CommentItem 
                    key={comment.id}
                    comment={comment}
                    onLike={() => handleLikeComment(comment.id)}
                  />
                ))}
              </div>
            </ModalBody>
            <ModalFooter className="flex-col items-stretch gap-2 border-t pt-3">
              <div className="flex items-start gap-2">
                <Avatar 
                  src="https://img.heroui.chat/image/avatar?w=40&h=40&u=current-user" 
                  size="sm"
                  className="mt-1"
                />
                <Textarea
                  placeholder="Write a comment..."
                  value={newComment}
                  onValueChange={setNewComment}
                  minRows={1}
                  maxRows={5}
                  variant="bordered"
                  className="flex-1"
                />
              </div>
              <div className="flex justify-between">
                <div className="flex gap-1">
                  <Button isIconOnly variant="light" size="sm">
                    <Icon icon="lucide:smile" className="text-lg text-default-500" />
                  </Button>
                  <Button isIconOnly variant="light" size="sm">
                    <Icon icon="lucide:image" className="text-lg text-default-500" />
                  </Button>
                  <Button isIconOnly variant="light" size="sm">
                    <Icon icon="lucide:sticker" className="text-lg text-default-500" />
                  </Button>
                </div>
                <Button 
                  color="primary" 
                  onPress={handleAddComment}
                  isDisabled={newComment.trim() === ""}
                >
                  Comment
                </Button>
              </div>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}