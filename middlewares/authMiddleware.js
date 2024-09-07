const {getUser} = require('../service/authService');


function checkForAuthentication(req, res, next){
	// This was for JSON based
	//const authHeaderValue=req.headers["authorization"]
	// req.user = null;
	//if(!authHeaderValue ||! authHeaderValue.startsWith("Bearer"))
	//	return next()
	//const token=authHeaderValue.split("Bearer ")[1]
	
	
	//This is for cookie based
  req.user = null;
	const tokenCookie = req.cookies?.uid;
  if(!tokenCookie) return next();
	const user = getUser(tokenCookie);
	req.user = user;
	return next();
}

function restrictTo(roles=[]){
	return function(req, res, next){
		if(!req.user) return res.redirect("/login");
		
		if(!roles.includes(req.user.role)) return res.end("Unauthorized");
		
		return next()
	}
}

module.exports = {
  checkForAuthentication,
  restrictTo
}