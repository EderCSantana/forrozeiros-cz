
import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

// Define our available languages
export const languages = [
  { code: "EN", name: "English" },
  { code: "ES", name: "Español" },
  { code: "PT", name: "Português" }
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

  useEffect(() => {
    const loadTranslations = async () => {
      setIsLoading(true);
      try {
        const sections = ['navigation', 'rules', 'about_forro', 'footer'];
        const loadedTranslations: Record<string, string> = {};

        for (const section of sections) {
          const sectionData = await import(`../translations/sections/${section}.json`);
          const langCode = language.toLowerCase();
          const sectionTranslations = sectionData.default[langCode] || sectionData.default['en'];
          Object.assign(loadedTranslations, sectionTranslations);
        }

        setTranslations(loadedTranslations);
      } catch (error) {
        console.error(`Failed to load translations for ${language}`, error);
        // Fallback to English if translation files are missing
        if (language !== "EN") {
          const fallbackData = await import("../translations/sections/navigation.json");
          setTranslations(fallbackData.default.en);
        }
      } finally {
        setIsLoading(false);
      }
    };

    localStorage.setItem("language", language);
    loadTranslations();
  }, [language]);

  const t = (key: string) => {
    if (isLoading) return key;
    return translations[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
