import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"

const NavBar = () => {
  // This is a sample Navbar, delete if you don't need it
  return (
    <NavigationMenu className='border-b'>
      <NavigationMenuList className='gap-6'>
        <NavigationMenuItem className="cursor-pointer">Link One</NavigationMenuItem>
        <NavigationMenuItem className="cursor-pointer">Link Two</NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export default NavBar