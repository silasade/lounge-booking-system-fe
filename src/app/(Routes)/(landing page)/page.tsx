import React from "react";
import HeroSection from "./_local_components/HeroSection";
import DiscoverSection from "./_local_components/DiscoverSection";
import AboutSection from "./_local_components/About";
import ApartmentSection from "./_local_components/Apartment";
import PoolSection from "./_local_components/PoolSection";
import Testimonial from "./_local_components/Testimonial";
import ContactSection from "./_local_components/ContactSection";

function HomePage() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <DiscoverSection />
      <AboutSection />
      <ApartmentSection />
      <PoolSection />
      <Testimonial />
      <ContactSection/>
      
    </div>
  );
}

export default HomePage;
