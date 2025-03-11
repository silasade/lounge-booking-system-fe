import React from "react";
import { useForm, Controller } from "react-hook-form";
import { DatePicker, Typography } from "antd";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
const { Text } = Typography;
type Input = {
  category: string;
  from: string;
  to: string;
  minAmount: number;
  maxAmount: number;
};
type Prop = {
  handleCancel: () => void;
};
function FilterForm({ handleCancel }: Prop) {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Input>();
  const onSubmit = (data: Input) => {
    console.log(data);
    handleCancel();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 w-full">
      {/* Price */}
      <div className="flex flex-col gap-2 w-full">
        <Label className="text-[14px] font-medium text-[#464748]">
          Expense type{" "}
        </Label>
        <Controller
          control={control}
          name="category"
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
        {errors.category && (
          <Text type="danger">{errors.category.message}</Text>
        )}
      </div>

      <div className="flex flex-row gap-2 w-full">
        <div className="flex flex-col gap-2 w-full">
          <Label className="text-[14px] font-medium text-[#464748]">
           From
          </Label>
          <Controller
            name="from"
            control={control}
            rules={{ required: "Date is required" }}
            render={({ field }) => (
              <DatePicker
                {...field}
                onChange={(date, dateString) => field.onChange(dateString)}
              />
            )}
          />

          {errors.from && <Text type="danger">{errors.from.message}</Text>}
        </div>
        <div className="flex flex-col gap-2 w-full">
          <Label className="text-[14px] font-medium text-[#464748]">
            To
          </Label>
          <Controller
            name="to"
            control={control}
            rules={{ required: "Date is required" }}
            render={({ field }) => (
              <DatePicker
                {...field}
                onChange={(date, dateString) => field.onChange(dateString)}
              />
            )}
          />

          {errors.to && <Text type="danger">{errors.to.message}</Text>}
        </div>
      </div>

      <div className="flex flex-row gap-2 w-full">
        <div className="flex flex-col gap-2 w-full">
          <Label className="text-[14px] font-medium text-[#464748]">
            Min amount{" "}
          </Label>
          <input
            {...register("minAmount", {
              required: "Guest capacity is required",
            })}
            placeholder="Enter amount"
            type="number"
            className="border border-[#E4E4E4] rounded-lg h-[40px] px-2 placeholder-gray-500"
          />
          {errors.minAmount && (
            <Text type="danger">{errors.minAmount.message}</Text>
          )}
        </div>
        <div className="flex flex-col gap-2 w-full">
          <Label className="text-[14px] font-medium text-[#464748]">
            Max amount{" "}
          </Label>
          <input
            {...register("maxAmount", {
              required: "Guest capacity is required",
            })}
            placeholder="Enter amount"
            type="number"
            className="border border-[#E4E4E4] rounded-lg h-[40px] px-2 placeholder-gray-500"
          />
          {errors.maxAmount && (
            <Text type="danger">{errors.maxAmount.message}</Text>
          )}
        </div>
      </div>
      <div className="flex justify-end gap-2 mt-4">
        <button type="submit" className="text-white bg-[#74C0DB] p-2 rounded-lg">
          Apply
        </button>
      </div>
    </form>
  );
}

export default FilterForm;
