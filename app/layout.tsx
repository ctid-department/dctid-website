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
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <Image src={HeroImage} alt="UPD Oblation" width={0} height={0} sizes="100vw 100vh" className="w-screen h-[600px] fixed top-0 object-cover bg-rose-700 z-[-999]"/>
        <div className="relative top-[50vh] w-screen bg-black p-[1%]" >
          <main className="max-w-2xl mx-auto px-4">{children}</main>
        </div>
      </body>
    </html>
  );
}
