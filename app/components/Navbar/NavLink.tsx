'use client';

import {cn} from "@/lib/utils"

export default function NavList({...props}){

  const navLinkCSS = cn(
    "block m-0 p-0",
    props.className
  )

  return(
    <a href={props.href} className={navLinkCSS}>{props.title}</a>
  )
}