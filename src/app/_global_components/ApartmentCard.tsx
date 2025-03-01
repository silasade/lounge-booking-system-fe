"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { Bathroom, Bed, Fan, Television } from "@/app/_global_components/icons";
import { Rate } from "antd";
import Amenities from "../(Routes)/(landing page)/apartment-listing/[apartmentId]/_local_component/Amenities";
import PoolSwimmingServices from "../(Routes)/(landing page)/apartment-listing/[apartmentId]/_local_component/PoolSwimmingServices";
import Booking from "../(Routes)/(landing page)/apartment-listing/[apartmentId]/_local_component/Booking";
import { useRouter } from "next/navigation";
import { useApartmentContext } from "./Context/ApartmentBookingContext";
type Prop = {
  mainImage: string;
  sideImageOne: string;
  sideImageTwo: string;
  price: string;
  name: string;
  overview: string;
  noOfBed: number;
  noOfBathRoom: number;
  noOfAC: number;
  noOfTele: number;
  rate: number;
  details?: boolean;
};
type AmenitiesType = {
  name: string;
  price: number;
};
function ApartmentCard({
  mainImage,
  name,
  noOfAC,
  noOfBathRoom,
  noOfBed,
  noOfTele,
  overview,
  price,
  sideImageOne,
  sideImageTwo,
  rate,
  details,
}: Prop) {
  const { setApartmentDetails } = useApartmentContext();

  const router = useRouter();
  const amenities: AmenitiesType[] = [
    {
      name: "24/7 Power",
      price: 5000,
    },
    {
      name: "Alcoholic Bar",
      price: 15000,
    },
    {
      name: "Non-Alcoholic Bar",
      price: 5000,
    },
    {
      name: "Breakfast",
      price: 2000,
    },
    {
      name: "Wi-Fi Access",
      price: 1000,
    },
    {
      name: "Breakfast+Lunch+Dinner",
      price: 10000,
    },
    {
      name: "Snacks",
      price: 1000,
    },
    {
      name: "Airport Transfers",
      price: 50000,
    },
    {
      name: "Local Transport",
      price: 20000,
    },
  ];
  useEffect(() => {
    setApartmentDetails({
      amenities: [],
      checkInDate: "",
      checkOutDate: "",
      poolService: { noOfGuest: 0, noOfHour: 0 },
      rate: 0,
      noOfNights: 1,
      checkInTime: "",
      checkOutTime: "",
    });
    localStorage.removeItem("apartmentDetails");
  }, []);
  return (
    <div
      className={`max-h-auto ${
        details ? "min-h-screen" : "h-[750px] min-h-[750px]"
      } w-100 flex flex-col gap-2`}
    >
      <div
        className={`w-full ${
          details ? "min-h-[456px]" : "h-3/5"
        } grid grid-cols-2 grid-row-2 gap-y-4 gap-x-4`}
      >
        <div className=" col-span-2 md:col-span-1 md:row-span-2 h-50 md:h-100 w-100 md:w-50 relative">
          <Image
            src={mainImage}
            fill
            alt="Main pic"
            className="object-cover rounded-lg"
          />
        </div>
        <div className="h-50 w-50 relative col-span-2 sm:col-span-1">
          <Image
            src={sideImageOne}
            fill
            alt="Main pic"
            className="object-cover rounded-lg"
          />
        </div>
        <div className="h-50 w-50 relative col-span-2 sm:col-span-1">
          <Image
            src={sideImageTwo}
            fill
            alt="Main pic"
            className="object-cover rounded-lg"
          />
        </div>
      </div>
      <div
        className={`w-full flex flex-col row-gap-4 md:flex-row justify-between items-start ${
          details ? "gap-8" : ""
        }`}
      >
        <div
          className={`flex flex-col gap-3 md:gap-5 w-100 ${
            details ? "md:w-3/5" : "md:w-2/4"
          }`}
        >
          <h3 className="text-secondary text-[16px] md:text-[18px] lg:text-[20px] md:text-[24px] lg:text-[32px] font-[700]">
            {name}
          </h3>
          <Rate
            //disabled
            defaultValue={rate}
          />
          <h3 className="text-[16px] md:text-[20px] lg:text-[24px] font-[500]">
            Overview
          </h3>
          <p>{overview}</p>
          <div className="flex flex-row gap-3 md:gap-5 items-center justify-center md:justify-normal">
            <div className="flex flex-col gap-3 text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] items-center text-[#959595]">
              <Bed />
              <p className="font-[400]">
                <span className="font-[500] text-black">{noOfBed}</span> bed
              </p>
            </div>
            <div className="flex flex-col  gap-3 text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] items-center text-[#959595]">
              <Bathroom />
              <p className="font-[400]">
                <span className="font-[500] text-black">{noOfBathRoom}</span>{" "}
                bathroom
              </p>
            </div>
            <div className="flex flex-col gap-3 text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] items-center text-[#959595]">
              <Television />
              <p className="font-[400]">
                <span className="font-[500] text-black">{noOfTele}</span>{" "}
                television
              </p>
            </div>
            <div className="flex flex-col gap-3 text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] items-center text-[#959595]">
              <Fan />
              <p className="font-[400]">
                <span className="font-[500] text-black">{noOfAC}</span>{" "}
                air-conditioner
              </p>
            </div>
          </div>
          {details && (
            <div className={`flex flex-col gap-20 ${details ? "mt-10" : ""}`}>
              <Amenities amenities={amenities} />
              <PoolSwimmingServices />
            </div>
          )}
        </div>
        <div className={`w-full ${details ? "md:w-2/5" : "md:w-2/4"}`}>
          {details ? (
            <Booking id="123456" price={70000} />
          ) : (
            <>
              <button
                onClick={() => router.push("/apartment-listing/123456")}
                className="bg-primary h-[40px] md:h-[50px] text-[18px] w-full md:w-auto p-5 text-center flex justify-center items-center font-[500] rounded-lg text-white"
              >
                Select Apartment
              </button>
              <p className="font-[300] text-[16px] md:text-[20px] leading-[33px] font-[700]">
                &#8358; {price}
                <span className="text-[14px] lg:text-[16px] font-[400]">
                  &nbsp;per night
                </span>
                <span className="italic text-[14px] lg:text-[16px] font-[400] text-[#4A4A4A]">
                  &nbsp; (amenities priced separately)
                </span>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default ApartmentCard;
