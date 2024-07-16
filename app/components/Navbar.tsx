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

export default function Navbar() {
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
            <Link href="/" className="font-bold text-xl md:text-2xl">
              Department of Clothing, Textiles, and Interior Design
            </Link>
            <div className="text-sm md:text-base">
              University of the Philippines Diliman
            </div>
          </div>
        </div>
        <div className="flex items-center">🔍 Search</div>
      </div>
      <div className="w-full relative flex items-center justify-center mx-auto py-2 border rounded">
        <NavigationMenu>
          <NavigationMenuList className="flex flex-col md:flex-row justify-between w-full">
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  News
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/events" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Events
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>About CTID</NavigationMenuTrigger>
              <NavigationMenuContent className="z-10">
                <ul className="md:p-6 md:w-[400px]">
                  <ListItem href="/history" title="History"></ListItem>
                  <ListItem
                    href="/mission-vision-core-values"
                    title="Mission, Vision, Core Values"
                  ></ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Academics</NavigationMenuTrigger>
              <NavigationMenuContent className="z-10">
                <ul className="md:p-6 md:w-[400px]">
                  <ListItem
                    href="/undergraduate-programs"
                    title="Undergraduate Programs"
                  ></ListItem>
                  <ListItem
                    href="/graduate-programs"
                    title="Graduate Programs"
                  ></ListItem>
                  <ListItem href="/admissions" title="Admissions"></ListItem>
                  <ListItem href="/exhibits" title="Exhibits"></ListItem>
                  <ListItem
                    href="/student-works"
                    title="Student Works"
                  ></ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>People</NavigationMenuTrigger>
              <NavigationMenuContent className="z-10">
                <ul className="md:p-6 md:w-[400px]">
                  <ListItem
                    href="/faculty-and-staff"
                    title="Faculty and Staff"
                  ></ListItem>
                  <ListItem href="/students" title="Students"></ListItem>
                  <ListItem href="/admissions" title="Admissions"></ListItem>
                  <ListItem href="/exhibits" title="Exhibits"></ListItem>
                  <ListItem
                    href="/student-works"
                    title="Student Works"
                  ></ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                Facilities and Services
              </NavigationMenuTrigger>
              <NavigationMenuContent className="z-10">
                <ul className="md:p-6 md:w-[400px]">
                  <ListItem
                    href="/che-costume-museum"
                    title="CHE Costume Museum"
                  ></ListItem>
                  <ListItem
                    href="/studio-and-laboratory"
                    title="Studio and Laboratory"
                  ></ListItem>
                  <ListItem
                    href="/digital-loom-and-weaving-room"
                    title="Digital Loom and Weaving Room"
                  ></ListItem>
                  <ListItem
                    href="/career-guidance-workshop"
                    title="Career Guidance Workshop for Interior Design Graduates"
                  ></ListItem>
                  <ListItem
                    href="/extramural-activities"
                    title="Extramural Activities"
                  ></ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
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
