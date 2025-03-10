import React from "react";
import AdminTable from "./_local_component/AdminTable";
import RoleTable from "./_local_component/RoleTable";
import { Metadata } from "next";
import ActivityLogs from "./_local_component/ActivityLogs";
export const metadata: Metadata = {
  title: "Admin | Manage Admins",
};
function ManageAdmin() {
  return (
    <div className="flex flex-col gap-8">
      <AdminTable />
      <RoleTable />
      <ActivityLogs />
    </div>
  );
}

export default ManageAdmin;
