import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import HeroImage from ".//images/Hero-image.jpg";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Department of Clothing, Textiles, and Interior Design",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // FIXME: should use background-image instead https://www.w3schools.com/howto/howto_css_parallax.asp
  // FIXME: try parallax effect? https://blog.logrocket.com/create-parallax-scrolling-css/
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-white w-screen shadow-[0_0_15px_15px_rgba(0,0,0,0.5)]">
          <Navbar />
        </div>
        <Image src={HeroImage} alt="UPD Oblation" width={0} height={0} sizes="100vw 100vh" className="w-screen h-screen fixed top-0 object-cover bg-rose-700 z-[-999]"/>
        <div className="bg-white shadow-[0_0_15px_15px_rgba(0,0,0,0.5)] relative top-[55vh] w-screen p-[1%]" >
          <main className="max-w-2xl mx-auto px-4">{children}</main>
        </div>
      </body>
    </html>
  );
}
