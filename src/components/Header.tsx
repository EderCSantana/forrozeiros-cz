import { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import LanguageSelector from "@/components/LanguageSelector";
import SocialIcons from "@/components/SocialIcons";
import { navItems } from "@/data/site";
import useClickOutside from "@/hooks/useClickOutside";
import { useLanguage } from "@/i18n/LanguageContext";

const MD_BREAKPOINT = 768;

export default function Header() {
  const { t } = useLanguage();
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isTabletMenuOpen, setIsTabletMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const tabletMenuRef = useRef<HTMLDivElement>(null);

  useClickOutside(tabletMenuRef, () => setIsTabletMenuOpen(false));

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Highlight the menu item of the section currently on screen.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.5 },
    );
    navItems.forEach((item) => {
      const section = document.getElementById(item.id);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= MD_BREAKPOINT) setIsMobileMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsTabletMenuOpen(false);
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-forro-sand/95 shadow-sm backdrop-blur-md" : "bg-forro-sand/80"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between py-4">
          <a href="/#home" onClick={() => handleNavigate("home")} aria-label="Home" className="flex-shrink-0">
            <img src="/images/logo.png" alt="Forró Zeiros" className="h-12 md:h-14 lg:h-16" />
          </a>

          {/* Desktop: full menu */}
          <nav className="relative z-10 hidden max-w-max flex-1 items-center justify-center lg:flex">
            <ul className="flex flex-1 items-center justify-center space-x-2">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`/#${item.id}`}
                    onClick={() => handleNavigate(item.id)}
                    className="inline-flex h-10 w-max items-center justify-center rounded-md px-3 py-2 text-sm font-medium text-forro-brown transition-colors hover:text-forro-amber focus:outline-none"
                  >
                    {t(item.labelKey)}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Tablet: dropdown menu */}
          <div ref={tabletMenuRef} className="relative hidden md:block lg:hidden">
            <button
              type="button"
              onClick={() => setIsTabletMenuOpen(!isTabletMenuOpen)}
              className="flex items-center text-forro-brown hover:text-forro-amber"
            >
              {t("nav.menu")} <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            {isTabletMenuOpen && (
              <div className="absolute right-0 top-full z-50 mt-1 w-56 overflow-hidden rounded-md border border-forro-rust/20 bg-forro-sand p-1 shadow-md">
                {navItems.map((item) => (
                  <a
                    key={item.id}
                    href={`/#${item.id}`}
                    onClick={() => handleNavigate(item.id)}
                    className={`flex select-none items-center rounded-sm px-2 py-1.5 text-sm transition-colors hover:bg-forro-cream hover:text-forro-amber ${
                      activeSection === item.id ? "text-forro-orange" : "text-forro-brown"
                    }`}
                  >
                    {t(item.labelKey)}
                  </a>
                ))}
              </div>
            )}
          </div>

          <div className="hidden items-center space-x-4 md:flex">
            <SocialIcons size={20} />
            <LanguageSelector />
          </div>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
            className="text-forro-brown hover:text-forro-amber focus:outline-none md:hidden"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile: full-screen menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 overflow-y-auto bg-forro-sand px-4 pt-20 md:hidden">
          <div className="container">
            <div className="mb-6 flex justify-end">
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close mobile menu"
                className="text-forro-brown hover:text-forro-amber focus:outline-none"
              >
                <X size={24} />
              </button>
            </div>

            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`/#${item.id}`}
                  onClick={() => handleNavigate(item.id)}
                  className={`border-b border-forro-rust/10 py-2 text-lg font-medium ${
                    activeSection === item.id ? "text-forro-orange" : "text-forro-brown"
                  }`}
                >
                  {t(item.labelKey)}
                </a>
              ))}
            </nav>

            <div className="mt-8 flex items-center justify-between">
              <div className="flex space-x-4">
                <SocialIcons size={24} />
              </div>
              <LanguageSelector />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
