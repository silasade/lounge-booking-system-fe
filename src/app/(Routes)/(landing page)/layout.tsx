"use client";
import React, { useRef, useLayoutEffect } from "react";
import Header from "./_local_components/Header";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import Footer from "./_local_components/Footer";
import { PaymentProvider } from "@/app/_global_components/Context/PaymentContext";
gsap.registerPlugin(ScrollTrigger);
type Props = {
  children: React.ReactNode;
  booking: React.ReactNode;
};
function Layout({ children, booking }: Props) {
  const headerRef = useRef<HTMLDivElement | null>(null);
  const childrenRef = useRef<HTMLDivElement | null>(null);
  console.log(booking);
  useLayoutEffect(() => {
    if (!headerRef.current || !childrenRef.current) return;

    gsap.to(headerRef.current, {
      backgroundColor: "black",
      scrollTrigger: {
        trigger: childrenRef.current,
        start: "5% 10%",
        scrub: true,
      },
    });
  }, []);

  return (
    <PaymentProvider>
      <div className="font-roboto">
        <div ref={headerRef}>
          <Header />
        </div>

        <div ref={childrenRef}>
          {booking}
          {children}
        </div>

        <Footer />
      </div>
    </PaymentProvider>
  );
}

export default Layout;
