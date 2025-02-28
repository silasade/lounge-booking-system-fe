import React from "react";
import ApartmentCard from "../../../_global_components/ApartmentCard";
type Apartments = {
  mainImage: string;
  sideImageOne: string;
  sideImageTwo: string;
  price: string;
  name: string;
  overview: string;
  noOfBed: number;
  noOfBathRoom: number;
  noOfAC: number;
  noOfTele: number;
  rate: number;
};
function ApartmentList() {
  const apartmentsList: Apartments[] = [
    {
      mainImage: "/imgs/oneBed.webp",
      name: " 1-Bedroom Apartment",
      noOfAC: 2,
      noOfBathRoom: 1,
      noOfBed: 1,
      noOfTele: 2,
      overview:
        "This elegantly designed space offers a perfect blend of comfort and luxury, ideal for solo travelers or couples seeking a relaxing retreat",
      price: "75,000",
      rate: 5,
      sideImageOne: "/imgs/oneBedBath.webp",
      sideImageTwo: "/imgs/oneBedPalour.webp",
    },
    {
      mainImage: "/imgs/twoBedRoom.webp",
      name: " 2-Bedroom Apartment",
      noOfAC: 3,
      noOfBathRoom: 2,
      noOfBed: 2,
      noOfTele: 2,
      overview:
        "Spacious and luxurious, this apartment is perfect for families, couples groups seeking privacy and premium comfort",
      price: "150,000",
      rate: 5,
      sideImageOne: "/imgs/twoBedBath.webp",
      sideImageTwo: "/imgs/twoBedKitchen.webp",
    },
  ];

  return (
    <div className="flex flex-col p-5 pt-20 md:pt-10 md:p-[35px] md:p-[35px] lg:p-[65px] lg:p-[65px] gap-6">
      <div className="flex flex-col gap-2 md:gap-3 text-center">
        <h1 className="text-secondary text-[20px] md:text-[24px] lg:text-[32px] font-[700]">
          Find Your Perfect Stay
        </h1>
        <p className="font-[400] text-[18px] md:text-[20px] lg:text-[24px]">
          Choose your preferred apartment and personalize your experience with
          add-ons.
        </p>
      </div>
      <div className="flex flex-col gap-4 w-100">
        {apartmentsList.map((item, index) => (
          <div key={index}>
            <ApartmentCard
              mainImage={item.mainImage}
              name={item.name}
              noOfAC={item.noOfAC}
              noOfBathRoom={item.noOfBathRoom}
              noOfBed={item.noOfBed}
              noOfTele={item.noOfTele}
              overview={item.overview}
              price={item.price}
              rate={item.rate}
              sideImageOne={item.sideImageOne}
              sideImageTwo={item.sideImageTwo}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ApartmentList;
