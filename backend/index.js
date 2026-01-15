import express from "express";
// const express = require("express");

const app = express();

// API
app.get("/api/notes", (req, res) => {
  res.status(200).send("You have got 15 notes.");
});

// API
app.post("/api/notes", (req, res) => {
  res.status(201).json({ message: "Note created successfully!" });
});

// API
app.put("/api/notes/:id", (req, res) => {
  res.status(200).json({ message: "Note updated successfully!" });
});

// API
app.delete("/api/notes/:id", (req, res) => {
  res.status(200).json({ message: "Note deleted successfully!" });
});

app.listen(5001, () => {
  console.log("Server running on PORT: 5001");
});
