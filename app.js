const express = require('express'),
      app = express(),
      path = require('path'),
      port = process.env.PORT || 3000,
      passport = require('passport'),
      cookieParser = require('cookie-parser'),
      bodyParser   = require('body-parser'),
      session      = require('express-session'),
	  flash 	   = require('connect-flash'),
	  morgan 	   = require('morgan'),
	  mongoose = require('mongoose');	
      // API = require('./api.routes')

// API
var configDB = require('./config/database.js');

mongoose.connect(configDB.url); // connect to our database

require('./config/passport')(passport); // pass passport for configuration

// set up our express application
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser.json()); // get information from html forms
app.use(bodyParser.urlencoded({ extended: true }));
// required for passport
app.use(session({
    secret: 'SomethingAwesome', // session secret
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

// routes ======================================================================
require('./routes/api.routes.js')(app, passport); // load our routes and pass in our app and fully configured passport

// route middleware to ensure user is logged in
function isLoggedIn(req, res, next) {
	if (req.isAuthenticated())
		return next();

	res.redirect('/');
}


app.get('/signup', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/index.html'));   
});
app.get('/login', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
});
// PROFILE SECTION
app.get('/profile', isLoggedIn, function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
});
// launch ======================================================================
app.listen(port);
console.log('The magic happens on port ' + port);

// Set Static Folder
app.use(express.static(path.join(__dirname, '/dist')));




