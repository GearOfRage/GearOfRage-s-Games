import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./GameCard.css";

const GameCard = ({ game, onImageClick }) => {
  const { t } = useTranslation();
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
      {game.featured && (
        <div className="featured-badge">{t("game.featured")}</div>
      )}

      <div className="game-card-image-container">
        <img
          src={game.screenshots[currentImageIndex]}
          alt={`${t(game.titleKey)} screenshot ${currentImageIndex + 1}`}
          className="game-card-image"
          onClick={() =>
            onImageClick(
              game.screenshots[currentImageIndex],
              `${t(game.titleKey)} - Screenshot ${currentImageIndex + 1}`,
              game,
              currentImageIndex
            )
          }
          style={{ cursor: "pointer" }}
          title="Click to view full size"
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

        <button
          className="fullsize-view-button"
          onClick={() =>
            onImageClick(
              game.screenshots[currentImageIndex],
              `${t(game.titleKey)} screenshot ${currentImageIndex + 1}`
            )
          }
          title={t("game.viewFullSize")}
        >
          🔍
        </button>
      </div>

      <div className="game-card-content">
        <h3 className="game-title">{t(game.titleKey)}</h3>
        <p className="game-description">{t(game.descriptionKey)}</p>

        <div className="tags-container">
          {game.tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>

        <div className="technologies">
          <small>
            {t("game.builtWith")} {game.technologies.join(", ")}
          </small>
        </div>

        <div className="game-links">
          <a
            href={game.deploymentUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="link-button play-button"
          >
            {t("game.playButton")}
          </a>
          <a
            href={game.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="link-button github-button"
          >
            {t("game.codeButton")}
          </a>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
