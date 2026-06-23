const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json({ message: "GitHub Actions Demo API is running" });
});

app.get("/health", (req, res) => {
  res.json({ status: "UP" });
});

app.get("/version", (req, res) => {
  res.json({ version: "1.0.0" });
});

module.exports = app;