
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Facebook, Instagram, Menu, X, ChevronDown } from "lucide-react";
import LanguageSelector from "./LanguageSelector";
import { useLanguage } from "../contexts/LanguageContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
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

  // Setup intersection observer to update active section on scroll
  useState(() => {
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
    <header className="sticky top-0 z-50 w-full bg-[#ffeec0] bg-opacity-95 backdrop-blur-md shadow-sm transition-all duration-300">
      <div className="container-fluid mx-auto">
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
                className="h-14 md:h-16"
              />
            </div>
          </a>

          {/* Desktop Navigation for larger screens */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-3">
            {navItems.map((item) => (
              <a
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`nav-link text-dance-brown text-sm xl:text-base cursor-pointer ${
                  activeSection === item.id ? "text-dance-orange" : ""
                }`}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Tablet Menu Dropdown (medium screens) */}
          <div className="hidden md:block lg:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-dance-brown hover:text-dance-orange">
                Menu <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {navItems.map((item) => (
                  <DropdownMenuItem key={item.id} asChild>
                    <a
                      onClick={() => scrollToSection(item.id)}
                      className={`w-full text-sm cursor-pointer ${
                        activeSection === item.id ? "text-dance-orange" : "text-dance-brown"
                      }`}
                    >
                      {item.name}
                    </a>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Social and Language Selector */}
          <div className="flex items-center space-x-2 sm:space-x-4">
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

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-[#ffeec0] bg-opacity-95 backdrop-blur-md shadow-md transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <nav className="container-fluid py-4 flex flex-col space-y-3">
          {navItems.map((item) => (
            <a
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`nav-link text-dance-brown cursor-pointer ${
                activeSection === item.id ? "text-dance-orange" : ""
              }`}
            >
              {item.name}
            </a>
          ))}
          <div className="flex items-center space-x-4 pt-3 border-t border-dance-brown border-opacity-20">
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
        </nav>
      </div>
    </header>
  );
};

export default Header;
