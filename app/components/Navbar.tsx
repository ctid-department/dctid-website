import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import upseal from "../images/UP-seal.png";
import ctidlogo from "../images/CTID-logo.png";

export default function Navbar() {
  return (
    <nav className="w-full relative flex items-center justify-between max-w-4xl mx-auto px-4 py-5">
      <div className="flex items-center gap-4">
        <div className="flex items-center">
          <a href="/">
            <Image src={upseal} alt="image" width={100} height={100} />
          </a>
          <a href="/">
            <Image src={ctidlogo} alt="image" width={100} height={100} />
          </a>
        </div>
        <div className="flex flex-col max-w-lg">
          <Link href="/" className="font-bold text-2xl">
            Department of Clothing, Textiles, and Interior Design
          </Link>
          <div>University of the Philippines Diliman</div>
        </div>
      </div>
      <div className="flex items-center">🔍 Search f w</div>
      {/* <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink>Link</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu> */}
    </nav>
  );
}
