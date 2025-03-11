"use client";
import React, { useState } from "react";
import PopOver from "@/app/_global_components/shadcn-ui/PopOver";
import Switchs from "@/app/_global_components/shadcn-ui/Switchs";
import DataTable from "@/app/_global_components/shadcn-ui/Tables";
import { ColumnDef } from "@tanstack/react-table";
import { Ellipsis } from "lucide-react";
import Link from "next/link";
import { Bin, Edit } from "@/app/_global_components/icons";
import GymForm from "./GymForm";
import Modals from "@/app/_global_components/Modal";

type ColumnsType = {
  id: string;
  price: number;
  status: boolean;
  guestCapacity: string;
};

function GymService() {
  const [open, setOpen] = useState<boolean>(false);
  const [id, setID] = useState<string>("");

  const handleCancel = () => {
    setOpen((prev) => !prev);
  };
  const handleID = (id: string) => {
    setID(id);
    handleCancel();
  };
  const gymService: ColumnsType[] = [
    { id: "1", guestCapacity: "1-5 guests: ₦5,000", price: 1000, status: true },
    {
      id: "2",
      guestCapacity: "6-10 guests: ₦5,000",
      price: 1200,
      status: false,
    },
    {
      id: "3",
      guestCapacity: " 10-15 guests: ₦5,000",
      price: 1300,
      status: true,
    },
    {
      id: "4",
      guestCapacity: "15-20 guests: ₦5,000",
      price: 1000,
      status: false,
    },
  ];

  const columns: ColumnDef<ColumnsType>[] = [
    {
      accessorKey: "price",
      header: "Price(per hour)",
      cell: ({ getValue }) => (
        <h6>&#8358;&nbsp;{(getValue() as number).toLocaleString()}</h6>
      ),
    },
    {
      accessorKey: "guestCapacity",
      header: "Guest Capacity",
      cell: ({ getValue }) => <h6>{getValue() as string}</h6>,
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => (
        <Switchs isChecked={row.original.status} id={row.original.id} />
      ),
    },
    {
      header: "Actions",
      cell: ({ row }) => (
        <PopOver
          trigger={<Ellipsis />}
          className="flex flex-col rounded-lg h-fit p-0 w-[260px]"
        >
          <h5
            onClick={() => handleID(row.original.id)}
            className="gap-2 cursor-pointer pt-[12px] pr-[20px] pb-[12px] pl-[20px] flex items-center border-b border-[#E1E1E1] text-[#959595] font-[400] text-[14px] h-[48px] hover:bg-[#FFF1E3] hover:text-secondary"
          >
            <Edit width={17} height={17} />
            Edit
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
      <Modals handleCancel={handleCancel} open={open}>
        <div className="w-[500px]">
          <GymForm handleCancel={handleCancel} id={id} />
        </div>
        ;
      </Modals>
      <div className="flex flex-col gap-5">
        <div className="flex justify-between items-center">
          <h3 className="text-[24px] font-[600]">Gym Services</h3>
          <Link
            href="/admin/amenities/create-gym"
            className="bg-secondary rounded-md text-white p-2"
          >
            Add gym
          </Link>
        </div>
        <DataTable columns={columns} data={gymService} />
      </div>
    </>
  );
}

export default GymService;
