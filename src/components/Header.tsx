
import { useState, useEffect } from "react";
import { Facebook, Instagram } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import DesktopNav from "./header/DesktopNav";
import TabletNav from "./header/TabletNav";
import MobileNav from "./header/MobileNav";
import SocialIcons from "./header/SocialIcons";
import HoverDetectionZone from "./header/HoverDetectionZone";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
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

  // Enhanced scroll handler with improved hover detection
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Add background when scrolled
      if (currentScrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      
      // Hide/show based on scroll direction, hover state
      if (currentScrollY > lastScrollY && currentScrollY > 80 && !isHovering) {
        // Scrolling down & past header height & not hovering - hide header
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY || isHovering) {
        // Scrolling up or hovering over top - show header
        setIsVisible(true);
      }
      
      // Update the last scroll position
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, isHovering]);

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
    <>
      {/* Improved hover detection zone - larger area and more sensitive */}
      <HoverDetectionZone setIsHovering={setIsHovering} />
      
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

            {/* Desktop Navigation */}
            <DesktopNav 
              activeSection={activeSection} 
              navItems={navItems} 
              scrollToSection={scrollToSection} 
            />

            {/* Tablet Navigation Dropdown */}
            <TabletNav 
              activeSection={activeSection} 
              navItems={navItems} 
              scrollToSection={scrollToSection} 
            />

            {/* Social Icons and Language Selector */}
            <SocialIcons />

            {/* Mobile Menu Button and Navigation */}
            <MobileNav 
              mobileMenuOpen={mobileMenuOpen} 
              toggleMobileMenu={toggleMobileMenu} 
              activeSection={activeSection} 
              navItems={navItems} 
              scrollToSection={scrollToSection} 
            />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
