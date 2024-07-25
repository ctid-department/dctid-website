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
    // "bg-ctid-green",
    "block bg-center bg-contain md:hidden text-white",
    "w-[65px] h-[65px] rounded-tl-[33px] float-right relative top-[-65px] ",
    "hover:bg-ctid-gray hover:text-black",
    "active:bg-ctid-charcoal active:text-white",
    "transition-all"
  )

  const childrenCSS = cn(
    navbarHidden ? "h-0 md:h-auto md:block scale-y-0 md:scale-y-100 -translate-y-1/2 md:translate-y-0" : "h-auto scale-y-100",
    "bg-ctid-green md:bg-transparent text-white md:text-black",
    // "transition-all"
    // navbarHidden ? "hidden md:block bg-ctid-green md:bg-transparent text-white md:text-black" : "block bg-ctid-green text-white"
  )

  const wrapperCSS = cn(
    navbarHidden ? "h-0 md:h-auto" : "h-auto",
    props.className
  )

  return (
    <div className={wrapperCSS}>
      <button className={burgerCSS} onClick={handleClick}>
        {/*<ChevronDown className={`m-auto text-white ${navbarHidden ? "" : "rotate-180"}`}/>*/}
        <FiMenu className="m-auto w-2/5 h-2/5"/>
      </button>
      <div className={childrenCSS}>
        {props.children}
      </div>
    </div>
  )
}