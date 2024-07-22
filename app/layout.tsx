import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavbarWrapper from "./components/NavbarWrapper";
import Navbar from "./components/Navbar";
import Header from "./components/Header";

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
        <Header />
        <NavbarWrapper>
          <Navbar />
        </NavbarWrapper>
        <main className="max-w-4xl mx-auto px-4">{children}</main>
      </body>
    </html>
  );
}
