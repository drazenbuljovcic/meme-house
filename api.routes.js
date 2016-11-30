const express = require('express'),
      router = express.Router(),
      mongojs = require('mongojs'),
      db = mongojs('mongodb://meme-center:meme-center@ds113958.mlab.com:13958/heroku_7wxw8zdk');

router.get('/users', (req, res, next) => {
    console.log('Get users');
    db.users.find((err, users) => {
        if(err) res.send(err)
        
        res.json(users);
    });
});

module.exports = router;