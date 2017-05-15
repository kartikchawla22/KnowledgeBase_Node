// Load required packages
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

// Define our user schema
var UserSchema = new Schema({
    username: {
        type: String
    },
    password: {
        type: String
    }
   
});

module.exports = mongoose.model('User', UserSchema);
