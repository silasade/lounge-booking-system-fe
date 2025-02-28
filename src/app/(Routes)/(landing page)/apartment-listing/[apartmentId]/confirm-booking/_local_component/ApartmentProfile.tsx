import React from "react";
import Image from "next/image";
import { Rate } from "antd";
import { Bathroom, Bed, Fan, Television } from "@/app/_global_components/icons";

type Prop = {
  name: string;
  image: string;
  rate: number;
  noOfAC: number;
  noOfBed: number;
  noOfBathRoom: number;
  noOfTele: number;
};
function ApartmentProfile({
  image,
  name,
  rate,
  noOfAC,
  noOfBathRoom,
  noOfBed,
  noOfTele,
}: Prop) {
  return (
    <div className="max-h-auto h-[450px] min-h-[450px] w-100 flex flex-col gap-2 bg-white rounded-md  w-100">
      <div className="w-full relative h-2/4">
        <Image
          src={image}
          fill
          alt="Main pic"
          className="object-cover"
        />
      </div>

      <div className={`flex flex-col gap-3 md:gap-5 w-100 h-2/4 p-4`}>
        <h3 className="text-secondary text-[16px] md:text-[18px] lg:text-[22px] font-[700]">
          {name}
        </h3>
        <Rate
          //disabled
          defaultValue={rate}
        />
        <div className="flex flex-row gap-3 md:gap-5 items-center">
          <div className="flex flex-row gap-2 text-[12px] items-center text-[#959595]">
            <Bed />
            <p className="font-[400]">
              <span className="font-[500] text-black">{noOfBed}</span> bed
            </p>
          </div>
          <div className="flex flex-row  gap-2 text-[12px] items-center text-[#959595]">
            <Bathroom />
            <p className="font-[400]">
              <span className="font-[500] text-black">{noOfBathRoom}</span>{" "}
              bathroom
            </p>
          </div>
          <div className="flex flex-row gap-2 text-[12px] items-center text-[#959595]">
            <Television />
            <p className="font-[400]">
              <span className="font-[500] text-black">{noOfTele}</span>{" "}
              television
            </p>
          </div>
          <div className="flex flex-row gap-2 text-[12px] items-center text-[#959595]">
            <Fan />
            <p className="font-[400]">
              <span className="font-[500] text-black">{noOfAC}</span>{" "}
              air-conditioner
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ApartmentProfile;
