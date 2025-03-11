"use client";
import { Label } from "@/components/ui/label";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Button, TimePicker, Typography } from "antd";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import dayjs from "dayjs";

const { Text } = Typography;

type Inputs = {
  discount?: number;
  price: number;
  capacity: number;
  time: [string, string];
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
    console.log({
      ...data,
      time: data.time.map((t) => dayjs(t).format("HH:mm")), // Format time
    });
    handleCancel();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 w-full">
      {/* Price */}
      <div className="flex flex-col gap-2 w-full">
        <Label className="text-[14px] font-medium text-[#464748]">
          Price (per hour)
        </Label>
        <input
          {...register("price", { required: "Price is required" })}
          placeholder="Enter price"
          type="number"
          className="border border-[#E4E4E4] rounded-lg h-[40px] px-2 placeholder-gray-500"
        />
        {errors.price && <Text type="danger">{errors.price.message}</Text>}
      </div>

      {/* Discount */}
      <div className="flex flex-col gap-2 w-full">
        <Label className="text-[14px] font-medium text-[#464748]">
          Discounts for multiple hours
        </Label>
        <input
          {...register("discount", {
            min: { value: 0, message: "Discount cannot be negative" },
          })}
          placeholder="Enter discount"
          type="number"
          className="border border-[#E4E4E4] rounded-lg h-[40px] px-2 placeholder-gray-500"
        />
        {errors.discount && (
          <Text type="danger">{errors.discount.message}</Text>
        )}
      </div>

      {/* Guest Capacity */}
      <div className="flex flex-col gap-2 w-full">
        <Label className="text-[14px] font-medium text-[#464748]">
          Guest Capacity
        </Label>
        <input
          {...register("capacity", { required: "Guest capacity is required" })}
          placeholder="Enter guest capacity"
          type="number"
          className="border border-[#E4E4E4] rounded-lg h-[40px] px-2 placeholder-gray-500"
        />
        {errors.capacity && (
          <Text type="danger">{errors.capacity.message}</Text>
        )}
      </div>

      {/* Booking Time Slots */}
      <div className="flex flex-col gap-2 w-full">
        <Label className="text-[14px] font-medium text-[#464748]">
          Booking Time Slots
        </Label>
        <Controller
          control={control}
          name="time"
          rules={{ required: "Time slots are required" }}
          render={({ field }) => (
            <TimePicker.RangePicker
              value={
                field.value
                  ? [dayjs(field.value[0]), dayjs(field.value[1])]
                  : null
              }
              onChange={(values) =>
                field.onChange(
                  values ? values.map((val) => val?.toISOString()) : []
                )
              }
              format="HH:mm"
              placeholder={["Start Time", "End Time"]}
              className=":h-[40px] rounded-md"
            />
          )}
        />
        {errors.time && <Text type="danger">{errors.time.message}</Text>}
      </div>

      {/* Availability */}
      <div>
        <Label className="text-[14px] font-medium text-[#464748]">
          Availability (Enable/Disable)
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

export default Form;
