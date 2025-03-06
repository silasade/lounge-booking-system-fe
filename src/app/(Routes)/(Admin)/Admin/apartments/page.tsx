"use client";
import React from "react";
import ApartmentCard from "./_local-components/ApartmentCard";
import CalendarPopover from "./_local-components/CalendarPopover";
import { useRouter } from "next/navigation";
type ApartmentType = {
  profile: string;
  name: string;
  price: number;
  booked: boolean;
  noOfReserved: number;
  noOfBooked: number;
};
function Apartments() {
  const router = useRouter();
  const apartmentList: ApartmentType[] = [
    {
      profile: "/imgs/oneBed.webp",
      name: "1-Bedroom Apartment ",
      booked: true,
      noOfBooked: 15,
      noOfReserved: 23,
      price: 75000,
    },
    {
      profile: "/imgs/twoBedRoom.webp",
      name: "2-Bedroom Apartment ",
      booked: false,
      noOfBooked: 10,
      noOfReserved: 15,
      price: 70000,
    },
  ];
  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-end gap-4">
        <CalendarPopover />
        <button
          onClick={() => router.push("/Admin/apartments/create-apartment")}
          className="bg-secondary rounded-md text-white p-2"
        >
          Add apartment
        </button>
      </div>

      {apartmentList.map((item, index) => (
        <div key={index}>
          <ApartmentCard
            booked={item.booked}
            name={item.name}
            noOfBooked={item.noOfBooked}
            noOfReserved={item.noOfReserved}
            price={item.price}
            profile={item.profile}
          />
        </div>
      ))}
    </div>
  );
}

export default Apartments;
