const {
  distributeUsersToAstrologers,
} = require("../services/distributionService");

test("Distribute users evenly to astrologers", () => {
  // Initialize astrologers with currentFlow set to 0
  const astrologers = Array.from({ length: 100 }, (_, i) => ({
    id: i + 1,
    name: `Astrologer ${String.fromCharCode(65 + (i % 26))}${i + 1}`, // Astrologer A1, Astrologer B2, etc.
    isTopAstrologer: Math.random() > 0.7, // Randomly 30% astrologers will be top astrologers
    currentFlow: 0, // Start with 0 users assigned
  }));

  // Initialize users
  const users = Array.from({ length: 500 }, (_, i) => ({
    id: i + 1,
    name: `User ${String.fromCharCode(65 + (i % 26))}${i + 1}`, // User A1, User B2, etc.
  }));

  // Distribute users to astrologers
  distributeUsersToAstrologers(users, astrologers);

  // Test cases: Check if users are distributed and flows are updated
  expect(astrologers[0].currentFlow).toBeGreaterThan(0);
  expect(astrologers[1].currentFlow).toBeGreaterThan(0);

  // Optionally, check if total flows are correct
  const totalFlow = astrologers.reduce(
    (acc, astrologer) => acc + astrologer.currentFlow,
    0
  );
  expect(totalFlow).toBe(users.length); // Ensure that all users are distributed
});
