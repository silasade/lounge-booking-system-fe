import { Metadata } from "next";
import React from "react";
import Card from "./_local_component/Card";
import RevenueCard from "./_local_component/RevenueCard";
import RevenueTable from "./_local_component/RevenueTable";
import TotalRevenue from "./_local_component/TotalRevenue";
import RevenueBreakDown from "./_local_component/RevenueBreakDown";
export const metadata: Metadata = {
  title: "Admin | Revenue",
};
function page() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col md:flex-row gap-4">
        <Card
          name="TOTAL REVENUE"
          price={1000000}
          subtext="Last updated: 02 Jan 2025"
        />
        <RevenueCard
          amenities={350000}
          apartment={1000000}
          pool={600000}
          total={1950000}
        />
        <Card
          name="TOTAL POS TRANSACTIONS"
          price={500000}
          subtext="Total transactions (10)"
        />
      </div>
      <RevenueTable />
      <div className="flex flex-col gap-4">
        <h3 className="text-[22px] font-[500]">Total Revenue</h3>
        <TotalRevenue />
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="text-[22px] font-[500]">Revenue Breakdown</h3>
        <RevenueBreakDown />
      </div>
    </div>
  );
}

export default page;
