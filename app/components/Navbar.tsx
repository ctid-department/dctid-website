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
    <nav className="w-full relative flex flex-col items-center max-w-4xl mx-auto px-4 py-5">
      <div className="w-full relative flex flex-col md:flex-row items-center justify-between mb-4">
        <div className="flex flex-col md:flex-row items-center gap-4 mb-4 md:mb-0">
          <div className="flex items-center">
            <Link href="/">
              <Image src={upseal} alt="UP seal" width={80} height={80} />
            </Link>
            <Link href="/">
              <Image src={ctidlogo} alt="CTID logo" width={80} height={80} />
            </Link>
          </div>
          <div className="flex flex-col items-center md:items-start max-w-lg text-center md:text-left">
            <Link href="/" className="font-bold text-xl md:text-xl uppercase">
              Department of Clothing, Textiles, and Interior Design
            </Link>
            <div className="text-sm uppercase">
              University of the Philippines Diliman
            </div>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <MdSearch size={24} className="hover:text-gray-600 cursor-pointer" />
          <Link href="https://www.facebook.com/UPCTID/">
            <FaFacebook
              size={24}
              className="hover:text-gray-600 cursor-pointer"
            />
          </Link>
        </div>
      </div>
      <div className="w-full relative flex items-center justify-center mx-auto py-2 border rounded">
        <NavigationMenu>
          <NavigationMenuList className="flex flex-col md:flex-row justify-between w-full">
            {navItems.map((item, idx) => (
              <NavigationMenuItem key={idx}>
                {item.type === "link" ? (
                  <Link href={item.link!.link} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      {item.link!.title}
                    </NavigationMenuLink>
                  </Link>
                ) : (
                  <>
                    <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
                    <NavigationMenuContent className="z-10">
                      <ul className="md:p-6 md:w-[400px]">
                        {item.items!.map((linkItem, linkIdx) => (
                          <ListItem
                            key={linkIdx}
                            href={linkItem.link}
                            title={linkItem.title}
                          ></ListItem>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
