"use client";
import React from "react";
import Image from "next/image";
import { useForm, Controller } from "react-hook-form";
import { DatePicker, Input, Typography } from "antd";
import { CountryDropdown } from "react-country-region-selector";
import { usePayment } from "@/app/_global_components/Context/PaymentContext";
import moment from "moment";
const { Text } = Typography;
type Inputs = {
  cardNo: string;
  expiry: string;
  cvv: string;
  country: string;
  postalCode: string;
};
function PaymentForm() {
  const { setPaymentDetails } = usePayment();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit = async (data: Inputs) => {
    try {
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex flex-col justify-center items-center gap-8 p-3 w-full md:p-20 md:pl-30 md:pr-30">
      <div className="text-center">
        <h2 className="text-[18px] md:text-[24px] font-[700] ">Payment</h2>
        <h5 className="text-[16px] md:text-[20px]">Enter your details</h5>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-2 md:gap-4 w-full md:w-4/5"
      >
        <div className="flex flex-col gap-2 w-full">
          <h5 className="text-[16px] md:text-[20px] font-[400]">Card number</h5>
          <Controller
            name="cardNo"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                placeholder="1234 1234 1234 1234"
                className="w-100 h-[40px] md:h-[50px] p-3 border-heroText border rounded-lg"
                onChange={(event) =>
                  setPaymentDetails((prev) => ({
                    ...prev,
                    cardNo: event.target.value,
                  }))
                }
                suffix={
                  <div className="flex flex-row gap-1 items-center">
                    {[
                      { src: "/imgs/VISA.webp", alt: "Visa" },
                      { src: "/imgs/MAsterCard.webp", alt: "MasterCard" },
                      { src: "/imgs/Amex.webp", alt: "Amex" },
                      { src: "/imgs/DIscover.webp", alt: "Discover" },
                    ].map((image, index) => (
                      <div key={index} className="relative w-[18px] md:w-[24px] h-[10px] md:h-[15px]">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                }
              />
            )}
          />

          {errors.cardNo?.message && (
            <Text type="danger">{errors.cardNo.message}</Text>
          )}
        </div>
        <div className="flex flex-col md:flex-row gap-2 w-100 items-center">
          <div className="flex flex-col gap-2 w-full">
            <h5 className="text-[16px] md:text-[20px] font-[400]">Expiry date</h5>
            <Controller
              name="expiry"
              control={control}
              render={({ field: { onChange, value } }) => (
                <DatePicker
                  className="w-50 h-[40px] md:h-[50px] p-3 border-heroText border rounded-lg"
                  picker="month"
                  placeholder="MM/YY"
                  value={value ? moment(value, "MM/YY") : null} // Convert to Moment object
                  onChange={(date, dateString) => {
                    onChange(dateString);

                    // Ensure dateString is a string before updating state
                    if (typeof dateString === "string") {
                      setPaymentDetails((prev) => ({
                        ...prev,
                        expiry: dateString,
                      }));
                    }
                  }}
                  format="MM/YY"
                />
              )}
            />

            {errors.expiry?.message && (
              <Text type="danger">{errors.expiry.message}</Text>
            )}
          </div>
          <div className="flex flex-col gap-2 w-full">
            <h5 className="text-[16px] md:text-[20px] font-[400]">CVV</h5>
            <input
              type="number"
              placeholder="cvv"
              {...register("cvv")}
              className="w-50 h-[40px] md:h-[50px] p-3 border-heroText border rounded-lg"
              onChange={(event) =>
                setPaymentDetails((prev) => ({
                  ...prev,
                  cvv: event.target.value,
                }))
              }
            />
            {errors.cvv?.message && (
              <Text type="danger">{errors.cvv.message}</Text>
            )}
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-2 w-100 items-center">
          <div className="flex flex-col gap-2 w-full">
            <h5 className="text-[16px] md:text-[20px] font-[400]">Country</h5>
            <Controller
              name="country"
              control={control}
              defaultValue="Nigeria" // Set default value here
              render={({ field: { value, onChange } }) => (
                <CountryDropdown
                  className="w-[100%] h-[40px] md:h-[50px] p-3 border-heroText border rounded-lg"
                  value={value || ""} // Ensures value is not undefined
                  onChange={(selectedValue) => {
                    onChange(selectedValue); // Update form state
                    setPaymentDetails((prev) => ({
                      ...prev,
                      country: selectedValue,
                    }));
                  }}
                />
              )}
            />

            {errors.country?.message && (
              <Text type="danger">{errors.country.message}</Text>
            )}
          </div>
          <div className="flex flex-col gap-2 w-full">
            <h5 className="text-[16px] md:text-[20px] font-[400]">Postal code</h5>
            <input
              type="number"
              placeholder="90210"
              {...register("postalCode")}
              className="w-50 h-[40px] md:h-[50px] p-3 border-heroText border rounded-lg"
              onChange={(event) =>
                setPaymentDetails((prev) => ({
                  ...prev,
                  postalCode: event.target.value,
                }))
              }
            />
            {errors.postalCode?.message && (
              <Text type="danger">{errors.postalCode.message}</Text>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}

export default PaymentForm;
