import React from "react";

type DashboardProp = {
  children: React.ReactNode;
  create: React.ReactNode;
};
function layout({ children, create }: DashboardProp) {
  return (
    <div>
      {children}
      {create}
    </div>
  );
}

export default layout;
