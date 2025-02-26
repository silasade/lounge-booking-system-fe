import React, { createContext, useContext, useState } from "react";

type PriceRange = {
  from: number;
  to: number;
};

type PaymentType = {
  noOfPeople: string;
  noOfHours: string;
  noOfDays: string;
  nonAlcoholic: PriceRange;
  Alcoholic: PriceRange;
  snacks: PriceRange;
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
  paymentDetails: PaymentType;
  setPaymentDetails: React.Dispatch<React.SetStateAction<PaymentType>>;
  handleSubmit: (details: PaymentType) => void;
};

type PaymentProviderProp = {
  children: React.ReactNode;
};

const PaymentContext = createContext<PaymentContextType | undefined>(undefined);

export const PaymentProvider: React.FC<PaymentProviderProp> = ({ children }) => {
  const [paymentDetails, setPaymentDetails] = useState<PaymentType>({
    noOfPeople: '',
    noOfHours: '',
    noOfDays: '',
    nonAlcoholic: { from: 0, to: 0 },
    Alcoholic: { from: 0, to: 0 },
    snacks: { from: 0, to: 0 },
    name: '',
    email: '',
    phoneNo: '',
    cardNo: '',
    expiry: '',
    cvv: '',
    country: '',
    postalCode: '',
  });

  const handleSubmit = (details: PaymentType) => {
    setPaymentDetails(details);
  };

  return (
    <PaymentContext.Provider value={{ paymentDetails, setPaymentDetails, handleSubmit }}>
      {children}
    </PaymentContext.Provider>
  );
};

export const usePayment = () => {
  const context = useContext(PaymentContext);
  if (!context) {
    throw new Error('usePayment must be used within a PaymentProvider');
  }
  return context;
};
