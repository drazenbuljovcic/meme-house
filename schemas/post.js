var mongoose = require('mongoose');

// define the schema for our user model
var postSchema = mongoose.Schema({
        title        : String,
        description  : String,
        votes 		 : Number,
        views		 : Number,
        Saved		 : Boolean
});


// create the model Post and expose it to our app
module.exports = mongoose.model('Post', postSchema);