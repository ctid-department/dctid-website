'use client';

import {useState} from 'react';
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils"
import { FiMenu } from "react-icons/fi";

export default function NavbarWrapper({...props}){
  
  const [navbarHidden, setNavbarHidden] = useState(true)

  function handleClick(){
    setNavbarHidden(!navbarHidden);
  }
  
  const burgerCSS = cn(
    "block bg-center bg-contain md:hidden text-white",
    "p-4 relative -translate-y-full mb-[-100%] z-50",
    "float-left",
    "bg-ctid-green",
    "hover:bg-ctid-gray hover:text-black",
    "active:bg-ctid-charcoal active:text-white",
    "transition-all"
  )

  const childrenCSS = cn(
    navbarHidden
    ? "h-0 scale-y-0 -translate-y-1/2"
    : "h-auto scale-y-100",
    "md:h-auto md:block md:scale-y-100 md:translate-y-0",
    "bg-ctid-green md:bg-transparent text-white md:text-black",
    "float-right w-full", // accomodate left burger button
    "md:float-none md:mb-auto md:translate-y-[0px]",  // remove left burger button accomodation
  )

  const wrapperCSS = cn(
    navbarHidden ? "h-0 md:h-auto" : "h-auto",
    "z-50",
    "bg-ctid-green md:bg-transparent",
    props.className
  )

  return (
    <div className={wrapperCSS}>
      <button className={burgerCSS} onClick={handleClick}>
        <FiMenu className="m-auto w-[24px] h-[24px]"/>
      </button>
      <div className={childrenCSS}>
        {props.children}
      </div>
    </div>
  )
}