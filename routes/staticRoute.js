const express = require('express');
const router = express.Router();
const URL = require("../models/urlModel");

router.get('/', async (req, res) => {
  try {
    console.log("home route");
    const allURL = await URL.find({});  // frontend should call api
    return res.render("home", {urls: allURL});

  } catch (error) {
    console.log(error);
    
  }
});


router.get('/signup', async (req, res) => {
  try {
    console.log("signup route");
    return res.render("signup");

  } catch (error) {
    console.log(error);
    
  }
});



module.exports = router;