"use server";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import React from "react";
import { client } from "../../lib/sanity";
import { navItem } from "../../interface";
import { cn } from "@/lib/utils";

import NavItem from "./NavItem";
import NavLink from "./NavLink";
import NavList from "./NavList";

// export const revalidate = 60;

async function getNavData() {
  const query = `
  *[_type == 'navigation'] | order(orderRank) {
    title,
    type,
    items[] {
      "title": label,
      "link": select(
        type == 'internal' => "/" + coalesce(internal->slug.current, ""),
        external
      )
    },
    link {
      "title": label,
      "link": select(
        type == 'internal' => "/" + coalesce(internal->slug.current, ""),
        external
      )
    }
  }
  `;

  const data = await client.fetch(query);
  return data || null;
}

export default async function Navbar() {
  const navItems: navItem[] = await getNavData();

  // console.log(navItems);

  const navItemCSS = "p-2 sm:mx-1 hover:bg-yellow-500 active:bg-white"

  return (
    <nav className="sm:flex justify-center w-full">
      {
        navItems.map((item, idx) => (
          <>{
            item.type === "link" ? (
            <NavLink className={navItemCSS} key={idx} href={item.link!.link} title={item.link!.title}/>
          ) : (
            <NavList key={idx} className={navItemCSS} title={item.title} popout>
              <ul className="sm:shadow-xl sm:border-gray-200 border bg-white text-black">
                {
                  item.items!.map((subItem, subIdx) => (
                    <NavLink className={cn(navItemCSS, "pl-10")} key={subIdx} href={subItem.link} title={subItem.title}/>
                  ))
                }
              </ul>
            </NavList>
          )
          }</>
        ))
      }
    </nav>
  );
}
