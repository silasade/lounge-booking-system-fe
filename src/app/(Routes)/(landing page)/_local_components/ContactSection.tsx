"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { Button, Typography } from "antd";
const { Text } = Typography;
type Inputs = {
  name: string;
  email: string;
  message: string;
};
function ContactSection() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<Inputs>();
  const onSubmit = async (data: Inputs) => {
    try {
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex flex-col items-center gap-8 p-20 pl-30 pr-30 border-b  border-borderColor">
      <h2 className="text-secondary text-[32px] font-[700] text-center">
        Contact Us
      </h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 w-3/5 border-heroText border rounded-lg p-6"
      >
        <div className="flex flex-col gap-2 w-full">
          <h5 className="text-[20px] font-[400]">Full name</h5>
          <input
            type="text"
            placeholder="Micheal"
            {...register("name")}
            className="w-100 h-15 p-3 border-heroText border rounded-sm"
          />
          {errors.name?.message && (
            <Text type="danger">{errors.name.message}</Text>
          )}
        </div>
        <div className="flex flex-col gap-2 w-full">
          <h5 className="text-[20px] font-[400]">Email</h5>
          <input
            type="email"
            placeholder="yourname@gmail.com"
            {...register("email")}
            className="w-100 h-15 p-3 border-heroText border rounded-sm"
          />
          {errors.email?.message && (
            <Text type="danger">{errors.email.message}</Text>
          )}
        </div>
        <div className="flex flex-col gap-2 w-full">
          <h5 className="text-[20px] font-[400]">Type your message</h5>
          <textarea
            {...register("message")}
            className="w-100 h-64 border-heroText border rounded-sm"
          />
          {errors.name?.message && (
            <Text type="danger">{errors.name.message} </Text>
          )}
        </div>
        <Button
          loading={isSubmitting}
          htmlType="submit"
          className="w-32 text-[18px] font-[400] h-10 border-heroText border rounded-sm"
        >
          Send
        </Button>
      </form>
    </div>
  );
}

export default ContactSection;
