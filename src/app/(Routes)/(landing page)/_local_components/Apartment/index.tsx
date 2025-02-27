import React from "react";
import ApartmentCard from "./ApartmentCard";
type ApartmentCard = {
  src: string;
  title: string;
  description: string;
  price: React.ReactNode;
};
function ApartmentSection() {
  const cardContents: ApartmentCard[] = [
    {
      src: "/imgs/bedRoomOne.webp",
      title: "1-Bedroom Apartment",
      price: <> &#8358;70,000</>,
      description:
        "This elegantly designed space offers a perfect blend of comfort and luxury, ideal for solo travelers or couples seeking a relaxing retreat",
    },
    {
      src: "/imgs/bedRoomTwo.webp",
      title: "2-Bedroom Apartment",
      price: <>&#8358;150,000</>,
      description:
        "Spacious and luxurious, this apartment is perfect for families, couples groups seeking privacy and premium comfort",
    },
  ];
  return (
    <div className="flex flex-col gap-8 p-5 md:p-20 md:pb-10 md:pl-30 md:pr-30 border-b border-borderColor">
      <div className="flex flex-col gap-2 md:gap-4 text-center">
        <h2 className="text-secondary text-[20px] md:text-[24px] lg:text-[32px] font-[700]">
          Apartments
        </h2>
        <p className="font-[400] text-[18px] md:text-[20px] lg:text-[24px]">
          Elegance and Comfort Combined – Discover Your Ideal Home Away from
          Home
        </p>
      </div>
      <div className="grid grid-cols-1 grid-row-1 md:grid-cols-2 md:grid-row-2 gap-y-6 gap-x-6">
        {cardContents.map((items, index) => {
          return (
            <div key={index}>
              <ApartmentCard
                description={items.description}
                title={items.title}
                src={items.src}
                price={items.price}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ApartmentSection;
