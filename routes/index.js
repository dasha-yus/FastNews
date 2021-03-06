var express = require('express');
var router = express.Router();
var passport = require("passport");
var User = require("../models/user");

router.get('/login', function(req, res){
	res.render("login");
})

router.post("/login", passport.authenticate("local", {
	successRedirect: "/news",
	failureRedirect: "/login"
}), function(req, res){

});

router.get('/register', function(req, res){
	res.render("register");
})

router.post("/register", function(req, res) {
	return new Promise((resolve, reject) => {
		User.register(new User({username: req.body.username}), req.body.password, function(err, user){
			if(err){
				reject(err);
				return res.render("login");
			}
			passport.authenticate("local")(req, res, function(){
				res.redirect("/news");
			});
		});
	})
});

router.get('/logout', function(req, res){
	req.logout();
	res.redirect("/news");
})

function isLoggedIn(req, res, next){
	if(req.isAuthenticated()){
		return next();
	}
	res.redirect("/login");
}

module.exports = router;