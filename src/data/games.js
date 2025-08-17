// Sample games data - replace with your actual games
export const gamesData = [
  {
    id: 1,
    title: "Space Explorer",
    description:
      "A thrilling space adventure where you navigate through asteroid fields and battle alien ships. Features dynamic physics and particle effects.",
    tags: ["space", "action", "physics", "2D"],
    screenshots: [
      "https://via.placeholder.com/600x400/1a1a2e/eee?text=Space+Explorer+Screenshot+1",
      "https://via.placeholder.com/600x400/16213e/eee?text=Space+Explorer+Screenshot+2",
    ],
    deploymentUrl: "https://your-game-demo.netlify.app",
    githubUrl: "https://github.com/yourusername/space-explorer",
    featured: true,
    technologies: ["React", "Canvas API", "Web Audio API"],
    createdDate: "2024-01-15",
  },
  {
    id: 2,
    title: "Puzzle Master",
    description:
      "Mind-bending puzzle game with increasingly complex challenges. Test your logic and problem-solving skills across 50 unique levels.",
    tags: ["puzzle", "logic", "2D", "mobile-friendly"],
    screenshots: [
      "https://via.placeholder.com/600x400/0f3460/eee?text=Puzzle+Master+Screenshot+1",
      "https://via.placeholder.com/600x400/533483/eee?text=Puzzle+Master+Screenshot+2",
    ],
    deploymentUrl: "https://puzzle-master-demo.vercel.app",
    githubUrl: "https://github.com/yourusername/puzzle-master",
    featured: false,
    technologies: ["JavaScript", "CSS Grid", "Local Storage"],
    createdDate: "2024-02-20",
  },
  {
    id: 3,
    title: "Racing Thunder",
    description:
      "High-speed racing game with realistic physics and multiple tracks. Compete against AI opponents in various weather conditions.",
    tags: ["racing", "3D", "physics", "action"],
    screenshots: [
      "https://via.placeholder.com/600x400/2d1b69/eee?text=Racing+Thunder+Screenshot+1",
      "https://via.placeholder.com/600x400/11998e/eee?text=Racing+Thunder+Screenshot+2",
    ],
    deploymentUrl: "https://racing-thunder.github.io",
    githubUrl: "https://github.com/yourusername/racing-thunder",
    featured: true,
    technologies: ["Three.js", "WebGL", "Physics Engine"],
    createdDate: "2024-03-10",
  },
  {
    id: 4,
    title: "Tower Defense Pro",
    description:
      "Strategic tower defense game with multiple tower types and enemy waves. Plan your defenses carefully to protect your base.",
    tags: ["strategy", "tower-defense", "2D", "planning"],
    screenshots: [
      "https://via.placeholder.com/600x400/38598a/eee?text=Tower+Defense+Screenshot+1",
      "https://via.placeholder.com/600x400/113f67/eee?text=Tower+Defense+Screenshot+2",
    ],
    deploymentUrl: "https://tower-defense-pro.netlify.app",
    githubUrl: "https://github.com/yourusername/tower-defense-pro",
    featured: false,
    technologies: ["React", "Redux", "Canvas API"],
    createdDate: "2024-04-05",
  },
  {
    id: 5,
    title: "Retro Platformer",
    description:
      "Classic platformer with pixel art graphics and chiptune music. Jump, run, and collect coins in this nostalgic adventure.",
    tags: ["platformer", "retro", "2D", "pixel-art", "music"],
    screenshots: [
      "https://via.placeholder.com/600x400/8b5cf6/eee?text=Retro+Platformer+Screenshot+1",
      "https://via.placeholder.com/600x400/7c3aed/eee?text=Retro+Platformer+Screenshot+2",
    ],
    deploymentUrl: "https://retro-platformer.surge.sh",
    githubUrl: "https://github.com/yourusername/retro-platformer",
    featured: true,
    technologies: ["JavaScript", "Canvas API", "Web Audio API"],
    createdDate: "2024-05-12",
  },
  {
    id: 6,
    title: "Memory Challenge",
    description:
      "Test your memory with this colorful and engaging memory game. Multiple difficulty levels and themes to keep you challenged.",
    tags: ["memory", "casual", "mobile-friendly", "educational"],
    screenshots: [
      "https://via.placeholder.com/600x400/ec4899/eee?text=Memory+Challenge+Screenshot+1",
      "https://via.placeholder.com/600x400/db2777/eee?text=Memory+Challenge+Screenshot+2",
    ],
    deploymentUrl: "https://memory-challenge-game.vercel.app",
    githubUrl: "https://github.com/yourusername/memory-challenge",
    featured: false,
    technologies: ["React", "CSS Animations", "Local Storage"],
    createdDate: "2024-06-18",
  },
  {
    id: 7,
    title: "Dungeon Crawler",
    description:
      "Explore mysterious dungeons filled with treasures and monsters. Turn-based combat system with character progression.",
    tags: ["rpg", "dungeon", "turn-based", "adventure"],
    screenshots: [
      "https://via.placeholder.com/600x400/059669/eee?text=Dungeon+Crawler+Screenshot+1",
      "https://via.placeholder.com/600x400/047857/eee?text=Dungeon+Crawler+Screenshot+2",
    ],
    deploymentUrl: "https://dungeon-crawler-rpg.netlify.app",
    githubUrl: "https://github.com/yourusername/dungeon-crawler",
    featured: false,
    technologies: ["JavaScript", "JSON", "CSS Grid"],
    createdDate: "2024-07-22",
  },
  {
    id: 8,
    title: "Asteroid Miner",
    description:
      "Mine asteroids for resources while avoiding space pirates. Upgrade your ship and explore the vast cosmos.",
    tags: ["space", "mining", "upgrade", "strategy"],
    screenshots: [
      "https://via.placeholder.com/600x400/dc2626/eee?text=Asteroid+Miner+Screenshot+1",
      "https://via.placeholder.com/600x400/b91c1c/eee?text=Asteroid+Miner+Screenshot+2",
    ],
    deploymentUrl: "https://asteroid-miner.github.io",
    githubUrl: "https://github.com/yourusername/asteroid-miner",
    featured: true,
    technologies: ["Canvas API", "JavaScript", "Web Workers"],
    createdDate: "2024-08-01",
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
