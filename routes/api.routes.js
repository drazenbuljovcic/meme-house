const path = require('path');

module.exports = function(app, passport) {

    // LOGOUT ==============================
    app.get('/logout', function(req, res) {
    	req.logout();
    	res.redirect('/');
    });

    // LOGIN
	app.post('/login', passport.authenticate('local-login', {
        successRedirect : '/profile/', 
        failureRedirect : '/signup', 
        failureFlash : true 
    }));
	// SIGNUP 
    app.post('/signup', passport.authenticate('local-signup', {
	    successRedirect : '/profile/', 
        failureRedirect : '/signup', 
		failureFlash : true 
    }));
}

