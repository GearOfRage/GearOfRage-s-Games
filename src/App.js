import React, { useState, useMemo } from "react";
import "./App.css";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import SearchAndFilter from "./components/SearchAndFilter";
import GameCard from "./components/GameCard";
import Pagination from "./components/Pagination";
import ImageModal from "./components/ImageModal";
import { gamesData, getAllTags } from "./data/games";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);
  const [sortBy, setSortBy] = useState("featured");
  const [currentPage, setCurrentPage] = useState(1);
  const gamesPerPage = 6;

  // Modal state
  const [modalImage, setModalImage] = useState(null);
  const [modalAlt, setModalAlt] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalGame, setModalGame] = useState(null);
  const [modalImageIndex, setModalImageIndex] = useState(0);

  const availableTags = getAllTags();

  // Filter and sort games
  const filteredAndSortedGames = useMemo(() => {
    let filtered = gamesData.filter((game) => {
      const matchesSearch =
        searchTerm === "" ||
        game.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        game.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        game.technologies.some((tech) =>
          tech.toLowerCase().includes(searchTerm.toLowerCase())
        );

      const matchesTags =
        selectedTags.length === 0 ||
        selectedTags.every((tag) => game.tags.includes(tag));

      return matchesSearch && matchesTags;
    });

    // Sort games
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "newest":
          return new Date(b.createdDate) - new Date(a.createdDate);
        case "oldest":
          return new Date(a.createdDate) - new Date(b.createdDate);
        case "alphabetical":
          return a.title.localeCompare(b.title);
        case "featured":
          if (a.featured && !b.featured) return -1;
          if (!a.featured && b.featured) return 1;
          return new Date(b.createdDate) - new Date(a.createdDate);
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchTerm, selectedTags, sortBy]);

  // Pagination
  const totalPages = Math.ceil(filteredAndSortedGames.length / gamesPerPage);
  const currentGames = filteredAndSortedGames.slice(
    (currentPage - 1) * gamesPerPage,
    currentPage * gamesPerPage
  );

  // Reset to first page when filters change
  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedTags, sortBy]);

  // Modal handlers
  const openModal = (imageSrc, imageAlt, game, imageIndex = 0) => {
    setModalImage(imageSrc);
    setModalAlt(imageAlt);
    setModalGame(game);
    setModalImageIndex(imageIndex);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage(null);
    setModalAlt("");
    setModalGame(null);
    setModalImageIndex(0);
  };

  const navigateImage = (direction) => {
    if (!modalGame || !modalGame.screenshots) return;

    let newIndex = modalImageIndex;
    if (direction === "next") {
      newIndex = (modalImageIndex + 1) % modalGame.screenshots.length;
    } else if (direction === "prev") {
      newIndex =
        modalImageIndex === 0
          ? modalGame.screenshots.length - 1
          : modalImageIndex - 1;
    }

    setModalImageIndex(newIndex);
    setModalImage(modalGame.screenshots[newIndex]);
    setModalAlt(`${modalGame.title} - Screenshot ${newIndex + 1}`);
  };

  return (
    <div className="App">
      <Header />

      <main className="main-content">
        <aside className="sidebar">
          <SearchAndFilter
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            selectedTags={selectedTags}
            setSelectedTags={setSelectedTags}
            availableTags={availableTags}
            sortBy={sortBy}
            setSortBy={setSortBy}
          />
        </aside>

        <div className="content-area">
          <SearchBar
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            gamesCount={filteredAndSortedGames.length}
          />

          {filteredAndSortedGames.length === 0 ? (
            <div className="no-results">
              <div className="no-results-content">
                <span className="no-results-icon">🎮</span>
                <h3>No games found</h3>
                <p>Try adjusting your search terms or removing some filters.</p>
              </div>
            </div>
          ) : (
            <>
              {(searchTerm || selectedTags.length > 0) && (
                <div className="filter-summary">
                  {searchTerm && `Searching for "${searchTerm}"`}
                  {searchTerm && selectedTags.length > 0 && " • "}
                  {selectedTags.length > 0 &&
                    `Filtered by: ${selectedTags.join(", ")}`}
                </div>
              )}

              <div className="games-grid">
                {currentGames.map((game) => (
                  <GameCard
                    key={game.id}
                    game={game}
                    onImageClick={openModal}
                  />
                ))}
              </div>

              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
                totalItems={filteredAndSortedGames.length}
                itemsPerPage={gamesPerPage}
              />
            </>
          )}
        </div>
      </main>

      <footer className="footer">
        <div className="container">
          <p>
            Made with ❤️ by a passionate game developer • All games are open
            source and free to play
          </p>
        </div>
      </footer>

      <ImageModal
        isOpen={isModalOpen}
        onClose={closeModal}
        imageSrc={modalImage}
        imageAlt={modalAlt}
        game={modalGame}
        currentIndex={modalImageIndex}
        onNavigate={navigateImage}
      />
    </div>
  );
}

export default App;
