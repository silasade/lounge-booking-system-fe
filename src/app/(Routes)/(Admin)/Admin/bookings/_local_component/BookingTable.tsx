"use client";
import { Bin, View } from "@/app/_global_components/icons";
import PopOver from "@/app/_global_components/Shad ui/PopOver";
import DataTable from "@/app/_global_components/Shad ui/Tables";
import { ColumnDef } from "@tanstack/react-table";
import { Ellipsis } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
type ColumnsType = {
  id: string;
  name: string;
  email: string;
  type: string;
  status: string;
  payment: string;
  date: string;
};
function BookingTable() {
  const router = useRouter();
  const expenses: ColumnsType[] = [
    {
      id: "AB-357",
      name: "John Doe",
      email: "janeSmith@email.com",
      type: "Apartment",
      date: "01/01/2004",
      status: "Cancelled",
      payment: "Cancelled",
    },
    {
      id: "AB-358",
      name: "John Doe",
      email: "janeSmith@email.com",
      type: "Apartment",
      date: "01/01/2004",
      status: "Completed",
      payment: "Due",
    },
    {
      id: "AB-359",
      name: "John Doe",
      email: "janeSmith@email.com",
      type: "Pool",
      date: "01/01/2004",
      status: "Completed",
      payment: "Cancelled",
    },
    {
      id: "AB-360",
      name: "John Doe",
      email: "janeSmith@email.com",
      type: "Pool",
      date: "01/01/2004",
      status: "Cancelled",
      payment: "Due",
    },
    {
      id: "AB-361",
      name: "John Doe",
      email: "janeSmith@email.com",
      type: "Apartment",
      date: "01/01/2004",
      status: "Cancelled",
      payment: "Paid",
    },
    {
      id: "AB-362",
      name: "John Doe",
      email: "janeSmith@email.com",
      type: "Apartment",
      date: "01/01/2004",
      status: "Cancelled",
      payment: "Paid",
    },
    {
      id: "AB-363",
      name: "John Doe",
      email: "janeSmith@email.com",
      type: "Apartment",
      date: "01/01/2004",
      status: "Cancelled",
      payment: "Paid",
    },
  ];
  const columns: ColumnDef<ColumnsType>[] = [
    {
      accessorKey: "id",
      header: "ID",
      cell: ({ getValue }) => (
        <h6 className="text-[#1270B0] font-[400] text-[12px]">
          {getValue() as string}
        </h6>
      ),
    },
    {
      accessorKey: "name",
      header: "Name",
      cell: ({ getValue }) => (
        <h6 className="whitespace-nowrap overflow-hidden text-ellipsis">
          {getValue() as string}
        </h6>
      ),
    },
    {
      accessorKey: "email",
      header: "Email",
      cell: ({ getValue }) => (
        <h6 className="max-w-[140px] whitespace-nowrap overflow-hidden text-ellipsis">
          {getValue() as string}
        </h6>
      ),
    },
    {
      accessorKey: "type",
      header: "Service Type",
      cell: ({ getValue }) => <h6>{getValue() as string}</h6>,
    },
    {
      accessorKey: "date",
      header: "Booking Date",
      cell: ({ getValue }) => <h6>{getValue() as string}</h6>,
    },
    {
      accessorKey: "status",
      header: "Booking Status",
      cell: ({ getValue }) => (
        <h6
          className={`${
            getValue() === "Cancelled"
              ? "text-color_error bg-color_error"
              : "bg-color_success text-color-success"
          } bg-opacity-10 rounded-full w-[80px] text-center text-[12px] font-[600] flex items-center justify-center h-[30px]`}
        >
          {getValue() as string}
        </h6>
      ),
    },
    {
      accessorKey: "payment",
      header: "Payment",
      cell: ({ getValue }) => (
        <h6
          className={`${
            getValue() === "Cancelled"
              ? "text-color_error bg-color_error"
              : getValue() === "Paid"
              ? "bg-color_success text-color-success"
              : "bg-color_pending text-color_pending"
          } bg-opacity-10 rounded-full w-[80px] text-center text-[12px] font-[600] flex items-center justify-center h-[30px]`}
        >
          {getValue() as string}
        </h6>
      ),
    },
    {
      header: "Actions",
      cell: ({ row }) => (
        <PopOver
          trigger={<Ellipsis />}
          className="flex flex-col rounded-lg h-fit p-0"
        >
          <h5
            onClick={() =>
              router.push(`/Admin/bookings/view-booking?id=${row.original.id}`)
            }
            className="gap-2 cursor-pointer pt-[12px] pr-[20px] pb-[12px] pl-[20px] flex items-center border-b border-[#E1E1E1] text-[#959595] font-[400] text-[14px] h-[48px] hover:bg-[#FFF1E3] hover:text-secondary"
          >
            <View width={17} height={17} />
            View details
          </h5>
          <h5 className="gap-2 cursor-pointer pt-[12px] pr-[20px] pb-[12px] pl-[20px] flex items-center text-[#959595] font-[400] text-[14px] h-[48px] hover:bg-[#FFF1E3] hover:text-secondary">
            <Bin width={17} height={17} />
            Delete
          </h5>
        </PopOver>
      ),
    },
  ];
  return (
    <>
      <DataTable columns={columns} data={expenses} />
    </>
  );
}

export default BookingTable;
