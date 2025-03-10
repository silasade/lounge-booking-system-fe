import { Metadata } from "next";
import React from "react";
import Booking from "./indexClientPage";
export const metadata: Metadata = {
  title: "Admin | Bookings",
};
function Page() {
  return <Booking />;
}

export default Page;
