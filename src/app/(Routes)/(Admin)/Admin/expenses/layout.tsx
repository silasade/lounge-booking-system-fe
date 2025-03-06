import React from "react";
type Prop = {
  children: React.ReactNode;
  create: React.ReactNode;
};
function layout({ children, create }: Prop) {
  return (
    <div>
      {children}
      {create}
    </div>
  );
}

export default layout;
