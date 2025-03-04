"use client";
import { Button, Input, Typography } from "antd";
import React from "react";
import { useForm, Controller } from "react-hook-form";

const { Text } = Typography;

type Inputs = {
  newPassword: string;
  confirmPassword: string;
};

function ChangePassword() {
  const {
    control,
    handleSubmit,
    watch,
    formState: { isSubmitting, errors },
  } = useForm<Inputs>();

  const newPassword = watch("newPassword");

  const onSubmit = (data: Inputs) => {
    console.log(data);
  };

  return (
    <div className="flex flex-col gap-5 w-full">
      <div className="text-center flex flex-col gap-3">
        <h1 className="font-bold text-3xl">New Password</h1>
        <h5 className="font-normal text-sm text-gray-500">
          You can create a new password, please don’t forget this one too.
        </h5>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="flex flex-col gap-2">
          <h5 className="text-lg font-medium text-gray-700">New Password</h5>
          <Controller
            control={control}
            name="newPassword"
            rules={{
              required: "Please enter your password",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            }}
            render={({ field }) => (
              <Input.Password
                {...field}
                placeholder="****************"
                status={errors.newPassword ? "error" : ""}
                className="rounded-lg bg-white focus:bg-white hover:bg-white h-14 border border-gray-300"
              />
            )}
          />
          {errors.newPassword && (
            <Text type="danger">{errors.newPassword.message}</Text>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <h5 className="text-lg font-medium text-gray-700">
            Confirm Password
          </h5>
          <Controller
            control={control}
            name="confirmPassword"
            rules={{
              required: "Please confirm your password",
              validate: (value) =>
                value === newPassword || "Passwords do not match",
            }}
            render={({ field }) => (
              <Input.Password
                {...field}
                placeholder="****************"
                status={errors.confirmPassword ? "error" : ""}
                className="rounded-lg bg-white focus:bg-white hover:bg-white h-14 border border-gray-300"
              />
            )}
          />
          {errors.confirmPassword && (
            <Text type="danger">{errors.confirmPassword.message}</Text>
          )}
        </div>

        <Button
          loading={isSubmitting}
          htmlType="submit"
          className="w-full text-white bg-primary rounded-lg h-12 border-none hover:bg-primary-dark font-[500] text-[20px]"
        >
          Confirm
        </Button>
      </form>
    </div>
  );
}

export default ChangePassword;
