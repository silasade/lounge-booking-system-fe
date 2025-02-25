import React from "react";

function HeroSection() {
  return (
    <div className="grid place-items-center w-full h-screen bg-[url('/imgs/heroBg.webp')] bg-center bg-cover bg-no-repeat font-montserrat text-center">
      <div className="absolute bg-heroBg w-full h-full top-0 left-0">

      </div>
      <div className="flex flex-col gap-8 w-full px-4 md:px-0 md:w-3/4 lg:w-1/2 z-10">
        <h1 className="text-white text-[48px] font-[600] leading-snug">
          Plan Your Stay, Stress-Free
        </h1>
        <h3 className="text-heroText text-[25px] font-[400] leading-relaxed">
          At Nana’s Lodge, indulge in refined apartments or unwind with our
          exclusive pool services – tailored to your needs.
        </h3>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button className="bg-white border-primary text-primary border-4 rounded-md w-full md:w-64 h-16">
            Book Pool Service
          </button>
          <button className="bg-primary text-white rounded-md w-full md:w-64 h-16">
            Book Apartments
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
