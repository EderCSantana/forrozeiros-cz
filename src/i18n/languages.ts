import aboutForro from "@/i18n/translations/about_forro.json";
import aboutUs from "@/i18n/translations/about_us.json";
import contact from "@/i18n/translations/contact.json";
import customEvents from "@/i18n/translations/custom_events.json";
import events from "@/i18n/translations/events.json";
import footer from "@/i18n/translations/footer.json";
import general from "@/i18n/translations/general.json";
import home from "@/i18n/translations/home.json";
import navigation from "@/i18n/translations/navigation.json";
import partners from "@/i18n/translations/partners.json";
import rules from "@/i18n/translations/rules.json";

export const languages = [
  { code: "EN", name: "English", browserCode: "en" },
  { code: "ES", name: "Español", browserCode: "es" },
  { code: "PT", name: "Português", browserCode: "pt" },
  { code: "RU", name: "Русский", browserCode: "ru" },
  { code: "UA", name: "Українська", browserCode: "uk" },
  { code: "CZ", name: "Čeština", browserCode: "cs" },
  { code: "SK", name: "Slovenčina", browserCode: "sk" },
] as const;

export type LanguageCode = (typeof languages)[number]["code"];

type Dictionary = Record<string, string>;

// Each file holds one section of the site, keyed by lowercase language code: { "en": {...}, "pt": {...} }.
const sections: Record<string, Dictionary>[] = [
  aboutForro,
  aboutUs,
  contact,
  customEvents,
  events,
  footer,
  general,
  home,
  navigation,
  partners,
  rules,
];

function buildDictionary(code: LanguageCode): Dictionary {
  const key = code.toLowerCase();
  return Object.assign({}, ...sections.map((section) => section[key] ?? {}));
}

export const dictionaries = Object.fromEntries(
  languages.map((language) => [language.code, buildDictionary(language.code)]),
) as Record<LanguageCode, Dictionary>;

export function isLanguageCode(value: string | null): value is LanguageCode {
  return languages.some((language) => language.code === value);
}

export function detectBrowserLanguage(): LanguageCode {
  const browserCode = navigator.language.split("-")[0].toLowerCase();
  const match = languages.find((language) => language.browserCode === browserCode);
  return match ? match.code : "EN";
}
