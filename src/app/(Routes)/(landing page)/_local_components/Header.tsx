import Popovers from "@/app/_global_components/Popover";
import Link from "next/link";
import React from "react";
import BookingForm from "./BookingForm";

function Header() {
  return (
    <header className="bg-inherit w-full z-10 fixed top-0 h-[50px]  font-roboto text-secondary flex flex-row items-center justify-center gap-80">
      <h3 className="absolute left-10 top-3 font-[500] text-[16px]">
        Nana’s Lodge
      </h3>
      <div className="font-[500] text-[16px] text-center flex flex-row gap-8">
        <Link href={"/"} className="hover:text-white">
          Home
        </Link>
        <Popovers
          trigger={"click"}
          placement="bottomLeft"
          content={<BookingForm />}
        >
          <span className="cursor-pointer hover:text-white">Check your booking</span>
        </Popovers>
      </div>
    </header>
  );
}

export default Header;
