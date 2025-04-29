
import { Link } from "react-router-dom";
import { Facebook, Instagram, Mail } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();

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
              <p className="text-white text-opacity-80 mb-4">
                Want to organize a Forró event at your school, company, or project?
              </p>
              <p className="text-white text-opacity-80 italic">
                Made by the Forrozeiros collective.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-display font-medium mb-4">
                Quick Links
              </h3>
              <ul className="space-y-2 text-white text-opacity-80">
                <li>
                  <Link
                    to="/about-forro"
                    className="hover:text-dance-orange transition-colors duration-300"
                  >
                    About Forró
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about-us"
                    className="hover:text-dance-orange transition-colors duration-300"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/events"
                    className="hover:text-dance-orange transition-colors duration-300"
                  >
                    Events
                  </Link>
                </li>
                <li>
                  <Link
                    to="/rules"
                    className="hover:text-dance-orange transition-colors duration-300"
                  >
                    Our Rules
                  </Link>
                </li>
                <li>
                  <Link
                    to="/partners"
                    className="hover:text-dance-orange transition-colors duration-300"
                  >
                    Partners
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="hover:text-dance-orange transition-colors duration-300"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
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
            © {year} Forrozeiros.cz. All rights reserved. 
            <span className="text-dance-orange mx-1">♥</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
