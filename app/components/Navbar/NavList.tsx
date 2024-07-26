'use client';

import {cn} from "@/lib/utils"
import { ChevronDown } from "lucide-react";

export default function NavList({...props}){

  const navListCSS = cn(
    "cursor-pointer",
    props.className
  )

  const handleClick = async () => {
    if(~props.activeOnHover){
      props.showRef[1](props.showRef[0] == props.showKey ? "" : props.showKey)
    }
  }

  const handleOnMouseOver = async () => {
    if(props.activeOnHover && window.matchMedia("(min-width: 768px)").matches){
      props.showRef[1](props.showKey)
    }
  }

  const handleOnMouseLeave = async () => {
    if(props.activeOnHover && window.matchMedia("(min-width: 768px)").matches){
      props.showRef[1]("")
    }
  }

  const parentCSS = cn(
    props.showRef[0] == props.showKey ? "max-h-max" : "max-h-0",
    "transition-all"
  )

  const childWrapperCSS = cn(
    props.popout ? "md:absolute md:z-50" : "",
    props.showRef[0] == props.showKey ? "h-auto scale-y-100" : "h-0 md:block scale-y-0 -translate-y-1/2",
    "transition-all"
  )

  return(
    <div onMouseOver={handleOnMouseOver} onMouseLeave={handleOnMouseLeave}>
      <p className={navListCSS} onClick={handleClick}>{props.title} <ChevronDown className={`inline w-3 h-3 ${props.showRef[0] == props.showKey ? "rotate-180" : ""}`}/></p>
      <div className={childWrapperCSS}>
        {props.children}
      </div>
    </div>
  )
}