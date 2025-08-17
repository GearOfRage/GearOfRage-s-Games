import React from "react";
import { useTranslation } from "react-i18next";
import "./Header.css";
import LanguageSwitcher from "./LanguageSwitcher";

const Header = () => {
  const { t } = useTranslation();

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo-section">
          <h1 className="site-title">
            <span className="gear-icon">⚙️</span>
            {t("header.title")}
          </h1>
          <p className="site-subtitle">{t("header.subtitle")}</p>
        </div>
        <div className="header-controls">
          <LanguageSwitcher />
        </div>
      </div>

      <div className="header-decoration">
        <div className="floating-element element-1">🎮</div>
        <div className="floating-element element-2">🚀</div>
        <div className="floating-element element-3">⭐</div>
        <div className="floating-element element-4">🎯</div>
      </div>
    </header>
  );
};

export default Header;
