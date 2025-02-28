import React, { createContext, useContext, useState } from "react";
type AmenitiesType = {
  name: string;
  price: number;
};
type PoolService = {
  noOfHour: number;
  noOfGuest: number;
};
type ApartmentBooking = {
  amenities: AmenitiesType[];
  poolService: PoolService;
  rate: number;
  dateRange: string;
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
    dateRange: "",
    poolService: { noOfGuest: 1, noOfHour: 1 },
    rate: 0,
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
