const express = require("express");
const router = express.Router();
const contactController = require("../controllers/contactController");

// GET /api/contact
router.get("/", contactController.getContact);

module.exports = router;
