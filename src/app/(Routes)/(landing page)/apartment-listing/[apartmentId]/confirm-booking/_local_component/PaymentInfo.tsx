"use client";

import { DatePicker } from "antd";
import React, { useEffect, useState } from "react";
import moment from "moment";
import { useConfirmBooking } from "@/app/_global_components/Context/ConfirmBookingContext";
type Inputs = {
  nameOnCard: string;
  debitCardNumber: string;
  expiry: string;
  cvv: string;
};

function PaymentInfo() {
  const { setConfimBooking } = useConfirmBooking();
  const [paymentInfo, setPaymentInfo] = useState<Inputs>({
    nameOnCard: "",
    debitCardNumber: "",
    expiry: "",
    cvv: "",
  });
  useEffect(() => {
    if (
      paymentInfo.cvv ||
      paymentInfo.debitCardNumber ||
      paymentInfo.expiry ||
      paymentInfo.nameOnCard
    ) {
      setConfimBooking((prev) => ({ ...prev, paymentInfo: paymentInfo }));
    }
  }, [paymentInfo, setConfimBooking]);
  return (
    <div className="flex flex-col gap-4 bg-white rounded-md p-4">
      <h3 className="text-[16px] md:text-[20px] lg:text-[24px] font-[600]">
        Payment Information
      </h3>
      <form className="flex flex-col gap-4">
        <div className="flex flex-col md:flex-row items-center gap-3">
          <div className="flex flex-col gap-2 w-full">
            <h5 className="text-[14px] md:text-[16px] font-[400]">
              Name on Card
            </h5>
            <input
              type="text"
              placeholder="Name on Card"
              value={paymentInfo.nameOnCard}
              onChange={(event) =>
                setPaymentInfo((prev) => ({
                  ...prev,
                  nameOnCard: event.target.value,
                }))
              }
              className="w-full h-[40px] md:h-[50px] p-3 border-heroText bg-[#F4F4F4] rounded-lg"
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <h5 className="text-[14px] md:text-[16px] font-[400]">
              Credit/Debit Card Number<sup className="text-red-600"> *</sup>
            </h5>
            <input
              type="text"
              placeholder="Card Number"
              value={paymentInfo.debitCardNumber}
              onChange={(event) =>
                setPaymentInfo((prev) => ({
                  ...prev,
                  debitCardNumber: event.target.value,
                }))
              }
              className="w-full h-[40px] md:h-[50px] p-3 border-heroText bg-[#F4F4F4] rounded-lg"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-3">
          <div className="flex flex-col gap-2 w-full">
            <h5 className="text-[14px] md:text-[16px] font-[400]">
              Expiry Date<sup className="text-red-600"> *</sup>
            </h5>
            <DatePicker
              className="w-full h-[40px] md:h-[50px] p-3 bg-[#F4F4F4] rounded-lg"
              picker="month"
              placeholder="MM/YY"
              value={
                paymentInfo.expiry ? moment(paymentInfo.expiry, "MM/YY") : null
              }
              onChange={(date, dateString) => {
                // Check if dateString is a string before updating state
                if (typeof dateString === "string") {
                  setPaymentInfo((prev) => ({
                    ...prev,
                    expiry: dateString,
                  }));
                }
              }}
              format="MM/YY"
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <h5 className="text-[14px] md:text-[16px] font-[400]">
              CVV <sup className="text-red-600"> *</sup>
            </h5>
            <input
              type="text"
              placeholder="CVV"
              value={paymentInfo.cvv}
              onChange={(event) =>
                setPaymentInfo((prev) => ({
                  ...prev,
                  cvv: event.target.value,
                }))
              }
              className="w-full h-[40px] md:h-[50px] p-3 border-heroText bg-[#F4F4F4] rounded-lg"
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default PaymentInfo;
