"use client";
import { useApartmentContext } from "@/app/_global_components/Context/ApartmentBookingContext";
import { CheckCircleOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React, { useEffect, useState } from "react";
import { useMessageHandler } from "@/app/_global_components/Message";
type AmenitiesType = {
  name: string;
  price: number;
};

type Prop = {
  amenities: AmenitiesType[];
};

function Amenities({ amenities }: Prop) {
  const {successMessage,contextHolder}=useMessageHandler()
  const { setApartmentDetails, apartmentDetails } = useApartmentContext();

  const [selectedAmenities, setSelectedAmenities] = useState<AmenitiesType[]>(
    apartmentDetails.amenities || []
  );

  const handleCheckboxChange = (amenity: AmenitiesType) => {
    setSelectedAmenities((prevItems) =>
      prevItems.some((item) => item.name === amenity.name)
        ? prevItems.filter((item) => item.name !== amenity.name)
        : [...prevItems, amenity]
    );
  };
  const handleAmenities = () => {
    if (selectedAmenities) {
      setApartmentDetails((prev) => ({
        ...prev,
        amenities: selectedAmenities,
      }));
      successMessage("Amenties added sucessfully")
    }
  };
  useEffect(() => {
    setSelectedAmenities(apartmentDetails.amenities || []);
  }, [apartmentDetails.amenities]);
  return (
    <>
    {contextHolder}
    <div className="flex flex-col gap-4">
      <h3 className="text-center text-[20px] font-[500]">Amenities</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-5 gap-x-5">
        {amenities.map((item, index) => (
          <div key={index} className="flex flex-col gap-3">
            <div className="flex flex-row items-center gap-2">
              <input
                type="checkbox"
                checked={selectedAmenities.some(
                  (selected) => selected.name === item.name
                )}
                onChange={() => handleCheckboxChange(item)}
                className="rounded-sm w-[18px] h-[18px]"
              />
              <p className="text-[14px] font-[400]">{item.name}</p>
            </div>
            <p className="text-[14px] font-[400]">
              <span>Price: </span>
              &#8358;{item.price}
              <span className="text-[#4A4A4A] italic text-[12px]">per day</span>
            </p>
          </div>
        ))}
      </div>
      <div className="flex justify-center w-100">
        <Button
          onClick={handleAmenities}
          className={`${
            apartmentDetails.amenities.length > 0 ? "bg-[#90EE90]" : "bg-primary"
          } bg-primary text-white text-[16px] md:text-[18px] rounded-md w-full md:w-64 h-[40px] md:h-[50px]`}
        >
          {apartmentDetails.amenities.length > 0 ? (
            <>
              <CheckCircleOutlined /> &nbsp; Amenities added
            </>
          ) : (
            "          Add amenities"
          )}
        </Button>
      </div>
    </div>


    </>
  );
}

export default Amenities;
