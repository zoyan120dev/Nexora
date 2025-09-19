// RifghtSideber.jsx
import {
  Avatar,
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@heroui/react";

function RifghtSideber() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div className="p-10 hidden xl:block fixed">
      {/* Suggested Users */}
      <div className="shadow bg-black-mood-second-color border border-gray-500 p-3 rounded-xl">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold text-black-mood-text-color">
            You Will Like
          </h1>
          <a href="#" className="text-link-color cursor-pointer">
            View All
          </a>
        </div>
        <div className="flex flex-col gap-4 mt-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex justify-between items-center">
              <div className="flex gap-2 items-center">
                <Avatar src={`https://i.pravatar.cc/150?u=user${i}`} />
                <p className="text-lg text-white">@User{i}</p>
              </div>
              <Button className="bg-button-color text-second-buuton text-lg">
                {i % 2 === 0 ? "Follow" : "UnFollow"}
              </Button>
            </div>
          ))}
        </div>
      </div>
      {/* Info Card */}
      <div className="shadow bg-black-mood-second-color border border-gray-500 p-3 rounded-xl mt-10 max-w-[300px]">
        <div className="w-[280px] mx-auto">
          <img src="userimg.jpg" alt="" className="rounded-xl cursor-pointer" />
        </div>
        <p className="mt-2 text-black-mood-second-text-color text-sm">
          Learn everything about what is included in Nexora and where it is
          available.
        </p>
        <div className="pt-2 w-full">
          <Button
            onPress={onOpen}
            className="w-full text-lg bg-button-color text-black-mood-text-color"
          >
            Click here
          </Button>
          <Modal backdrop="blur" isOpen={isOpen} onClose={onClose} className="bg-black-mood-second-color">
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalHeader className="text-black-mood-text-color">
                    Nexora Information
                  </ModalHeader>
                  <ModalBody className="text-black-mood-second-text-color">
                    Learn everything about what is included in Nexora and where
                    it is available.
                  </ModalBody>
                  <ModalFooter>
                    <Button color="danger" variant="light" onPress={onClose}>
                      Close
                    </Button>
                  </ModalFooter>
                </>
              )}
            </ModalContent>
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default RifghtSideber;
