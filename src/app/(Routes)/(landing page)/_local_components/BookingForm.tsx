"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { Button, Typography } from "antd";
import { useRouter } from "next/navigation";
const { Text } = Typography;
type Input = {
  bookingId: string;
};
function BookingForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Input>();
  const onSubmit = (data: Input) => {
    router.push(`/${data.bookingId}`);
  };
  return (
    <form
      className="flex flex-col gap-2 w-64 bg-[#0000002B] rounded-lg p-4"
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
  );
}

export default BookingForm;
