import { usePayment } from "@/app/_global_components/Context/PaymentContext";
import Sliders from "@/app/_global_components/Forms/Slider";
import React, { useState } from "react";

function Pricing() {
  const { setPaymentDetails } = usePayment();

  const [, /*range*/ setRange] = useState({
    nonAlcoholic: {
      from: 0,
      to: 0,
    },
    Alcoholic: {
      from: 0,
      to: 0,
    },
    snacks: {
      from: 0,
      to: 0,
    },
  });
  return (
    <div className="flex flex-col gap-6 p-4 border-b border-[#B3B3B3]">
      <div className="flex flex-row justify-between">
        <h3 className="text-[24px] font-[500]">Additional Add-ons</h3>
        <h5 className="text-[22px] font-[500]">Price</h5>
      </div>
      <div className="flex flex-row justify-between">
        <h6 className="text-[20px] font-[400]">Non-alcoholic Drinks</h6>
        <Sliders
          trackColor="#D4A373"
          handleColor="white"
          onRangeChange={(range) => {
            setPaymentDetails((prev) => ({ ...prev, nonAlcoholic: range }));
            setRange((prev) => ({ ...prev, nonAlcoholic: range }));
          }}
        />
      </div>
      <div className="flex flex-row justify-between">
        <h6 className="text-[20px] font-[400]">Alcoholic Drinks</h6>
        <Sliders
          trackColor="#D4A373"
          handleColor="white"
          onRangeChange={(range) => {
            setPaymentDetails((prev) => ({ ...prev, Alcoholic: range }));

            setRange((prev) => ({ ...prev, Alcoholic: range }));
          }}
        />
      </div>
      <div className="flex flex-row justify-between">
        <h6 className="text-[20px] font-[400]">Snacks</h6>
        <Sliders
          trackColor="#D4A373"
          handleColor="white"
          onRangeChange={(range) =>
            setRange((prev) => ({ ...prev, snacks: range }))
          }
        />
      </div>
    </div>
  );
}

export default Pricing;
