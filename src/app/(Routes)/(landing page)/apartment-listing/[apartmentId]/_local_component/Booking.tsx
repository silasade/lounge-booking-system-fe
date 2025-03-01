"use client";
import ArithmeticInput from "@/app/_global_components/Forms/ArithmeticInput";
import React, { useCallback, useEffect, useState } from "react";
import { DatePicker } from "antd";
import { TimePicker } from "antd";
const { RangePicker } = DatePicker;
import dayjs, { Dayjs } from "dayjs";
import { useApartmentContext } from "@/app/_global_components/Context/ApartmentBookingContext";
import { useRouter } from "next/navigation";
import { useMessageHandler } from "@/app/_global_components/Message";
import Modals from "@/app/_global_components/Modal";
import CustomerDetails from "../confirm-booking/_local_component/CustomerDetails";
import PaymentInfo from "../confirm-booking/_local_component/PaymentInfo";
import BillingAddress from "../confirm-booking/_local_component/BillingAddress";
dayjs().format();
type Prop = {
  price: number;
  id: string;
};
function Booking({ price, id }: Prop) {
  const { errorMessage, contextHolder } = useMessageHandler();
  const [openModal, setOpenModal] = useState<boolean>(false);
  const router = useRouter();
  const { apartmentDetails, setApartmentDetails } = useApartmentContext();
  const [number, setNumber] = useState({
    noOfNight: apartmentDetails.noOfNights || 1,
  });

  const [noShowCharges, setNoShowCharges] = useState<number>(0);
  const [checkInDate, setCheckInDate] = useState<Dayjs | null>(
    apartmentDetails.checkInDate ? dayjs(apartmentDetails.checkInDate) : null
  );
  const [checkOutDate, setCheckOutDate] = useState<Dayjs | null>(
    apartmentDetails.checkOutDate ? dayjs(apartmentDetails.checkOutDate) : null
  );
  const [checkInTime, setCheckInTime] = useState<Dayjs | null>(
    apartmentDetails.checkInTime
      ? dayjs(apartmentDetails.checkInTime, "HH:mm")
      : null
  );
  const [checkOutTime, setCheckOutTime] = useState<Dayjs | null>(
    apartmentDetails.checkOutTime
      ? dayjs(apartmentDetails.checkOutTime, "HH:mm")
      : null
  );
  const [total, setTotal] = useState<number>(0);
  const [rate, setRate] = useState<number>(price);
  const handleNights = useCallback(
    (night: number) => {
      if (night >= 1) {
        setNumber((prev) => ({ ...prev, noOfNight: night }));
        setRate(price * night);
      } else {
        setNumber((prev) => ({ ...prev }));
      }
    },
    [price]
  );

  const handleClick = () => {
    if (
      apartmentDetails.checkInDate.length < 1 ||
      apartmentDetails.checkOutDate.length < 1 ||
      apartmentDetails.checkInTime.length < 1 ||
      apartmentDetails.checkOutTime.length < 1
    ) {
      errorMessage("Please select a time period");
    } else {
      router.push(`${id}/confirm-booking`);
    }
  };
  const handleDateChange = (dates: [Dayjs | null, Dayjs | null] | null) => {
    setCheckInDate(dates?.[0] || null);
    setCheckOutDate(dates?.[1] || null);
  };

  const handleTimeChange = (times: [Dayjs | null, Dayjs | null] | null) => {
    setCheckInTime(times?.[0] || null);
    setCheckOutTime(times?.[1] || null);
  };
  const handleModal = () => {
    setOpenModal((prev) => !prev);
  };

  // useEffect should listen to both check-in and check-out date changes
  useEffect(() => {
    setNumber({ noOfNight: apartmentDetails.noOfNights || 1 });

    setCheckInDate(
      apartmentDetails.checkInDate
        ? dayjs(apartmentDetails.checkInDate, "DD MMM YY")
        : null
    );
    setCheckOutDate(
      apartmentDetails.checkOutDate
        ? dayjs(apartmentDetails.checkOutDate, "DD MMM YY")
        : null
    );

    setCheckInTime(
      apartmentDetails.checkInTime
        ? dayjs(apartmentDetails.checkInTime, "HH:mm")
        : null
    );
    setCheckOutTime(
      apartmentDetails.checkOutTime
        ? dayjs(apartmentDetails.checkOutTime, "HH:mm")
        : null
    );
  }, [
    apartmentDetails.checkInDate,
    apartmentDetails.checkOutDate,
    apartmentDetails.noOfNights,
    apartmentDetails.checkInTime,
    apartmentDetails.checkOutTime,
  ]);

  useEffect(() => {
    if (rate) {
      setApartmentDetails((prev) => ({ ...prev, rate: rate }));
    }
    if (number.noOfNight) {
      setApartmentDetails((prev) => ({
        ...prev,
        noOfNights: number.noOfNight,
      }));
    }
    setApartmentDetails((prev) => ({
      ...prev,
      checkInDate: checkInDate ? checkInDate.format("DD MMM YY") : "",
      checkOutDate: checkOutDate ? checkOutDate.format("DD MMM YY") : "",
      checkInTime: checkInTime ? checkInTime.format("HH:mm") : "",
      checkOutTime: checkOutTime ? checkOutTime.format("HH:mm") : "",
    }));
  }, [
    checkInDate,
    checkInTime,
    checkOutDate,
    checkOutTime,
    number.noOfNight,
    rate,
    setApartmentDetails,
  ]);
  useEffect(() => {
    if (apartmentDetails) {
      const charges =
        0.3 *
        (apartmentDetails.rate +
          apartmentDetails.poolService.noOfHour * 1000 +
          apartmentDetails.amenities.reduce(
            (total, item) => total + (item.price || 0),
            0
          ));
      setNoShowCharges(charges);
      setTotal(
        apartmentDetails.rate +
          apartmentDetails.poolService.noOfHour * 1000 +
          apartmentDetails.amenities.reduce(
            (total, item) => total + (item.price || 0),
            0
          )
      );
    }
  }, [apartmentDetails]);
  return (
    <>
      {contextHolder}
      <Modals
      
        handleCancel={handleModal}
        open={openModal}
        style={{ backgroundColor: "#F4F4F4" }} // Applies to the whole modal
        styles={{
          body: { backgroundColor: "#F4F4F4", padding: 0, margin: 0 },
        }}
      >
        <div className="flex flex-col gap-8 w-[97%] md:w-[800px] max-h-[100%] md:max-h-[400px] overflow-auto p-5 bg-[#F4F4F4]">
          <div className="flex flex-col gap-2">
            <h2 className="text-[20px] md:text-[24px] lg:text-[32px] font-[700]">
              Confirm Reservation{" "}
            </h2>
            <h6 className="text-[#4F4F4F] text-[16px] md:text-[18px] lg:text-[20px]">
              Your reservation will only be confirmed after the no-show charge
              is paid
            </h6>
          </div>

          <div className="w-full flex flex-col-reverse lg:flex-row gap-8">
            <div className="flex flex-col gap-6 w-full">
              <CustomerDetails />
              <PaymentInfo />
              <BillingAddress />
            </div>
          </div>
          <div className="w-full">
            <div className="w-full lg:w-3/5 flex flex-col gap-4  justify-self-center">
              <button
                onClick={() => router.push(`${id}/reservation-confirmed`)}
                className="bg-primary h-[40px] md:h-[50px] font-[400] text-[16px] md:text-[20px] rounded-lg text-white"
              >
                Continue to Reserve
              </button>
              <button
                onClick={handleModal}
                className="bg-[#E4E4E4] h-[40px] md:h-[50px] font-[400] text-[16px] md:text-[20px] rounded-lg text-[#4A4A4A]"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </Modals>
      <div className="flex flex-col gap-4 border border-[#E5E5E5] rounded-md p-4">
        <h5 className="text-[16px] md:text-[18px] lg:text-[22px] font-[500]">
          Start Booking
        </h5>
        <p className="font-[300] text-[16px] md:text-[20px] leading-[33px] font-[700]">
          &#8358; {price}
          <span className="text-[14px] lg:text-[16px] font-[400]">
            &nbsp;per night
          </span>
          <span className="italic text-[14px] lg:text-[16px] font-[400] text-[#4A4A4A]">
            &nbsp; (amenities priced separately)
          </span>
        </p>
        <div className="flex flex-col gap-2">
          <h5 className="text-[#616161] text-[16px] font-[400]">
            How long you will stay?
          </h5>
          <ArithmeticInput
            input={number.noOfNight}
            handleNumber={handleNights}
            text={number.noOfNight > 1 ? "nights" : "night"}
            Squared={true}
          />
        </div>
        <div className="flex flex-col gap-2">
          <h5 className="text-[#616161] text-[16px] font-[400]">Pick a Date</h5>
          <RangePicker
            onChange={handleDateChange}
            format="DD MMM YY"
            placeholder={["Start Date", "End Date"]}
            className="h-[40px] md:h-[50px] rounded-md"
            suffixIcon={false}
            value={[checkInDate, checkOutDate]}
          />
        </div>
        <div className="flex flex-col gap-2">
          <h5 className="text-[#616161] text-[16px] font-[400]">Pick a Time</h5>
          <TimePicker.RangePicker
            value={[checkInTime, checkOutTime]}
            onChange={handleTimeChange}
            format="HH:mm"
            placeholder={["Start Time", "End Time"]}
            className="h-[40px] md:h-[50px] rounded-md"
          />
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-[16px] md:text-[20px] font-[400]">Total</h3>
          <div className="flex flex-col gap-2">
            <div className="flex flex-row justify-between items-center">
              <h5 className="w-2/4 text-[16px] md:text-[20px] font-[400]">
                Rate
              </h5>
              <h6 className="text-[17px] md:text-[20px] lg:text-[23px] font-[500] text-right w-2/4">
                &#8358;{rate.toLocaleString()}
              </h6>
            </div>
            <div className="flex flex-row justify-between items-center">
              <h5 className="text-[16px] md:text-[20px] font-[400] w-2/4">
                Amenities
              </h5>
              <h6 className="text-[17px] md:text-[20px] lg:text-[23px] font-[500] w-2/4 text-right">
                &#8358;{" "}
                {apartmentDetails.amenities
                  .reduce((total, item) => total + (item.price || 0), 0)
                  .toLocaleString()}
              </h6>
            </div>
            <div className="flex flex-row justify-between items-center">
              <h5 className="text-[16px] md:text-[20px] font-[400] w-2/4">
                Swimming pool services
              </h5>
              <h6 className="text-[17px] md:text-[20px] lg:text-[23px] font-[500] w-2/4 text-right">
                &#8358;
                {(
                  apartmentDetails.poolService.noOfHour * 1000
                ).toLocaleString()}
              </h6>
            </div>
            <div className="flex flex-row justify-between items-center">
              <div className="w-2/4">
                <h5 className="text-[16px] md:text-[20px] font-[400] ">
                  No-show charges
                </h5>
                <p>
                  <span className="italic text-[14px] lg:text-[16px] font-[400] text-[#4A4A4A] w-2/4">
                    30% of the total amount which is non-refundable
                  </span>
                </p>
              </div>
              <h6 className="text-[17px] md:text-[20px] lg:text-[23px] font-[500] w-2/4w-2/4-right">
                &#8358;{noShowCharges.toLocaleString()}
              </h6>
            </div>
            <div className="flex justify-end border-t border-b p-4 text-[17px] md:text-[20px] lg:text-[23px] font-[700] text-right">
              &#8358;{total.toLocaleString()}
            </div>
          </div>
        </div>
        <div className="w-100 flex flex-col gap-4">
          <button
            onClick={handleClick}
            className="bg-primary h-[40px] md:h-[50px] font-[400] text-[16px] md:text-[20px] rounded-lg text-white"
          >
            Continue to Book
          </button>
          <button
            onClick={handleModal}
            className="bg-[#E4E4E4] h-[40px] md:h-[50px] font-[400] text-[16px] md:text-[20px] rounded-lg text-[#4A4A4A]"
          >
            Reserve
          </button>
          <p className="italic text-[14px] lg:text-[16px] font-[400] text-[#4A4A4A]">
            No-show charges will be paid up front when making a reservation{" "}
          </p>
        </div>
      </div>
    </>
  );
}

export default Booking;
