import React, { createContext, useContext, useState } from "react";
type AmenitiesType = {
  name: string;
  price: number;
};
type PoolService = {
  noOfHour: number;
  noOfGuest: number;
};
export type ApartmentBooking = {
  amenities: AmenitiesType[];
  poolService: PoolService;
  rate: number;
  checkInDate: string;
  checkOutDate: string;
  noOfNights: number;
};
type ApartmentContextType = {
  setApartmentDetails: React.Dispatch<React.SetStateAction<ApartmentBooking>>;

  apartmentDetails: ApartmentBooking;
};
type ApartmentProviderProp = {
  children: React.ReactNode;
};
const ApartmentContext = createContext<ApartmentContextType | undefined>(
  undefined
);
function ApartmentBookingProvider({ children }: ApartmentProviderProp) {
  const [apartmentDetails, setApartmentDetails] = useState<ApartmentBooking>({
    amenities: [],
    checkInDate: "",
    checkOutDate: "",
    poolService: { noOfGuest: 1, noOfHour: 1 },
    rate: 0,
    noOfNights: 1,
  });
  return (
    <ApartmentContext.Provider
      value={{ apartmentDetails, setApartmentDetails }}
    >
      {children}
    </ApartmentContext.Provider>
  );
}

export default ApartmentBookingProvider;

export const useApartmentContext = () => {
  const context = useContext(ApartmentContext);
  if (!context) {
    throw new Error(
      "useApartmentContext should be used within the ApartmentBookingProvider"
    );
  } else {
    return context;
  }
};
