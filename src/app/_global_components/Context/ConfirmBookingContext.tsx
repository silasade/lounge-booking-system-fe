import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";
type BillingAdress = {
  fName: string;
  lName: string;
  pNumber: string;
  email: string;
  country: string;
  state: string;
  zipCode: number;
};
type CustomerDetails = {
  fName: string;
  lName: string;
  pNumber: string;
  email: string;
};
type PaymentInfo = {
  nameOnCard: string;
  debitCardNumber: string;
  expiry: string;
  cvv: string;
};
type ConFirmBookingType = {
  customerDetails: CustomerDetails;
  paymentInfo: PaymentInfo;
  billingAddress: BillingAdress;
};
type ConfirmBookingProvideprops = {
  children: React.ReactNode;
};

type ConfirmBookingContexttype = {
  confirmBooking: ConFirmBookingType;
  setConfimBooking: Dispatch<SetStateAction<ConFirmBookingType>>;
};

const ConfirmBookingContext = createContext<
  ConfirmBookingContexttype | undefined
>(undefined);
function ConfirmBookingProvider({ children }: ConfirmBookingProvideprops) {
  const [confirmBooking, setConfimBooking] = useState<ConFirmBookingType>({
    billingAddress: {
      fName: "",
      lName: "",
      pNumber: "",
      email: "",
      country: "",
      state: "",
      zipCode: 0,
    },
    customerDetails: {
      fName: "",
      lName: "",
      pNumber: "",
      email: "",
    },
    paymentInfo: {
      nameOnCard: "",
      debitCardNumber: "",
      expiry: "",
      cvv: "",
    },
  });
  return (
    <ConfirmBookingContext.Provider
      value={{ confirmBooking, setConfimBooking }}
    >
      {children}
    </ConfirmBookingContext.Provider>
  );
}
export default ConfirmBookingProvider;

export const useConfirmBooking = () => {
  const context = useContext(ConfirmBookingContext);
  if (!context) {
    throw new Error("Make sure to us useConfirmBooking within its provider");
  } else {
    return context;
  }
};
