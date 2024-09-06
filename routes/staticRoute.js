const express = require('express');
const router = express.Router();
const URL = require("../models/urlModel");

router.get('/', async (req, res) => {
  try {
    const allURL = await URL.find({ createdBy: req.user?._id })  // frontend should call api
    //console.log({allURL})
    allURL.reverse();
    return res.render("home", {urls: allURL});

  } catch (error) {
    console.log(error);    
  }
});


router.get('/signup', async (req, res) => {
  try {
    return res.render("signup");

  } catch (error) {
    console.log(error);
    
  }
});

router.get('/login', async (req, res) => {
  try {
    return res.render("login");

  } catch (error) {
    console.log(error);
    
  }
});



module.exports = router;