import React, { createContext, useContext, useState } from "react";

type PaymentType = {
  noOfPeople: number;
  noOfHours: number;
  noOfDays: number;
  name: string;
  email: string;
  phoneNo: string;
  cardNo: string;
  expiry: string;
  cvv: string;
  country: string;
  postalCode: string;
};

type PaymentContextType = {
  gymPaymentDetails: PaymentType;
  setGymPaymentDetails: React.Dispatch<React.SetStateAction<PaymentType>>;
  handleSubmit: (details: PaymentType) => void;
};

type PaymentProviderProp = {
  children: React.ReactNode;
};

const GymPaymentContext = createContext<PaymentContextType | undefined>(undefined);

export const GymPaymentProvider: React.FC<PaymentProviderProp> = ({
  children,
}) => {
  const [gymPaymentDetails, setGymPaymentDetails] = useState<PaymentType>({
    noOfPeople: 0,
    noOfHours: 0,
    noOfDays: 0,
    name: "",
    email: "",
    phoneNo: "",
    cardNo: "",
    expiry: "",
    cvv: "",
    country: "",
    postalCode: "",
  });

  const handleSubmit = (details: PaymentType) => {
    setGymPaymentDetails(details);
  };

  return (
    <GymPaymentContext.Provider
      value={{ gymPaymentDetails, setGymPaymentDetails, handleSubmit }}
    >
      {children}
    </GymPaymentContext.Provider>
  );
};

export const useGymPayment = () => {
  const context = useContext(GymPaymentContext);
  if (!context) {
    throw new Error("usePayment must be used within a PaymentProvider");
  }
  return context;
};
