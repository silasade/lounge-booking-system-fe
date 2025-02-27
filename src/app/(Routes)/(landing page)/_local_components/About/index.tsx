import React from "react";
import Card from "./AboutCard";
type AboutCard = {
  src: string;
  title: string;
  description: string;
};
function AboutSection() {
  const cardContents: AboutCard[] = [
    {
      src: "/imgs/kitchen.webp",
      title: "Sophisticated Stays",
      description:
        "Enjoy thoughtfully designed apartments with privacy and comfort at their core.",
    },
    {
      src: "/imgs/pool.webp",
      title: "Exclusive Pool Access",
      description:
        "Relax and unwind with private pool access, perfect for solo retreats or small events.",
    },
    {
      src: "/imgs/wadrope.webp",
      title: "Customizable Amenities",
      description:
        "Select only what you need – from transportation and WiFi to drinks and much more",
    },
    {
      src: "/imgs/calculator.webp",
      title: " Flexible Pricing",
      description:
        "No hidden fees – clear, upfront pricing for all our services",
    },
  ];
  return (
    <div className="flex flex-col gap-8 p-5 md:p-10 lg:p-20 lg:pl-30 lg:pr-30 border-b border-borderColor">
      <h2 className="text-secondary text-[20px] md:text-[24px] lg:text-[32px] font-[700] text-center">
        Why Choose Nana Lounge?
      </h2>
      <div className="grid md:grid-cols-2 md:grid-row-2 gap-y-4 gap-x-4">
        {cardContents.map((items, index) => {
          return (
            <div key={index}>
              <Card
                description={items.description}
                title={items.title}
                src={items.src}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AboutSection;
