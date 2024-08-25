const astrologers = require("../models/astrologerModel");

exports.toggleTopAstrologer = (req, res) => {
  const astrologerId = parseInt(req.params.id);
  const astrologer = astrologers.find((a) => a.id === astrologerId);

  if (astrologer) {
    astrologer.isTopAstrologer = !astrologer.isTopAstrologer; // Toggle the status
    res.json({
      message: `${astrologer.name} is now ${
        astrologer.isTopAstrologer ? "Top" : "Normal"
      } Astrologer`,
    });
  } else {
    res.status(404).json({ message: "Astrologer not found" });
  }
};
