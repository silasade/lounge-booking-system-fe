"use client";
import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
function DiscoverSection() {
  return (
    <div className="flex flex-col md:flex-row items-center gap-10 md:gap-15 lg:gap-20 p-5 md:p-10 lg:p-20 lg:pl-30 lg:pr-30 border-bottom border-borderColor">
      <div className="w-full md:w-2/5 flex flex-col gap-6">
        <h3 className="text-secondary font-[700] text-[18px] md:text-[20px] text-center md:text-left lg:text-[25px] leading-[29px]">
          Discover the Warmth of Nana Lounge
        </h3>
        <p className="text-[16px] md:text-[18px] lg:text-[20px] font-[300]">
          Experience exceptional hospitality tailored to your needs. From
          seamless reservations to unforgettable stays, we’re here to make every
          moment special. Book your stay today and let us handle the rest.
        </p>
      </div>
      <div className="grid grid-cols-2 grid-row-2 w-full md:w-3/5 h-[350px] gap-y-1 gap-x-1">
        <motion.div
          initial={{ clipPath: " polygon(0 46%, 100% 46%, 100% 46%, 0 46%)" }}
          whileInView={{
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            transition: { duration: 5, delay: 0.2 },
          }}
          viewport={{ once: true }}
          className="relative row-span-2 w-50 h-100"
        >
          <Image
            fill
            src={"/imgs/longImage.webp"}
            alt="main image"
            className="object cover"
          />
        </motion.div>
        <motion.div
          initial={{
            clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
          }}
          whileInView={{
            clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 0)",
            transition: { duration: 5, delay: 0.2 },
          }}
          viewport={{ once: true }}
          className="relative w-50 h-50"
        >
          <Image
            fill
            src={"/imgs/whiteRoom.webp"}
            alt="main image"
            className="object cover"
          />
        </motion.div>
        <motion.div
          initial={{ clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
          whileInView={{
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            transition: { duration: 5, delay: 0.2 },
          }}
          viewport={{ once: true }}
          className="relative w-50 h-50"
        >
          <Image
            fill
            src={"/imgs/greenRoom.webp"}
            alt="main image"
            className="object cover"
          />
        </motion.div>
      </div>
    </div>
  );
}

export default DiscoverSection;
