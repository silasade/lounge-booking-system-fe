"use client";
import Link from "next/link";
import React, { useState } from "react";
import BookingForm from "./BookingForm";
import { Menu } from "@/app/_global_components/icons";
import PopOver from "@/app/_global_components/Shad ui/PopOver";

function Header() {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const handleMenu = () => {
    setOpenMenu((prev) => !prev);
  };

  return (
    <header
      className={`overflow-hidden backdrop-blur-sm z-40 w-full fixed top-0 font-roboto text-secondary flex flex-col md:flex-row items-start md:items-center md:justify-center pl-5 md:pl-0 md:p-0 transition-all duration-500 ease-in-out ${
        openMenu ? "h-[30vh] bg-[#000000]" : "h-[45px] bg-inherit"
      }`}
    >
      <h3 className="absolute left-5 md:left-[35px] lg:left-[65px] top-3 font-[500] text-[16px]">
        Nana’s Lodge
      </h3>
      <div className="font-[500] mt-[40px] md:mt-0 text-[16px] md:text-center flex flex-col md:flex-row gap-4 md:gap-8">
        <Link
          href={"/"}
          onClick={() => {
            setOpenMenu(false);
          }}
          className="hover:text-white"
        >
          Home
        </Link>

        <PopOver
        className="p-0 pr-0 w-full md:w-64"
          trigger={
            <span className="cursor-pointer hover:text-white">
              Check your booking
            </span>
          }
        >
          <BookingForm
            handleMenu={() => {
              setOpenMenu(false);
            }}
          />
        </PopOver>
      </div>
      <div
        className="cursor-pointer absolute top-2 right-5 md:hidden"
        onClick={handleMenu}
      >
        <Menu width={25} height={25} />
      </div>
    </header>
  );
}

export default Header;
