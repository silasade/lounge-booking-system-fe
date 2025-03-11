"use client";
import { Label } from "@/components/ui/label";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Button, Typography } from "antd";
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
  price: number;
  availability: boolean;
};
type Prop = {
  handleCancel: () => void;
  id?: string;
};
function Form({ handleCancel, id }: Prop) {
  console.log(id);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>();
  const onSubmit = (data: Inputs) => {
    console.log(data);
    handleCancel();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 w-full">
      <div className="flex flex-col gap-2 w-full">
        <Label className="text-[14px] font-medium text-[#464748]">
          Amenities name{" "}
        </Label>
        <input
          {...register("name", { required: "Amenities name is required" })}
          placeholder="Enter amenities name"
          type="text"
          className="border border-[#E4E4E4] rounded-lg h-[40px] px-2 placeholder-gray-500"
        />
        {errors.name && <Text type="danger">{errors.name.message}</Text>}
      </div>
      <div className="flex flex-col gap-2 w-full">
        <Label className="text-[14px] font-medium text-[#464748]">
          Price(per-day charge)
        </Label>
        <input
          {...register("price", { required: "Amenities name is required" })}
          placeholder="Enter price"
          type="number"
          className="border border-[#E4E4E4] rounded-lg h-[40px] px-2 placeholder-gray-500"
        />
        {errors.price && <Text type="danger">{errors.price.message}</Text>}
      </div>
      <div>
        <Label className="text-[14px] font-medium text-[#464748]">
          Availability(Enable/Disable)
        </Label>
        <Controller
          control={control}
          name="availability"
          rules={{ required: "Availability is required" }}
          render={({ field }) => (
            <Select onValueChange={(value) => field.onChange(value === "true")}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select availability" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="true">Enable</SelectItem>
                <SelectItem value="false">Disable</SelectItem>
              </SelectContent>
            </Select>
          )}
        />
        {errors.availability && (
          <Text type="danger">{errors.availability.message}</Text>
        )}
      </div>
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

export default Form;
