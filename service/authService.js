const jwt = require('jsonwebtoken');
require('dotenv').config();
const secret = process.env.SECRET_KEY;

function setUser(user) {
  //console.log(secret);
	const payload = {
    _id: user._id,
    email: user.email,
    role: user.role,
  }
  return jwt.sign(payload, secret);
}


function getUser(token) {
	try {
    if(!token) return null;
    return jwt.verify(token, secret);
    
  } catch (error) {
    return null;
  }
}

module.exports = {
  setUser,
  getUser
}