import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Image from "next/image";

const NavBar = () => {
  // This is a sample Navbar, delete if you don't need it
  return (
    <NavigationMenu className=" px-8">
      <a href=""><Image
        className="dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert rounded-md"
        src="/main_logo.png"
        alt="Placeholder image"
        height={30}
        width={225}
        priority={true}
      />
      </a>

      <NavigationMenuLink className="text-green-700" href="/">
        Contact us
      </NavigationMenuLink>
    </NavigationMenu>
  );
};

export default NavBar;
