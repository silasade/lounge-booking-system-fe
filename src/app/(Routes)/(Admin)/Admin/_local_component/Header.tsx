"use client";
import SearchInput from "@/app/_global_components/Forms/SearchInput";
import { ArrowDown, Notification, User } from "@/app/_global_components/icons";
import { Divider } from "antd";
import React from "react";

function Header() {
  const handleSearch = (value: string) => {
    console.log(value);
  };
  return (
    <header className="fixed z-20 w-full p-5 border-b border-[#B3B3B3] h-[69px] bg-white">
      <div className="absolute left-[48%] flex  items-center gap-3">
        <div className="flex items-center gap-3 rounded-full">
          <SearchInput onSearch={handleSearch} placeholder="Search" />
          <Notification width={40} height={40} />
        </div>
        <Divider
          orientation="center"
          type="vertical"
          className="border border-[#C2C1C1] h-[40px] w-[1px]"
        />
        <div className="flex items-center border border-[#616161] gap-3 rounded-full">
          <User width={35} height={35} color="#616161" />
          <ArrowDown width={27} height={27} color="#616161" />
        </div>
      </div>
    </header>
  );
}

export default Header;
