
import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

// Define our available languages
export const languages = [
  { code: "EN", name: "English" },
  { code: "ES", name: "Español" },
  { code: "SK", name: "Slovenčina" },
  { code: "CZ", name: "Čeština" },
  { code: "UA", name: "Українська" },
  { code: "RU", name: "Русский" },
  { code: "PT", name: "Português" },
  { code: "PT-BR", name: "Português (Brasil)" },
];

type LanguageContextType = {
  language: string;
  setLanguage: (code: string) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

type LanguageProviderProps = {
  children: ReactNode;
};

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem("language");
    return savedLanguage || "EN";
  });
  const [translations, setTranslations] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(true);

  // Load translations when language changes
  useEffect(() => {
    const loadTranslations = async () => {
      setIsLoading(true);
      try {
        const langData = await import(`../translations/${language.toLowerCase()}.json`);
        setTranslations(langData.default);
      } catch (error) {
        console.error(`Failed to load translations for ${language}`, error);
        // Fallback to English if translation file is missing
        if (language !== "EN") {
          const fallbackData = await import("../translations/en.json");
          setTranslations(fallbackData.default);
        }
      } finally {
        setIsLoading(false);
      }
    };

    localStorage.setItem("language", language);
    loadTranslations();
  }, [language]);

  // Translation function
  const t = (key: string) => {
    if (isLoading) return key; // Return key while loading
    return translations[key] || key; // Fallback to key if translation missing
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
