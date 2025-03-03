"use client";
import { useConfirmBooking } from "@/app/_global_components/Context/ConfirmBookingContext";
import React, { useEffect, useState } from "react";
import { CountryDropdown } from "react-country-region-selector";

type Inputs = {
  fName: string;
  lName: string;
  pNumber: string;
  email: string;
  country: string;
  state: string;
  zipCode: number;
};

function BillingAddress() {
  const {setConfimBooking } = useConfirmBooking();

  const [billingAddress, setBillingAddress] = useState<Inputs>({
    fName: "",
    lName: "",
    pNumber: "",
    email: "",
    country: "",
    state: "",
    zipCode: 0,
  });
  useEffect(() => {
    if (
      billingAddress.country ||
      billingAddress.email ||
      billingAddress.fName ||
      billingAddress.lName ||
      billingAddress.pNumber ||
      billingAddress.state ||
      billingAddress.zipCode
    ) {
      setConfimBooking((prev) => ({ ...prev, billingAddress: billingAddress }));
    }
  }, [billingAddress, setConfimBooking]);
  return (
    <div className="flex flex-col gap-4 bg-white rounded-md p-4">
      <h3 className="text-[16px] md:text-[20px] lg:text-[24px] font-[600]">Billing Address</h3>
      <form className="flex flex-col gap-4 ">
        <div className="flex flex-col md:flex-row items-center gap-3">
          <div className="flex flex-col gap-2 w-full">
            <h5 className="text-[14px] md:text-[16px] font-[400]">
              First Name
            </h5>
            <input
              type="text"
              value={billingAddress.fName}
              onChange={(event) =>
                setBillingAddress((prev) => ({
                  ...prev,
                  fName: event.target.value,
                }))
              }
              className="w-100 h-[40px] md:h-[50px] p-3 border-heroText bg-[#F4F4F4] rounded-lg"
            />
            
          </div>
          <div className="flex flex-col gap-2 w-full">
            <h5 className="text-[14px] md:text-[16px] font-[400]">Last Name</h5>
            <input
              type="text"
              value={billingAddress.lName}
              onChange={(event) =>
                setBillingAddress((prev) => ({
                  ...prev,
                  lName: event.target.value,
                }))
              }
              className="w-100 h-[40px] md:h-[50px] p-3 border-heroText bg-[#F4F4F4] rounded-lg"
            />
           
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-3">
          <div className="flex flex-col gap-2 w-full">
            <h5 className="text-[14px] md:text-[16px] font-[400]">
              Phone Number
            </h5>
            <input
              type="text"
              placeholder="tel"
              value={billingAddress.pNumber}
              onChange={(event) =>
                setBillingAddress((prev) => ({
                  ...prev,
                  pNumber: event.target.value,
                }))
              }
              className="w-100 h-[40px] md:h-[50px] p-3 border-heroText bg-[#F4F4F4] rounded-lg"
            />
            
          </div>
          <div className="flex flex-col gap-2 w-full">
            <h5 className="text-[14px] md:text-[16px] font-[400]">Email</h5>
            <input
              type="email"
              value={billingAddress.email}
              onChange={(event) =>
                setBillingAddress((prev) => ({
                  ...prev,
                  email: event.target.value,
                }))
              }
              className="w-100 h-[40px] md:h-[50px] p-3 border-heroText bg-[#F4F4F4] rounded-lg"
            />
            
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-3">
          <div className="flex flex-col gap-2 w-full">
            <h5 className="text-[14px] md:text-[16px] font-[400]">Country</h5>
            <CountryDropdown
              className="w-[100%] h-[40px] md:h-[50px] p-3 border-heroText bg-[#F4F4F4] rounded-lg"
              value={billingAddress.country}
              onChange={(selectedValue) =>
                setBillingAddress((prev) => ({
                  ...prev,
                  country: selectedValue,
                }))
              }
            />
            
          </div>
          <div className="flex flex-col gap-2 w-full">
            <h5 className="text-[14px] md:text-[16px] font-[400]">
              State/Province
            </h5>
            <input
              type="text"
              value={billingAddress.state}
              onChange={(event) =>
                setBillingAddress((prev) => ({
                  ...prev,
                  state: event.target.value,
                }))
              }
              className="w-100 h-[40px] md:h-[50px] p-3 border-heroText bg-[#F4F4F4] rounded-lg"
            />
           
          </div>
          <div className="flex flex-col gap-2 w-full">
            <h5 className="text-[14px] md:text-[16px] font-[400]">
              Postal (ZIP) Code
            </h5>
            <input
              type="number"
              value={billingAddress.zipCode}
              onChange={(event) =>
                setBillingAddress((prev) => ({
                  ...prev,
                  zipCode: parseInt(event.target.value) || 0,
                }))
              }
              className="w-100 h-[40px] md:h-[50px] p-3 border-heroText bg-[#F4F4F4] rounded-lg"
            />
           
          </div>
        </div>
      </form>
    </div>
  );
}

export default BillingAddress;
