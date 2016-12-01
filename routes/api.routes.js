const path = require('path');
var User       = require('../schemas/user');

module.exports = function(app, passport) {

    // LOGOUT ==============================
    app.get('/api/logout', function(req, res) {
    	req.logout();
    	res.redirect('/');
    });

    // LOGIN
    
    app.post('/api/login', passport.authenticate('local-login'),
        function(req, res) {
            res.json(req.user);
        });
	// SIGNUP 

    app.post('/api/signup', passport.authenticate('local-signup'), 
        function(req, res) {
            User.findOne({'email': 'djole123@gmail.com'}, function(err, user){
                res.json(user);
            });
    });

    //Get user
    app.get('/api/user/:userid',function (req,res) {
        User.findById(req.params.userid, function (err, user) {
            res.json(user);
        });
    });
    //Get all users
    app.get('/api/users',function(req, res) {
        User.find({}, function(err, users) {
            var userMap = {};
            users.forEach(function(user) {
                userMap[user._id] = user;
            });

            res.send(userMap);  
        })
    });
}
