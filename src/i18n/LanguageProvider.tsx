import { useEffect, useState, type ReactNode } from "react";
import { LanguageContext } from "@/i18n/LanguageContext";
import { detectBrowserLanguage, dictionaries, isLanguageCode, type LanguageCode } from "@/i18n/languages";

const STORAGE_KEY = "language";

function getInitialLanguage(): LanguageCode {
  const savedLanguage = localStorage.getItem(STORAGE_KEY);
  return isLanguageCode(savedLanguage) ? savedLanguage : detectBrowserLanguage();
}

export default function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<LanguageCode>(getInitialLanguage);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, language);
  }, [language]);

  // Missing keys fall back to English, then to the key itself.
  const t = (key: string) => dictionaries[language][key] || dictionaries.EN[key] || key;

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>;
}
