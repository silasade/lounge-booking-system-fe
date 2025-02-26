"use client";
import React from "react";
import Image from "next/image";
import Pricing from "./Pricing";
import { motion } from "motion/react";
import { useRouter } from "next/navigation";
function PoolSection() {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center gap-8 pt-20 pb-20 border-b border-borderColor">
      <div className="flex flex-col gap-4 text-center">
        <h2 className="text-secondary text-[32px] font-[700]">
          Swimming Pool Service
        </h2>
        <p className="font-[400] text-[24px]">
          Enjoy Serene Pool Access, Anytime
        </p>
      </div>
      <motion.div
        initial={{
          clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)",
        }}
        whileInView={{
          clipPath: "polygon(100% 0, 0 0, 0 100%, 100% 100%)",
          transition: { duration: 5, delay: 0.5 },
        }}
        viewport={{ once: true }}
        className="relative w-full h-[456px]"
      >
        <Image
          src={"/imgs/poolHero.webp"}
          alt="pool banner"
          fill
          unoptimized
          className="object-contain"
        />
      </motion.div>
      <div className="pl-[65px] pr-[65px] flex flex-col gap-2">
        <div>
          <h5 className="text-[20px] font-[300]">
            Our private pool is available for standalone bookings, offering a
            peaceful retreat for relaxation, small events, or group gatherings
          </h5>
        </div>
        <div className="flex flex-col gap-5">
          <h4 className="text-secondary font-[600] text-[24px]">
            What’s Included with Pool Access
          </h4>
          <ul className="list-disc mx-6 flex flex-col gap-3">
            <li className="font-[400] text-[20px]">
              <span className="font-[500]">Private Access: </span>
              Exclusive to you and your guests.
            </li>
            <li className="font-[400] text-[20px]">
              <span className="font-[500]">Flexible Bookings: </span>
              Available for hourly or full-day rentals.
            </li>
            <li className="font-[400] text-[20px]">
              <span className="font-[500]">Serene Ambiance: </span>
              Surrounded by lush greenery for a calming experience.
            </li>
            <li className="font-[400] text-[20px]">
              <span className="font-[500]">Ideal for Events: </span> Perfect for
              small gatherings, private parties, or relaxation.
            </li>
          </ul>
        </div>

        <Pricing />
        <div className="text-center flex flex-col gap-4 items-center mt-8">
          <p className="italic font-[300] text-[20px]">
            Ready for a Refreshing Experience?
          </p>
          <button
            onClick={() => router.push("/book-pool",{ scroll: false })}
            className="bg-primary text-white rounded-md text-[20px] w-full md:w-64 h-16"
          >
            Book Your Pool Service
          </button>
        </div>
      </div>
    </div>
  );
}

export default PoolSection;
