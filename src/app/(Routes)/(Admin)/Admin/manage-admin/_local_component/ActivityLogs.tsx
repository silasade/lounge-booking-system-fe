"use client";
import React from "react";
import DataTable from "@/app/_global_components/Shad ui/Tables";
import { ColumnDef } from "@tanstack/react-table";
import { Filter } from "@/app/_global_components/icons";
type ColumnsType = {
  id: string;
  action: string;
  user: string;
  date: string;
  time: string;
  ipAddress: string;
};

function ActivityLogs() {
  const roles: ColumnsType[] = [
    {
      id: "1",
      action: "Logged in",
      user: "Admin-Jane doe",
      date: "Feb 25, 2025",
      time: "10:30 AM",
      ipAddress: "*****************************",
    },
    {
      id: "2",
      action: "Updated apartment",
      user: "Admin-Jane doe",
      date: "Feb 22, 2025",
      time: "3:35 AM",
      ipAddress: "*****************************",
    },
    {
      id: "3",
      action: "Changed Password",
      user: "Admin-Jane doe",
      date: "Feb 25, 2025",
      time: "4:00 PM",
      ipAddress: "*****************************",
    },
    {
      id: "4",
      action: "Created new admin",
      user: "Super Admin",
      date: "Feb 25, 2025",
      time: "4:00 PM",
      ipAddress: "*****************************",
    },
    {
      id: "5",
      action: "Changed Password",
      user: "Admin-Jane doe",
      date: "Feb 25, 2025",
      time: "4:00 PM",
      ipAddress: "*****************************",
    },
    {
      id: "6",
      action: "Created new admin",
      user: "Super Admin",
      date: "Feb 25, 2025",
      time: "4:00 PM",
      ipAddress: "*****************************",
    },
  ];

  const columns: ColumnDef<ColumnsType>[] = [
    {
      accessorKey: "action",
      header: "Action",
      cell: ({ getValue }) => <h6>{getValue() as string}</h6>,
    },
    {
      accessorKey: "user",
      header: "User",
      cell: ({ getValue }) => <h6>{getValue() as string}</h6>,
    },
    {
      accessorKey: "date",
      header: "Date",
      cell: ({ getValue }) => <h6>{getValue() as string}</h6>,
    },
    {
      accessorKey: "time",
      header: "Time",
      cell: ({ getValue }) => <h6>{getValue() as string}</h6>,
    },
    {
      accessorKey: "ipAddress",
      header: "IP address",
      cell: ({ getValue }) => <h6>{getValue() as string}</h6>,
    },
  ];

  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-between items-center">
        <h3 className="text-[24px] font-[600]">
         Activity logs
        </h3>
        <div className="flex flex-row gap-2 items-center">
          <div className="cursor-pointer flex items-center gap-2 p-2 border border-[#E4E4E4] text-[14px] font-[400] text-[#4A4A4A]">
            <Filter color="#B3B3B3" />
            Filter
          </div>
        </div>
      </div>
      <DataTable columns={columns} data={roles} />
    </div>
  );
}

export default ActivityLogs;
