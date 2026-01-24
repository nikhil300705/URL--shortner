const express = require("express");
const shortenUrlHandler = require("../service/urlService");
const Url = require("../models/url");

const router = express.Router();

// CREATE SHORT URL
router.post("/shorten", shortenUrlHandler);

// REDIRECT
router.get("/:shortId", async (req, res) => {
  try {
    const { shortId } = req.params;

    const url = await Url.findOne({ shortId });

    if (!url) {
      return res.status(404).send("Short URL not found");
    }

    return res.redirect(url.originalUrl);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});


module.exports = router;
