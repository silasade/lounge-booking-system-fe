"use client";
import React from "react";
import AdminTable from "./_local_component/AdminTable";
import RoleTable from "./_local_component/RoleTable";
import ActivityLogs from "./_local_component/ActivityLogs";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
function ManageAdmin() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname.includes("#admin-logs")) {
      const element = document.getElementById("admin-logs");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [pathname]);
  return (
    <div className="flex flex-col gap-8">
      <AdminTable />
      <RoleTable />
      <ActivityLogs />
    </div>
  );
}

export default ManageAdmin;
