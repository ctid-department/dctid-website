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
import { client } from "../lib/sanity";
import { navItem } from "../interface";

export const revalidate = 60;

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
    <NavigationMenu className="max-w-6xl w-full flex-grow-0 flex flex-col items-center mx-auto py-2 px-4 bg-transparent">
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
