import React, { createContext, useContext, useState, useEffect } from "react";

type AmenitiesType = {
  name: string;
  price: number;
};

type PoolService = {
  noOfHour: number;
  noOfGuest: number;
};
type GymService = {
  noOfHour: number;
  noOfGuest: number;
};

export type ApartmentBooking = {
  amenities: AmenitiesType[];
  poolService: PoolService;
  gymService: GymService;

  rate: number;
  checkInDate: string;
  checkOutDate: string;
  checkInTime: string;
  checkOutTime: string;
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
  // Load stored booking details from localStorage (if available)
  const getStoredApartmentDetails = (): ApartmentBooking => {
    if (typeof window !== "undefined") {
      const storedDetails = localStorage.getItem("apartmentDetails");
      return storedDetails ? JSON.parse(storedDetails) : defaultApartmentState;
    }
    return defaultApartmentState;
  };

  // Default state for the booking
  const defaultApartmentState: ApartmentBooking = {
    amenities: [],
    checkInDate: "",
    checkOutDate: "",
    poolService: { noOfGuest: 0, noOfHour: 0 },
    gymService: { noOfGuest: 0, noOfHour: 0 },

    rate: 0,
    noOfNights: 1,
    checkInTime: "",
    checkOutTime: "",
  };

  const [apartmentDetails, setApartmentDetails] = useState<ApartmentBooking>(
    getStoredApartmentDetails()
  );

  // Save to localStorage whenever apartmentDetails changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem(
        "apartmentDetails",
        JSON.stringify(apartmentDetails)
      );
    }
  }, [apartmentDetails]);

  return (
    <ApartmentContext.Provider
      value={{ apartmentDetails, setApartmentDetails }}
    >
      {children}
    </ApartmentContext.Provider>
  );
}

export default ApartmentBookingProvider;

// Custom hook for consuming the apartment context
export const useApartmentContext = () => {
  const context = useContext(ApartmentContext);
  if (!context) {
    throw new Error(
      "useApartmentContext should be used within the ApartmentBookingProvider"
    );
  }
  return context;
};
