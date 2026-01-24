const express = require("express");
const shortenUrlHandler = require("../service/urlService");
const Url = require("../models/url");

const router = express.Router();

// CREATE SHORT URL
router.post("/shorten", shortenUrlHandler);

// REDIRECT
router.get("/:shortId", async (req, res) => {
  try {
    const data = await Url.findOne({ shortId: req.params.shortId });
    if (!data) {
      return res.status(404).json({ message: "Short URL not found" });
    }
    res.redirect(data.originalUrl);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
