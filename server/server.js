require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// Route Imports
const authRoutes = require("./routes/auth");
const projectRoutes = require("./routes/project");
const educationRoutes = require("./routes/education");
const contactRoutes = require("./routes/contact");

const app = express();
app.use(express.json());
app.use(cors());

// Debug
console.log("searching for MONGO_URI:", process.env.MONGO_URI);

// Test route
app.get("/", (req, res) => {
  res.send("🚀 Server is up and running!");
});

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Error connecting to MongoDB", err));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/project", projectRoutes);
app.use("/api/education", educationRoutes);
app.use("/api/contact", contactRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
