'use client';

import {cn} from "@/lib/utils"
import Link from "next/link"

export default function NavList({...props}){

  const navLinkCSS = cn(
    "block m-0 p-0",
    props.className
  )

  return(
    <Link href={props.href} className={navLinkCSS}>{props.title}</Link>
  )
}