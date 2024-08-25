const express = require("express");
const { toggleTopAstrologer } = require("../controllers/astrologerController");
const router = express.Router();

router.post("/toggleTopAstrologer/:id", toggleTopAstrologer);

module.exports = router;
