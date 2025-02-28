"use client";
import { ApartmentBooking } from "@/app/_global_components/Context/ApartmentBookingContext";
import React from "react";

function PricingSummary() {
  const storedDetails: ApartmentBooking = JSON.parse(
    localStorage.getItem("apartmentDetails") || "{}"
  );

  return (
    <div className="rounded-md flex flex-col bg-white">
      <div className=" p-4">
        <h3 className="text-[22px] font-[700]">Pricing Summary</h3>
      </div>

      <div className="flex flex-col p-4 gap-4">
        <div className="flex flex-row justify-between items-center text-[#4F4F4F] text-[14px]">
          <h5 className="font[400]">
            1 apartment X {storedDetails.noOfNights || 0}
          </h5>
          <h6 className="font[500]">
            {" "}
            &#8358;
            {storedDetails?.rate?.toLocaleString() || 0}
          </h6>
        </div>
        <div className="flex flex-row justify-between items-center text-[#4F4F4F] text-[14px]">
          <h5 className="font[400]">Amenities</h5>
          <h6 className="font[500]">
            &#8358;{" "}
            {storedDetails.amenities
              ?.reduce((total, item) => total + (item.price || 0), 0)
              .toLocaleString()}
          </h6>
        </div>
        <div className="flex flex-row justify-between items-center text-[#4F4F4F] text-[14px]">
          <h5 className="font[400]">Pool services</h5>
          <h6 className="font[500]">
            &#8358;
            {(
              (storedDetails.poolService?.noOfHour || 0) * 1000
            ).toLocaleString()}
          </h6>
        </div>
        <div className="flex flex-row justify-between items-center text-[#4F4F4F] text-[14px]">
          <h5 className="font[400]">VAT and service fees </h5>
          <h6 className="font[500]">
            &#8358;
            {(
              (storedDetails.poolService?.noOfHour || 0) * 1000
            ).toLocaleString()}
          </h6>
        </div>
      </div>
      <div className="border-t border-[#E0E0E0] p-4 flex flex-row justify-between items-center text-[#4F4F4F] text-[14px]">
        <h5 className="font[400]">Total </h5>
        <h6 className="font[500]">
          &#8358;
          {(
            (storedDetails.rate || 0) +
            (storedDetails.poolService?.noOfHour || 0) * 1000 +
            (storedDetails.amenities?.reduce(
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
