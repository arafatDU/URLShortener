const {getUser} = require('../service/authService');

async function restrictToLoggedInUserOnly(req, res, next) {
  try {
    const uid = req.cookies?.uid;
    console.log({uid})
    if(!uid) return res.redirect('/login')
    const user = getUser(uid)
    if(!user) return res.redirect('/login')
    req.user = user
    // console.log({user, uid})
    next();

  } catch (error) {
    console.log(error);
  }
}

async function checkAuth(req, res, next) {
  try {
    const uid=req.cookies?.uid
    //if(!uid) return res.redirect('/login')
    const user=getUser(uid)
    req.user=user
    next();

  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  restrictToLoggedInUserOnly,
  checkAuth
}