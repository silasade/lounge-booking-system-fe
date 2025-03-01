"use client";
import { useRouter } from "next/navigation";
import React from "react";

function HeroSection() {
  const router = useRouter();
  return (
    <div className="relative grid z-30 place-items-center w-full h-[70vh]  md:pt-[0] md:h-screen bg-[url('/imgs/mobileHeroBg.webp')] md:bg-[url('/imgs/heroBg.webp')] bg-center bg-cover bg-no-repeat font-montserrat text-center">
      <div className="absolute  bg-heroBg w-full h-full top-0 left-0"></div>
      <div className="flex flex-col gap-4 md:gap-6 lg:gap-8 w-full px-4 md:px-0 md:w-3/4 lg:w-1/2 z-10">
        <h1 className="text-white text-[24px] md:text-[36px] lg:text-[48px] font-[600] leading-snug">
          Plan Your Stay, Stress-Free
        </h1>
        <h3 className="text-heroText text-[17px] md:text-[20px] lg:text-[25px] font-[400] leading-relaxed">
          At Nana’s Lodge, indulge in refined apartments or unwind with our
          exclusive pool services – tailored to your needs.
        </h3>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button
            onClick={() => router.push("/book-pool", { scroll: false })}
            className="bg-white border-primary text-[16px] md:text-[18px] lg:text-[20px] text-primary border-4 rounded-md w-full md:w-64 h-[40px] md:h-[50px] lg:h-[50px]"
          >
            Book Pool Service
          </button>
          <button onClick={()=>router.push("/apartment-listing")} className="bg-primary text-[16px] md:text-[18px] lg:text-[20px] text-white rounded-md w-full md:w-64 h-[40px] md:h-[50px] lg:h-[50px]">
            Book Apartments
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
