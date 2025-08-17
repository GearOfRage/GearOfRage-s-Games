import React from "react";
import { useTranslation } from "react-i18next";
import "./SearchAndFilter.css";

const SearchAndFilter = ({
  selectedTags,
  setSelectedTags,
  availableTags,
  sortBy,
  setSortBy,
  searchTerm,
  setSearchTerm,
}) => {
  const { t } = useTranslation();

  const handleTagToggle = (tag) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const clearAllFilters = () => {
    setSearchTerm("");
    setSelectedTags([]);
    setSortBy("newest");
  };

  return (
    <div className="search-filter-container">
      <div className="sort-section">
        <label className="sort-label">{t("filter.sortBy")}</label>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="sort-select"
        >
          <option value="newest">{t("filter.sortOptions.newest")}</option>
          <option value="oldest">{t("filter.sortOptions.oldest")}</option>
          <option value="alphabetical">
            {t("filter.sortOptions.alphabetical")}
          </option>
          <option value="featured">{t("filter.sortOptions.featured")}</option>
        </select>
      </div>

      <div className="tags-section">
        <div className="tags-header">
          <h4>{t("filter.filterByTags")}</h4>
          {selectedTags.length > 0 && (
            <button className="clear-filters" onClick={clearAllFilters}>
              {t("filter.clearFilters")}
            </button>
          )}
        </div>

        <div className="tags-grid">
          {availableTags.map((tag) => (
            <button
              key={tag}
              className={`filter-tag ${
                selectedTags.includes(tag) ? "selected" : ""
              }`}
              onClick={() => handleTagToggle(tag)}
            >
              {tag}
              {selectedTags.includes(tag) && (
                <span className="tag-count">✓</span>
              )}
            </button>
          ))}
        </div>
      </div>

      {(searchTerm || selectedTags.length > 0) && (
        <div className="active-filters">
          <span className="filters-label">{t("filter.activeFilters")}</span>
          {searchTerm && (
            <span className="active-filter">
              {t("search.searchLabel")} "{searchTerm}"
              <button onClick={() => setSearchTerm("")}>✕</button>
            </span>
          )}
          {selectedTags.map((tag) => (
            <span key={tag} className="active-filter">
              {tag}
              <button onClick={() => handleTagToggle(tag)}>✕</button>
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchAndFilter;
