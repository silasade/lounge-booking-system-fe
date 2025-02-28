import React from "react";
import CustomerDetails from "./_local_component/CustomerDetails";
import PaymentInfo from "./_local_component/PaymentInfo";
import BillingAddress from "./_local_component/BillingAddress";
import ApartmentProfile from "./_local_component/ApartmentProfile";
import BookingDetails from "./_local_component/BookingDetails";
import PricingSummary from "./_local_component/PricingSummary";
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
function ConfirmBooking(props: { params: Params }) {
  console.log(props);
  const apartmentsList: Apartments = {
    mainImage: "/imgs/oneBed.webp",
    name: " 1-Bedroom Apartment",
    noOfAC: 2,
    noOfBathRoom: 1,
    noOfBed: 1,
    noOfTele: 2,

    rate: 5,
  };
  return (
    <div className="flex flex-col gap-8 w-full min-h-screen p-5 pt-20 md:pt-10 md:p-[35px] md:p-[35px] lg:p-[65px] lg:p-[65px] bg-[#F4F4F4]">
      <h2 className="text-[20px] md:text-[24px] lg:text-[32px] font-[700]">
        Confirm Booking
      </h2>

      <div className="w-full flex flex-col md:flex-row gap-8">
        <div className="flex flex-col gap-6 w-full md:w-2/4 lg:w-3/5">
          <CustomerDetails />
          <PaymentInfo />
          <BillingAddress />
        </div>
        <div className="flex flex-col gap-6 w-full md:w-2/4 lg:w-2/5">
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
    </div>
  );
}

export default ConfirmBooking;
