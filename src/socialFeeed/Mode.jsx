import { Popover, PopoverTrigger, PopoverContent } from "@heroui/react";
import { IoInvertModeOutline } from "react-icons/io5";
import { MdMovie, MdGroups, MdComputer, MdSportsEsports, MdBrush } from "react-icons/md";

 function ModeApplcation() {
  return (
    <div className="flex flex-wrap gap-4">
      <Popover
        showArrow
        backdrop="blur"
        offset={10}
        placement="top"
        portal={false}  
      >
        <PopoverTrigger>
          <span className="text-2xl cursor-pointer hover:text-warning flex items-center gap-2 text-black-mood-text-color">
            <IoInvertModeOutline className="mt-1" />  Mode
          </span>
        </PopoverTrigger>
        <PopoverContent className="w-[180px] mt-40">
          {(titleProps) => (
            <div className="px-2 py-2 w-full">
              <p className="text-small font-bold text-foreground mb-2" {...titleProps}>
                Modes
              </p>
              <div className="flex flex-col gap-3 text-lg">
                <div className="flex items-center gap-2 cursor-pointer hover:text-warning">
                  <MdMovie /> <span>Anime</span>
                </div>
                <div className="flex items-center gap-2 cursor-pointer hover:text-warning">
                  <MdGroups /> <span>Social</span>
                </div>
                <div className="flex items-center gap-2 cursor-pointer hover:text-warning">
                  <MdComputer /> <span>Programming</span>
                </div>
                <div className="flex items-center gap-2 cursor-pointer hover:text-warning">
                  <MdSportsEsports /> <span>Gaming</span>
                </div>
                <div className="flex items-center gap-2 cursor-pointer hover:text-warning">
                  <MdBrush /> <span>Photoshop</span>
                </div>
              </div>
            </div>
          )}
        </PopoverContent>
      </Popover>
    </div>
  );
}


export default ModeApplcation;