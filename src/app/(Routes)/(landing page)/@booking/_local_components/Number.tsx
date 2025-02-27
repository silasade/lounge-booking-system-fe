import { usePayment } from "@/app/_global_components/Context/PaymentContext";
import ArithmeticInput from "@/app/_global_components/Forms/ArithmeticInput";
import React, { useState, useCallback } from "react";

function Number() {
  const { setPaymentDetails } = usePayment();

  const [, /*number*/ setNumber] = useState({
    noOfPeople: 0,
    noOfHours: 0,
    noOfDays: 0,
  });

  // Memoize the callbacks to prevent re-renders
  const handlePeopleChange = useCallback(
    (value: number) => {
      setNumber((prev) => ({ ...prev, noOfPeople: value }));
      setPaymentDetails((prev) => ({ ...prev, noOfPeople: value.toString() }));
    },
    [setPaymentDetails]
  );

  const handleHoursChange = useCallback(
    (value: number) => {
      setNumber((prev) => ({ ...prev, noOfHours: value }));
      setPaymentDetails((prev) => ({ ...prev, noOfHours: value.toString() }));
    },
    [setPaymentDetails]
  );

  const handleDaysChange = useCallback(
    (value: number) => {
      setNumber((prev) => ({ ...prev, noOfDays: value }));
      setPaymentDetails((prev) => ({ ...prev, noOfDays: value.toString() }));
    },
    [setPaymentDetails]
  );

  return (
    <div className="flex flex-col gap-6 border-b border-[#B3B3B3] pt-3 pb-3">
      <div className="flex flex-col sm:flex-row row-gap-2 justify-between sm:items-center">
        <div className="flex flex-col gap-3">
          <h5 className="text-[16px] md:text-[20px] font-[500]">
            Number of People
          </h5>
          <p className="italic text-[#4A4A4A] text-[14px] md:text-[16px] font-[300]">
            How many people will be using the pool?
          </p>
        </div>
        <div className="flex flex-col gap-2 w-full sm:w-1/2">
          <ArithmeticInput handleNumber={handlePeopleChange} />
          <p className="italic text-[#4A4A4A] text-[14px] md:text-[16px] font-[300]">
            Maximum ** people per booking
          </p>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row row-gap-2 justify-between sm:items-center">
        <div className="flex flex-col gap-3">
          <h5 className="text-[16px] md:text-[20px] font-[500]">Number of Hours</h5>
          <p className="italic text-[#4A4A4A] text-[14px] md:text-[16px] font-[300]">
            How many hours?
          </p>
        </div>
        <div className="flex flex-col gap-2 w-full sm:w-1/2">
          <ArithmeticInput handleNumber={handleHoursChange} />
          <p className="italic text-[#4A4A4A] text-[14px] md:text-[16px] font-[300]">
            Rate is ₦1,000/hour
          </p>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row row-gap-2 justify-between sm:items-center">
        <div className="flex flex-col gap-3">
          <h5 className="text-[16px] md:text-[20px] font-[500]">Number of Days</h5>
          <p className="italic text-[#4A4A4A] text-[14px] md:text-[16px] font-[300]">
            How many days?
          </p>
        </div>
        <div className="w-full sm:w-1/2">
          <ArithmeticInput handleNumber={handleDaysChange} />
        </div>
      </div>
    </div>
  );
}

export default Number;
