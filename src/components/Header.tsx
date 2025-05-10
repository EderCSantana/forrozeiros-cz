
import { useState, useEffect } from "react";
import { Facebook, Instagram, Menu, X, ChevronDown } from "lucide-react";
import LanguageSelector from "./LanguageSelector";
import { useLanguage } from "../contexts/LanguageContext";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useLanguage();

  const navItems = [
    { name: t("nav.home"), id: "home" },
    { name: t("nav.about_forro"), id: "about-forro" },
    { name: t("nav.about_us"), id: "about-us" },
    { name: t("nav.events"), id: "events" },
    { name: t("nav.custom_events"), id: "custom-events" },
    { name: t("nav.rules"), id: "rules" },
    { name: t("nav.partners"), id: "partners" },
    { name: t("nav.contact"), id: "contact" },
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setMobileMenuOpen(false);
    }
  };

  // Check scroll position to add background on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Setup intersection observer to update active section on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    navItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => {
      navItems.forEach((item) => {
        const element = document.getElementById(item.id);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-[#ffeec0] bg-opacity-95 backdrop-blur-md shadow-sm" : "bg-[#ffeec0] bg-opacity-80"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo as Home Button */}
          <a 
            onClick={() => scrollToSection("home")} 
            className="flex-shrink-0 cursor-pointer" 
            aria-label="Home"
          >
            <div className="flex items-center">
              <img 
                src="/lovable-uploads/c454e34b-5903-4ae4-97f6-b2d66315c01c.png" 
                alt="Forró Zeiros" 
                className="h-12 md:h-14 lg:h-16"
              />
            </div>
          </a>

          {/* Desktop Navigation (Large screens only) */}
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

          {/* Tablet Navigation Dropdown (medium screens) */}
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

          {/* Social Icons and Language Selector */}
          <div className="hidden sm:flex items-center space-x-2 sm:space-x-4">
            <a
              href="https://www.facebook.com/profile.php?id=61571664788308"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dance-brown hover:text-dance-orange transition-colors duration-300"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </a>
            <a
              href="https://www.instagram.com/forrozeiros_cz/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dance-brown hover:text-dance-orange transition-colors duration-300"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <LanguageSelector />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-dance-brown hover:text-dance-orange focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Improved Animation and Styling */}
      <div
        className={`md:hidden fixed inset-0 bg-[#ffeec0] z-40 transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center mb-6">
            <img 
              src="/lovable-uploads/c454e34b-5903-4ae4-97f6-b2d66315c01c.png" 
              alt="Forró Zeiros" 
              className="h-10"
            />
            <button
              className="text-dance-brown hover:text-dance-orange focus:outline-none"
              onClick={toggleMobileMenu}
              aria-label="Close mobile menu"
            >
              <X size={24} />
            </button>
          </div>
          
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <a
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-lg font-medium py-2 border-b border-dance-brown border-opacity-10 ${
                  activeSection === item.id ? "text-dance-orange" : "text-dance-brown"
                }`}
              >
                {item.name}
              </a>
            ))}
          </nav>
          
          <div className="mt-8 flex items-center justify-between">
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=61571664788308"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dance-brown hover:text-dance-orange transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
              <a
                href="https://www.instagram.com/forrozeiros_cz/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dance-brown hover:text-dance-orange transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
            </div>
            <LanguageSelector />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
