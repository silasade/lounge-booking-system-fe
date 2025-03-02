import React from "react";

function Pricing() {
  return (
    <div className="flex flex-col gap-8 pt-20">
      <h2 className="text-secondary text-[20px] md:text-[24px] lg:text-[28px] font-[700] text-center">
        Pricing Details
      </h2>
      <div className="flex flex-col gap-4 text-[16px] md:text-[18px] lg:text-[20px] font-[400]">
        <p>Clear, Transparent Pricing</p>
        <p>₦XX,XXX per hour&quot; (base rate for gym access)</p>
      </div>
    </div>
  );
}

export default Pricing;
