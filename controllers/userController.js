const User = require('../models/userModel');
const {v4: uuidv4} = require('uuid');
const { setUser, getUser} = require('../service/authService');

const handleSignup = async (req, res) => {
  try {
    const {name, email, password} = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({message: "Please provide all fields"});
    }
    const newUser = new User({name, email, password});
    await newUser.save();
    return res.redirect('/');
  } catch (error) {
    return res.status(500).json({message: error.message});
  }
}

const handleLogin = async (req, res) => {
  try {
    const {email, password} = req.body;
    if (!email || !password) {
      return res.status(400).json({message: "Please provide all fields"});
    }
    const user = await User.findOne({email});
    if (!user) {
      return res.status(400).json({message: "User not found"});
    }
    if (user.password !== password) {
      return res.status(400).json({message: "Invalid credentials"});
    }
    const sessionId= uuidv4();
    setUser(sessionId, user);
    res.cookie("uid", sessionId);
    return res.redirect('/');
  }
  catch (error) {
    return res.status(500).json({message: error.message});
  }
}

module.exports = {
  handleSignup,
  handleLogin
};