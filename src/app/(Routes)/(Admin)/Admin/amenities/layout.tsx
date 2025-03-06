import React from "react";
type Prop = {
  children: React.ReactNode;
  createpool: React.ReactNode;
  creategym: React.ReactNode;
  create: React.ReactNode;
};
function layout({ children, create, creategym, createpool }: Prop) {
  return (
    <div>
      {children}
      {create}
      {creategym}
      {createpool}
    </div>
  );
}

export default layout;
