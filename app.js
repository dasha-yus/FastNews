var express   			  = require('express'),
    app        			  = express(),
    mongoose    		  = require("mongoose"),
    bodyParser 			  = require("body-parser"),
    Post       			  = require("./models/post"),
    User       			  = require("./models/user"),
    Comment    			  = require("./models/comment"),
    passport  			  = require("passport"),
    localStrategy 		  = require("passport-local"),
    passportLocalMongoose = require("passport-local-mongoose"),
    seedDB     			  = require("./seeds")

var newsRoutes    = require("./routes/news"),
	commentRoutes = require("./routes/comments"),
	indexRoutes   = require("./routes/index")

seedDB();
app.set('view engine', 'ejs');
mongoose.connect("mongodb://localhost/news");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.use(require("express-session")({
	secret: "web iba",
	resave: false,
	saveUnitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(function(req, res, next){
	res.locals.currentUser = req.user;
	next();
});

passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(indexRoutes);
app.use(commentRoutes);
app.use(newsRoutes);

app.listen(3000, function () {
  console.log('Server has started');
});
