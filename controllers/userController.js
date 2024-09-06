const User = require('../models/userModel');


const handleSignup = async (req, res) => {
  try {
    const {name, email, password} = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({message: "Please provide all fields"});
    }
    const newUser = new User({name, email, password});
    await newUser.save();
    return res.status(201).json(newUser);
  } catch (error) {
    return res.status(500).json({message: error.message});
  }
}

module.exports = {
  handleSignup
};