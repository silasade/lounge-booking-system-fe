import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Nana’s Lodge",
    short_name: "Nana’s-Lodge",
    description:
      "Nana Lounge is your haven of comfort and sophistication, offering exceptional accommodations and personalized services. From luxurious rooms to curated dining and seamless bookings, we are dedicated to creating unforgettable experiences.",
    start_url: "/",
    display: "browser",
    theme_color: "#ffffff",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
