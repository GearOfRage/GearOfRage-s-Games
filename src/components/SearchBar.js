import React from "react";
import "./SearchBar.css";

const SearchBar = ({ searchTerm, setSearchTerm, gamesCount }) => {
  return (
    <div className="search-bar-section">
      <div className="search-input-wrapper">
        <span className="search-icon">🔍</span>
        <input
          type="text"
          placeholder="Search games..."
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
        {gamesCount} game{gamesCount !== 1 ? "s" : ""} found
      </div>
    </div>
  );
};

export default SearchBar;
