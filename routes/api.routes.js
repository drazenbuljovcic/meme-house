const path = require('path');

module.exports = function(app, passport) {

    // LOGOUT ==============================
    app.get('/api/logout', function(req, res) {
    	req.logout();
    	res.redirect('/');
    });

    // LOGIN
	app.post('/api/login', passport.authenticate('local-login', {
        successRedirect : '/profile/', 
        failureRedirect : '/signup', 
        failureFlash : true 
    }));
	// SIGNUP 
    app.post('/api/signup', passport.authenticate('local-signup', {
	    successRedirect : '/profile/', 
        failureRedirect : '/signup', 
		failureFlash : true 
    }));
}

