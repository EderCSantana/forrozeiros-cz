
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { useLanguage } from "../../contexts/LanguageContext";

interface DesktopNavProps {
  activeSection: string;
  navItems: Array<{ name: string, id: string }>;
  scrollToSection: (sectionId: string) => void;
}

const DesktopNav = ({ activeSection, navItems, scrollToSection }: DesktopNavProps) => {
  return (
    <NavigationMenu className="hidden lg:flex">
      <NavigationMenuList>
        {navItems.map((item) => (
          <NavigationMenuItem key={item.id}>
            <NavigationMenuLink
              className={`${navigationMenuTriggerStyle()} text-dance-brown ${
                activeSection === item.id ? "text-dance-orange" : ""
              } hover:text-dance-orange hover:bg-transparent`}
              onClick={() => scrollToSection(item.id)}
            >
              {item.name}
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default DesktopNav;
