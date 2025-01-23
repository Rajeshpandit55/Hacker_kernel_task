const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");
const { registerUser, loginUser } = require("../controllers/authController");

// Public routes
router.post("/register", registerUser);

router.post("/login", loginUser);

// Protected route example
router.get("/profile", protect, (req, res) => {
  res.json({ message: `Welcome, user ${req.user.id}` });
});

module.exports = router;
