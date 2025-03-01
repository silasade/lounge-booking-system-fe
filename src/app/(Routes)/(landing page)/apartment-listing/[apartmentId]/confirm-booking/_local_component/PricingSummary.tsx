"use client";
import { useApartmentContext } from "@/app/_global_components/Context/ApartmentBookingContext";
import React from "react";

function PricingSummary() {
  const { apartmentDetails } = useApartmentContext();

  return (
    <div className="rounded-md flex flex-col bg-white">
      <div className=" p-4">
        <h3 className="text-[22px] font-[700]">Pricing Summary</h3>
      </div>

      <div className="flex flex-col p-4 gap-4">
        <div className="flex flex-row justify-between items-center text-[#4F4F4F] text-[14px]">
          <h5 className="font[400]">
            1 apartment X {apartmentDetails.noOfNights || 0}
          </h5>
          <h6 className="font[500]">
            {" "}
            &#8358;
            {apartmentDetails?.rate?.toLocaleString() || 0}
          </h6>
        </div>
        <div className="flex flex-row justify-between items-center text-[#4F4F4F] text-[14px]">
          <h5 className="font[400]">Amenities</h5>
          <h6 className="font[500]">
            &#8358;{" "}
            {apartmentDetails.amenities
              ?.reduce((total, item) => total + (item.price || 0), 0)
              .toLocaleString()}
          </h6>
        </div>
        <div className="flex flex-row justify-between items-center text-[#4F4F4F] text-[14px]">
          <h5 className="font[400]">Pool services</h5>
          <h6 className="font[500]">
            &#8358;
            {(
              (apartmentDetails.poolService?.noOfHour || 0) * 1000
            ).toLocaleString()}
          </h6>
        </div>
        <div className="flex flex-row justify-between items-center text-[#4F4F4F] text-[14px]">
          <h5 className="font[400]">VAT and service fees </h5>
          <h6 className="font[500]">
            &#8358;
            {(
              (apartmentDetails.poolService?.noOfHour || 0) * 1000
            ).toLocaleString()}
          </h6>
        </div>
      </div>
      <div className="border-t border-[#E0E0E0] p-4 flex flex-row justify-between items-center text-[#4F4F4F] text-[14px]">
        <h5 className="font[400]">Total </h5>
        <h6 className="font[500]">
          &#8358;
          {(
            (apartmentDetails.rate || 0) +
            (apartmentDetails.poolService?.noOfHour || 0) * 1000 +
            (apartmentDetails.amenities?.reduce(
              (total, item) => total + (item.price || 0),
              0
            ) || 0)
          ).toLocaleString()}
        </h6>
      </div>
    </div>
  );
}

export default PricingSummary;
