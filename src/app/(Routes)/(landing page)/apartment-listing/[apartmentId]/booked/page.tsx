"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { Divider, Rate } from "antd";
import { useApartmentContext } from "@/app/_global_components/Context/ApartmentBookingContext";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
function Booked() {
  const { apartmentDetails, setApartmentDetails } = useApartmentContext();
  const router = useRouter();
  const pathname = usePathname(); // Gets current page path
  const handleStorage = () => {
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
  };
  useEffect(() => {
    const handleBackButton = () => {
      router.push("/apartment-listing"); // Redirect instead of going back
    };

    // Push a new state to prevent default back navigation
    window.history.pushState(null, "", window.location.href);
    window.addEventListener("popstate", handleBackButton);

    return () => {
      window.removeEventListener("popstate", handleBackButton);

      // Only clear data when navigating away, not on refresh
      if (pathname !== window.location.pathname) {
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
      }
    };
  }, [pathname, router, setApartmentDetails]);

  return (
    <div className="flex flex-col gap-8 w-full bg-[#F4F4F4] p-5 pt-20 md:pt-15 md:p-[35px] md:p-[35px] lg:p-[65px] lg:p-[65px]">
      <div className="flex justify-between items-center">
        <h3 className="text-[20px] md:text-[24px] lg:text-[32px] font-[700]">
          Your Booking
        </h3>
        <Link
          href={"/"}
          onClick={handleStorage}
          className=" justify-center items-center text-center text-white bg-primary w-2/5 hidden md:flex rounded-md h-[40px] md:h-[50px] font-[400] text-[16px] md:text-[20px] lg:text-[24px]"
        >
          {" "}
          Return to homepage{" "}
        </Link>
      </div>

      <div className="max-h-auto h-[470px] min-h-[470px] w-100 flex flex-col lg:flex-row lg:items-center gap-8 bg-white rounded-md p-4 md:p-8 w-100">
        <div className="w-full lg:w-2/5 relative h-2/4 md:h-full">
          <Image
            src={"/imgs/OneBed.webp"}
            fill
            alt="Main pic"
            className="object-cover rounded-lg"
          />
        </div>
        <div className="w-full lg:w-3/5 flex h-2/4 md:h-fit flex-col gap-4 md:gap-8">
          <div
            className={`flex flex-col md:flex-row justify-between md:items-center gap-3 md:gap-5  `}
          >
            <div>
              <h3 className="text-secondary text-[16px] md:text-[18px] lg:text-[22px] font-[700]">
                1-Bedroom Apartment
              </h3>
              <Rate
                //disabled
                defaultValue={5}
              />
            </div>

            <div className="md:text-right  flex flex-col gap-2">
              <h3 className="text-[14px]">
                1 apartment {apartmentDetails.noOfNights} nights
              </h3>
              <h6 className="text-[14px] md:text-[16px] lg:text-[20px] font-[700] text-[#FEBB02]">
                &#8358;
                {(
                  (apartmentDetails.rate || 0) +
                  (apartmentDetails.poolService?.noOfHour || 0) * 1000 +
                  (apartmentDetails.amenities?.reduce(
                    (total, item) => total + (item.price || 0),
                    0
                  ) || 0)
                ).toLocaleString()}
                <p className="text-[#888686] text-[12px]">VAT incl.</p>
                <p className="text-[#888686] text-[12px]">
                  Amenities, pool incl.
                </p>
              </h6>
            </div>
          </div>
          <div className="flex flex-row items-center h-fit pb-1 gap-5 md:gap-8">
            <div className="flex flex-col text-[#1A1A1A]">
              <h6 className="text-[14px] md:text-[16px] font-[400]">
                Check-in
              </h6>
              <p className="text-[15px] md:text-[17px] font-[700]">
                {apartmentDetails.checkInDate}
              </p>
              <p className="text[15px] md:text-[17px] font-[400] text-[#9E9D9D]">
                {apartmentDetails.checkInTime}
              </p>
            </div>
            <Divider
              orientation="center"
              type="vertical"
              className="border border-[#C2C1C1] h-full"
            />
            <div className="flex flex-col text-[#1A1A1A]">
              <h6 className="text-[14px] md:text-[16px] font-[400] ">
                Check-out
              </h6>
              <p className="text-[15px] md:text-[17px] font-[700]">
                {apartmentDetails.checkOutDate}
              </p>
              <p className="text[15px] md:text-[17px] font-[400] text-[#9E9D9D]">
                {apartmentDetails.checkOutTime}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Link
        href={"/"}
        onClick={handleStorage}

        className="justify-center items-center text-center text-white bg-primary w-full flex md:hidden rounded-md h-[40px] md:h-[50px] font-[400] text-[16px] md:text-[20px] lg:text-[24px]"
      >
        {" "}
        Return to homepage{" "}
      </Link>
    </div>
  );
}

export default Booked;
