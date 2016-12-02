var mongoose = require('mongoose');


var postImageSchema = mongoose.Schema({
 		img: { data: Buffer, contentType: String }
});

// create the model Post and expose it to our app
module.exports = mongoose.model('postimage', postImageSchema);