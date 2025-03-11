import React from "react";
import { useForm, Controller } from "react-hook-form";
import { DatePicker, Typography, Button } from "antd";
import { Label } from "@/components/ui/label";

const { Text } = Typography;
type Inputs = {
  service: string;
  date: string;
  amount: number;
  method: string;
  transactionId: string;
};
type Prop = {
  handleCancel: () => void;
  id?: string;
};
function RevenueForm({ handleCancel, id }: Prop) {
  console.log(id);
  const {
    register,
    handleSubmit,
    control,
    formState: { isSubmitting, errors },
  } = useForm<Inputs>();

  const onSubmit = (data: Inputs) => {
    console.log(data);
    handleCancel();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 w-full">
      {/* Price */}
      <div className="flex flex-col gap-2 w-full">
        <Label className="text-[14px] font-medium text-[#464748]">
          Services{" "}
        </Label>
        <input
          {...register("service", { required: "Service type is required" })}
          placeholder="Enter service type"
          type="text"
          className="border border-[#E4E4E4] rounded-lg h-[40px] px-2 placeholder-gray-500"
        />
        {errors.service && <Text type="danger">{errors.service.message}</Text>}
      </div>

      {/* Discount */}
      <div className="flex flex-col gap-2 w-full">
        <Label className="text-[14px] font-medium text-[#464748]">Date</Label>
        <Controller
          name="date"
          control={control}
          rules={{ required: "Date is required" }}
          render={({ field }) => (
            <DatePicker
              {...field}
              onChange={(date, dateString) => field.onChange(dateString)}
              placeholder="Enter date"
            />
          )}
        />

        {errors.date && <Text type="danger">{errors.date.message}</Text>}
      </div>
      <div className="flex flex-col gap-2 w-full">
        <Label className="text-[14px] font-medium text-[#464748]">
          Payment
        </Label>
        <input
          {...register("method", { required: "Payment method is required" })}
          placeholder="Enter payment method"
          type="text"
          className="border border-[#E4E4E4] rounded-lg h-[40px] px-2 placeholder-gray-500"
        />
        {errors.method && <Text type="danger">{errors.method.message}</Text>}
      </div>
      <div className="flex flex-col gap-2 w-full">
        <Label className="text-[14px] font-medium text-[#464748]">
          Amount{" "}
        </Label>
        <input
          {...register("amount", { required: "Guest capacity is required" })}
          placeholder="Enter amount"
          type="number"
          className="border border-[#E4E4E4] rounded-lg h-[40px] px-2 placeholder-gray-500"
        />
        {errors.amount && <Text type="danger">{errors.amount.message}</Text>}
      </div>
      <div className="flex flex-col gap-2 w-full">
        <Label className="text-[14px] font-medium text-[#464748]">
          Transaction ID
        </Label>
        <input
          {...register("transactionId", {
            required: "Transaction id is required",
          })}
          placeholder="Enter payment method"
          type="text"
          className="border border-[#E4E4E4] rounded-lg h-[40px] px-2 placeholder-gray-500"
        />
        {errors.transactionId && (
          <Text type="danger">{errors.transactionId.message}</Text>
        )}
      </div>
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

export default RevenueForm;
