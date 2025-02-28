"use client";
import React from "react";
import { ApartmentBooking } from "@/app/_global_components/Context/ApartmentBookingContext";
import { Divider } from "antd";

function BookingDetails() {
  const storedDetails: ApartmentBooking = JSON.parse(
    localStorage.getItem("apartmentDetails") || "{}"
  );
  return (
    <div className="flex flex-col p-4 rounded-md bg-white">
      <h3 className="text-[16px] md:text-[18px] lg:text-[22px] font-[700]">Your booking details</h3>
      <div className="flex flex-row items-center h-fit pt-1 pb-1 ">
        <div className="flex flex-col gap-2 text-[14px] md:text-[18px]">
          <h6 className="text-[14px] md:text-[18px]">Check-in</h6>
          <p>{storedDetails.checkInDate}</p>
        </div>
        <Divider
          orientation="center"
          type="vertical"
          className="border border-[#C2C1C1]"
        />
        <div className="flex flex-col gap-2 text-[14px] md:text-[18px]">
        <h6>Check-out</h6>
          <p>{storedDetails.checkOutDate}</p>
        </div>
      </div>
      <div className="text-[#4F4F4F] text-[14px] font-[400] flex flex-col gap-4">
        <p>1 bedroom apartment</p>
        {storedDetails.amenities?.reduce(
          (total, item) => total + (item.price || 0),
          0
        ) && <p>Amenities add-on</p>}
        {storedDetails.poolService?.noOfGuest && (
          <p>
            Pool services <span> (swimming)</span>
          </p>
        )}
        <p>{storedDetails?.noOfNights} nights</p>
      </div>
    </div>
  );
}

export default BookingDetails;
