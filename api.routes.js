const express = require('express'),
      router = express.Router(),
      passport = require('passport'),
      mongoose = require('mongoose');

mongoose.connect('mongodb://meme-center:meme-center@ds113958.mlab.com:13958/heroku_7wxw8zdk');

require('./config/passport')(passport);

router.get('/users', (req, res, next) => {
    console.log('Get users');
    // db.users.find((err, users) => {
    //     if(err) res.send(err)
        
    //     res.json(users);
    // });
});

router.post('/signup', passport.authenticate('local-signup', {
        successRedirect : '/success/', 
        failureRedirect : '/failes/signup', // redirect back to the signup page if there is an error
        failureFlash : false // allow flash messages 
    }));

module.exports = router;

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on 
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
}