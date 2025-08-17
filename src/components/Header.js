import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo-section">
          <h1 className="site-title">
            <span className="gear-icon">⚙️</span>
            Gear of Rage Games
          </h1>
          <p className="site-subtitle">
            A collection of creative game demos and experiments
          </p>
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
