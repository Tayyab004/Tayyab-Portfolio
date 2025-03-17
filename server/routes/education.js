const express = require("express");
const router = express.Router();
const educationController = require("../controllers/educationController");
const auth = require("../middleware/auth");

// GET /api/education
router.get("/", educationController.getEducation);

// POST /api/education (protected)
router.post("/", auth, educationController.createEducation);

// PUT /api/education/:id (protected)
router.put("/:id", auth, educationController.updateEducation);

// DELETE /api/education/:id (protected)
router.delete("/:id", auth, educationController.deleteEducation);

module.exports = router;
