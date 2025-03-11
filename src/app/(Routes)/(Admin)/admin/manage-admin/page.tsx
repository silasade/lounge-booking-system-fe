import React from "react";

import { Metadata } from "next";
import ManageAdmin from "./indexClientPage";
export const metadata: Metadata = {
  title: "Admin | Manage Admins",
};
function Page() {
  return <ManageAdmin />;
}

export default Page;
