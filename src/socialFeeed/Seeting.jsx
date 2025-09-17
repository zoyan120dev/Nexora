import { Popover, PopoverTrigger, PopoverContent } from "@heroui/react";
import { BsListUl, BsMoonFill, BsPatchMinus } from "react-icons/bs";
import { MdOutlineReportProblem } from "react-icons/md";

function MoreApplcations() {
  return (
    <div className="flex">
      <Popover
        showArrow
        backdrop="blur"
        offset={10}
        placement="top"
        portal={false}
      >
        <PopoverTrigger>
          <span className="text-2xl cursor-pointer hover:text-warning flex items-center gap-2 text-black-mood-text-color">
            <BsListUl className="mt-1" /> More
          </span>
        </PopoverTrigger>
        <PopoverContent className="w-[300px]">
          {(titleProps) => (
            <div className="px-2 py-2 w-full">
              <p className="text-small font-bold text-foreground mb-2" {...titleProps}>
                More
              </p>
              <div className="flex flex-col gap-3 text-lg">
                <div className="flex items-center gap-2 cursor-pointer hover:text-warning">
                  Switch Appearance <BsMoonFill />
                </div>
                <div className="flex items-center gap-2 cursor-pointer hover:text-warning">
                  Setting And Privacy <BsPatchMinus />
                </div>
                <div className="flex items-center gap-2 cursor-pointer hover:text-warning">
                  Report a Problem <MdOutlineReportProblem />
                </div>
              </div>
            </div>
          )}
        </PopoverContent>
      </Popover>
    </div>
  );
}

export default MoreApplcations;
