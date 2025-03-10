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
          <h4>Booking information</h4>
          <div className="flex flex-row justify-between items-center">
            <h6>ID</h6>
            <p>{id}</p>
          </div>
          <div className="flex flex-row justify-between items-center">
            <h6>Name</h6>
            <p>Jane Doe</p>
          </div>
          <div className="flex flex-row justify-between items-center">
            <h6>Email</h6>
            <p>janedoe@gmail.com</p>
          </div>
          <div className="flex flex-row justify-between items-center">
            <h6>Phone no</h6>
            <p>*************</p>
          </div>
          <div className="flex flex-row justify-between items-center">
            <h6>Booking status</h6>
            <p>Completed</p>
          </div>
          <div className="flex flex-row justify-between items-center">
            <h6>Payment</h6>
            <p>Paid</p>
          </div>
          <div className="flex flex-row justify-between items-center">
            <h6>Duration</h6>
            <p>2 nights</p>
          </div>
          <div className="flex flex-row justify-between items-center">
            <h6>Apartment type</h6>
            <p>2 bedroom</p>
          </div>
        </div>
        <hr className="border-[#E4E4E4]" />
        <div className="flex flex-col gap-4">
          <h4>Payment details</h4>
          <div className="flex flex-row justify-between items-center">
            <h6>Total cost</h6>
            <p>₦140,000</p>
          </div>
          <div className="flex flex-row justify-between items-center">
            <h6>Amount paid</h6>
            <p>₦140,000</p>
          </div>
          <div className="flex flex-row justify-between items-center">
            <h6>Payment method</h6>
            <p>Online</p>
          </div>
          <div className="flex flex-row justify-between items-center">
            <h6>Balance due(if any)</h6>
            <p>None</p>
          </div>
        </div>
      </div>
    </Modals>
  );
}

export default ViewBooking;
