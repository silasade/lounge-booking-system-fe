"use client";

import { usePathname, useRouter } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";
import Modals from "@/app/_global_components/Modal";
import Number from "../_local_components/Number";
import Pricing from "../_local_components/Pricing";
import ContactInfo from "../_local_components/ContactInfo";
import PaymentForm from "../_local_components/PaymentForm";
import { usePayment } from "@/app/_global_components/Context/PaymentContext";

function CreatePost() {
  const { handleSubmit, paymentDetails } = usePayment();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const handleClose = useCallback(() => {
    setOpen(false);
    setTimeout(() => {
      router.push("/", { scroll: false });
    }, 100); // Small delay to ensure state is updated first
  }, [router]);

  useEffect(() => {
    if (pathname === "/") {
      return setOpen(false);
    }
    setOpen(true);
  }, [pathname]);
  const onSubmit = () => {
    handleSubmit(paymentDetails);handleClose()
  };
  console.log(paymentDetails);
  return (
    <Modals
      centered
      open={open}
      handleCancel={handleClose}
      width={850}
      title={
        <div className="w-100 border-b border-[#B3B3B3] pb-2">
          <h4 className="text-center text-[27px] font-[700] text-secondary">
            Book Your Swimming Pool Service
          </h4>
        </div>
      }
    >
      <div className="max-h-[400px] overflow-auto p-[10px]">
        <Number />
        <Pricing />
        <div className="flex flex-col gap-4 pt-[20px] pb-[20px] border-b border-[#B3B3B3]">
          <h3 className="text-[24px] font-[500]">Pricing</h3>
          <div className="w-100 flex flex-row justify-between items-center">
            <div className="flex flex-col gap-3 w-2/4">
              <h3 className="text-[20px] font-[400]">Total cost</h3>
              <p className="italic text-[#4A4A4A] text-[16px] font-[300]">
                [calculated price based on people, hours, add-ons and days]
              </p>
            </div>
            <div className="flex flex-col gap-3 justify-self-end">
              <h3 className="text-[24px] font-[500]">&#8358;2000</h3>
              <p className="italic text-[#4A4A4A] text-[16px] font-[300]">
                ₦1,000 per hour per person.
              </p>
            </div>
          </div>
        </div>
        <ContactInfo />
        <PaymentForm />
        <div className="w-100 flex flex-col gap-4">
          <button
            onClick={onSubmit}
            className="bg-primary h-[50px] font-[400] text-[20px] rounded-lg text-white"
          >
            Confirm
          </button>
          <button className="bg-[#E4E4E4] h-[50px] font-[400] text-[20px] rounded-lg text-[#4A4A4A]">
            Cancel
          </button>
        </div>
      </div>
    </Modals>
  );
}

export default CreatePost;
