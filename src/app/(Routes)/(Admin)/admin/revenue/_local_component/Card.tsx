import React from "react";
type CardProp = {
  name: string;
  price: number;
  subtext: string;
};
function Card({ name, price, subtext }: CardProp) {
  return (
    <div className="flex-1 w-full rounded-lg h-[145px] p-4 flex flex-col items-between justify-between border border-secondary">
      <p className="text-[#616161] font-[500] text-[14px]">{name}</p>
      <h5 className="text-[#302E2E] font-[500] text-[24px]">
        {" "}
        &#8358;&nbsp;{price.toLocaleString()}
      </h5>
      <p className="text-[#302E2E] font-[500] text-[14px]">{subtext}</p>
    </div>
  );
}

export default Card;
