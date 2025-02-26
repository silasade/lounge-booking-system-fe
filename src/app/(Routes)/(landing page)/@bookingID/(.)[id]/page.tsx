"use client";
import Modals from "@/app/_global_components/Modal";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useParams, usePathname, useRouter } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";
type DetailsType = {
  bookingId: string;
  name: string;
  checkInDate: string;
  checkOutDate: string;
  amenities: string[];
  totalPrice: string;
  status: string;
};
function BookingDetails() {
  const params = useParams() as { id?: string | string[] };

  const pathName = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState<boolean>(false);

  const bookingDetails: DetailsType = {
    bookingId: Array.isArray(params.id) ? params.id[0] : params.id ?? "",
    name: "John Doe",
    checkInDate: "Mon, 20 Jan, 2025",
    checkOutDate: "Wed, 22 Jan, 2025",
    amenities: ["Wi-Fi", "Breakfast", "Parking"],
    totalPrice: "₦50,000",

    status: "Confirmed",
  };
  const handleClose = useCallback(() => {
    setOpen(false);
    setTimeout(() => {
      router.push("/", { scroll: false });
    }, 100); // Small delay to ensure state is updated first
  }, [router]);
  if (!bookingDetails.bookingId) {
   throw new Error("Id does not exist")
  }
  useEffect(() => {
    if (pathName === "/") {
      return setOpen(false);
    }
    setOpen(true);
  }, [pathName]);
  const handleDownload = async () => {
    const input = document.getElementById("booking-details");
    if (!input) return;

    const canvas = await html2canvas(input, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("Nana-Lounge-Booking-Details.pdf");
  };
  return (
    <Modals
      centered
      open={open}
      handleCancel={handleClose}
      width={550}
      title={
        <div className="w-100 border-b border-[#B3B3B3] pb-2">
          <h4 className="text-center text-[27px] font-[700] text-secondary">
            Booking Details
          </h4>
        </div>
      }
    >
      <div id="booking-details" className="flex flex-col gap-6">
        <div className="flex flex-row items-center justify-between">
          <h5 className="text-[20px] font-[400]">Booking ID</h5>
          <p className="text-[#333333] text-[20px] font-[600] text-right">
            {bookingDetails.bookingId}
          </p>
        </div>
        <div className="flex flex-row items-center justify-between">
          <h5 className="text-[20px] font-[400]">Name</h5>
          <p className="text-[#333333] text-[20px] font-[600] text-right">
            {bookingDetails.name}
          </p>
        </div>
        <div className="flex flex-row items-center justify-between">
          <h5 className="text-[20px] font-[400]">Check-in Date</h5>
          <p className="text-[#333333] text-[20px] font-[600] text-right">
            {bookingDetails.checkInDate}
          </p>
        </div>
        <div className="flex flex-row items-center justify-between">
          <h5 className="text-[20px] font-[400]">Check-out Date</h5>
          <p className="text-[#333333] text-[20px] font-[600] text-right">
            {bookingDetails.checkOutDate}
          </p>
        </div>
        <div className="flex flex-row items-start justify-between">
          <h5 className="text-[20px] font-[400]">Amenities</h5>
          <span className="flex flex-col gap-2 text-[#333333] text-[20px] font-[600] text-right">
            {bookingDetails.amenities.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </span>
        </div>
        <div className="flex flex-row items-center justify-between">
          <h5 className="text-[20px] font-[400]">Total Price</h5>
          <p>{bookingDetails.totalPrice}</p>
        </div>
        <div className="flex flex-row items-center justify-between">
          <h5 className="text-[20px] font-[400]">Status</h5>
          <p>{bookingDetails.status}</p>
        </div>
        <div className="flex flex-col items-center gap-4 w-[100%]">
          <button
            onClick={handleDownload}
            className="w-100 bg-primary h-[50px] font-[400] text-[20px] rounded-lg text-white"
          >
            Download
          </button>
          <button onClick={handleClose} className="w-[100%] bg-[#E4E4E4] h-[50px] font-[400] text-[20px] rounded-lg text-[#4A4A4A]">
            Cancel
          </button>
        </div>
      </div>
    </Modals>
  );
}

export default BookingDetails;
