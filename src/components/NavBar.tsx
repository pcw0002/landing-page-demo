import { ContactUsButton } from "@/components/ContactUsButton";
import { NavigationMenu } from "@/components/ui/navigation-menu";
import Image from "next/image";
import { Button } from "./ui/button";

const NavBar = () => {
  // This is a sample Navbar, delete if you don't need it
  return (
    <NavigationMenu className="h-11 md:h-12 xl:h-14 p-2 m-2 md:px-6">
      <a href="" className="h-full aspect-auto">
        <img
          className="h-full w-full"
          src="/main_logo_copy.svg"
          alt="Main logo"
          height={30}
          width={100}
        />
      </a>

      <ContactUsButton>
        <Button variant="ghost" className="transition-all text-lg md:text-xl xl:text-2xl hover:bg-slate-300">Contact us</Button>
      </ContactUsButton>
    </NavigationMenu>
  );
};

export default NavBar;
