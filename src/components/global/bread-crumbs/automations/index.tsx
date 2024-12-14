import { ChevronRight, PencilIcon } from "lucide-react";
import React from "react";
import ActivateAutomationButton from "../../activate-automation-buttons";

type Props = {
  id: string;
};

const AutomationBreadCrumb = ({ id }: Props) => {
  //WIP: get the automation data
  //WIP: mutation stuff to update the automation
  return (
    <div className="rounded-full w-full p-5 bg-[#18181B1A] flex items-center">
      <div className="flex items-center gap-x-3 min-w-0">
        <p className="text-[#9B9CA0] truncate">Automations</p>
        <ChevronRight className="flex-shrink-0" color="#9B9CA0" />
        <span className="flex gap-x-3 items-center min-w-0">
          {/* Show the ending data */}
          <p className="text-[#9B9CA0] truncate">
            This is the automation Title
          </p>
          <span
            className="cursor-pointer hover:opacity-75 duration-100 transition flex-shrink-0 mr-4"
            // onClick={enableEdit}
          >
            <PencilIcon size={14} />
          </span>
        </span>
      </div>
      <div className="flex items-center gap-x-5 ml-auto">
        <p className="hidden md:block text-text-secondary/60 text-sm truncate min-w-0">
          All states are automatically saved
        </p>
        <div className="flex gap-x-5 flex-shrink-0">
          <p className="text-text-secondary text-sm truncate min-w-0">
            Changes Saved
          </p>
        </div>
      </div>
      <ActivateAutomationButton />
    </div>
  );
};

export default AutomationBreadCrumb;
