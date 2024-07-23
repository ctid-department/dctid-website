'use client';

import {useState} from "react"
import {cn} from "@/lib/utils"
import { ChevronDown } from "lucide-react";

export default function NavList({...props}){

  const [navListHidden, setNavListHidden] = useState(true)

  const navListCSS = cn(
    "",
    props.className
  )

  const handleClick = async () => {
    setNavListHidden(!navListHidden)
  }

  const childrenCSS = cn(
    props.popout ? "sm:absolute" : "",
    navListHidden ? "hidden" : ""
  )

  return(
    <div>
      <p className={navListCSS} onClick={handleClick}>{props.title} <ChevronDown className={`inline w-3 h-3 ${navListHidden ? "" : "rotate-180"}`}/></p>
      <div className={childrenCSS}>
        {props.children}
      </div>
    </div>
  )
}