import Donut from "@/app/_global_components/Donut";
import React from "react";
type CardProp = {
  apartment: number;
  pool: number;
  amenities: number;
  total: number;
};
function RevenueCard({ amenities, apartment, pool, total }: CardProp) {
  return (
    <div className="flex-1 w-full rounded-lg h-[145px] p-4 flex flex-col items-between gap-2 justify-between border border-secondary">
      <p className="text-[#616161] font-[500] text-[14px]">REVENUE BREAKDOWN</p>
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-2">
          <p className="text-[14px] italic font-[200]">Apartments</p>
          <Donut
            dataName="Apartments"
            amount={apartment}
            total={total}
            fill="#0056B3"
          />
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-[12px] italic font-[200]">Swimming pool</p>
          <Donut dataName="Pool" amount={pool} total={total} fill="#009688" />
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-[12px] italic font-[200]">Amenities</p>
          <Donut
            dataName="Amenities"
            amount={amenities}
            total={total}
            fill="#FFC107"
          />
        </div>
      </div>
    </div>
  );
}

export default RevenueCard;
