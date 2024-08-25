const express = require("express");
const { distributeUsers } = require("../controllers/userController");
const router = express.Router();

router.post("/distributeUsers", distributeUsers);

module.exports = router;
