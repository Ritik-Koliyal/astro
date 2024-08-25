const astrologers = require("../models/astrologerModel");
const {
  distributeUsersToAstrologers,
} = require("../services/distributionService");

exports.distributeUsers = (req, res) => {
  const users = require("../models/userModel"); // Fetch users from model
  distributeUsersToAstrologers(users, astrologers); // Distribute users
  res.status(200).json({ message: "Users distributed successfully" });
};
