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
import NavCore from "./NavCore";

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


  return (
    <NavCore items={navItems} />
  );
}
