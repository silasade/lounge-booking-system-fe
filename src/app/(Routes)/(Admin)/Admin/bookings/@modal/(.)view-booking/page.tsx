"use client";
import Modals from "@/app/_global_components/Modal";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

function ViewBooking() {
  const searchParams = new URLSearchParams();
  const pathName = usePathname();
  const id = searchParams.get("id");
  const router = useRouter();
  const [open, setOpen] = useState<boolean>(false);
  const handleCancel = () => {
    setOpen(false);
    setTimeout(() => {
      router.push("/Admin/bookings", { scroll: false });
    }, 100);
  };

  useEffect(() => {
    if (pathName === "/Admin/bookings/view-booking") {
      return setOpen(true);
    }
    setOpen(false);
  }, [pathName]);
  return (
    <Modals open={open} handleCancel={handleCancel}>
      <div className="flex flex-col gap-6 w-[500px]">
        <div className="flex flex-col gap-4">
          <h4 className="text-[16px] font-[600]">Booking information</h4>
          <div className="flex flex-row justify-between items-center">
            <h6 className="text-[14px] font-[500] text-[#4A4A4A]">ID</h6>
            <p className="text-[16px] font-[500]">{id}</p>
          </div>
          <div className="flex flex-row justify-between items-center">
            <h6 className="text-[14px] font-[500] text-[#4A4A4A]">Name</h6>
            <p className="text-[16px] font-[500]">Jane Doe</p>
          </div>
          <div className="flex flex-row justify-between items-center">
            <h6 className="text-[14px] font-[500] text-[#4A4A4A]">Email</h6>
            <p className="text-[16px] font-[500]">janedoe@gmail.com</p>
          </div>
          <div className="flex flex-row justify-between items-center">
            <h6 className="text-[14px] font-[500] text-[#4A4A4A]">Phone no</h6>
            <p className="text-[16px] font-[500]">*************</p>
          </div>
          <div className="flex flex-row justify-between items-center">
            <h6 className="text-[14px] font-[500] text-[#4A4A4A]">
              Booking status
            </h6>
            <p className="text-[16px] font-[500]">Completed</p>
          </div>
          <div className="flex flex-row justify-between items-center">
            <h6 className="text-[14px] font-[500] text-[#4A4A4A]">Payment</h6>
            <p className="text-[16px] font-[500]">Paid</p>
          </div>
          <div className="flex flex-row justify-between items-center">
            <h6 className="text-[14px] font-[500] text-[#4A4A4A]">Duration</h6>
            <p className="text-[16px] font-[500]">2 nights</p>
          </div>
          <div className="flex flex-row justify-between items-center">
            <h6 className="text-[14px] font-[500] text-[#4A4A4A]">
              Apartment type
            </h6>
            <p className="text-[16px] font-[500]">2 bedroom</p>
          </div>
        </div>
        <hr className="border-[#E4E4E4]" />
        <div className="flex flex-col gap-4">
          <h4 className="text-[16px] font-[600]">Payment details</h4>
          <div className="flex flex-row justify-between items-center">
            <h6 className="text-[14px] font-[500] text-[#4A4A4A]">
              Total cost
            </h6>
            <p className="text-[16px] font-[500]">₦140,000</p>
          </div>
          <div className="flex flex-row justify-between items-center">
            <h6 className="text-[14px] font-[500] text-[#4A4A4A]">
              Amount paid
            </h6>
            <p className="text-[16px] font-[500]">₦140,000</p>
          </div>
          <div className="flex flex-row justify-between items-center">
            <h6 className="text-[14px] font-[500] text-[#4A4A4A]">
              Payment method
            </h6>
            <p className="text-[16px] font-[500]">Online</p>
          </div>
          <div className="flex flex-row justify-between items-center">
            <h6 className="text-[14px] font-[500] text-[#4A4A4A]">
              Balance due(if any)
            </h6>
            <p className="text-[16px] font-[500]">None</p>
          </div>
        </div>
        <div className="flex justify-end gap-2 mt-4">
          <button
            type="button"
            onClick={handleCancel}
            className="text-[14px] font-medium h-[40px] text-[#4A4A4A] bg-[#E4E4E4] px-4 py-2 rounded-lg"
          >
            Cancel
          </button>
        </div>
      </div>
    </Modals>
  );
}

export default ViewBooking;
