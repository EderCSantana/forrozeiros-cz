
import { Facebook, Instagram, Menu, X } from "lucide-react";
import LanguageSelector from "../LanguageSelector";

interface MobileNavProps {
  mobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
  activeSection: string;
  navItems: Array<{ name: string, id: string }>;
  scrollToSection: (sectionId: string) => void;
}

const MobileNav = ({ mobileMenuOpen, toggleMobileMenu, activeSection, navItems, scrollToSection }: MobileNavProps) => {
  return (
    <>
      {/* Mobile Menu Button - Only visible on mobile */}
      <button
        id="mobile-menu-button"
        className="md:hidden text-dance-brown hover:text-dance-orange focus:outline-none"
        onClick={toggleMobileMenu}
        aria-label="Toggle mobile menu"
      >
        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

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
    </>
  );
};

export default MobileNav;
