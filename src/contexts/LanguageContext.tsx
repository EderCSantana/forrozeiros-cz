
import React, { createContext, useContext, useState, useEffect, ReactNode, useMemo } from "react";

// Define our available languages
export const languages = [
  { code: "EN", name: "English" },
  { code: "ES", name: "Español" },
  { code: "PT", name: "Português" },
  { code: "RU", name: "Русский" },
  { code: "UA", name: "Українська" },
  { code: "CZ", name: "Čeština" },
  { code: "SK", name: "Slovenčina" }
];

type LanguageContextType = {
  language: string;
  setLanguage: (code: string) => void;
  t: (key: string) => string;
  isLoading: boolean;
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

// Cache for translations to avoid repeated fetch
const translationCache: Record<string, Record<string, string>> = {};

// Function to detect browser language and map it to supported languages
const detectBrowserLanguage = (): string => {
  const browserLang = navigator.language || navigator.languages?.[0] || 'en';
  const langCode = browserLang.split('-')[0].toLowerCase();
  
  // Map browser language codes to our supported language codes
  const languageMap: Record<string, string> = {
    'en': 'EN',
    'es': 'ES',
    'pt': 'PT',
    'ru': 'RU',
    'uk': 'UA', // Ukrainian browser code maps to UA
    'cs': 'CZ', // Czech browser code maps to CZ
    'sk': 'SK'
  };
  
  return languageMap[langCode] || 'EN'; // Default to English if not supported
};

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      return savedLanguage;
    }
    
    // If no saved language, detect browser language
    const detectedLanguage = detectBrowserLanguage();
    console.log('Detected browser language:', detectedLanguage);
    return detectedLanguage;
  });
  const [translations, setTranslations] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadTranslations = async () => {
      setIsLoading(true);
      
      try {
        // If we already have this language cached, use it immediately
        if (translationCache[language]) {
          setTranslations(translationCache[language]);
          setIsLoading(false);
          return;
        }
        
        const sections = [
          'navigation',
          'rules',
          'about_forro',
          'footer',
          'general',
          'about_us',
          'events',
          'partners',
          'contact',
          'home',
          'custom_events'
        ];
        
        const loadedTranslations: Record<string, string> = {};
        const langCode = language.toLowerCase();

        // Use Promise.all for parallel loading
        await Promise.all(sections.map(async (section) => {
          try {
            // Dynamic import, using relative path which works with any base URL
            const sectionModule = await import(`../translations/sections/${section}.json`);
            const sectionTranslations = sectionModule[langCode] || sectionModule['en'];
            
            if (sectionTranslations) {
              Object.assign(loadedTranslations, sectionTranslations);
            }
          } catch (error) {
            console.error(`Failed to load section: ${section}`, error);
          }
        }));

        // Store in cache
        translationCache[language] = loadedTranslations;
        setTranslations(loadedTranslations);
      } catch (error) {
        console.error(`Failed to load translations for ${language}`, error);
        
        // Fallback to English if translation files are missing
        if (!translationCache['EN']) {
          try {
            const fallbackModule = await import('../translations/sections/general.json');
            translationCache['EN'] = fallbackModule.en;
            setTranslations(fallbackModule.en);
          } catch (fallbackError) {
            console.error("Failed to load fallback translations", fallbackError);
          }
        } else {
          setTranslations(translationCache['EN']);
        }
      } finally {
        setIsLoading(false);
      }
    };

    localStorage.setItem("language", language);
    loadTranslations();
  }, [language]);

  // Memoize the context value
  const contextValue = useMemo(() => ({
    language,
    setLanguage,
    t: (key: string) => translations[key] || key,
    isLoading
  }), [language, translations, isLoading]);

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};
