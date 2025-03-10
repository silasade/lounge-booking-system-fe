"use client";
import { Label } from "@/components/ui/label";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Button, Input, Typography } from "antd";

const { Text } = Typography;

type Inputs = {
  password: string;
  confirmPassword: string;
};

type Prop = {
  handleCancel: () => void;
};

function ResetPassword({ handleCancel }: Prop) {
  const {
    handleSubmit,
    control,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>();

  const onSubmit = (data: Inputs) => {
    console.log({
      ...data,
    });
    handleCancel();
  };
  const password = watch("password");
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 w-full">
      {/* Price */}

      <div className="flex flex-col gap-2 w-full">
        <Label className="text-[14px] font-medium text-[#464748]">
          New Password{" "}
        </Label>
        <Controller
          control={control}
          name="password"
          rules={{
            required: "Enter 8-digit password",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters",
            },
          }}
          render={({ field }) => (
            <Input.Password
              {...field}
              placeholder="****************"
              status={errors.password ? "error" : ""}
              className="border border-[#E4E4E4] rounded-lg h-[40px] px-2 placeholder-gray-500"
            />
          )}
        />
        {errors.password && (
          <Text type="danger">{errors.password.message}</Text>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <Label className="text-[14px] font-medium text-[#464748]">
          Enter 8-digit password{" "}
        </Label>
        <Controller
          control={control}
          name="confirmPassword"
          rules={{
            required: "Enter 8-digit password",
            validate: (value) => value === password || "Passwords do not match",
          }}
          render={({ field }) => (
            <Input.Password
              {...field}
              placeholder="****************"
              status={errors.confirmPassword ? "error" : ""}
              className="border border-[#E4E4E4] rounded-lg h-[40px] px-2 placeholder-gray-500"
            />
          )}
        />
        {errors.confirmPassword && (
          <Text type="danger">{errors.confirmPassword.message}</Text>
        )}
      </div>

      {/* Buttons */}
      <div className="flex justify-end gap-2 mt-4">
        <Button onClick={handleCancel} className="text-[#4A4A4A] bg-[#E4E4E4]">
          Cancel
        </Button>
        <Button
          loading={isSubmitting}
          htmlType="submit"
          className="text-white bg-[#74C0DB]"
        >
          Save
        </Button>
      </div>
    </form>
  );
}

export default ResetPassword;
