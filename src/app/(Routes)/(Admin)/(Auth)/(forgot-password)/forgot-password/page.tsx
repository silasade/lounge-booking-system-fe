"use client";
import { Button, Input, Typography } from "antd";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { useRouter } from "next/navigation";

type OTPInputs = {
  email: string;
};

const { Text } = Typography;

function ForgotPassword() {
  const router = useRouter();
  const {
    control,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<OTPInputs>();

  const onSubmit = (data: OTPInputs) => {
    console.log(data);
    router.push("/reset-password");
  };

  return (
    <div className="flex flex-col gap-5 w-full">
      <div className="text-center flex flex-col gap-3">
        <h1 className="font-[700] text-[36px]">Forgot Password</h1>
        <h5 className="font-[400] text-[12px] text-[#757575]">
          Please enter your email address, an OTP will be sent to this email.
        </h5>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
        <div className="flex flex-col gap-2 w-full">
          <h5 className="text-[20px] font-[400] text-[#FBFDFF]">Email</h5>
          <Controller
            control={control}
            name="email"
            rules={{ required: "Please enter your email address" }}
            render={({ field }) => (
              <Input
                {...field}
                placeholder="email address"
                type="email"
                status={errors.email ? "error" : ""}
                className="p-3 rounded-lg bg-white h-[60px]"
              />
            )}
          />
          {errors.email?.message && (
            <Text type="danger">{errors.email.message}</Text>
          )}
        </div>

        <Button
          loading={isSubmitting}
          htmlType="submit"
          className="w-full text-white bg-primary rounded-lg border-0 h-[50px] hover:bg-white text-primary border border-primary font-[500] text-[20px]"
        >
          Reset
        </Button>
      </form>
    </div>
  );
}

export default ForgotPassword;
