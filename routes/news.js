var express = require('express');
var router = express.Router();
var Post = require("../models/post");

router.get('/news', function (req, res) {
	return new Promise((resolve, reject) => {
		Post.find({}, function(err, posts){
			if(err){
				reject(err);
			} else {
				res.render("index", {posts: posts});
			}
		})
	})
});

router.get("/news/:id", function(req, res) {
	return new Promise((resolve, reject) => {
		Post.findByIdAndUpdate(req.params.id, {$inc: {"numberOfViews" : 1}}, {new: true}).populate("comments").exec(function(err, foundPost){
			if(err){
				reject(err);
			} else {
				res.render("show", {post: foundPost});
			}
		});
	})
});

module.exports = router;