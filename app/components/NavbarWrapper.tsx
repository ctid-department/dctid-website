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
    "w-full bg-ctid-green block bg-center bg-contain sm:hidden text-white",
    "h-[10vh]"
  )

  return (
    <div className="">
      <div className={navbarHidden ? "hidden sm:block bg-ctid-green sm:bg-transparent text-white sm:text-black" : "block bg-ctid-green text-white"}>
        {props.children}
      </div>
      <button className={burgerCSS} onClick={handleClick}>
        {navbarHidden ? "Navigation" : ""}
        <ChevronDown className={`m-auto text-white ${navbarHidden ? "" : "rotate-180"}`}/>
      </button>
    </div>
  )
}