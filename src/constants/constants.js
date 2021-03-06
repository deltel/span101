export const words = {
  ar: "BAILAR",
  er: "BEBER",
  ir: "VIVIR",
};

export const presentTenseConjugates = {
  ar: {
    yo: "bailo",
    tú: "bailas",
    usted: "baila",
    nosotros: "bailamos",
    vosotros: "bailáis",
    ustedes: "bailan",
  },
  er: {
    yo: "bebo",
    tú: "bebes",
    usted: "bebe",
    nosotros: "bebemos",
    vosotros: "bebéis",
    ustedes: "beben",
  },
  ir: {
    yo: "vivo",
    tú: "vives",
    usted: "vive",
    nosotros: "vivimos",
    vosotros: "vivís",
    ustedes: "viven",
  },
};

export const preteriteTenseConjugates = {
  ar: {
    yo: "bailé",
    tú: "bailaste",
    usted: "bailó",
    nosotros: "bailamos",
    vosotros: "bailasteis",
    ustedes: "bailaron",
  },
  er: {
    yo: "bebí",
    tú: "bebiste",
    usted: "bebió",
    nosotros: "bebimos",
    vosotros: "bebisteis",
    ustedes: "bebieron",
  },
  ir: {
    yo: "viví",
    tú: "viviste",
    usted: "vivió",
    nosotros: "vivimos",
    vosotros: "vivisteis",
    ustedes: "vivieron",
  },
};

export const tense = {
  PRESENT_TENSE: "Present Tense",
  PRETERITE_TENSE: "Preterite Tense",
};

export const description = {
  PRESENT_TENSE: "Used when communicating in the present tense",
  PRETERITE_TENSE:
    "Used when communicating in the past tense about completed actions",
};

export const wordType = ["ar", "er", "ir", "non-verb", "masculine", "feminine"];

export const speechType = [
  "adjective",
  "adverb",
  "article",
  "conjunction",
  "noun",
  "preposition",
  "pronoun",
  "verb",
  "other",
];

export const httpCode = {
  CREATED: 201,
  OK: 200,
  UNAUTHORIZED: 401,
  INTERNAL_SERVER_ERROR: 500,
};

export const endpoint = {
  base: process.env.REACT_APP_BASE_URL,
};
