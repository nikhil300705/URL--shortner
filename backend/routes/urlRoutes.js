const express = require("express");
const shortenUrlHandler = require("../service/urlService");
const Url = require("../models/url");

const router = express.Router();

// CREATE SHORT URL
router.post("/shorten", shortenUrlHandler);

// REDIRECT
router.get("/:shortId", async (req, res) => {
  const { shortId } = req.params;

  const url = await Url.findOne({ shortId });

  if (!url) {
    return res.status(404).json({ message: "Short URL not found" });
  }

  res.redirect(url.originalUrl);
});


module.exports = router;
