
import { Link } from "react-router-dom";
import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-dance-brown text-white">
      <div className="container-fluid mx-auto">
        <div className="pt-16 pb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* About Column */}
            <div>
              <h3 className="text-xl font-display font-medium mb-4">
                Dance<span className="text-dance-orange">Event</span>
              </h3>
              <p className="text-white text-opacity-80 mb-4">
                Bringing the joy and rhythm of Forró dance to communities around
                the world. Join us and experience the vibrant culture of Brazil.
              </p>
              <div className="flex space-x-3">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white bg-opacity-10 hover:bg-opacity-20 p-2 rounded-full transition-all duration-300"
                  aria-label="Facebook"
                >
                  <Facebook size={18} />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white bg-opacity-10 hover:bg-opacity-20 p-2 rounded-full transition-all duration-300"
                  aria-label="Instagram"
                >
                  <Instagram size={18} />
                </a>
              </div>
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
                <li className="flex items-start">
                  <MapPin size={18} className="mr-3 mt-1 flex-shrink-0" />
                  <span>123 Dance Street, Rhythm City, 10001</span>
                </li>
                <li className="flex items-center">
                  <Phone size={18} className="mr-3 flex-shrink-0" />
                  <a
                    href="tel:+1234567890"
                    className="hover:text-dance-orange transition-colors duration-300"
                  >
                    +1 (234) 567-890
                  </a>
                </li>
                <li className="flex items-center">
                  <Mail size={18} className="mr-3 flex-shrink-0" />
                  <a
                    href="mailto:info@danceevent.com"
                    className="hover:text-dance-orange transition-colors duration-300"
                  >
                    info@danceevent.com
                  </a>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-xl font-display font-medium mb-4">
                Stay Updated
              </h3>
              <p className="text-white text-opacity-80 mb-4">
                Subscribe to our newsletter for the latest events and updates.
              </p>
              <form className="flex flex-col space-y-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="px-4 py-2 rounded bg-white bg-opacity-10 focus:bg-opacity-20 border border-white border-opacity-20 focus:outline-none text-white placeholder-white placeholder-opacity-60"
                  required
                />
                <button
                  type="submit"
                  className="bg-dance-orange hover:bg-dance-orange/90 text-white py-2 px-4 rounded transition-colors duration-300"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white border-opacity-10 py-6 text-center text-white text-opacity-60">
          <p>
            © {year} DanceEvent. All rights reserved. Designed with
            <span className="text-dance-orange mx-1">♥</span>
            for dance lovers.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
