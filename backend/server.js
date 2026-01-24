require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const urlRoutes = require("./routes/urlRoutes");

const app = express();

app.use(express.json());

// routes
app.use("/", urlRoutes);

// health check
app.get("/", (req, res) => {
  res.send("URL Shortener Backend Live 🚀");
});

const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Mongo error:", err);
    process.exit(1);
  });
