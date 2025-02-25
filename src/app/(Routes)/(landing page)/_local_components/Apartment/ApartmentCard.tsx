import React from "react";
import Image from "next/image";
type Prop = {
  src: string;
  title: string;
  description: string;
  price: React.ReactNode;
};
function ApartmentCard({ src, title, description, price }: Prop) {
  return (
    <div className="h-[640px] w-50 flex flex-col gap-4">
      <div
        className="relative h-3/5 w-full rounded-lg
"
      >
        <Image src={src} alt={title} fill className="object-cover rounded-lg" />
      </div>
      <h5 className="font-[600] text-[22px] text-secondary">{title}</h5>
      <h5 className="font-[300] text-[18px] leading-[33px]">{description}</h5>
      <p className="font-[300] text-[20px] leading-[33px] font-[700] flex flex-row gap-1 items-center">
        {price}
        <span className="text-[16px] font-[400]">per night</span>
        <span className="italic text-[16px] font-[400]">
          (amenities priced separately)
        </span>
      </p>
      <button className="bg-primary rounded-lg text-white h-16 w-32">
        Book Now
      </button>
    </div>
  );
}

export default ApartmentCard;
