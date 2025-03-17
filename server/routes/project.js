const express = require("express");
const router = express.Router();
const projectController = require("../controllers/projectController");
const auth = require("../middleware/auth");

// GET /api/project
router.get("/", projectController.getProjects);

// POST /api/project (protected)
router.post("/", auth, projectController.createProject);

// PUT /api/project/:id (protected)
router.put("/:id", auth, projectController.updateProject);

// DELETE /api/project/:id (protected)
router.delete("/:id", auth, projectController.deleteProject);

module.exports = router;
