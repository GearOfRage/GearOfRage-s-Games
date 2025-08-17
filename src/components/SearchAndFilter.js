import React from "react";
import "./SearchAndFilter.css";

const SearchAndFilter = ({
  searchTerm,
  setSearchTerm,
  selectedTags,
  setSelectedTags,
  availableTags,
  sortBy,
  setSortBy,
}) => {
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
      <div className="search-bar-container">
        <div className="search-input-wrapper">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            placeholder="Search games by title or description..."
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

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="sort-select"
        >
          <option value="newest">Newest First</option>
          <option value="oldest">Oldest First</option>
          <option value="alphabetical">A-Z</option>
          <option value="featured">Featured First</option>
        </select>
      </div>

      <div className="tags-section">
        <div className="tags-header">
          <h4>Filter by Tags:</h4>
          {selectedTags.length > 0 && (
            <button className="clear-filters" onClick={clearAllFilters}>
              Clear All Filters
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
          <span className="filters-label">Active filters:</span>
          {searchTerm && (
            <span className="active-filter">
              Search: "{searchTerm}"
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
