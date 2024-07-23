'use client';

import {cn} from "@/lib/utils"
import { ChevronDown } from "lucide-react";

export default function NavList({...props}){

  const navListCSS = cn(
    "",
    props.className
  )

  const handleClick = async () => {
    if(~props.activeOnHover){
      props.showRef[1](props.showRef[0] == props.showKey ? "" : props.showKey)
      // setNavListHidden(!navListHidden)
    }
  }

  const childrenCSS = cn(
    props.popout ? "md:absolute md:z-50" : "",
    // navListHidden ? "hidden" : ""
    props.showRef[0] == props.showKey ? "" : "hidden"
  )

  return(
    <div>
      <p className={navListCSS} onClick={handleClick}>{props.title} <ChevronDown className={`inline w-3 h-3 ${props.showRef[0] == props.showKey ? "rotate-180" : ""}`}/></p>
      <div className={childrenCSS}>
        {props.children}
      </div>
    </div>
  )
}