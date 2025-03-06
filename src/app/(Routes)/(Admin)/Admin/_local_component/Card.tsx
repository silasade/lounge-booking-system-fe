import Statistics from "@/app/_global_components/Statistics";
import { Skeleton } from "@/components/ui/skeleton";
import React from "react";
type CardProp = {
  title: string;
  number: number;
  color: string;
  icon: React.ReactNode;
  time: string;
  stat: number;
  up: boolean;
};
function Card({ title, color, icon, number, time, stat, up }: CardProp) {
  return !title ? (
    <Skeleton className="w-full bg-gray-200 h-24 rounded-lg" />
  ) : (
    <div className="flex-1 max-h-full min-h-[165px] h-fit  flex flex-col justify-between p-4 gap-5 rounded-lg w-full bg-white">
      <div className="flex justify-between items-start">
        <div className="flex flex-col gap-3">
          <h3 className="text-[16px] font-[600] text-[#202224]">{title}</h3>
          <h5 className="text-[28px] font-[700] text-[#202224]">{number}</h5>
        </div>
        <div
          className={`${color} bg-opacity-20 rounded-2xl h-[60px] w-[60px] flex justify-center items-center`}
        >
          {icon}
        </div>
      </div>
      <div className="text-[14px] font-[600] text-[#606060] flex flex-row items-center gap-1">
        <Statistics up={up} value={stat} />{" "}
        <p className="text-[14px] font-[600] text-[#606060]"> {time}</p>
      </div>
    </div>
  );
}

export default Card;
