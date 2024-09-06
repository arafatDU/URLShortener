const express = require("express");
const router = express.Router();
const { handleSignup } = require("../controllers/userController");

router.post('/signup', handleSignup);

module.exports = router;