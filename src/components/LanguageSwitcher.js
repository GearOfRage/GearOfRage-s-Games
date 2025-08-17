import React from "react";
import { useTranslation } from "react-i18next";
import "./LanguageSwitcher.css";

const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="language-switcher">
      <button
        className={`lang-button ${i18n.language === "en" ? "active" : ""}`}
        onClick={() => changeLanguage("en")}
        title={t("language.english")}
      >
        EN
      </button>
      <button
        className={`lang-button ${i18n.language === "uk" ? "active" : ""}`}
        onClick={() => changeLanguage("uk")}
        title={t("language.ukrainian")}
      >
        УК
      </button>
    </div>
  );
};

export default LanguageSwitcher;
