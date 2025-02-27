import React from "react";
import Image from "next/image";
type CardProp = {
  profile: string;
  name: string;
  title: string;
  message: string;
};
function Card({ message, name, profile, title }: CardProp) {
  return (
    <div className="flex h-auto md:h-[350px] flex-col items-center gap-2 md:gap-4 rounded-md border border-secondary pt-[20px] pl-[12px] pr-[12px]">
      <div className="relative w-[57px] h-[57px] md:w-[114px] md:h-[114px]">
        <Image src={profile} alt="name" fill className="object-cover" />
      </div>
      <div className="flex flex-col justify-center gap-4 text-center">
        <h5 className="text-secondary text-[16px] md:text-[18px] lg:text-[24px] font-[600]">{name}</h5>
        <h6 className="text-[16px] lg:text-[18px] font-[400]">{title}</h6>
        <p className="italic text-[14px] lg:text-[15px] font-[300]">{message}</p>
      </div>
    </div>
  );
}

export default Card;
