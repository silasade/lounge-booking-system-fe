import { Reserved } from "@/app/_global_components/icons";
import CalendarWrapper from "@/app/_global_components/Shad ui/CalendarWrapper";
import PopOver from "@/app/_global_components/Shad ui/PopOver";
import React from "react";

function CalendarPopover() {
  return (
    <PopOver
      className="w-[450px] bg-white rounded-lg"
      trigger={
        <div className="w-[40px] h-[40px] rounded-[100%] bg-secondary flex justify-center items-center cursor-pointer">
          <Reserved width={18} height={20} color="white" />
        </div>
      }
    >
      <CalendarWrapper />
    </PopOver>
  );
}

export default CalendarPopover;
