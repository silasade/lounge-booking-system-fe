import { useApartmentContext } from "@/app/_global_components/Context/ApartmentBookingContext";
import ArithmeticInput from "@/app/_global_components/Forms/ArithmeticInput";
import { useMessageHandler } from "@/app/_global_components/Message";
import { CheckCircleOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React, { useCallback, useEffect, useState } from "react";
type GymService = {
  noOfHour: number;
  noOfGuest: number;
};
function GymServices() {
  const { successMessage, contextHolder, errorMessage } = useMessageHandler();

  const { setApartmentDetails, apartmentDetails } = useApartmentContext();

  const [number, setNumber] = useState<GymService>(
    apartmentDetails.gymService || { noOfGuest: 0, noOfHour: 0 }
  );

  const handleHours = useCallback((hours: number) => {
    setNumber((prev) => ({ ...prev, noOfHour: hours }));
  }, []);
  const handleGuests = useCallback((guests: number) => {
    console.log(guests);
    setNumber((prev) => ({ ...prev, noOfGuest: guests }));
  }, []);
  const handlePool = () => {
    setApartmentDetails((prev) => ({ ...prev, gymService: number }));

    if (number.noOfHour < 1 || number.noOfGuest < 1) {
      errorMessage(
        "Ensure to choose the number of hours and guests before adding a gym servicce"
      );
    } else {
      successMessage("Gym Service added successfully");
    }
  };

  useEffect(() => {
    setNumber((prev) => ({
      ...prev,
      noOfGuest:
        apartmentDetails.gymService?.noOfGuest !== undefined
          ? apartmentDetails.gymService.noOfGuest
          : prev.noOfGuest,
      noOfHour:
        apartmentDetails.gymService?.noOfHour !== undefined
          ? apartmentDetails.gymService.noOfHour
          : prev.noOfHour,
    }));
  }, [apartmentDetails.gymService]);

  return (
    <>
      {" "}
      {contextHolder}
      <div className="flex flex-col gap-2">
        <h3 className="text-center text-[16px] md:text-[18px] lg:text-[20px] font-[500]">
          Gym Services

        </h3>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col md:flex-row justify-between md:items-center">
            <h5 className="text-[16px] md:text-[18px] lg:text-[22px] font-[500]">
              No of Hours
            </h5>
            <div className="w-full md:w-3/4">
              <ArithmeticInput
                input={number.noOfHour}
                handleNumber={handleHours}
                Squared={true}
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between md:items-center w-100">
            <h5 className="text-[16px] md:text-[18px] lg:text-[22px] font-[500]">
              No of Guests
            </h5>
            <div className="w-full md:w-3/4">
              <ArithmeticInput
                input={number.noOfGuest}
                handleNumber={handleGuests}
                Squared={true}
              />
            </div>
          </div>
          <div className="flex justify-end text-[14px] md:text-[16px] ld:text-[18px] italic text-right font-[400]">
            <p>
              ₦1,000{" "}
              <span className="text-[12px] md:text-[14px] lg:text-[16px] text-[#4A4A4A]">
                {" "}
                per hour
              </span>
            </p>
          </div>
        </div>
        <div className="flex justify-center w-100">
          <Button
            onClick={handlePool}
            className={`${
              apartmentDetails.gymService?.noOfGuest < 1 &&
              apartmentDetails.gymService?.noOfHour < 1
                ? "bg-primary": "bg-[#90EE90]"
                 
            } bg-primary text-white text-[16px] md:text-[18px] rounded-md w-full md:w-64 h-[40px] md:h-[50px]`}
          >
            {apartmentDetails.gymService?.noOfGuest < 1 &&
            apartmentDetails.gymService?.noOfHour < 1 ? (
              "Add gym"
            ):(
              <>
                <CheckCircleOutlined /> &nbsp; Gym services added
              </>
            )  }
          </Button>
        </div>
      </div>
    </>
  );
}

export default GymServices;
