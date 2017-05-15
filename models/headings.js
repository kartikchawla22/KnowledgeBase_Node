// Load required packages
var mongoose = require('mongoose'),Schema = mongoose.Schema;


// Define our Heading schema
var H_Schema = new Schema({
    T_ID: {
        type: Number
    },
   H_Name: {
        type: String
    },
    H_Data: {
        type: String
    },
});
 
module.exports = mongoose.model('Heading', H_Schema);
