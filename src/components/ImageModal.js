import React from "react";
import { useTranslation } from "react-i18next";
import "./ImageModal.css";

const ImageModal = ({
  isOpen,
  onClose,
  imageSrc,
  imageAlt,
  game,
  currentIndex,
  onNavigate,
}) => {
  const { t } = useTranslation();
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      } else if (
        e.key === "ArrowLeft" &&
        onNavigate &&
        game &&
        game.screenshots.length > 1
      ) {
        onNavigate("prev");
      } else if (
        e.key === "ArrowRight" &&
        onNavigate &&
        game &&
        game.screenshots.length > 1
      ) {
        onNavigate("next");
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose, onNavigate, game]);

  if (!isOpen) return null;

  const openInNewTab = () => {
    window.open(imageSrc, "_blank");
  };

  const hasMultipleImages =
    game && game.screenshots && game.screenshots.length > 1;

  return (
    <div className="image-modal-overlay" onClick={handleBackdropClick}>
      <div className="image-modal-content">
        <button
          className="image-modal-close"
          onClick={onClose}
          title={t("modal.closeModal")}
        >
          ✕
        </button>

        <div className="image-modal-image-container">
          {hasMultipleImages && (
            <button
              className="image-modal-nav image-modal-prev"
              onClick={() => onNavigate("prev")}
              title={t("modal.previousImage")}
            >
              ‹
            </button>
          )}

          <img src={imageSrc} alt={imageAlt} className="image-modal-image" />

          {hasMultipleImages && (
            <button
              className="image-modal-nav image-modal-next"
              onClick={() => onNavigate("next")}
              title={t("modal.nextImage")}
            >
              ›
            </button>
          )}
        </div>

        <div className="image-modal-info">
          {hasMultipleImages && (
            <div className="image-modal-counter">
              {t("modal.imageCounter", {
                current: currentIndex + 1,
                total: game.screenshots.length,
              })}
            </div>
          )}
          <div className="image-modal-actions">
            <button className="image-modal-open-new-tab" onClick={openInNewTab}>
              {t("modal.openInNewTab")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
