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
      description: `C'est l'un des chefs-d'œuvre de Vincent van Gogh, qui illustre son style unique et son honnêteté émotionnelle. ${getTitleById(
        i + 1
      )} incarne parfaitement son amour pour la beauté de la vie quotidienne.`,
      year: `Année ${i + 1}`,
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
      )} de Vincent van Gogh est une œuvre exceptionnelle qui témoigne de sa remarquable capacité à capturer l'émotion et l'atmosphère.`,
      year: `Année ${i + 6}`,
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
      description: `Avec son utilisation saisissante des couleurs et des coups de pinceau, ${getTitleById(
        i + 11
      )} est un témoignage du génie artistique de Van Gogh.`,
      year: `Année ${i + 11}`,
      link: "https://github.com/grp-ArtiTechs",
    },
  })),
  // Right Wall - Reduced from 4 to 2 paintings (removing #17 and #18)
  ...Array.from({ length: 2 }, (_, i) => ({
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
      )} est une œuvre captivante de Vincent van Gogh, reflétant son style distinctif et sa profonde passion pour l'art.`,
      year: `Année ${i + 15}`,
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
