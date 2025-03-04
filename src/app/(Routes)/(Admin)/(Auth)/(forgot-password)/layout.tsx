import React from "react";
type LayoutType = {
  children: React.ReactNode;
};
function layout({ children }: LayoutType) {
  return (
    <div className="w-full h-screen flex flex-row">
      <div className="bg-[url('/imgs/loginBg.webp')] w-2/4 h-full bg-cover bg-center bg-no-repeat"></div>
      <div className="w-2/4 rounded-lg h-full grid place-items-center p-10">{children}</div>
    </div>
  );
}

export default layout;
