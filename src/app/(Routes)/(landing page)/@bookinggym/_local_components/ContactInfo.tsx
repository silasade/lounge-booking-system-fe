"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { Typography } from "antd";
import { useGymPayment } from "@/app/_global_components/Context/GymContext";
const { Text } = Typography;
type Inputs = {
  name: string;
  email: string;
  phoneNo: string;
};
function ContactInfo() {
  const { setGymPaymentDetails, gymPaymentDetails } = useGymPayment();

  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit = async (data: Inputs) => {
    try {
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex flex-col justify-center items-center gap-8 pt-3 pb-3 w-100 md:p-20 md:pl-30 md:pr-30 border-b  border-borderColor">
      <div className="text-center">
        <h2 className="text-[18px] md:text-[24px] font-[700] ">Contact Us</h2>
        <h5 className="text-[16px] md:text-[20px]">Enter your details</h5>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 w-full md:w-4/5"
      >
        <div className="flex flex-col gap-2 w-full">
          <h5 className="text-[16px] md:text-[20px] font-[400]">Full name</h5>
          <input
            type="text"
            placeholder="Micheal"
            {...register("name")}
            onChange={(event) =>
              setGymPaymentDetails((prev) => ({
                ...prev,
                name: event.target.value,
              }))
            }
            className="w-100 h-[40px] md:h-[50px] p-3 border-heroText border rounded-lg"
          />
          {!gymPaymentDetails.name && <Text type="danger">Name is required</Text>}
        </div>
        <div className="flex flex-col gap-2 w-full">
          <h5 className="text-[16px] md:text-[20px] font-[400]">Email</h5>
          <input
            type="email"
            placeholder="yourname@gmail.com"
            {...register("email")}
            onChange={(event) =>
              setGymPaymentDetails((prev) => ({
                ...prev,
                email: event.target.value,
              }))
            }
            className="w-100 h-[40px] md:h-[50px] p-3 border-heroText border rounded-lg"
          />
          {!gymPaymentDetails.email && (
            <Text type="danger">Email is required</Text>
          )}
        </div>
        <div className="flex flex-col gap-2 w-full">
          <h5 className="text-[16px] md:text-[20px] font-[400]">Phone number</h5>
          <input
            type="tel"
            {...register("phoneNo")}
            placeholder="***********"
            onChange={(event) =>
              setGymPaymentDetails((prev) => ({
                ...prev,
                phoneNo: event.target.value,
              }))
            }
            className="w-100 h-[40px] md:h-[50px] border-heroText border rounded-lg p-3"
          />
          {!gymPaymentDetails.phoneNo && (
            <Text type="danger">Phone number is required </Text>
          )}
        </div>
      </form>
    </div>
  );
}

export default ContactInfo;
