// server/middleware/auth.js
const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      console.log("❌ No token provided");
      return res.status(401).json({ msg: "No token provided" });
    }

    if (!authHeader.startsWith("Bearer ")) {
      console.log("❌ Token format is incorrect");
      return res.status(401).json({ msg: "Invalid token format" });
    }

    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) {
        console.log("❌ Token verification failed:", err.message);
        return res.status(401).json({ msg: "Token is not valid" });
      }

      console.log("✅ Token verified successfully:", user);
      req.user = user;
      next();
    });
  } catch (err) {
    console.error("❌ Error in auth middleware:", err);
    res.status(500).json({ msg: "Internal server error" });
  }
};
