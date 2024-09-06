const URL = require("../models/urlModel");
const {nanoid} = require("nanoid");

const generateNewShortUrl = async (req, res) => {
  try {
    const { url } = req.body;
    if(!url) {
      return res.status(400).json({message: "Please provide a url"});
    }
    const shortId = nanoid(8);
    const newUrl = await URL.create(
      {
        shortId: shortId,
        redirectURL: url,
        visitHistory: [],
        createdBy: req.user._id,
      }
    );
    // return res.status(201).json(newUrl);
    // return res.render('home', {id: shortId})
    return res.redirect('/');

  } catch (error) {
    console.log(error);
  }
}

const handleRedirect = async (req, res) => {
  try {
    const { shortId } = req.params;
    const url = await URL.findOne({shortId});
    if(!url) {
      return res.status(404).json({message: "URL not found"});
    }
    url.visitHistory.push({timestam: new Date()});
    await url.save(); 
    return res.redirect(url.redirectURL);
  } catch (error) {
    console.log(error);
  }
}

const handleGetAnalytics = async (req, res) => {
  try {
    const { shortId } = req.params;
    const url = await URL.findOne({shortId});
    if(!url) {
      return res.status(404).json({message: "URL not found"});
    }
    return res.json({
      totalClicks: url.visitHistory.length,
      analytics: url.visitHistory,
    });
  }
  catch (error) {
    console.log(error);
  }
}

module.exports = {
  generateNewShortUrl,
  handleRedirect,
  handleGetAnalytics,
};