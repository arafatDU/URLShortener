const express = require("express");
const router = express.Router();
const { handleSignup, handleLogin } = require("../controllers/userController");

router.post('/signup', handleSignup);
router.post('/login', handleLogin);
router.get("/logout", (req, res) => {
  res.clearCookie("uid").redirect("/login");
});


module.exports = router;