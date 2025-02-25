import React from "react";
import Card from "./Card";
type Testimonial = {
  profile: string;
  name: string;
  title: string;
  message: string;
};
function Testimonial() {
  const testimonials: Testimonial[] = [
    {
      profile: "/imgs/sarah.webp",
      name: "Sarah O.",
      title: "A Truly Wonderful Experience",
      message:
        "The rooms were luxurious, the staff was incredibly attentive, and every detail was perfect. I can’t wait to return.",
    },
    {
      profile: "/imgs/aisha.webp",
      name: "Aisha M.",
      title: "Felt Like Home, Only Better",
      message:
        "The warm hospitality and attention to detail made my stay unforgettable. Thank you for making me feel so special.",
    },
    {
      profile: "/imgs/david.webp",
      name: " David K.",
      title: "Exceptional Service and Comfort",
      message:
        "From the seamless booking process to the personalized dining, everything exceeded my expectations. Highly recommended.",
    },
  ];
  return (
    <div className="flex flex-col gap-8 p-20 pl-30 pr-30 border-b border-borderColor">
      <div className="flex flex-col gap-4 text-center">
        <h2 className="text-secondary text-[32px] font-[700]">
          What Our Guests Say
        </h2>
        <p className="font-[400] text-[24px]">
          Discover heartfelt stories and glowing reviews from guests who’ve
          experienced exceptional comfort and top-notch service.
        </p>
      </div>
      <div className="flex flex-row gap-6">

     
      {
        testimonials.map((items,index)=>{
            return(
                <div key={index}>
                <Card message={items.message} name={items.name} profile={items.profile} title={items.title}/>
                </div>
            )
        })
      }\ </div>
    </div>
  );
}

export default Testimonial;
