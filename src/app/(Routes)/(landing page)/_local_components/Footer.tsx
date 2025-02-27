import {
  Facebook,
  FileTextLine,
  Instagram,
} from "@/app/_global_components/icons";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className="p-5 md:p-0 bg-[#2F2F2F]">
      <div className="p-0 md:pl-[30px] lg:pl-[65px] md:pr[30px] lg:pr-[65px] min-h-[400px]  flex  gap-4 items-center">
        <div className="flex flex-col md:flex-row gap-4 md:gap-8">
          <div className="flex flex-col gap-2 md:gap-4 w-full md:w-3/5">
            <h2 className="text-secondary text-[16px] md:text-[22px] font-[500]">
              About Nana Lounge
            </h2>
            <p className="text-[13px] font-[500] text-white">
              Nana Lounge is your haven of comfort and sophistication, offering
              exceptional accommodations and personalized services. From
              luxurious rooms to curated dining and seamless bookings, we are
              dedicated to creating unforgettable experiences.
            </p>
          </div>
          <div className="flex flex-col gap-2 md:gap-4 w-full md:w-1/5">
            <h5 className="text-secondary text-[14px] md:text-[16px] font-[500]">
              Our services
            </h5>
            <Link
              href={"/"}
              className="text-[12px] md:text-[14px] font-[400] text-white hover:text-secondary"
            >
              Home
            </Link>
            <Link
              href={"/"}
              className="text-[12px] md:text-[14px] font-[400] text-white hover:text-secondary"
            >
              Our services
            </Link>
            <Link
              href={"/"}
              className="text-[12px] md:text-[14px] font-[400] text-white hover:text-secondary"
            >
              Contact{" "}
            </Link>
          </div>
          <div className="flex flex-col gap-2 md:gap-4 w-full md:w-1/5">
            <h5 className="text-secondary text-[14px] md:text-[16px] font-[500]">
              Resources
            </h5>
            <Link
              href={"/"}
              className="text-[12px] md:text-[14px] font-[400] text-white hover:text-secondary"
            >
              Privacy Policy
            </Link>
            <Link
              href={"/"}
              className="text-[12px] md:text-[14px] font-[400] text-white hover:text-secondary"
            >
              Terms and Condition
            </Link>
          </div>
          <div className="flex flex-col gap-2 md:gap-4 w-full md:w-1/5">
            <h5 className="text-secondary text-[14px] md:text-[16px] font-[500]">
              Contact Us
            </h5>
            <p className="text-[12px] md:text-[14px] font-[400] text-white hover:text-secondary">
              yourname@gamil.com
            </p>
            <p className="text-[12px] md:text-[14px] font-[400] text-white hover:text-secondary">
              +2349122701967{" "}
            </p>
            <div className="flex flex-row gap-2 text-secondary self-start">
              <Instagram />
              <Facebook />
              <FileTextLine />
            </div>
          </div>
        </div>
      </div>
      <div className="md:self-end md:justify-self-end ">
        <p className="text-[12px] md:text-[15px] text-white font-400 pt-[2px] md:pt-0 md:mr-5">
          &copy;{new Date().getFullYear()} Shortlet in Lagos All rights reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
