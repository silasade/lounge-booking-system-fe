import ApartmentCard from "@/app/_global_components/ApartmentCard";
import React from "react";
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
type Params = Promise<{ apartmentId: string }>

function ApartmentDetails(props: { params: Params }) {
  console.log(props.params);
  const apartmentsList: Apartments = {
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
  };
  return (
    <div className="flex flex-col p-5 pt-20 md:pt-10 md:p-[35px] md:p-[35px] lg:p-[65px] lg:p-[65px] gap-6">
      <ApartmentCard
        details={true}
        mainImage={apartmentsList.mainImage}
        name={apartmentsList.name}
        noOfAC={apartmentsList.noOfAC}
        noOfBathRoom={apartmentsList.noOfBathRoom}
        noOfBed={apartmentsList.noOfBed}
        noOfTele={apartmentsList.noOfTele}
        overview={apartmentsList.overview}
        price={apartmentsList.price}
        rate={apartmentsList.rate}
        sideImageOne={apartmentsList.sideImageOne}
        sideImageTwo={apartmentsList.sideImageTwo}
      />
    </div>
  );
}

export default ApartmentDetails;
