"use client";
import { Bin, Edit, Filter } from "@/app/_global_components/icons";
import Modals from "@/app/_global_components/Modal";
import PopOver from "@/app/_global_components/shadcn-ui/PopOver";
import DataTable from "@/app/_global_components/shadcn-ui/Tables";
import { ColumnDef } from "@tanstack/react-table";
import { Ellipsis } from "lucide-react";
import React, { useState } from "react";
import FilterForm from "./FilterForm";
import RevenueForm from "./RevenueForm";
type ColumnsType = {
  id: string;
  date: string;
  recordedBy: string;
  assignedTo: string;
  amount: number;
  transactionId: string;
  method: string;
};
function RevenueTable() {
  const [open, setOpen] = useState<boolean>(false);
  const [openFilter, setOpenFilter] = useState<boolean>(false);

  const [id, setID] = useState<string>("");

  const handleCancel = () => {
    setOpen((prev) => !prev);
  };
  const handleFilterForm = () => {
    setOpenFilter((prev) => !prev);
  };
  const handleID = (id: string) => {
    setID(id);
    handleCancel();
  };
  const expenses: ColumnsType[] = [
    {
      id: "1",
      amount: 50000,
      assignedTo: "John Doe",
      transactionId: "###########",
      date: "01 Jan 2025",
      method: "POS",
      recordedBy: "Jane Doe",
    },
    {
      id: "2",
      amount: 50000,
      assignedTo: "John Doe",
      transactionId: "###########",
      date: "01 Jan 2025",
      method: "Online",
      recordedBy: "Jane Doe",
    },
    {
      id: "3",
      amount: 50000,
      assignedTo: "John Doe",
      transactionId: "###########",
      date: "01 Jan 2025",
      method: "POS",
      recordedBy: "Jane Doe",
    },
    {
      id: "4",
      amount: 50000,
      assignedTo: "John Doe",
      transactionId: "###########",
      date: "01 Jan 2025",
      method: "Online",
      recordedBy: "Jane Doe",
    },
  ];
  const columns: ColumnDef<ColumnsType>[] = [
    {
      accessorKey: "date",
      header: "Date(Transaction Date)",
      cell: ({ getValue }) => <h6>{getValue() as string}</h6>,
    },
    {
      accessorKey: "recordedBy",
      header: "Recorded by who",
      cell: ({ getValue }) => <h6>{getValue() as string}</h6>,
    },
    {
      accessorKey: "assignedTo",
      header: "Assigned to who",
      cell: ({ getValue }) => <h6>{getValue() as string}</h6>,
    },
    {
      accessorKey: "method",
      header: "Payment method",
      cell: ({ getValue }) => <h6>{getValue() as string}</h6>,
    },
    {
      accessorKey: "amount",
      header: "Amount",
      cell: ({ getValue }) => (
        <h6>&#8358;&nbsp;{(getValue() as number).toLocaleString()}</h6>
      ),
    },
    {
      accessorKey: "transactionId",
      header: "Transaction ID",
      cell: ({ getValue }) => <h6>{getValue() as string}</h6>,
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
      <div className="flex flex-col gap-5">
        <div className="flex justify-between items-center">
          <h3 className="text-[24px] font-[600]">Total Transactions </h3>
          <div className="flex flex-row gap-2 items-center">
            <div
              onClick={handleCancel}
              className="bg-secondary rounded-md text-white p-2"
            >
              Add transaction
            </div>

            <div
              onClick={handleFilterForm}
              className="cursor-pointer flex items-center gap-2 p-2 border border-[#E4E4E4] text-[14px] font-[400] text-[#4A4A4A]"
            >
              <Filter color="#B3B3B3" />
              Filter by date
            </div>
          </div>
        </div>
        <DataTable columns={columns} data={expenses} />
      </div>
      <Modals handleCancel={handleFilterForm} open={openFilter}>
        <div className="w-[500px]">
          <FilterForm handleCancel={handleFilterForm} />
        </div>
      </Modals>
      <Modals open={open} handleCancel={handleCancel}>
        <div className="w-[500px]">
          <RevenueForm handleCancel={handleCancel} id={id} />
        </div>
      </Modals>
    </>
  );
}

export default RevenueTable;
