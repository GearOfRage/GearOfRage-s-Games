import React, { useState } from "react";
import "./GameCard.css";

const GameCard = ({ game }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === game.screenshots.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? game.screenshots.length - 1 : prev - 1
    );
  };

  return (
    <div className={`game-card ${game.featured ? "featured" : ""}`}>
      {game.featured && <div className="featured-badge">Featured</div>}

      <div className="game-card-image-container">
        <img
          src={game.screenshots[currentImageIndex]}
          alt={`${game.title} screenshot ${currentImageIndex + 1}`}
          className="game-card-image"
        />

        {game.screenshots.length > 1 && (
          <>
            <button className="image-nav prev" onClick={prevImage}>
              ‹
            </button>
            <button className="image-nav next" onClick={nextImage}>
              ›
            </button>
            <div className="image-dots">
              {game.screenshots.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${
                    index === currentImageIndex ? "active" : ""
                  }`}
                  onClick={() => setCurrentImageIndex(index)}
                />
              ))}
            </div>
          </>
        )}
      </div>

      <div className="game-card-content">
        <h3 className="game-title">{game.title}</h3>
        <p className="game-description">{game.description}</p>

        <div className="tags-container">
          {game.tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>

        <div className="technologies">
          <small>Built with: {game.technologies.join(", ")}</small>
        </div>

        <div className="game-links">
          <a
            href={game.deploymentUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="link-button play-button"
          >
            🎮 Play Game
          </a>
          <a
            href={game.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="link-button github-button"
          >
            📦 View Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
