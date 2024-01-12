import { ContactUsButton } from "@/app/page";
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
    <NavigationMenu className="px-8 mt-2">
      <a href="">
        <Image
          className="dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert rounded-md"
          src="/main_logo.png"
          alt="Main logo"
          height={30}
          width={225}
          priority={true}
        />
      </a>

      <ContactUsButton>
        <button>Contact us</button>
      </ContactUsButton>
    </NavigationMenu>
  );
};

export default NavBar;
