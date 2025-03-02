"use client";
import React, { useRef, useLayoutEffect } from "react";
import Header from "./_local_components/Header";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import Footer from "./_local_components/Footer";
import { PaymentProvider } from "@/app/_global_components/Context/PaymentContext";
import ApartmentBookingProvider from "@/app/_global_components/Context/ApartmentBookingContext";
import ConfirmBookingProvider from "@/app/_global_components/Context/ConfirmBookingContext";
import { GymPaymentProvider } from "@/app/_global_components/Context/GymContext";

gsap.registerPlugin(ScrollTrigger);
type Props = {
  children: React.ReactNode;
  booking: React.ReactNode;
  bookinggym: React.ReactNode;
};
function Layout({ children, booking, bookinggym }: Props) {
  const headerRef = useRef<HTMLDivElement | null>(null);
  const childrenRef = useRef<HTMLDivElement | null>(null);
  console.log(booking);
  useLayoutEffect(() => {
    if (!headerRef.current || !childrenRef.current) return;

    gsap.to(headerRef.current, {
      backgroundColor: "black",
      scrollTrigger: {
        trigger: childrenRef.current,
        start: "5% top",
        scrub: true,
      },
    });
  }, []);

  return (
    <>
      <GymPaymentProvider>
        <PaymentProvider>
          <ApartmentBookingProvider>
            <ConfirmBookingProvider>
              <div className="font-roboto flex flex-col">
                <div ref={headerRef}>
                  <Header />
                </div>

                <div ref={childrenRef}>
                  {booking}
                  {children}
                  {bookinggym}
                </div>

                <Footer />
              </div>
            </ConfirmBookingProvider>
          </ApartmentBookingProvider>
        </PaymentProvider>
      </GymPaymentProvider>
    </>
  );
}

export default Layout;
