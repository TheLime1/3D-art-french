export const paintingData = [
  // Front Wall
  ...Array.from({ length: 5 }, (_, i) => ({
    imgSrc: `artworks/${i + 1}.jpg`,
    width: 5,
    height: 3,
    position: { x: -20 + 10 * i, y: 2, z: -19.5 },
    rotationY: 0,
    info: {
      title: getTitleById(i + 1),
      artist: "Vincent van Gogh",
      description: `This is one of the masterpieces by Vincent van Gogh, showcasing his unique style and emotional honesty. ${getTitleById(
        i + 1
      )} perfectly encapsulates his love for the beauty of everyday life.`,
      year: `Year ${i + 1}`,
      link: "https://github.com/grp-ArtiTechs",
    },
  })),
  // Back Wall
  ...Array.from({ length: 5 }, (_, i) => ({
    imgSrc: `artworks/${i + 6}.jpg`,
    width: 5,
    height: 3,
    position: { x: -20 + 10 * i, y: 2, z: 19.5 },
    rotationY: Math.PI,
    info: {
      title: getTitleById(i + 6),
      artist: "Vincent van Gogh",
      description: `${getTitleById(
        i + 6
      )} by Vincent van Gogh is an exceptional piece showcasing his remarkable ability to capture emotion and atmosphere.`,
      year: `Year ${i + 6}`,
      link: "https://github.com/grp-ArtiTechs",
    },
  })),
  // Left Wall
  ...Array.from({ length: 4 }, (_, i) => ({
    imgSrc: `artworks/${i + 11}.jpg`,
    width: 5,
    height: 3,
    position: { x: -19.5, y: 2, z: -15 + 10 * i },
    rotationY: Math.PI / 2,
    info: {
      title: getTitleById(i + 11),
      artist: "Vincent van Gogh",
      description: `With its striking use of color and brushwork, ${getTitleById(
        i + 11
      )} is a testament to Van Gogh's artistic genius.`,
      year: `Year ${i + 11}`,
      link: "https://github.com/grp-ArtiTechs",
    },
  })),
  // Right Wall
  ...Array.from({ length: 4 }, (_, i) => ({
    imgSrc: `artworks/${i + 15}.jpg`,
    width: 5,
    height: 3,
    position: { x: 19.5, y: 2, z: -15 + 10 * i },
    rotationY: -Math.PI / 2,
    info: {
      title: getTitleById(i + 15),
      artist: "Vincent van Gogh",
      description: `${getTitleById(
        i + 15
      )} is a captivating piece by Vincent van Gogh, reflecting his distinctive style and deep passion for art.`,
      year: `Year ${i + 15}`,
      link: "https://github.com/grp-ArtiTechs",
    },
  })),
];

// Function to get the French title based on the painting ID
function getTitleById(id) {
  const titles = {
    1: "La Maison Jaune",
    2: "Nuit étoilée sur le Rhône",
    3: "À la porte de l'éternité",
    4: "Champ de blé aux corbeaux",
    5: "Terrasse du café le soir",
    6: "La Chambre à Arles",
    7: "Le Café de nuit",
    8: "Champ de blé sous un ciel nuageux",
    9: "Barques de pêche sur la plage à Saintes-Maries-de-la-Mer",
    10: "Le Semeur",
    11: "Verger en fleurs (pruniers)",
    12: "Verger en fleurs",
    13: "Pêcher en fleurs",
    14: "Peupliers près de Nuenen",
    15: "Le Pont de Trinquetaille",
    16: "Le Semeur au soleil couchant",
    17: "La Moisson",
    18: "Champ de blé avec faucheur",
  };
  return titles[id] || `Painting ${id}`;
}
