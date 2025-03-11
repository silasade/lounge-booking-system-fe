"use client";
import { Filter } from "@/app/_global_components/icons";
import Modals from "@/app/_global_components/Modal";
import React, { useState } from "react";
import FilterForm from "./_local_component/FilterForm";
import BookingTable from "./_local_component/BookingTable";

function Booking() {
  const [openFilter, setOpenFilter] = useState<boolean>(false);
  const handleFilterForm = () => {
    setOpenFilter((prev) => !prev);
  };
  return (
    <>
      <div className="flex flex-col gap-8 w-full">
        <div className="flex justify-between items-center">
          <h3 className="text-[24px] font-[600]">Booking Lists </h3>
          <div className="flex flex-row gap-2 items-center">
            <div
              onClick={handleFilterForm}
              className="cursor-pointer flex items-center gap-2 p-2 border border-[#E4E4E4] text-[14px] font-[400] text-[#4A4A4A]"
            >
              <Filter color="#B3B3B3" />
              Filter by date
            </div>
          </div>
        </div>
        <BookingTable />
      </div>
      <Modals handleCancel={handleFilterForm} open={openFilter}>
        <div className="w-[500px]">
          <FilterForm handleCancel={handleFilterForm} />
        </div>
      </Modals>
    </>
  );
}

export default Booking;
