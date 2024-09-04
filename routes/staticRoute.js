const express = require('express');
const router = express.Router();
const URL = require("../models/urlModel");

router.get('/', async (req, res) => {
  try {
    const allURL = await URL.find({});  // frontend should call api
    return res.render("home", {urls: allURL});

  } catch (error) {
    console.log(error);
    
  }
});

module.exports = router;