import Link from "next/link";
import Image from "next/image";
import upseal from "../images/UP-seal.png";
import ctidlogo from "../images/CTID-logo.png";
import React from "react";
import { FaFacebook } from "react-icons/fa";
import { MdSearch } from "react-icons/md";

export default async function Header() {
  return (
    <header className="bg-ctid-green">
      <div className="max-w-6xl w-full flex flex-col items-center mx-auto px-4 py-4 md:flex-row justify-between ">
        <div className="flex flex-col md:flex-row items-center gap-4 mb-4 md:mb-0">
          <div className="flex items-center">
            <Link href="/">
              <Image src={upseal} alt="UP seal" width={80} height={80} />
            </Link>
            <Link href="/">
              <Image src={ctidlogo} alt="CTID logo" width={100} height={100} />
            </Link>
          </div>
          <div className="flex flex-col items-center md:items-start max-w-lg text-center md:text-left text-white">
            <Link href="/" className="font-bold text-xl md:text-xl uppercase">
              Department of Clothing, Textiles, and Interior Design
            </Link>
            <div className="text-sm uppercase">
              University of the Philippines Diliman
            </div>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <MdSearch size={24} className="hover:text-gray-600 cursor-pointer" />
          <Link href="https://www.facebook.com/UPCTID/">
            <FaFacebook
              size={24}
              className="hover:text-gray-600 cursor-pointer"
            />
          </Link>
        </div>
      </div>
    </header>
  );
}
