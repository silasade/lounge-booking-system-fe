import React from "react";
import Amenities from "./_local_component/Amenities";
import PoolService from "./_local_component/PoolService";
import GymService from "./_local_component/GymService";
import { Metadata } from "next";
export const metadata:Metadata={
  title: "Admin | Amenities",
}
function Amenity() {
  return (
    <div className="flex flex-col gap-8">
      <Amenities />
      <PoolService />
      <GymService />
    </div>
  );
}

export default Amenity;
