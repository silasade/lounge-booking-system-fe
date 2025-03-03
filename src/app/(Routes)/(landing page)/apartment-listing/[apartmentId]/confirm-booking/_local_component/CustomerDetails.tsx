"use client";
import { useConfirmBooking } from "@/app/_global_components/Context/ConfirmBookingContext";
import React, { useEffect, useState } from "react";

type Inputs = {
  fName: string;
  lName: string;
  pNumber: string;
  email: string;
};
function CustomerDetails() {
  const { setConfimBooking } = useConfirmBooking();

  const [contactDetails, setContactDetails] = useState<Inputs>({
    fName: "",
    lName: "",
    pNumber: "",
    email: "",
  });
  useEffect(() => {
    if (
      contactDetails.fName ||
      contactDetails.lName ||
      contactDetails.pNumber ||
      contactDetails.email
    ) {
      setConfimBooking((prev) => ({
        ...prev,
        customerDetails: contactDetails,
      }));
    }
  }, [contactDetails, setConfimBooking]);

  return (
    <div className="flex flex-col gap-4 bg-white rounded-md w-full p-4">
      <h3 className="text-[16px] md:text-[20px] lg:text-[24px] font-[600]">
        Your details
      </h3>
      <form className="flex flex-col gap-4 ">
        <div className="flex flex-col md:flex-row items-center gap-3">
          <div className="flex flex-col gap-2 w-full">
            <h5 className="text-[14px] md:text-[16px] font-[400]">
              First Name <sup className="text-red-600">*</sup>
            </h5>
            <input
              type="text"
              value={contactDetails.fName}
              onChange={(event) =>
                setContactDetails((prev) => ({
                  ...prev,
                  fName: event.target.value,
                }))
              }
              className="w-100 h-[40px] md:h-[50px] p-3 border-heroText rounded-lg bg-[#F4F4F4]"
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <h5 className="text-[14px] md:text-[16px] font-[400]">
              Last Name <sup className="text-red-600">*</sup>
            </h5>
            <input
              type="text"
              value={contactDetails.lName}
              onChange={(event) =>
                setContactDetails((prev) => ({
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
              Phone Number <sup className="text-red-600">*</sup>
            </h5>
            <input
              type="tel"
              value={contactDetails.pNumber}
              onChange={(event) =>
                setContactDetails((prev) => ({
                  ...prev,
                  pNumber: event.target.value,
                }))
              }
              className="w-100 h-[40px] md:h-[50px] p-3 border-heroText bg-[#F4F4F4] rounded-lg"
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <h5 className="text-[14px] md:text-[16px] font-[400]">
              Email
                <sup className="text-red-600"> *</sup>
            </h5>
            <input
              type="email"
              value={contactDetails.email}
              onChange={(event) =>
                setContactDetails((prev) => ({
                  ...prev,
                  email: event.target.value,
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

export default CustomerDetails;
