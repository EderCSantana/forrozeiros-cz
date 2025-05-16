
import { ChevronDown } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

interface TabletNavProps {
  activeSection: string;
  navItems: Array<{ name: string, id: string }>;
  scrollToSection: (sectionId: string) => void;
}

const TabletNav = ({ activeSection, navItems, scrollToSection }: TabletNavProps) => {
  return (
    <div className="hidden md:block lg:hidden">
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center text-dance-brown hover:text-dance-orange bg-transparent border-none hover:bg-transparent focus:ring-0">
          Menu <ChevronDown className="ml-1 h-4 w-4" />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56 bg-[#ffeec0] border-dance-brown border-opacity-20">
          {navItems.map((item) => (
            <DropdownMenuItem 
              key={item.id} 
              className={`cursor-pointer ${
                activeSection === item.id ? "text-dance-orange" : "text-dance-brown"
              } hover:text-dance-orange hover:bg-[#fff8e8]`}
              onClick={() => scrollToSection(item.id)}
            >
              {item.name}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default TabletNav;
