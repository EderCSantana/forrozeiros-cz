
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

// Function to detect browser language and map to our supported languages
const getBrowserLanguage = (): string => {
  const browserLang = navigator.language || navigator.languages?.[0] || 'en';
  const langCode = browserLang.split('-')[0].toLowerCase();
  
  // Map browser language codes to our language codes
  const languageMap: Record<string, string> = {
    'en': 'EN',
    'es': 'ES',
    'pt': 'PT',
    'ru': 'RU',
    'uk': 'UA', // Ukrainian
    'cs': 'CZ', // Czech
    'sk': 'SK'  // Slovak
  };
  
  return languageMap[langCode] || 'EN'; // Default to English if not supported
};

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = useState(() => {
    // Check localStorage first, then browser language
    const savedLanguage = localStorage.getItem("language");
    return savedLanguage || getBrowserLanguage();
  });
  const [translations, setTranslations] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(true);

  // Function to load translations for a specific language
  const loadTranslationsForLanguage = async (langCode: string): Promise<Record<string, string>> => {
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
    const langCodeLower = langCode.toLowerCase();

    // Use Promise.all for parallel loading
    await Promise.all(sections.map(async (section) => {
      try {
        const sectionModule = await import(`../translations/sections/${section}.json`);
        const sectionTranslations = sectionModule[langCodeLower] || sectionModule['en'];
        
        if (sectionTranslations) {
          Object.assign(loadedTranslations, sectionTranslations);
        }
      } catch (error) {
        console.error(`Failed to load section: ${section} for language: ${langCode}`, error);
      }
    }));

    return loadedTranslations;
  };

  // Preload other languages in the background
  const preloadOtherLanguages = async (currentLang: string) => {
    const otherLanguages = languages
      .map(lang => lang.code)
      .filter(code => code !== currentLang && !translationCache[code]);
    
    // Load other languages with a small delay to not interfere with current language loading
    setTimeout(() => {
      otherLanguages.forEach(async (langCode) => {
        try {
          const translations = await loadTranslationsForLanguage(langCode);
          translationCache[langCode] = translations;
          console.log(`Preloaded translations for ${langCode}`);
        } catch (error) {
          console.error(`Failed to preload translations for ${langCode}`, error);
        }
      });
    }, 500); // Small delay to prioritize current language
  };

  useEffect(() => {
    const loadTranslations = async () => {
      setIsLoading(true);
      
      try {
        // If we already have this language cached, use it immediately
        if (translationCache[language]) {
          setTranslations(translationCache[language]);
          setIsLoading(false);
          preloadOtherLanguages(language);
          return;
        }
        
        // Load current language translations
        const loadedTranslations = await loadTranslationsForLanguage(language);
        
        // Store in cache
        translationCache[language] = loadedTranslations;
        setTranslations(loadedTranslations);
        
        // Start preloading other languages in the background
        preloadOtherLanguages(language);
        
      } catch (error) {
        console.error(`Failed to load translations for ${language}`, error);
        
        // Fallback to English if translation files are missing
        if (!translationCache['EN']) {
          try {
            const fallbackTranslations = await loadTranslationsForLanguage('EN');
            translationCache['EN'] = fallbackTranslations;
            setTranslations(fallbackTranslations);
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
