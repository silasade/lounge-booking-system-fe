"use client";
import {
  Amenities,
  Apartments,
  Booking,
  Dashboard,
  Exit,
  Expenses,
} from "@/app/_global_components/icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type Links = {
  href: string;
  icon: React.ReactNode;
  text: string;
};

function Sidebar() {
  const pathName = usePathname();
  const links: Links[] = [
    { href: "/Admin", icon: <Dashboard color="#D4A373" />, text: "Dashboard" },
    {
      href: "/Admin/apartments",
      icon: <Apartments color="#D4A373" />,
      text: "Apartment",
    },
    {
      href: "/Admin/amenities",
      icon: <Amenities color="#D4A373" />,
      text: "Amenities",
    },
    {
      href: "/Admin/expenses",
      icon: <Expenses color="#D4A373" />,
      text: "Expenses",
    },
    {
      href: "/Admin/booking",
      icon: <Booking color="#D4A373" />,
      text: "Booking",
    },
    {
      href: "/Admin/revenue",
      icon: <Expenses color="#D4A373" />,
      text: "Revenue",
    },
  ];

  return (
    <div className="fixed w-[20%] h-full">
      <div className="flex justify-end border-b border-[#B3B3B3] h-[69px]"></div>
      {links.map((item, index) => (
        <Link
          key={index}
          href={item.href}
          aria-label={item.text}
          className={`flex items-center gap-3 p-4 text-[#201F1F] text-[16px] font-[500] ${
            pathName.includes(item.href) && index != 0
              ? "bg-[#EAEAEA80] rounded-md"
              : pathName===(item.href) &&
                index == 0 &&
                "bg-[#EAEAEA80] rounded-md"
          } hover:bg-[#EAEAEA80] rounded-md transition`}
        >
          {item.icon}
          <span className="text-[14px]">{item.text}</span>
        </Link>
      ))}
      <div className="flex absolute bottom-5 cursor-pointer flex-row gap-3 items-center content-end p-4 text-[#201F1F] text-[16px] font-[500]">
        <Exit color="#F53838" /> <span className="text-[14px]">Logout</span>
      </div>
    </div>
  );
}

export default Sidebar;
