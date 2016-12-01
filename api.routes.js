const path = require('path');

module.exports = function(app, passport) {

    // PROFILE SECTION
    app.get('/profile', isLoggedIn, function(req, res) {
    	console.log('Signed up!');
    });

    // LOGOUT ==============================
    app.get('/logout', function(req, res) {
    	req.logout();
    	res.redirect('/');
    });

    app.get('/signup', function(req, res) {
    	res.sendFile(path.join(__dirname + '/dist/index.html'));   
    });
    app.get('/login', function(req, res) {
    	res.sendFile(path.join(__dirname + '/dist/index.html'));
    });

    // LOGIN
	app.post('/login', passport.authenticate('local-login', {
        successRedirect : '/profile/yes', 
        failureRedirect : '/signup', 
        failureFlash : true 
    }));
	// SIGNUP 
    app.post('/signup', passport.authenticate('local-signup', {
	    successRedirect : '/profile/yes', 
        failureRedirect : '/signup', 
		failureFlash : true 
    }));
}

// route middleware to ensure user is logged in
function isLoggedIn(req, res, next) {
	if (req.isAuthenticated())
		return next();

	res.redirect('/');
}
