"use client";
import React, { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Typography } from "antd";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import Modals from "@/app/_global_components/Modal";
const { Text } = Typography;
type Input = {
  bookingId: string;
};
type DetailsType = {
  bookingId: string;
  name: string;
  checkInDate: string;
  checkOutDate: string;
  amenities: string[];
  totalPrice: string;
  status: string;
};
type prop = {
  handleMenu?: () => void;
};
function BookingForm({ handleMenu }: prop) {
  const [open, setOpen] = useState<boolean>(false);
  const [id, setID] = useState<string>("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Input>();
  const onSubmit = (data: Input) => {
    setID(data.bookingId);
    setOpen(true);
    if (handleMenu) {
      handleMenu();
    }
  };

  const bookingDetails: DetailsType = {
    bookingId: id,
    name: "John Doe",
    checkInDate: "Mon, 20 Jan, 2025",
    checkOutDate: "Wed, 22 Jan, 2025",
    amenities: ["Wi-Fi", "Breakfast", "Parking"],
    totalPrice: "₦50,000",

    status: "Confirmed",
  };
  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

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
    <>
      <Modals
        centered
        open={open}
        handleCancel={handleClose}
        title={
          <div className="w-100 border-b border-[#B3B3B3] pb-2">
            <h4 className="text-center text-[20px] md:text-[27px] font-[700] text-secondary">
              Booking Details
            </h4>
          </div>
        }
      >
        <div
          id="booking-details"
          className="flex flex-col gap-6 max-h-[100%] md:max-h-[400px] max-w-[320px] w-[320px] min-w-[320px] md:min-w-[550px] md:w-[550px] md:max-w-[550px] overflow-y-auto p-[0px] md:p-4"
        >
          <div className="flex flex-row items-center justify-between w-full">
            <h5 className="text-[14px] sm:text-[16px] md:text-[20px] font-[400]">
              Booking ID
            </h5>
            <p className="text-[#333333] text-[14px] sm:text-[16px] md:text-[20px] font-[600] text-right">
              {bookingDetails.bookingId}
            </p>
          </div>
          <div className="flex flex-row items-center justify-between  w-full">
            <h5 className="text-[14px] sm:text-[16px] md:text-[20px] font-[400]">
              Name
            </h5>
            <p className="text-[#333333] text-[14px] sm:text-[16px] md:text-[20px] font-[600] text-right">
              {bookingDetails.name}
            </p>
          </div>
          <div className="flex flex-row items-center justify-between  w-full">
            <h5 className="text-[14px] sm:text-[16px] md:text-[20px] font-[400]">
              Check-in Date
            </h5>
            <p className="text-[#333333] text-[14px] sm:text-[16px] md:text-[20px] font-[600] text-right">
              {bookingDetails.checkInDate}
            </p>
          </div>
          <div className="flex flex-row items-center justify-between  w-full">
            <h5 className="text-[14px] sm:text-[16px] md:text-[20px] font-[400]">
              Check-out Date
            </h5>
            <p className="text-[#333333] text-[14px] sm:text-[16px] md:text-[20px] font-[600] text-right">
              {bookingDetails.checkOutDate}
            </p>
          </div>
          <div className="flex flex-row items-start justify-between  w-full">
            <h5 className="text-[14px] sm:text-[16px] md:text-[20px] font-[400]">
              Amenities
            </h5>
            <span className="flex flex-col gap-2 text-[#333333] text-[14px] sm:text-[16px] md:text-[20px] font-[600] text-right">
              {bookingDetails.amenities.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </span>
          </div>
          <div className="flex flex-row items-center justify-between  w-full">
            <h5 className="text-[14px] sm:text-[16px] md:text-[20px] font-[400]">
              Total Price
            </h5>
            <p className="text-[#333333] text-[14px] sm:text-[16px] md:text-[20px] font-[600] text-right">
              {bookingDetails.totalPrice}
            </p>
          </div>
          <div className="flex flex-row items-center justify-between  w-full">
            <h5 className="text-[14px] sm:text-[16px] md:text-[20px] font-[400]">
              Status
            </h5>
            <p className="text-[#333333] text-[14px] sm:text-[16px] md:text-[20px] font-[600] text-right">
              {bookingDetails.status}
            </p>
          </div>
          <div className="flex flex-col items-center gap-4  w-full">
            <button
              onClick={handleDownload}
              className="w-full bg-primary h-[40px] md:h-[50px] font-[400] text-[14px] sm:text-[16px] md:text-[20px] rounded-lg text-white"
            >
              Download
            </button>
            <button
              onClick={handleClose}
              className="w-full bg-[#E4E4E4] h-[40px] md:h-[50px] font-[400] text-[14px] sm:text-[16px] md:text-[20px] rounded-lg text-[#4A4A4A]"
            >
              Cancel
            </button>
          </div>
        </div>
      </Modals>
      <form
        className="flex flex-col gap-2 bg-[#0000002B] rounded-lg p-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          placeholder="Enter Booking ID"
          className="w-full h-[30px] rounded-lg p-3"
          {...register("bookingId", { required: "Booking Id is required" })}
        />
        {errors.bookingId?.message && (
          <Text type="danger">{errors.bookingId.message}</Text>
        )}
        <Button
          className="bg-primary text-white text-[9px] w-32 self-end font-[600]"
          htmlType="submit"
        >
          View Booking
        </Button>
      </form>
    </>
  );
}

export default BookingForm;
