
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Facebook, Instagram, Menu, X } from "lucide-react";
import LanguageSelector from "./LanguageSelector";
import { useLanguage } from "../contexts/LanguageContext";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

  const navItems = [
    { name: t("nav.about_forro"), path: "/about-forro" },
    { name: t("nav.about_us"), path: "/about-us" },
    { name: t("nav.events"), path: "/events" },
    { name: t("nav.custom_events"), path: "/custom-events" },
    { name: t("nav.rules"), path: "/rules" },
    { name: t("nav.partners"), path: "/partners" },
    { name: t("nav.contact"), path: "/contact" },
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#ffeec0] bg-opacity-95 backdrop-blur-md shadow-sm transition-all duration-300">
      <div className="container-fluid mx-auto">
        <div className="flex items-center justify-between py-4">
          {/* Logo as Home Button */}
          <Link to="/" className="flex-shrink-0" aria-label="Home">
            <div className="flex items-center">
              <img 
                src="/lovable-uploads/c454e34b-5903-4ae4-97f6-b2d66315c01c.png" 
                alt="Forró Zeiros" 
                className="h-14 md:h-20"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-link text-dance-brown ${
                  location.pathname === item.path ? "text-dance-orange" : ""
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Social and Language Selector */}
          <div className="hidden md:flex items-center space-x-4">
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
            <Link
              key={item.path}
              to={item.path}
              className={`nav-link text-dance-brown ${
                location.pathname === item.path ? "text-dance-orange" : ""
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
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
