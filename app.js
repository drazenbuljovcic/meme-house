var express = require('express'),
      path = require('path'),
      app = express(),
      port = 3000,
      router = express.Router();

router.get('/', function(req, res, next){
    res.sendFile(path.join(__dirname + 'src/index.html'));
});

// Set Static Folder
app.use(express.static(path.join(__dirname, 'src')));

app.listen(3000, function() {
    console.log(`Listening on port ${port}`)
});