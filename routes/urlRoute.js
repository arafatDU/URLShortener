const express = require("express");
const { generateNewShortUrl, handleRedirect, handleGetAnalytics } = require("../controllers/urlController");
const router = express.Router();


router.post("/api/urls", generateNewShortUrl );
router.get("/:shortId", handleRedirect);
router.get("/analytics/:shortId", handleGetAnalytics);

module.exports = router;