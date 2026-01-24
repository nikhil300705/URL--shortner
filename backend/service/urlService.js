const Url = require("../models/url.js");
const generateShortId = require("../utils/generateShortId");

async function shortenUrlHandler(req, res) {
  try {
    const { originalUrl } = req.body;

    if (!originalUrl) {
      return res.status(400).json({
        success: false,
        message: "originalUrl is required",
      });
    }

    const shortId = generateShortId();

    await Url.create({
      originalUrl,
      shortId,
    });

    return res.status(201).json({
      success: true,
      shortUrl: `${req.protocol}://${req.get("host")}/${shortId}`,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
}

module.exports = shortenUrlHandler;
