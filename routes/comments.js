var express = require('express');
var router = express.Router();
var Post = require("../models/post");
var Comment = require("../models/comment");

router.get("/news/:id/comments/new", isLoggedIn, function(req, res){
	Post.findById(req.params.id, function(err, post){
		if(err){
			console.log(err);
		} else {
			res.render("new", {post: post});
		}
	})	
});

router.post("/news/:id/comments", isLoggedIn, function(req, res){
	Post.findById(req.params.id, function(err, post){
		if(err){
			console.log(err);
			res.redirect("/news");
		} else {
			Comment.create(req.body.comment, function(err, comment){
				if(err){
					console.log(err);
				} else {
					comment.author.id = req.user._id;
					comment.author.username = req.user.username;
					comment.save();
					post.comments.push(comment);
					post.save();
					res.redirect("/news/" + post._id);
				}
			})
		}
	})	
});

function isLoggedIn(req, res, next){
	if(req.isAuthenticated()){
		return next();
	}
	res.redirect("/login");
}

module.exports = router;