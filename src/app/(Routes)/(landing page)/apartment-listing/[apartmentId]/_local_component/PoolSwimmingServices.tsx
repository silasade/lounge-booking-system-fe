import { useApartmentContext } from "@/app/_global_components/Context/ApartmentBookingContext";
import ArithmeticInput from "@/app/_global_components/Forms/ArithmeticInput";
import React, { useCallback, useState } from "react";
type PoolService = {
  noOfHour: number;
  noOfGuest: number;
};
function PoolSwimmingServices() {
  const { setApartmentDetails } = useApartmentContext();

  const [number, setNumber] = useState<PoolService>({
    noOfHour: 1,
    noOfGuest: 1,
  });

  const handleHours = useCallback((hours: number) => {
    setNumber((prev) => ({ ...prev, noOfHour: hours }));
  }, []);
  const handleGuests = useCallback((guests: number) => {
    setNumber((prev) => ({ ...prev, noOfGuest: guests }));
  }, []);
  const handlePool = () => {
    if (number) {
      setApartmentDetails((prev) => ({ ...prev, poolService: number }));
    }
  };
  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-center text-[16px] md:text-[18px] lg:text-[20px] font-[500]">
        Pool Services
        <span className="italic text-[14px] lg:text-[16px] font-[400] text-[#4A4A4A]">
          (swimming)
        </span>
      </h3>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col md:flex-row justify-between md:items-center">
          <h5 className="text-[16px] md:text-[18px] lg:text-[22px] font-[500]">
            No of Hours
          </h5>
          <div className="w-full md:w-3/4">
            <ArithmeticInput handleNumber={handleHours} Squared={true} />
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between md:items-center w-100">
          <h5 className="text-[16px] md:text-[18px] lg:text-[22px] font-[500]">
            No of Guests
          </h5>
          <div className="w-full md:w-3/4">
            <ArithmeticInput handleNumber={handleGuests} Squared={true} />
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
        <button
          onClick={handlePool}
          className="bg-primary text-white text-[16px] md:text-[18px] rounded-md w-full md:w-64 h-[40px] md:h-[50px]"
        >
          Add pool
        </button>
      </div>
    </div>
  );
}

export default PoolSwimmingServices;
