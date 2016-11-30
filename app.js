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
      API = require('./api.routes');

// API
app.use('/api', API);

// Set up our express application
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser()); // get information from html forms
app.use(morgan('dev'));

require('./config/passport')(passport);
// required for passport
app.use(session({ secret: 'somethingAwesome' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash());


// Frontend application
app.get('/login', (req, res, next) => {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
});
app.get('/signup', (req, res, next) => {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
});

// Set Static Folder
app.use(express.static(path.join(__dirname, '/dist')));

// Server listen
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});





