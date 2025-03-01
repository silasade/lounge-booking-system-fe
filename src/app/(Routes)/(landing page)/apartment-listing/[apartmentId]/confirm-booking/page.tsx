"use client";
import React, { use } from "react";
import CustomerDetails from "./_local_component/CustomerDetails";
import PaymentInfo from "./_local_component/PaymentInfo";
import BillingAddress from "./_local_component/BillingAddress";
import ApartmentProfile from "./_local_component/ApartmentProfile";
import BookingDetails from "./_local_component/BookingDetails";
import PricingSummary from "./_local_component/PricingSummary";
import { useRouter } from "next/navigation";
type Params = Promise<{ apartmentId: string }>;

type Apartments = {
  mainImage: string;

  name: string;
  noOfBed: number;
  noOfBathRoom: number;
  noOfAC: number;
  noOfTele: number;
  rate: number;
};
function ConfirmBooking({ params }: { params: Params }) {
  const router = useRouter();
  const { apartmentId } = use(params);
  console.log(apartmentId);
  const apartmentsList: Apartments = {
    mainImage: "/imgs/oneBed.webp",
    name: " 1-Bedroom Apartment",
    noOfAC: 2,
    noOfBathRoom: 1,
    noOfBed: 1,
    noOfTele: 2,

    rate: 5,
  };
  const handleClick = () => {
    router.push(`booked`);
  };
  return (

    <div className="flex flex-col gap-8 w-full min-h-screen p-5 pt-20 md:pt-10 md:p-[35px] md:p-[35px] lg:p-[65px] lg:p-[65px] bg-[#F4F4F4]">
      <h2 className="text-[20px] md:text-[24px] lg:text-[32px] font-[700]">
        Confirm Booking
      </h2>

      <div className="w-full flex flex-col-reverse lg:flex-row gap-8">
        <div className="flex flex-col gap-6 w-full lg:w-3/5">
          <CustomerDetails />
          <PaymentInfo />
          <BillingAddress />
        </div>
        <div className="flex flex-col gap-6 w-full lg:w-2/5">
          <ApartmentProfile
            image={apartmentsList.mainImage}
            name={apartmentsList.name}
            noOfAC={apartmentsList.noOfAC}
            noOfBathRoom={apartmentsList.noOfBathRoom}
            noOfBed={apartmentsList.noOfBathRoom}
            noOfTele={apartmentsList.noOfTele}
            rate={apartmentsList.rate}
          />
          <BookingDetails />

          <PricingSummary />
        </div>
      </div>
      <div className="w-full">
        <div className="w-full lg:w-3/5 flex flex-col gap-4  justify-self-center">
          <button
            onClick={handleClick}
            className="bg-primary h-[40px] md:h-[50px] font-[400] text-[16px] md:text-[20px] rounded-lg text-white"
          >
            Continue to Book
          </button>
          <button className="bg-[#E4E4E4] h-[40px] md:h-[50px] font-[400] text-[16px] md:text-[20px] rounded-lg text-[#4A4A4A]">
            Reserve
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmBooking;
