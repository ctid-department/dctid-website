'use client';

import {useState} from 'react';
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils"

export default function NavbarWrapper({...props}){
  
  const [navbarHidden, setNavbarHidden] = useState(true)

  function handleClick(){
    setNavbarHidden(!navbarHidden);
  }
  
  const burgerCSS = cn(
    "bg-ctid-green block bg-center bg-contain md:hidden text-white",
    "w-[65px] h-[65px] rounded-full float-right relative top-[-65px] "
  )

  const childrenCSS = cn(
    navbarHidden ? "hidden h-0 md:h-auto md:block" : "h-auto block",
    "bg-ctid-green md:bg-transparent text-white md:text-black",
    "transition-all"
    // navbarHidden ? "hidden md:block bg-ctid-green md:bg-transparent text-white md:text-black" : "block bg-ctid-green text-white"
  )

  return (
    <div className="">
      <button className={burgerCSS} onClick={handleClick}>
        <ChevronDown className={`m-auto text-white ${navbarHidden ? "" : "rotate-180"}`}/>
      </button>
      <div className={childrenCSS}>
        {props.children}
      </div>
    </div>
  )
}