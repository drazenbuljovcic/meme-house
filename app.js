const express = require('express'),
      app = express(),
      path = require('path'),
      port = process.env.PORT || 3000,
      router = express.Router(),
      mongojs = require('mongojs'),
      db = mongojs('mongodb://meme-center:meme-center@ds113958.mlab.com:13958/heroku_7wxw8zdk');

app.get('/users', (req, res, next) => {
    console.log('Get users');
    db.users.find((err, users) => {
        if(err) res.send(err)
        
        res.json(users);
    })
});

app.get('/login', (req, res, next) => {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
});

// Set Static Folder
app.use(express.static(path.join(__dirname, '/dist')));

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});