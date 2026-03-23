import type { Metadata } from "next";
import { cormorant, dmSans } from "@/lib/fonts";
import SmoothScroll from "@/components/layout/SmoothScroll";
import Preloader from "@/components/layout/Preloader";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sanhao London | Authentic Chinese Ramen in Chinatown",
  description:
    "Experience authentic hand-pulled noodles and traditional Chinese ramen at Sanhao London, located in the heart of London's Chinatown.",
  openGraph: {
    title: "Sanhao London | Authentic Chinese Ramen",
    description:
      "Hand-pulled noodles and traditional Chinese ramen in London's Chinatown.",
    type: "website",
    locale: "en_GB",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${dmSans.variable} antialiased`}
    >
      <body>
        <Preloader />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
