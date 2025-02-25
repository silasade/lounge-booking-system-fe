import type { Metadata } from "next";
import { Montserrat,Roboto } from "next/font/google";
import "./globals.css";
const montserrat = Montserrat({
  variable: "--montserrat",
  subsets: ["latin"],
  weight: ["400", "700", "300","100","500","700","900"], 

});
const roboto = Roboto({
  variable: "--roboto",
  subsets: ["latin"],
  weight: ["400", "700", "300","100","500","700","900"],

});

export const metadata: Metadata = {
  title: "Nano lounge",
  description:
    "Indulge in refined apartments or unwind with our exclusive pool services – tailored to your needs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="color-scheme" content="light" />
      </head>
      <body className={`${montserrat.variable} ${roboto.variable} antialiased`}>{children}</body>
    </html>
  );
}
