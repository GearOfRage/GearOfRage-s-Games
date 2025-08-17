// Real games data
export const gamesData = [
  {
    id: 1,
    title: "Venture Forth",
    description:
      "An adventure game built with Unity and deployed as WebGL. Explore, discover, and venture forth into unknown territories in this immersive experience.",
    tags: ["adventure", "unity", "webgl", "exploration"],
    screenshots: [
      "https://via.placeholder.com/600x400/1a1a2e/eee?text=Venture+Forth+Screenshot",
      "https://via.placeholder.com/600x400/16213e/eee?text=Venture+Forth+Gameplay",
    ],
    deploymentUrl: "https://gearofrage.github.io/Venture-Forth/",
    githubUrl: "https://github.com/GearOfRage/Venture-Forth",
    featured: true,
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
      "https://private-user-images.githubusercontent.com/83924241/478650267-59f1623a-5cb8-4704-bb2f-34ce0cfaf1ff.png",
      "https://via.placeholder.com/600x400/0f3460/eee?text=Breach+Protocol+Matrix",
    ],
    deploymentUrl: "https://gearofrage.github.io/BreachProtocol/",
    githubUrl: "https://github.com/GearOfRage/BreachProtocol",
    featured: true,
    technologies: ["Unity", "WebGL", "C#"],
    createdDate: "2024-02-20",
  },
  {
    id: 3,
    title: "Ukraine Map Quiz",
    description:
      "Educational quiz game about Ukraine places. Test your knowledge of Ukrainian regions and cities with two difficulty modes. Features interactive map with visual feedback and score tracking. Supports fullscreen mode for better experience.",
    tags: ["quiz", "educational", "geography", "ukraine", "desktop"],
    screenshots: [
      "https://user-images.githubusercontent.com/83924241/197340228-725d5e64-551b-4a3c-b119-0af2ada1cd5a.png",
      "https://user-images.githubusercontent.com/83924241/197340870-3d9a9f6f-4874-43ad-b039-9aa8142aa95d.png",
    ],
    deploymentUrl: "https://gearofrage.github.io/ukraine-map/",
    githubUrl: "https://github.com/GearOfRage/ukraine-map",
    featured: false,
    technologies: ["Unity", "Desktop App", "Interactive Map"],
    createdDate: "2022-10-22",
  },
];

// Get all unique tags for filtering
export const getAllTags = () => {
  const tagSet = new Set();
  gamesData.forEach((game) => {
    game.tags.forEach((tag) => tagSet.add(tag));
  });
  return Array.from(tagSet).sort();
};

// Get featured games
export const getFeaturedGames = () => {
  return gamesData.filter((game) => game.featured);
};
