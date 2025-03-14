"use client";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Button, Checkbox, Input, Typography } from "antd";
import Link from "next/link";

const { Text } = Typography;
type Inputs = {
  email: string;
  password: string;
};
function Login() {
  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>();

  const onSubmit = (data: Inputs) => {
    console.log(data);
  };
  return (
    <div className="grid place-items-center bg-[url('/imgs/loginBg.webp')] w-100 h-screen bg-center bg-no-repeat bg-cover">
      <div className="w-3/5 h-fit bg-[#5A5B5B99] backdrop-blur-sm rounded-lg p-10 flex flex-col gap-5">
        <div className="text-center text-secondary flex flex-col gap-3 ">
          <h1 className="font-[700] text-[36px]">
            Welcome to Nana’s Lodge Staff Portal
          </h1>
          <h5 className="font-[400] text-[20px]">
            Welcome back! Please enter your details{" "}
          </h5>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
          <div className="flex flex-col gap-2 w-full">
            <h5 className="text-[20px] font-[400] text-[#FBFDFF]">Admin</h5>
            <Controller
              control={control}
              name="email"
              rules={{ required: "Please enter your Id" }}
              render={({ field }) => (
                <Input
                  {...field}
                  placeholder="Admin ID"
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
          <div className="flex flex-col gap-2 w-full">
            <h5 className="text-[20px] font-[400] text-[#FBFDFF]">Password</h5>
            <Controller
              control={control}
              name="password"
              rules={{ required: "Please enter your password" }}
              render={({ field }) => (
                <Input.Password
                  {...field}
                  placeholder="****************"
                  status={errors.password ? "error" : ""}
                  className={`rounded-lg bg-white focus:bg-white hover:bg-white  h-[60px]`}
                />
              )}
            />

            {errors.password?.message && (
              <Text type="danger">{errors.password.message}</Text>
            )}
          </div>
          <div className="flex flex-row justify-between items-center text-secondary text-[15px] font-[400]">
            <Checkbox className="text-secondary bg-transparent">
              Remember me
            </Checkbox>
            <Link href="/reset-password">Forgot password?</Link>
          </div>
          <Button
            loading={isSubmitting}
            htmlType="submit"
            className="w-full  text-white bg-primary rounded-lg border-0 h-[50px] font-[500] text-[20px]"
          >
            Sign in
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Login;
