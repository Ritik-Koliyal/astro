const astrologers = Array.from({ length: 500 }, (_, i) => ({
  id: i + 1,
  name: `Astrologer ${String.fromCharCode(65 + (i % 26))}${i + 1}`, // Astrologer A1, Astrologer B2, etc.
  isTopAstrologer: Math.random() > 0.7, // Randomly 30% astrologers will be top astrologers
  currentFlow: 0, // Initialize currentFlow to 0 for all astrologers
}));

console.log("astrologers", astrologers);

module.exports = astrologers;
