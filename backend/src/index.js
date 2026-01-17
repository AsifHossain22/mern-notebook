// const express = require("express");
import express from "express";

import noteRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import rateLimiter from "./middleware/rateLimiter.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(express.json()); // ToParseJSONBodies
app.use(rateLimiter);

// SimpleMiddleware
// app.use((req, res, next) => {
//   console.log(`Request Method: ${req.method} & Request URL: ${req.url}`);
//   next();
// });

app.use("/api/notes", noteRoutes);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server running on PORT:", PORT);
  });
});
