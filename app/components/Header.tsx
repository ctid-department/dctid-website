import Link from "next/link";
import Image from "next/image";
import upseal from "../images/UP-seal.png";
import ctidlogo from "../images/CTID-logo.png";
import React, { Suspense } from "react";
import { FaFacebook } from "react-icons/fa";
import SearchBar from "./SearchBar";

export default async function Header() {
  return (
    <header className="bg-ctid-green text-white">
      <div className="max-w-5xl w-full flex flex-col items-center mx-auto p-4 md:flex-row justify-between">
        <div className="flex flex-col md:flex-row items-center gap-4 mb-4 md:mb-0">
          <div className="flex items-center">
            <Link href="/">
              <Image src={upseal} alt="UP seal" width={90} height={80} />
            </Link>
            <Link href="/">
              <Image src={ctidlogo} alt="CTID logo" width={110} height={100} />
            </Link>
          </div>
          <div className="my-auto flex flex-col items-center md:items-start max-w-md text-center md:text-left">
            <Link href="/" className="font-semibold uppercase leading-5	text-lg">
              Department of Clothing, Textiles, and Interior Design
            </Link>
            <div className="text-sm uppercase">
              University of the Philippines Diliman
            </div>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <Suspense>
            <SearchBar />
          </Suspense>
          <Link href="https://www.facebook.com/UPCTID/">
            <FaFacebook
              size={24}
              className="cursor-pointer hover:brightness-90"
            />
          </Link>
        </div>
      </div>
    </header>
  );
}
