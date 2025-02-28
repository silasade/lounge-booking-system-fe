import ArithmeticInput from "@/app/_global_components/Forms/ArithmeticInput";
import React, { useCallback, useEffect, useState } from "react";
import { DatePicker } from "antd";
const { RangePicker } = DatePicker;
import dayjs, { Dayjs } from "dayjs";
import { useApartmentContext } from "@/app/_global_components/Context/ApartmentBookingContext";
dayjs().format();
type Prop = {
  price: number;
};
function Booking({ price }: Prop) {
  const { apartmentDetails, setApartmentDetails } = useApartmentContext();
  const [number, setNumber] = useState({
    noOfNight: 1,
  });
  const [noShowCharges, setNoShowCharges] = useState<number>(0);
  const [dateRange, setDateRange] = useState("");
  const [total, setTotal] = useState<number>(0);
  const [rate, setRate] = useState<number>(price);
  const handleNights = useCallback(
    (night: number) => {
      setNumber((prev) => ({ ...prev, noOfNight: night }));
      setRate(price * night);
    },
    [price]
  );

  const handleDateChange = (dates: [Dayjs | null, Dayjs | null] | null) => {
    if (dates && dates[0] && dates[1]) {
      const formattedRange = `${dayjs(dates[0]).format("DD MMM")} - ${dayjs(
        dates[1]
      ).format("DD MMM")}`;
      setDateRange(formattedRange);
    } else {
      setDateRange("");
    }
  };
  useEffect(() => {
    if (rate) {
      setApartmentDetails((prev) => ({ ...prev, rate: rate }));
    }
    if (dateRange) {
      setApartmentDetails((prev) => ({ ...prev, dateRange }));
    }
  }, [dateRange, rate, setApartmentDetails]);
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
          handleNumber={handleNights}
          text={number.noOfNight > 1 ? "nights" : "night"}
          Squared={true}
        />
      </div>
      <div className="flex flex-col gap-2">
        <h5 className="text-[#616161] text-[16px] font-[400]">Pick a Date</h5>
        <RangePicker
          onChange={handleDateChange}
          format={(value) => value.format("DD MMM")}
          placeholder={["Start Date", "End Date"]}
          className="h-[40px] md:h-[50px] rounded-md"
          suffixIcon={false}
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
              {(apartmentDetails.poolService.noOfHour * 1000).toLocaleString()}
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
        <button className="bg-primary h-[40px] md:h-[50px] font-[400] text-[16px] md:text-[20px] rounded-lg text-white">
          Continue to Book
        </button>
        <button className="bg-[#E4E4E4] h-[40px] md:h-[50px] font-[400] text-[16px] md:text-[20px] rounded-lg text-[#4A4A4A]">
          Reserve
        </button>
        <p className="italic text-[14px] lg:text-[16px] font-[400] text-[#4A4A4A]">
          No-show charges will be paid up front when making a reservation{" "}
        </p>
      </div>
    </div>
  );
}

export default Booking;
