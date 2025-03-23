
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Facebook, Instagram, Menu, X } from "lucide-react";
import LanguageSelector from "./LanguageSelector";

const navItems = [
  { name: "About Forró", path: "/about-forro" },
  { name: "About Us", path: "/about-us" },
  { name: "Events", path: "/events" },
  { name: "Our Rules", path: "/rules" },
  { name: "Partners", path: "/partners" },
  { name: "Contact", path: "/contact" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white bg-opacity-95 backdrop-blur-md shadow-sm transition-all duration-300">
      <div className="container-fluid mx-auto">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <div className="flex items-center">
              <span className="font-display text-2xl font-bold text-dance-brown">
                Dance<span className="text-dance-orange">Event</span>
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`nav-link ${
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
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dance-black hover:text-dance-blue transition-colors duration-300"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dance-black hover:text-dance-orange transition-colors duration-300"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <LanguageSelector />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-dance-black hover:text-dance-orange focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-white bg-opacity-95 backdrop-blur-md shadow-md transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <nav className="container-fluid py-4 flex flex-col space-y-3">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`nav-link ${
                location.pathname === item.path ? "text-dance-orange" : ""
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <div className="flex items-center space-x-4 pt-3 border-t border-dance-cream">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dance-black hover:text-dance-blue transition-colors duration-300"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dance-black hover:text-dance-orange transition-colors duration-300"
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
