// Real games data
export const gamesData = [
  {
    id: 1,
    title: "Venture Forth",
    titleKey: "games.ventureForth.title",
    descriptionKey: "games.ventureForth.description",
    tags: ["puzzle", "match-3", "strategy", "rpg", "unity", "webgl"],
    screenshots: [
      "https://github.com/GearOfRage/GearOfRage-s-Games/blob/gh-pages/assets/screenshots/venture-forth-1.png?raw=true",
      "https://github.com/GearOfRage/GearOfRage-s-Games/blob/gh-pages/assets/screenshots/venture-forth-2.png?raw=true",
      "https://github.com/GearOfRage/GearOfRage-s-Games/blob/gh-pages/assets/screenshots/venture-forth-3.png?raw=true",
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
    titleKey: "games.breachProtocol.title",
    descriptionKey: "games.breachProtocol.description",
    tags: ["hacking", "cyberpunk", "mini-game", "unity", "webgl"],
    screenshots: [
      "https://github.com/GearOfRage/GearOfRage-s-Games/blob/gh-pages/assets/screenshots/breach-protocol-1.png?raw=true",
      "https://github.com/GearOfRage/GearOfRage-s-Games/blob/gh-pages/assets/screenshots/breach-protocol-2.png?raw=true",
      "https://github.com/GearOfRage/GearOfRage-s-Games/blob/gh-pages/assets/screenshots/breach-protocol-3.png?raw=true",
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
    titleKey: "games.ukraineMapQuiz.title",
    descriptionKey: "games.ukraineMapQuiz.description",
    tags: ["quiz", "educational", "geography", "ukraine"],
    screenshots: [
      "https://github.com/GearOfRage/GearOfRage-s-Games/blob/gh-pages/assets/screenshots/ukraine-map-1.png?raw=true",
      "https://github.com/GearOfRage/GearOfRage-s-Games/blob/gh-pages/assets/screenshots/ukraine-map-2.png?raw=true",
      "https://github.com/GearOfRage/GearOfRage-s-Games/blob/gh-pages/assets/screenshots/ukraine-map-3.png?raw=true",
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
