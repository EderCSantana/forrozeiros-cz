
import { Facebook, Instagram } from "lucide-react";
import LanguageSelector from "../LanguageSelector";

const SocialIcons = () => {
  return (
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
  );
};

export default SocialIcons;
