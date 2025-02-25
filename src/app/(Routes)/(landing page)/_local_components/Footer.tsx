import {
  Facebook,
  FileTextLine,
  Instagram,
} from "@/app/_global_components/icons";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className="pl-[65px] pr-[65px] min-h-[400px] bg-[#2F2F2F] flex  gap-4 items-center">
      <div className="flex flex-row gap-8">
        <div className="flex flex-col gap-4 w-3/5">
          <h2 className="text-secondary text-[22px] font-[500]">
            About Nana Lounge
          </h2>
          <p className="text-[13px] font-[500] text-white">
            Nana Lounge is your haven of comfort and sophistication, offering
            exceptional accommodations and personalized services. From luxurious
            rooms to curated dining and seamless bookings, we are dedicated to
            creating unforgettable experiences.
          </p>
        </div>
        <div className="flex flex-col gap-4 w-1/5">
          <h5 className="text-secondary text-[16px] font-[500]">
            Our services
          </h5>
          <Link
            href={"/"}
            className="text-[14px] font-[400] text-white hover:text-secondary"
          >
            Home
          </Link>
          <Link
            href={"/"}
            className="text-[14px] font-[400] text-white hover:text-secondary"
          >
            Our services
          </Link>
          <Link
            href={"/"}
            className="text-[14px] font-[400] text-white hover:text-secondary"
          >
            Contact{" "}
          </Link>
        </div>
        <div className="flex flex-col gap-4 w-1/5">
          <h5 className="text-secondary text-[16px] font-[500]">Resources</h5>
          <Link
            href={"/"}
            className="text-[14px] font-[400] text-white hover:text-secondary"
          >
            Privacy Policy
          </Link>
          <Link
            href={"/"}
            className="text-[14px] font-[400] text-white hover:text-secondary"
          >
            Terms and Condition
          </Link>
        </div>
        <div className="flex flex-col gap-4 w-1/5">
          <h5 className="text-secondary text-[16px] font-[500]">Contact Us</h5>
          <p className="text-[14px] font-[400] text-white hover:text-secondary">
            yourname@gamil.com
          </p>
          <p className="text-[14px] font-[400] text-white hover:text-secondary">
            +2349122701967{" "}
          </p>
          <div className="flex flex-row gap-2 text-secondary self-start">
          <Instagram />
          <Facebook />
          <FileTextLine />
        </div>
        </div>
        
      </div>
    </footer>
  );
}

export default Footer;
