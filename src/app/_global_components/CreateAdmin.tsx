"use client";
import { Label } from "@/components/ui/label";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Button, Input, Typography } from "antd";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const { Text } = Typography;

type Inputs = {
  name: string;
  email: string;
  pNumber: string;
  password: string;
  confirmPassword: string;
  role: string;
  status: string;
};

type Prop = {
  handleCancel: () => void;
  id?: string;
};

function CreateAdmin({ handleCancel, id }: Prop) {
  console.log(id);

  const {
    register,
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
          Full name{" "}
        </Label>
        <input
          {...register("name", { required: "Name is required" })}
          placeholder="Enter full name"
          type="text"
          className="border border-[#E4E4E4] rounded-lg h-[40px] px-2 placeholder-gray-500"
        />
        {errors.name && <Text type="danger">{errors.name.message}</Text>}
      </div>

      {/* Discount */}
      <div className="flex flex-col gap-2 w-full">
        <Label className="text-[14px] font-medium text-[#464748]">
          Email address{" "}
        </Label>
        <input
          {...register("email", {
            min: { value: 0, message: "Discount cannot be negative" },
          })}
          placeholder="Enter email"
          type="text"
          className="border border-[#E4E4E4] rounded-lg h-[40px] px-2 placeholder-gray-500"
        />
        {errors.email && <Text type="danger">{errors.email.message}</Text>}
      </div>

      {/* Guest Capacity */}
      <div className="flex flex-col gap-2 w-full">
        <Label className="text-[14px] font-medium text-[#464748]">
          Phone Number{" "}
        </Label>
        <input
          {...register("pNumber", { required: "Phone number is required" })}
          placeholder="Enter phone no"
          type="number"
          className="border border-[#E4E4E4] rounded-lg h-[40px] px-2 placeholder-gray-500"
        />
        {errors.pNumber && <Text type="danger">{errors.pNumber.message}</Text>}
      </div>

      {/* Booking Time Slots */}
      <div className="flex flex-col gap-2 w-full">
        <Label className="text-[14px] font-medium text-[#464748]">
          Create Password{" "}
        </Label>
        <Controller
          control={control}
          name="password"
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
          Confirm Password
        </Label>
        <Controller
          control={control}
          name="confirmPassword"
          rules={{
            required: "Please confirm your password",
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
      <div className="flex flex-col gap-2">
        <Controller
          control={control}
          name="role"
          rules={{ required: "Role is required" }}
          render={({ field }) => (
            <Select onValueChange={field.onChange} value={field.value}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Assign role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="admin">Admin</SelectItem>
                <SelectItem value="super-admin">Super Admin</SelectItem>
                <SelectItem value="employee">Employee</SelectItem>
              </SelectContent>
            </Select>
          )}
        />

        {errors.role && <Text type="danger">{errors.role.message}</Text>}
      </div>
      <div className="flex flex-col gap-2">
        <Controller
          control={control}
          name="status"
          rules={{ required: "Admin role is required" }}
          render={({ field }) => (
            <Select onValueChange={field.onChange} value={field.value}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="enable">Enabled</SelectItem>
                <SelectItem value="disabled">Disabled</SelectItem>
              </SelectContent>
            </Select>
          )}
        />
        {errors.status && <Text type="danger">{errors.status.message}</Text>}
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

export default CreateAdmin;
