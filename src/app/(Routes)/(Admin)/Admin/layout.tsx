import React from "react";
import Sidebar from "./_local_component/Sidebar";
import Header from "./_local_component/Header";
type DashboardProp = {
  children: React.ReactNode;
};
function DashboardLayout({ children }: DashboardProp) {
  return (
    <div className="relative grid h-screen grid-cols-[20%_80%]">
      <aside className="sticky h-full  border-r border-[#B3B3B3]">
        <Sidebar />
      </aside>
      <div className="h-full w-full bg-[#F8F8F8] ">
        <div className="w-full z-20 ">
          <Header />
        </div>
        <div className="p-5 mt-[70px] z-10">{children}</div>
      </div>
    </div>
  );
}

export default DashboardLayout;
