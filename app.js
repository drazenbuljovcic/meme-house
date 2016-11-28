const express = require('express'),
      path = require('path'),
      app = express(),
      port = process.env.PORT || 3000,
      router = express.Router();

router.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname + 'src/index.html'));
});

// Set Static Folder
app.use(express.static(path.join(__dirname, 'src')));

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});