const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json({ message: "GitHub Actions Demo API is running" });
});

app.get("/health", (req, res) => {
  res.json({ status: "UP" });
});

module.exports = app;