import React from "react";
import { useTranslation } from "react-i18next";
import "./SearchBar.css";

const SearchBar = ({ searchTerm, setSearchTerm, gamesCount }) => {
  const { t } = useTranslation();

  return (
    <div className="search-bar-section">
      <div className="search-input-wrapper">
        <span className="search-icon">🔍</span>
        <input
          type="text"
          placeholder={t("search.placeholder")}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        {searchTerm && (
          <button className="clear-search" onClick={() => setSearchTerm("")}>
            ✕
          </button>
        )}
      </div>

      <div className="games-count">
        {t("search.gamesFound", { count: gamesCount })}
      </div>
    </div>
  );
};

export default SearchBar;
