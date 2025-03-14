import React from "react";
import Image from "next/image";
import { HourGlass, Reserved } from "@/app/_global_components/icons";
import { Skeleton } from "@/components/ui/skeleton";
type ApartmentType = {
  profile: string;
  name: string;
  price: number;
  booked: boolean;
  noOfReserved: number;
  noOfBooked: number;
};
function ApartmentCard({
  price,
  booked,
  name,
  noOfBooked,
  noOfReserved,
  profile,
}: ApartmentType) {
  return !name ? (
    <div className="w-full h-[350px] min-h-[350px] flex flex-row gap-10 rounded-lg items-center bg-white">
      <Skeleton className="z-10 relative w-2/5 bg-gray-200 h-full rounded-lg" />

      <div className="w-3/5 flex flex-col gap-4">
        <Skeleton className=" w-2/5 h-h-[50px] bg-gray-200 rounded-full" />
        <Skeleton className=" w-1/5 h-[50px] bg-gray-200 rounded-full" />

        <Skeleton className=" w-2/4 h-[50px] bg-gray-200 rounded-full" />

        <Skeleton className=" w-2/5 h-[20px] bg-gray-200 rounded-full" />
        <Skeleton className=" w-3/5 h-[50px] bg-gray-200 rounded-full" />
      </div>
    </div>
  ) : (
    <div className="w-full h-[500px] md:h-[350px] min-h-[350px] flex flex-col md:flex-row gap-4 md:gap-10 rounded-lg md:items-center bg-white">
      <div className="relative w-full md:w-2/5 h-1/2 md:h-full">
        <Image
          src={profile}
          alt={name + " Picture"}
          fill
          className="object-cover rounded-t-lg md:rounded-l-lg"
        />
      </div>
      <div className="w-full md:w-3/5 flex flex-col gap-2 p-2 md:p-0 md:gap-4">
        <h3 className="text-[18px] md:text-[24px] font-[600] text-secondary">{name}</h3>
        <h5 className="text-[14px] font-[400]">
          Price per night:{" "}
          <span className="font-[500]">
            &#8358;&nbsp;{price.toLocaleString()}
          </span>{" "}
        </h5>
        <p className={`${booked ? "text-[#F39C12]" : "text-[#00B69B]"}`}>
          {booked ? "Booked" : "Reserved"}
        </p>
        <div className="flex flex-col gap-4">
          <div className="flex flex-row gap-1 items-center">
            <HourGlass width={20} height={24} color="#1C1B1F" />
            <p className="text-[16px] font-[500]">{noOfBooked}</p>
          </div>
          <h6 className="italic text-[14px] font-[300]">
            Shows how many times it has been booked in the current month
          </h6>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex flex-row gap-1 items-center">
            <Reserved width={20} height={24} color="#1C1B1F" />
            <p className="text-[16px] font-[500]">{noOfReserved}</p>
          </div>
          <h6 className="italic text-[14px] font-[300]">
            Shows how many times it has been booked in the current month
          </h6>
        </div>
      </div>
    </div>
  );
}

export default ApartmentCard;
