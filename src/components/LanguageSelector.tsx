
import { useState, useRef, useEffect } from "react";
import { ChevronDown, Check } from "lucide-react";

const languages = [
  { code: "EN", name: "English" },
  { code: "ES", name: "Español" },
  { code: "SK", name: "Slovenčina" },
  { code: "CZ", name: "Čeština" },
  { code: "UA", name: "Українська" },
  { code: "RU", name: "Русский" },
  { code: "PT", name: "Português" },
  { code: "PT-BR", name: "Português (Brasil)" },
];

const LanguageSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectLanguage = (language: typeof languages[0]) => {
    setSelectedLanguage(language);
    setIsOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="flex items-center space-x-1 px-2 py-1 rounded-md hover:bg-dance-cream transition-colors duration-200"
        aria-label="Select language"
      >
        <span className="text-sm font-medium">{selectedLanguage.code}</span>
        <ChevronDown
          size={16}
          className={`transition-transform duration-200 ${
            isOpen ? "transform rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50 animate-fade-in">
          <div className="max-h-56 overflow-y-auto">
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => selectLanguage(language)}
                className={`flex items-center justify-between w-full px-4 py-2 text-sm hover:bg-dance-cream transition-colors duration-150 ${
                  selectedLanguage.code === language.code
                    ? "text-dance-orange"
                    : "text-dance-black"
                }`}
              >
                <span>
                  {language.code} - {language.name}
                </span>
                {selectedLanguage.code === language.code && (
                  <Check size={16} className="text-dance-orange" />
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
