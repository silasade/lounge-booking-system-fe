"use client";
import React, { useState } from "react";
import PopOver from "@/app/_global_components/shadcn-ui/PopOver";
import DataTable from "@/app/_global_components/shadcn-ui/Tables";
import { ColumnDef } from "@tanstack/react-table";
import { Ellipsis } from "lucide-react";
import { Bin, Edit, Filter } from "@/app/_global_components/icons";
import Modals from "@/app/_global_components/Modal";

import CreateRole from "./CreateRole";

type ColumnsType = {
  id: string;
  name: string;
  permissions: string[];
  users: number;
};

function RoleTable() {
  const [open, setOpen] = useState<boolean>(false);
  const [id, setID] = useState<string>("");
  const handleCancel = () => {
    setOpen((prev) => !prev);
  };
  const handleID = (id: string) => {
    setID(id);
    handleCancel();
  };
  const roles: ColumnsType[] = [
    {
      id: "1",
      name: "Super admin",
      users: 1,
      permissions: ["Full access"],
    },
    {
      id: "2",
      name: "Admin",
      users: 3,
      permissions: ["Manage bookings", "Manage amenities", "Manage apartment"],
    },
    {
      id: "3",
      name: "Employee",
      users: 4,
      permissions: ["View bookings", "Process payments"],
    },
  ];

  const columns: ColumnDef<ColumnsType>[] = [
    {
      accessorKey: "name",
      header: "Role name",
      cell: ({ getValue }) => <h6>{getValue() as string}</h6>,
    },
    {
      accessorKey: "permissions",
      header: "Permissions Assigned",
      cell: ({ getValue }) => {
        const value = getValue();
        return (
          <h6>{Array.isArray(value) ? value.join(", ") : String(value)}</h6>
        );
      },
    },

    {
      accessorKey: "users",
      header: "Users assigned",
      cell: ({ getValue }) => (
        <h6>{`${getValue() as number} ${
          (getValue() as number) > 1 ? "Users" : "User"
        }`}</h6>
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
          <CreateRole handleCancel={handleCancel} id={id} />
        </div>
      </Modals>
      <div className="flex flex-col gap-5">
        <div className="flex justify-between items-center">
          <h3 className="text-[24px] font-[600]">
            Role-Based Access Control (RBAC)
          </h3>
          <div className="flex flex-row gap-2 items-center">
            <button
              onClick={handleCancel}
              className="bg-secondary rounded-md text-white p-2"
            >
              Create role
            </button>

            <div className="cursor-pointer flex items-center rounded-md justify-start gap-2 p-2 border border-[#E4E4E4] text-[14px] font-[400] text-[#4A4A4A]">
              <Filter color="#B3B3B3" />
              Filter
            </div>
          </div>
        </div>
        <DataTable columns={columns} data={roles} />
      </div>
    </>
  );
}

export default RoleTable;
