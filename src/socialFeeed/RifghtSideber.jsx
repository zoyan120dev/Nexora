import React from "react";
import { Avatar, Button } from "@heroui/react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@heroui/react";

function RifghtSideber() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <div className="p-10">
        <div className="shadow bg-black-mood-second-color border border-gray-500 p-3 rounded-xl">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold text-black-mood-text-color">
              You Will Like
            </h1>
            <a href="#" className="text-link-color cursor-pointer">
              View All
            </a>
          </div>

          <div className="flex gap-8 flex-col mt-4">
            <div className="flex justify-between">
              <div className="flex gap-2">
                <Avatar
                  isBordered
                  color="default"
                  src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                />
                <p className="text-lg text-white">@Jhon120</p>
              </div>
              <Button className="bg-button-color text-second-buuton text-lg">
                UnFollow
              </Button>
            </div>

            <div className="flex justify-between">
              <div className="flex gap-2">
                <Avatar
                  isBordered
                  color="secondary"
                  src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                />
                <p className="text-lg text-white">@Jhon120</p>
              </div>
              <Button className="bg-button-color text-second-buuton text-lg">
                Follow
              </Button>
            </div>

            <div className="flex justify-between">
              <div className="flex gap-2">
                <Avatar
                  isBordered
                  color="warning"
                  src="https://i.pravatar.cc/150?u=a04258114e29026702d"
                />
                <p className="text-lg text-white">@Jhon120</p>
              </div>
              <Button className="bg-button-color text-second-buuton text-lg">
                Follow
              </Button>
            </div>

            <div className="flex justify-between">
              <div className="flex gap-2">
                <Avatar
                  isBordered
                  color="danger"
                  src="https://i.pravatar.cc/150?u=a04258114e29026708c"
                />
                <p className="text-lg text-white">@Jhon120</p>
              </div>
              <Button className="bg-button-color text-second-buuton text-lg">
                UnFollow
              </Button>
            </div>
          </div>
        </div>

        <div className="shadow bg-black-mood-second-color border border-gray-500 p-3 rounded-xl mt-10">
          <div className="w-[280px] mx-auto">
            <img
              src="userimg.jpg"
              alt=""
              className="rounded-xl cursor-pointer"
            />
          </div>
          <p className="mt-2 text-black-mood-second-text-color text-sm">
            Learn everything about what is included in Nexora and where it is
            available, right here. Click on the button below
          </p>
          <div className="pt-2 w-full">
            <Button
              onPress={onOpen}
              className="w-full text-lg bg-button-color text-black-mood-text-color"
            >
              Click here
            </Button>

            {/* Modal */}
            <Modal backdrop="blur" isOpen={isOpen} onClose={onClose} className="bg-black-mood-second-color">
              <ModalContent>
                {(onClose) => (
                  <>
                    <ModalHeader className="flex flex-col gap-1 text-black-mood-text-color">
                      Nexora Information
                    </ModalHeader>
                    <ModalBody>
                      <p className="text-sm text-black-mood-second-text-color">
                        Learn everything about what is included in Nexora and
                        where it is available, right here.
                      </p>

                      <ul className="list-disc list-inside space-y-1 mt-2 text-black-mood-second-text-color">
                        <li>🎬 Anime Mode – Watch & explore anime content</li>
                        <li>👥 Social Mode – Connect & interact with others</li>
                        <li>
                          💻 Programming Mode – Coding, tutorials & resources
                        </li>
                        <li>🎮 Gaming Mode – Games, live streams & updates</li>
                        <li>🎨 Photoshop Mode – Editing tools & design tips</li>
                        <li>
                          📹 Reels Upload – Share your reels & short videos
                        </li>
                        <li>🖼️ Image Upload – Post your favorite images</li>
                      </ul>
                      <p></p>
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
    </>
  );
}

export default RifghtSideber;
