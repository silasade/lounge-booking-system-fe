"use client";
import {
  Amenities,
  Apartments,
  Booking,
  Dashboard,
  Exit,
  Expenses,
  Settings,
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
    {
      href: "/admin",
      icon: <Dashboard color="#D4A373" width={18} height={18} />,
      text: "Dashboard",
    },
    {
      href: "/admin/apartments",
      icon: <Apartments color="#D4A373" width={18} height={18} />,
      text: "Apartment",
    },
    {
      href: "/admin/amenities",
      icon: <Amenities color="#D4A373" width={18} height={18} />,
      text: "Amenities",
    },
    {
      href: "/admin/expenses",
      icon: <Expenses color="#D4A373" width={18} height={18} />,
      text: "Expenses",
    },
    {
      href: "/admin/bookings",
      icon: <Booking color="#D4A373" width={18} height={18} />,
      text: "Booking",
    },
    {
      href: "/admin/revenue",
      icon: <Expenses color="#D4A373" width={18} height={18} />,
      text: "Revenue",
    },
    {
      href: "/admin/manage-admin",
      icon: <Settings color="#D4A373" width={18} height={18} />,
      text: "Manage admin",
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
              : pathName === item.href &&
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
