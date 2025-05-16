
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
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
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

  // Enhanced scroll handler to control header visibility
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Add background when scrolled
      if (currentScrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      
      // Hide/show based on scroll direction, not hover
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        // Scrolling down & past header height - hide header
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up - show header
        setIsVisible(true);
      }
      
      // Update the last scroll position
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

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

  // Close mobile menu on window resize to prevent menu issues
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [mobileMenuOpen]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const mobileMenu = document.getElementById('mobile-menu');
      const mobileMenuButton = document.getElementById('mobile-menu-button');
      
      if (mobileMenu && mobileMenuButton && 
          !mobileMenu.contains(e.target as Node) && 
          !mobileMenuButton.contains(e.target as Node) &&
          mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [mobileMenuOpen]);

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-[#ffeec0] bg-opacity-95 backdrop-blur-md shadow-sm" : "bg-[#ffeec0] bg-opacity-80"
      } ${
        isVisible ? "translate-y-0" : "-translate-y-full"
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
                src="/lovable-uploads/762ed430-c94d-4c3e-b69a-7b4da26f6abb.png" 
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

          {/* Tablet Navigation Dropdown (medium screens only) */}
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

          {/* Social Icons and Language Selector - Only visible on non-mobile screens */}
          <div className="hidden md:flex items-center space-x-2 sm:space-x-4">
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

          {/* Mobile Menu Button - Only visible on mobile */}
          <button
            id="mobile-menu-button"
            className="md:hidden text-dance-brown hover:text-dance-orange focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Only renders when mobileMenuOpen is true */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden fixed inset-0 bg-[#ffeec0] z-40 pt-20 px-4 overflow-y-auto"
        >
          <div className="container mx-auto">
            <div className="flex justify-end mb-6">
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
            
            {/* Social media and language selector in mobile menu */}
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
      )}
    </header>
  );
};

export default Header;
