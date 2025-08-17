// Real games data
export const gamesData = [
  {
    id: 1,
    title: "Venture Forth",
    description:
      "A strategic match-3 puzzle game with RPG elements. Create chains of matching items to collect gold coins and shields while battling dangerous skulls. Features turn-based combat mechanics and resource management in a medieval fantasy setting.",
    tags: ["puzzle", "match-3", "strategy", "rpg", "unity", "webgl"],
    screenshots: [
      "/assets/screenshots/venture-forth-1.png",
      "/assets/screenshots/venture-forth-2.png",
      "/assets/screenshots/venture-forth-3.png",
    ],
    deploymentUrl: "https://gearofrage.github.io/Venture-Forth/",
    githubUrl: "https://github.com/GearOfRage/Venture-Forth",
    featured: false,
    technologies: ["Unity", "C#", "WebGL"],
    createdDate: "2024-01-15",
  },
  {
    id: 2,
    title: "Breach Protocol",
    description:
      "Web implementation of the Breach Protocol mini-game from Cyberpunk 2077. Features faithful reproduction of the original hacking mechanics with timer, buffer, and daemon sequences. Multiple difficulty levels with randomized code matrix.",
    tags: ["hacking", "cyberpunk", "mini-game", "unity", "webgl"],
    screenshots: [
      "/assets/screenshots/breach-protocol-1.png",
      "/assets/screenshots/breach-protocol-2.png",
      "/assets/screenshots/breach-protocol-3.png",
    ],
    deploymentUrl: "https://gearofrage.github.io/BreachProtocol/",
    githubUrl: "https://github.com/GearOfRage/BreachProtocol",
    featured: true,
    technologies: ["Unity", "C#", "WebGL"],
    createdDate: "2024-02-20",
  },
  {
    id: 3,
    title: "Ukraine Map Quiz",
    description:
      "Educational quiz game about Ukraine places. Test your knowledge of Ukrainian regions and cities with two difficulty modes. Features interactive map with visual feedback and score tracking. Supports fullscreen mode for better experience.",
    tags: ["quiz", "educational", "geography", "ukraine"],
    screenshots: [
      "/assets/screenshots/ukraine-map-1.png",
      "/assets/screenshots/ukraine-map-2.png",
      "/assets/screenshots/ukraine-map-3.png",
    ],
    deploymentUrl: "https://gearofrage.github.io/ukraine-map/",
    githubUrl: "https://github.com/GearOfRage/ukraine-map",
    featured: true,
    technologies: ["Unity", "C#", "WebGL"],
    createdDate: "2022-10-22",
  },
];

export const getAllTags = () => {
  const tagSet = new Set();
  gamesData.forEach((game) => {
    game.tags.forEach((tag) => tagSet.add(tag));
  });
  return Array.from(tagSet).sort();
};

export const getFeaturedGames = () => {
  return gamesData.filter((game) => game.featured);
};
