const express = require('express'),
      app = express(),
      path = require('path'),
      port = process.env.PORT || 3000,
      API = require('./api.routes');

// API
app.use('/api', API);

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