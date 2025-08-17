import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en.json";
import uk from "./locales/uk.json";

const resources = {
  en: {
    translation: en,
  },
  uk: {
    translation: uk,
  },
};

// Get saved language from localStorage or use browser language
const getSavedLanguage = () => {
  const savedLang = localStorage.getItem("gear-of-rage-language");
  if (savedLang && resources[savedLang]) {
    return savedLang;
  }

  // Try to detect browser language
  const browserLang = navigator.language.split("-")[0];
  if (resources[browserLang]) {
    return browserLang;
  }

  return "en"; // fallback to English
};

i18n.use(initReactI18next).init({
  resources,
  lng: getSavedLanguage(),
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

// Save language preference whenever it changes
i18n.on("languageChanged", (lng) => {
  localStorage.setItem("gear-of-rage-language", lng);
});

export default i18n;
