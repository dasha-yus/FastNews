var mongoose = require("mongoose");
var postSchema = new mongoose.Schema({
	theme: String,
	topic: String,
	class: String,
	title: String,
	image: String,
	imageHD: String,
	video: String,
	date: String,	
	shortDescription: String,
	fullDescription: String,
	numberOfViews: Number,
	comments: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Comment"
		}
	]
})
module.exports = mongoose.model("Post", postSchema);