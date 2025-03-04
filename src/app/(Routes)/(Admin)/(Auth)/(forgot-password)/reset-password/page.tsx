"use client";
import { Button, Typography } from "antd";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useRouter } from "next/navigation";

type OTPInputs = {
  otp: string;
};

const { Text } = Typography;

function OtpPage() {
  const router=useRouter()
  const {
    control,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<OTPInputs>();

  const onSubmit = (data: OTPInputs) => {
    console.log(data);
    router.push("/change-password")
  };

  return (
    <div className="flex flex-col gap-5 w-full">
      <div className="text-center flex flex-col gap-3">
        <h1 className="font-[700] text-[36px]">Forgot Password</h1>
        <h5 className="font-[400] text-[12px] text-[#757575]">
          You need to enter the 6-digit code we sent to your email address.
        </h5>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
        <Controller
          name="otp"
          control={control}
          rules={{
            required: "Please enter the 6-digit OTP",
            minLength: { value: 6, message: "OTP must be exactly 6 digits" },
            maxLength: { value: 6, message: "OTP must be exactly 6 digits" },
          }}
          render={({ field }) => (
            <InputOTP maxLength={6} {...field}>
              <InputOTPGroup className="flex gap-3 justify-center w-full">
                {[...Array(6)].map((_, index) => (
                  <InputOTPSlot
                    key={index}
                    index={index}
                    className="w-[78px] h-[90px] border border-[#E4E4E4] text-[20px]"
                  />
                ))}
              </InputOTPGroup>
            </InputOTP>
          )}
        />
        {errors.otp && (
          <Text type="danger" className="text-center">
            {errors.otp.message}
          </Text>
        )}

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

export default OtpPage;
