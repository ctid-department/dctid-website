'use client';

import {cn} from "@/lib/utils"

import NavLink from "./NavLink";
import NavList from "./NavList";
import {useState} from "react"

export default function NavCore({...props}){

  const [shownList, setShownList] = useState("")

  const CSS = cn(
    "",
    props.className
  )

  const navItems = props.items
  const navItemCSS = "p-3 md:p-5 text-sm md:mx-1 hover:bg-ctid-gray hover:text-black active:bg-ctid-charcoal active:text-white"

  return (
    <nav className="md:flex justify-center w-full">
      {
        navItems.map((item: any, idx: any) => (
          item.type === "link" ? (
            <NavLink key={idx} className={navItemCSS} href={item.link!.link} title={item.link!.title}/>
          ) : (
            <NavList activeOnHover key={idx} showRef={[shownList, setShownList]} showKey={idx} className={navItemCSS} title={item.title} popout>
              <div className="md:shadow-xl md:border-gray-200 border bg-white text-black">
                {
                  item.items!.map((subItem: any, subIdx: any) => (
                    <NavLink key={subIdx} className={cn(navItemCSS, "pl-10 md:pl-0 md:p-5 mx-0 md:mx-0")} href={subItem.link} title={subItem.title}/>
                  ))
                }
              </div>
            </NavList>
          )
        ))
      }
    </nav>
  );
}