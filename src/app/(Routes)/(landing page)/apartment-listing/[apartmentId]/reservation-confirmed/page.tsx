import React from "react";
import Image from "next/image";
import Link from "next/link";
function page() {
  return (
    <div className="grid place-items-center w-full min-h-[80vh] bg-[#F4F4F4] p-5 md:p-0">
      <div className="flex flex-col gap-8 w-full md:w-3/4 items-center">
        <div className="relative w-[158px] h-[158px] w-[76px] h-[76px]">
          <Image
            src={"/imgs/check.webp"}
            alt="Checkmack"
            fill
            className="objec-cover"
          />
        </div>

        <div className="flex flex-col gap-5 text-center">
          <h3 className="font-[700] text-[24px] md:text-[32px] lg:text-[40px] ">
            Your Reservation is Confirmed!
          </h3>
          <p className="text-[16px] md:text-[18px] lg:text-[24px] font-[200]">
            Thank you for choosing Nana Lounge. We’re excited to have you! Keep
            an eye on your email for details, and feel free to reach out if you
            need anything
          </p>
        </div>
        <Link
          href={"/"}
          className="flex justify-center items-center text-center text-white bg-primary w-full md:w-2/4 rounded-md h-[40px] md:h-[50px] font-[400] text-[16px] md:text-[20px] lg:text-[24px]"
        >
          {" "}
          Return to homepage{" "}
        </Link>
      </div>
    </div>
  );
}

export default page;
