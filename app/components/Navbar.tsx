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
import Image from "next/image";
import upseal from "../images/UP-seal.png";
import ctidlogo from "../images/CTID-logo.png";
import React from "react";
import { cn } from "@/lib/utils";
import { client } from "../lib/sanity";
import { navItem } from "../lib/interface";
import { FaFacebook } from "react-icons/fa";
import { MdSearch } from "react-icons/md";

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
  }`;

  const data = await client.fetch(query);
  return data || null;
}

export default async function Navbar() {
  const navItems: navItem[] = await getNavData();

  // console.log(navItems);

  return (
    <NavigationMenu className="w-full flex flex-col items-center max-w-4xl mx-auto py-2 px-4 border-b">
      <NavigationMenuList className="flex flex-col md:flex-row justify-between w-full">
        {navItems.map((item, idx) => (
          <NavigationMenuItem key={idx}>
            {item.type === "link" ? (
              <Link href={item.link!.link} legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {item.link!.title}
                </NavigationMenuLink>
              </Link>
            ) : (
              <>
                <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
                <NavigationMenuContent className="z-10">
                  <ul className="md:p-6 md:w-[400px]">
                    {item.items!.map((linkItem, linkIdx) => (
                      <li key={linkIdx}>
                        <Link href={linkItem.link} legacyBehavior passHref>
                          <NavigationMenuLink
                            className={navigationMenuTriggerStyle()}
                          >
                            {linkItem.title}
                          </NavigationMenuLink>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
