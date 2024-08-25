const users = Array.from({ length: 2500 }, (_, i) => ({
  id: i + 1,
  name: `User ${String.fromCharCode(65 + (i % 26))}${i + 1}`, // User A1, User B2, etc.
}));

console.log("users", users);
module.exports = users;
