"use client";
import React, { useState } from "react";
import PopOver from "@/app/_global_components/Shad ui/PopOver";
import Switchs from "@/app/_global_components/Shad ui/Switchs";
import DataTable from "@/app/_global_components/Shad ui/Tables";
import { ColumnDef } from "@tanstack/react-table";
import { Ellipsis } from "lucide-react";
import { Bin, Cycle, Edit, Filter } from "@/app/_global_components/icons";
import Modals from "@/app/_global_components/Modal";
import CreateAdmin from "./CreateAdmin";
import ResetPassword from "./ResetPassword";

type ColumnsType = {
  id: string;
  name: string;
  email: string;
  pNumber: string;
  role: string;
  status: boolean;
};

function AdminTable() {
  const [openPasswordForm, setOpenPasswordForm] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const [id, setID] = useState<string>("");

  const handlePasswordForm = () => {
    setOpenPasswordForm((prev) => !prev);
  };
  const handleCancel = () => {
    setOpen((prev) => !prev);
  };
  const handleID = (id: string) => {
    setID(id);
    handleCancel();
  };
  const admins: ColumnsType[] = [
    {
      id: "1",
      name: "Jane Doe",
      email: "janedoe@gmail.com",
      role: "Super admin",
      status: false,
      pNumber: "*********",
    },
    {
      id: "2",
      name: "Jane Doe",
      email: "janedoe@gmail.com",
      role: "Admin",
      status: false,
      pNumber: "*********",
    },
    {
      id: "3",
      name: "Jane Doe",
      email: "janedoe@gmail.com",
      role: "Employee",
      status: true,
      pNumber: "*********",
    },
    {
      id: "4",
      name: "Jane Doe",
      email: "janedoe@gmail.com",
      role: "Admin",
      status: true,
      pNumber: "*********",
    },
    {
      id: "5",
      name: "Jane Doe",
      email: "janedoe@gmail.com",
      role: "Employee",
      status: true,
      pNumber: "*********",
    },
    {
      id: "6",
      name: "Jane Doe",
      email: "janedoe@gmail.com",
      role: "Employee",
      status: true,
      pNumber: "*********",
    },
  ];

  const columns: ColumnDef<ColumnsType>[] = [
    {
      accessorKey: "name",
      header: "Name",
      cell: ({ getValue }) => <h6>{getValue() as string}</h6>,
    },
    {
      accessorKey: "email",
      header: "Email",
      cell: ({ getValue }) => <h6>{getValue() as string}</h6>,
    },
    {
      accessorKey: "pNumber",
      header: "Phone no",
      cell: ({ getValue }) => <h6>{getValue() as string}</h6>,
    },
    {
      accessorKey: "role",
      header: "Role",
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
          <h5
            onClick={() => handleID(row.original.id)}
            className="gap-2 cursor-pointer pt-[12px] pr-[20px] pb-[12px] pl-[20px] flex items-center border-b border-[#E1E1E1] text-[#959595] font-[400] text-[14px] h-[48px] hover:bg-[#FFF1E3] hover:text-secondary"
          >
            <Cycle width={17} height={17} />
            Reset Password
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
      <Modals handleCancel={handlePasswordForm} open={openPasswordForm}>
        <div className="w-[500px]">
          <ResetPassword handleCancel={handleCancel} />
        </div>
      </Modals>
      <Modals handleCancel={handleCancel} open={open}>
        <div className="w-[500px]">
          <CreateAdmin handleCancel={handleCancel} id={id} />
        </div>
      </Modals>
      <div className="flex flex-col gap-5">
        <div className="flex justify-between items-center">
          <h3 className="text-[24px] font-[600]">Admin Lists</h3>
          <div className="flex flex-row gap-2 items-center">
            <button
              onClick={handleCancel}
              className="bg-secondary rounded-md text-white p-2"
            >
              Add expenses
            </button>

            <div className="cursor-pointer flex items-center gap-2 p-2 border border-[#E4E4E4] text-[14px] font-[400] text-[#4A4A4A]">
              <Filter color="#B3B3B3" />
              Filter by status
            </div>
          </div>
        </div>
        <DataTable columns={columns} data={admins} />
      </div>
    </>
  );
}

export default AdminTable;
