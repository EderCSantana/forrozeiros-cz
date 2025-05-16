
import { Link } from "react-router-dom";
import { Facebook, Instagram, Mail } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();

  // Function to scroll to a section by ID
  const scrollToSection = (sectionId: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      // Update URL without page reload
      window.history.pushState({}, "", `/#${sectionId}`);
    }
  };

  return (
    <footer className="bg-dance-brown text-white">
      <div className="container-fluid mx-auto">
        <div className="pt-16 pb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* About Column */}
            <div>
              <h3 className="text-xl font-display font-medium mb-4">
                Forrozeiros.cz
              </h3>
              <p className="text-white text-opacity-80 mb-4">
                Spreading the joy of Forró in Czechia and beyond.<br />
                Workshops · Parties · Community · Culture
              </p>
              <p className="text-white text-opacity-80 italic">
                Made by the Forrozeiros collective.
              </p>
            </div>

            {/* Quick Links - Now in 2 columns */}
            <div>
              <h3 className="text-xl font-display font-medium mb-4">
                Quick Links
              </h3>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <ul className="space-y-2 text-white text-opacity-80">
                    <li>
                      <a
                        href="/#about-forro"
                        className="hover:text-dance-orange transition-colors duration-300"
                        onClick={scrollToSection("about-forro")}
                      >
                        About Forró
                      </a>
                    </li>
                    <li>
                      <a
                        href="/#about-us"
                        className="hover:text-dance-orange transition-colors duration-300"
                        onClick={scrollToSection("about-us")}
                      >
                        About Us
                      </a>
                    </li>
                    <li>
                      <a
                        href="/#events"
                        className="hover:text-dance-orange transition-colors duration-300"
                        onClick={scrollToSection("events")}
                      >
                        Events
                      </a>
                    </li>
                    <li>
                      <a
                        href="/#custom-events"
                        className="hover:text-dance-orange transition-colors duration-300"
                        onClick={scrollToSection("custom-events")}
                      >
                        Custom Events
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-2 text-white text-opacity-80">
                    <li>
                      <a
                        href="/#rules"
                        className="hover:text-dance-orange transition-colors duration-300"
                        onClick={scrollToSection("rules")}
                      >
                        Our Rules
                      </a>
                    </li>
                    <li>
                      <a
                        href="/#partners"
                        className="hover:text-dance-orange transition-colors duration-300"
                        onClick={scrollToSection("partners")}
                      >
                        Partners
                      </a>
                    </li>
                    <li>
                      <a
                        href="/#contact"
                        className="hover:text-dance-orange transition-colors duration-300"
                        onClick={scrollToSection("contact")}
                      >
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-display font-medium mb-4">
                Contact Us
              </h3>
              <ul className="space-y-3 text-white text-opacity-80">
                <li className="flex items-center">
                  <Mail size={18} className="mr-3 flex-shrink-0" />
                  <a
                    href="mailto:forrozeiroscz@gmail.com"
                    className="hover:text-dance-orange transition-colors duration-300"
                  >
                    forrozeiroscz@gmail.com
                  </a>
                </li>
                <li className="flex items-center">
                  <Facebook size={18} className="mr-3 flex-shrink-0" />
                  <a
                    href="https://www.facebook.com/profile.php?id=61571664788308"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-dance-orange transition-colors duration-300"
                  >
                    Forrozeiros CZ
                  </a>
                </li>
                <li className="flex items-center">
                  <Instagram size={18} className="mr-3 flex-shrink-0" />
                  <a
                    href="https://www.instagram.com/forrozeiros_cz/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-dance-orange transition-colors duration-300"
                  >
                    @forrozeiros_cz
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white border-opacity-10 py-6 text-center text-white text-opacity-60">
          <p>
            © {year} Forrozeiros.cz. All rights reserved. Made by the Forrozeiros collective.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
