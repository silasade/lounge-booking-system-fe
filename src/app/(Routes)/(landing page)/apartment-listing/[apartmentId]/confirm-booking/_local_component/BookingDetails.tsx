"use client";
import React from "react";
import { useApartmentContext } from "@/app/_global_components/Context/ApartmentBookingContext";
import { Divider } from "antd";

function BookingDetails() {
  const { apartmentDetails } = useApartmentContext();

  return (
    <div className="flex flex-col p-4 rounded-md bg-white gap-4">
      <h3 className="text-[16px] md:text-[18px] lg:text-[22px] font-[700]">
        Your booking details
      </h3>
      <div className="flex flex-row items-center h-fit pt-1 pb-1 gap-5 md:gap-8">
        <div className="flex flex-col gap-1 ">
          <h6 className="text-[14px] md:text-[16px] font-[400]">Check-in</h6>
          <p className="text-[15px] md:text-[17px] font-[700]">
            {apartmentDetails.checkInDate}
          </p>
          <p className="text[15px] md:text-[17px] font-[400] text-[#9E9D9D]">{apartmentDetails.checkInTime}</p>
        </div>
        <Divider
          orientation="center"
          type="vertical"
          className="border border-[#C2C1C1] h-full"
        />
        <div className="flex flex-col gap-1 ">
          <h6 className="text-[14px] md:text-[16px] font-[400]">Check-out</h6>
          <p className="text-[15px] md:text-[17px] font-[700]">
            {apartmentDetails.checkOutDate}
            </p>
            <p className="text[15px] md:text-[17px] font-[400] text-[#9E9D9D]">{apartmentDetails.checkOutTime}</p>

          
        </div>
      </div>
      <div className="text-[#4F4F4F] text-[14px] font-[400] flex flex-col gap-4">
        <p>1 bedroom apartment</p>
        {apartmentDetails.amenities?.reduce(
          (total, item) => total + (item.price || 0),
          0
        ) && <p>Amenities add-on</p>}
        {apartmentDetails.poolService?.noOfGuest && (
          <p>
            Pool services <span> (swimming)</span>
          </p>
        )}
        <p>{apartmentDetails?.noOfNights} nights</p>
      </div>
    </div>
  );
}

export default BookingDetails;
