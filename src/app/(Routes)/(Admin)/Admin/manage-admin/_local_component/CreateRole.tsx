"use client";
import { Label } from "@/components/ui/label";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Button, Typography } from "antd";
import { Checkbox } from "@/components/ui/checkbox";

const { Text } = Typography;

type Inputs = {
  name: string;
  permissions: string[];
};

type Prop = {
  handleCancel: () => void;
  id?: string;
};

const PERMISSIONS = [
  { label: "Manage bookings", value: "manage_bookings" },
  { label: "Manage users", value: "manage_users" },
  { label: "Manage amenities", value: "manage_amenities" },
  { label: "Process payments", value: "process_payments" },
  { label: "View amenities", value: "view_amenities" },
  { label: "View bookings", value: "view_bookings" },
];

function CreateAdmin({ handleCancel, id }: Prop) {
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
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 w-full">
      {/* Role Name */}
      <div className="flex flex-col gap-2 w-full">
        <Label className="text-[14px] font-medium text-[#464748]">
          Role Name
        </Label>
        <input
          {...register("name", { required: "Role name is required" })}
          placeholder="Enter role name"
          type="text"
          className="border border-[#E4E4E4] rounded-lg h-[40px] px-2 placeholder-gray-500"
        />
        {errors.name && <Text type="danger">{errors.name.message}</Text>}
      </div>

      {/* Permissions */}
      <div className="flex flex-col gap-2 w-full">
        <Label className="text-[14px] font-medium text-[#464748]">
          Permissions
        </Label>
        <div className="grid grid-cols-2 gap-4 justify-between">
          {PERMISSIONS.map(({ label, value }) => (
            <div key={value} className="flex items-center space-x-2">
              <Controller
                name="permissions"
                control={control}
                render={({ field }) => (
                  <Checkbox
                    id={value}
                    checked={field.value?.includes(value)}
                    onCheckedChange={(checked) => {
                      field.onChange(
                        checked
                          ? [...(field.value || []), value]
                          : field.value?.filter((perm) => perm !== value)
                      );
                    }}
                  />
                )}
              />
              <label
                htmlFor={value}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {label}
              </label>
            </div>
          ))}
        </div>
      </div>
      {errors.permissions && (
        <Text type="danger">{errors.permissions.message}</Text>
      )}

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
