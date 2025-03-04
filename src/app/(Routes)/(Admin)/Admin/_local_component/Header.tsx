"use client";
import SearchInput from "@/app/_global_components/Forms/SearchInput";
import { Notification } from "@/app/_global_components/icons";
import React from "react";

function Header() {
  const handleSearch = (value: string) => {
    console.log(value)
  };
  return (
    <header className="flex justify-end w-full p-5 border-b border-[#B3B3B3] h-[69px]">
      <div className="flex justify-end items-center w-64 gap-5">
        <SearchInput onSearch={handleSearch} placeholder="Search" />
        <Notification width={40} height={40} />
      </div>
    </header>
  );
}

export default Header;
