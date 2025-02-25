import React from "react";
import Image from "next/image";
type Prop = {
  src: string;
  title: string;
  description: string;
};
function Card({ src, title, description }: Prop) {
  return (
    <div className="h-[440px] w-50 flex flex-col rounded-b-lg!">
      <div
        className="relative h-3/5 w-full rounded-t-lg
"
      >
        <Image src={src} alt={title} fill className="object-cover rounded-t-md
" />
      </div>
      <div className="relative h-2/5 w-full flex justify-center text-left flex-col gap-3 pl-4 border border-borderColor border-top-0 ">
        <h5 className="font-[600] text-[22px] ">{title}</h5>
        <p className="font-[300] text-[18px] leading-[33px]">{description}</p>
      </div>
    </div>
  );
}

export default Card;
