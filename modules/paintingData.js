// Function to get unique description for each painting
function getDescriptionById(id) {
  const descriptions = {
    1: "Peinte en 1888 à Arles, 'La Maison Jaune' représente la demeure que Van Gogh avait louée, symbole d'espoir et de communauté artistique. Les couleurs vives et les contrastes révèlent son attachement à ce lieu qu'il considérait comme un refuge créatif.",
    2: "Dans cette œuvre de 1888, Van Gogh capture la magie de la 'Nuit étoilée sur le Rhône' avec ses reflets lumineux dansant sur l'eau. Le ciel nocturne et les étoiles scintillantes témoignent de sa fascination pour les paysages nocturnes d'Arles.",
    3: "Peinte en 1890 à Saint-Rémy, 'À la porte de l'éternité' révèle l'angoisse existentielle de l'artiste. Cette figure solitaire assise, le visage dans les mains, exprime la douleur et la contemplation profonde de la fin de la vie.",
    4: "Le célèbre 'Champ de blé aux corbeaux', réalisé peu avant sa mort en 1890, est imprégné d'une tension dramatique. Le chemin sinueux, le ciel tourmenté et les oiseaux menaçants créent une atmosphère prémonitoire qui touche profondément le spectateur.",
    5: "Dans 'Terrasse du café le soir', Van Gogh immortalise la Place du Forum à Arles (1888) illuminée sous un ciel étoilé. Les couleurs chaudes et l'atmosphère conviviale contrastent avec sa solitude personnelle, créant une scène à la fois accueillante et mélancolique.",
    6: "Avec 'La Chambre à Arles' (1888), Van Gogh ouvre une fenêtre sur son intimité. Chaque élément du mobilier simple, aux couleurs vives et aux perspectives légèrement déformées, raconte sa quête de paix intérieure et de stabilité.",
    7: "'Le Café de nuit' (1888) dépeint l'ambiance inquiétante d'un établissement d'Arles que l'artiste décrivait comme un lieu 'où l'on peut se ruiner, devenir fou, commettre des crimes'. Les couleurs intenses et contrastées traduisent cette atmosphère oppressante.",
    8: "Dans 'Champ de blé sous un ciel nuageux' (1890), les vastes étendues dorées sous un ciel tumultueux incarnent le contraste entre la beauté terrestre et l'agitation céleste. Cette œuvre reflète l'état d'esprit changeant de l'artiste durant ses derniers mois.",
    9: "Les 'Barques de pêche sur la plage à Saintes-Maries-de-la-Mer' (1888) témoignent de l'attrait de Van Gogh pour la vie maritime. Avec une simplicité touchante, il capture l'essence des petits bateaux colorés reposant sur le sable, symboles de labeur quotidien.",
    10: "Dans 'Le Semeur' (1888), Van Gogh revisite un thème qui lui était cher. La figure travaillant sous un soleil éclatant illustre sa profonde admiration pour la dignité du travail rural et sa spiritualité liée à la terre nourricière.",
    11: "Le 'Verger en fleurs (pruniers)' (1888) témoigne de la passion de Van Gogh pour la nature renaissante. Les délicats pruniers en fleurs, traités avec une sensibilité japonisante, expriment l'espoir et le renouveau printanier qui inspiraient l'artiste.",
    12: "Avec 'Verger en fleurs' (1888), Van Gogh célèbre l'explosion de vie du printemps provençal. Les touches vibrantes et les contrastes lumineux traduisent son émerveillement face à cette renaissance naturelle, symbole d'optimisme après son arrivée dans le Sud.",
    13: "Dans 'Pêcher en fleurs' (1888), l'artiste capture la délicatesse éphémère des fleurs roses contre le ciel bleu d'Arles. Cette œuvre inspirée par l'art japonais reflète son désir de saisir la beauté fugace de la nature en plein épanouissement.",
    14: "Les 'Peupliers près de Nuenen' (1884) appartiennent à sa période hollandaise. Ces arbres élancés aux silhouettes sombres et élégantes révèlent déjà le talent de Van Gogh pour transformer un paysage ordinaire en composition poétique et rythmée.",
    15: "Le 'Pont de Trinquetaille' (1888) représente l'un des ponts d'Arles avec une perspective audacieuse. Les couleurs vives et contrastées traduisent la lumière méridionale qui fascina tant l'artiste, transformant cette structure ordinaire en vision saisissante.",
    16: "Dans 'Le Semeur au soleil couchant' (1888), Van Gogh fusionne symbolisme et observation. La silhouette du semeur se détachant sur le soleil déclinant évoque le cycle éternel de la vie, thème spirituel récurrent dans l'œuvre de l'artiste.",
    17: "'La Moisson' (1888) illustre la passion de Van Gogh pour les cycles agricoles provençaux. Les gerbes de blé dorées sous le soleil ardent d'été évoquent l'abondance et la vitalité de la nature, tandis que le travail des paysans témoigne de son profond respect pour la vie rurale.",
    18: "Peint en 1889, 'Champ de blé avec faucheur' présente une figure solitaire travaillant dans l'immensité dorée. Pour Van Gogh, le faucheur symbolise la mort qui récolte, métaphore puissante qu'il explore dans ses dernières œuvres avec une sérénité troublante.",
  };
  return descriptions[id] || `Description de la peinture ${id}`;
}

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
      description: getDescriptionById(i + 1),
      year: `${i + 1}`,
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
      description: getDescriptionById(i + 6),
      year: `${i + 6}`,
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
      description: getDescriptionById(i + 11),
      year: `${i + 11}`,
      link: "https://github.com/grp-ArtiTechs",
    },
  })),
  // Right Wall - Restored to 4 paintings (including #17 and #18)
  ...Array.from({ length: 4 }, (_, i) => ({
    imgSrc: `artworks/${i + 15}.jpg`,
    width: 5,
    height: 3,
    position: { x: 19.5, y: 2, z: -15 + 10 * i },
    rotationY: -Math.PI / 2,
    info: {
      title: getTitleById(i + 15),
      artist: "Vincent van Gogh",
      description: getDescriptionById(i + 15),
      year: `${i + 15}`,
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
