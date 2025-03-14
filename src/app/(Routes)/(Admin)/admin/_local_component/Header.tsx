"use client";
import CreateAdmin from "@/app/_global_components/CreateAdmin";
import SearchInput from "@/app/_global_components/Forms/SearchInput";
import {
  ArrowDown,
  Clock,
  Notification,
  Update,
  User,
} from "@/app/_global_components/icons";
import Modals from "@/app/_global_components/Modal";
import PopOver from "@/app/_global_components/shadcn-ui/PopOver";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Divider } from "antd";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

function Header() {
  const [open, setOpen] = useState<boolean>(false);
  const [openInfo, setOpenInfo] = useState<boolean>(false);

  const router = useRouter();
  const handleCancel = () => {
    setOpen((prev) => !prev);
  };
  const handleInfo = () => {
    setOpenInfo((prev) => !prev);
  };
  const handleSearch = (value: string) => {
    console.log(value);
  };
  const handleNavigation = () => {
    router.push("/admin/manage-admin#admin-logs");
  };

  return (
    <>
      <header className="z-20 w-100 p-5 border-b border-[#B3B3B3] h-[69px] bg-white flex justify-end flex-row">
        <div className="flex  items-center gap-3">
          <div className="flex items-center gap-3 rounded-full">
            <SearchInput onSearch={handleSearch} placeholder="Search" />
            <Notification width={40} height={40} />
          </div>
          <Divider
            orientation="center"
            type="vertical"
            className="border border-[#C2C1C1] h-[40px] w-[1px]"
          />
          <PopOver
            trigger={
              <div className="flex items-center border border-[#616161] gap-3 rounded-full">
                <User width={35} height={35} color="#616161" />
                <ArrowDown width={27} height={27} color="#616161" />
              </div>
            }
            className="flex flex-col rounded-xl h-fit p-0 w-[260px] z-20"
          >
            <h5
              onClick={handleInfo}
              className="gap-2 cursor-pointer pt-[12px] pr-[20px] pb-[12px] pl-[20px] flex items-center border-b border-[#E1E1E1] text-[#959595] font-[400] text-[14px] h-[48px] hover:bg-[#FFF1E3] hover:text-secondary"
            >
              <User width={17} height={17} />
              Account information
            </h5>
            <h5
              onClick={handleNavigation}
              className="gap-2 cursor-pointer pt-[12px] pr-[20px] pb-[12px] pl-[20px] flex items-center border-b border-[#E1E1E1] text-[#959595] font-[400] text-[14px] h-[48px] hover:bg-[#FFF1E3] hover:text-secondary"
            >
              <Clock width={17} height={17} />
              Activity logs
            </h5>
            <h5
              onClick={handleCancel}
              className="gap-2 cursor-pointer pt-[12px] pr-[20px] pb-[12px] pl-[20px] flex items-center text-[#959595] font-[400] text-[14px] h-[48px] hover:bg-[#FFF1E3] hover:text-secondary"
            >
              <Update width={17} height={17} />
              Update profile
            </h5>
          </PopOver>
        </div>
      </header>
      <Dialog open={open} onOpenChange={setOpen}>
      
        <DialogContent className="max-w-[96vw] sm:max-w-md rounded-lg h-[76vh] overflow-y-auto bg-white">
        <DialogTitle className="sr-only">Hidden Title</DialogTitle>

          <CreateAdmin handleCancel={handleCancel} />
        </DialogContent>
      </Dialog>{" "}
      <Modals handleCancel={handleInfo} open={openInfo}>
        <div className="w-[500px] flex flex-col gap-4">
          <div className="flex flex-col gap-2 p-3">
            <h5 className="text-[#898989] text-[14px] font-[500]">Full name</h5>
            <p className="text-[16px] font-[400]">Jane Doe</p>
          </div>
          <div className="flex flex-col gap-2 p-3 border-t border-[#E4E4E4]">
            <h5 className="text-[#898989] text-[14px] font-[500]">Email</h5>
            <p className="text-[16px] font-[400]">janedoe@gmail.com</p>
          </div>
          <div className="flex flex-col gap-2 p-3 border-t border-[#E4E4E4]">
            <h5 className="text-[#898989] text-[14px] font-[500]">Role</h5>
            <p className="text-[16px] font-[400]">Admin(owner)</p>
          </div>
        </div>
      </Modals>
    </>
  );
}

export default Header;
