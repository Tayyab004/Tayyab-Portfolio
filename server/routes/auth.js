const express = require("express");
const router = express.Router();
const { register, login } = require("../controllers/authController");
const verifyToken = require("../middleware/auth");

// POST /api/auth/register
router.post("/register", register);

// POST /api/auth/login
router.post("/login", login);

router.get("/protected", verifyToken, (req, res) => {
  res.json({ message: "Protected route accessed!", user: req.user });
});

module.exports = router;
