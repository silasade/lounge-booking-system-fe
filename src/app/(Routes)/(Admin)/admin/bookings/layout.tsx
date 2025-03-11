import React from "react";
type Prop = {
  children: React.ReactNode;
  modal: React.ReactNode;
};
function layout({ children, modal }: Prop) {
  return (
    <div>
      {children}
      {modal}
    </div>
  );
}

export default layout;
