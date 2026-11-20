import { useRef, useState } from "react";
import { Check, ChevronDown } from "lucide-react";
import useClickOutside from "@/hooks/useClickOutside";
import { useLanguage } from "@/i18n/LanguageContext";
import { languages, type LanguageCode } from "@/i18n/languages";

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useClickOutside(containerRef, () => setIsOpen(false));

  const selectLanguage = (code: LanguageCode) => {
    setLanguage(code);
    setIsOpen(false);
  };

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Select language"
        className="flex items-center space-x-1 rounded-md px-2 py-1 transition-colors duration-200 hover:bg-forro-cream"
      >
        <span className="text-sm font-medium">{language}</span>
        <ChevronDown size={16} className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 z-50 mt-2 w-48 animate-fade-in rounded-md bg-white py-2 shadow-lg ring-1 ring-black/5">
          <div className="max-h-56 overflow-y-auto">
            {languages.map((option) => (
              <button
                key={option.code}
                type="button"
                onClick={() => selectLanguage(option.code)}
                className={`flex w-full items-center justify-between px-4 py-2 text-sm transition-colors duration-150 hover:bg-forro-cream ${
                  option.code === language ? "text-forro-orange" : ""
                }`}
              >
                <span>
                  {option.code} - {option.name}
                </span>
                {option.code === language && <Check size={16} className="text-forro-orange" />}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
