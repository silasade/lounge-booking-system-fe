"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { Button, Typography } from "antd";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
const { Text } = Typography;

type Inputs = {
  name: string;
  images: FileList;
  description: string;
  type: string;
  facilities: string;
};
type Prop = {
  handleCancel: () => void;
};
function ApartmentForm({ handleCancel }: Prop) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>();

  const onSubmit = (data: Inputs) => {
    console.log(data);
    handleCancel();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 w-full">
      {/* Apartment Name */}
      <div className="flex flex-col gap-2 w-full">
        <Label className="text-[14px] font-medium text-[#464748]">
          Apartment Name
        </Label>
        <input
          {...register("name", { required: "Apartment name is required" })}
          placeholder="Enter apartment name"
          type="text"
          className="border border-[#E4E4E4] rounded-lg h-[40px] px-2 placeholder-gray-500"
        />
        {errors.name && <Text type="danger">{errors.name.message}</Text>}
      </div>

      {/* Images Upload */}
      <div className="flex flex-col gap-2 w-full">
        <Label
          htmlFor="picture"
          className="text-[14px] font-medium text-[#464748]"
        >
          Add Images
        </Label>
        <Input
          {...register("images", { required: "Please add up to 3 images" })}
          id="picture"
          type="file"
          multiple
          accept="image/*"
          className="border border-[#E4E4E4] rounded-lg h-[40px] px-2"
        />
        {errors.images && <Text type="danger">{errors.images.message}</Text>}
      </div>

      {/* Apartment Description */}
      <div className="flex flex-col gap-2 w-full">
        <Label className="text-[14px] font-medium text-[#464748]">
          Apartment Description
        </Label>
        <textarea
          {...register("description", {
            required: "Apartment description is required",
          })}
          placeholder="Enter a description..."
          className="border border-[#E4E4E4] rounded-lg h-[120px] p-2 placeholder-gray-500"
        />
        {errors.description && (
          <Text type="danger">{errors.description.message}</Text>
        )}
      </div>

      {/* Apartment Type */}
      <div className="flex flex-col gap-2 w-full">
        <Label className="text-[14px] font-medium text-[#464748]">
          Apartment Type
        </Label>
        <input
          {...register("type", { required: "Apartment type is required" })}
          placeholder="Enter apartment type"
          type="text"
          className="border border-[#E4E4E4] rounded-lg h-[40px] px-2 placeholder-gray-500"
        />
        {errors.type && <Text type="danger">{errors.type.message}</Text>}
      </div>

      {/* Facilities */}
      <div className="flex flex-col gap-2 w-full">
        <Label className="text-[14px] font-medium text-[#464748]">
          Facilities
        </Label>
        <input
          {...register("facilities", { required: "Facilities are required" })}
          placeholder="Add facilities"
          type="text"
          className="border border-[#E4E4E4] rounded-lg h-[40px] px-2 placeholder-gray-500"
        />
        {errors.facilities && (
          <Text type="danger">{errors.facilities.message}</Text>
        )}
      </div>

      {/* Buttons */}
      <div className="flex justify-end gap-2 mt-4">
        <button
          type="button"
          onClick={handleCancel}
          className="text-[14px] font-medium h-[40px] text-[#4A4A4A] bg-[#E4E4E4] px-4 py-2 rounded-lg"
        >
          Cancel
        </button>
        <Button
          loading={isSubmitting}
          htmlType="submit"
          className="text-[14px] font-medium h-[40px] text-white bg-[#74C0DB] px-4 py-2 rounded-lg"
        >
          Save
        </Button>
      </div>
    </form>
  );
}

export default ApartmentForm;
