"use client";
import React, { useRef, useLayoutEffect } from "react";
import Header from "./_local_components/Header";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import Footer from "./_local_components/Footer";

gsap.registerPlugin(ScrollTrigger);

type Prop = {
  children: React.ReactNode;
};

function Layout({ children }: Prop) {
  const headerRef = useRef<HTMLDivElement | null>(null);
  const childrenRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (!headerRef.current || !childrenRef.current) return;

    gsap.to(headerRef.current, {
      backgroundColor: "black",
      scrollTrigger: {
        trigger: childrenRef.current,
        start: "30% 60%",
        scrub: true,
      },
    });
  }, []);

  return (
    <div className="font-roboto">
      <div ref={headerRef}>
        <Header />
      </div>
      <div ref={childrenRef}>{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
