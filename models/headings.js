// Load required packages
var mongoose = require('mongoose'),Schema = mongoose.Schema;
var autoIncrement = require('mongoose-auto-increment');


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
 H_Schema.plugin(autoIncrement.plugin, 'Heading');
// var Book = connection.model('Book', bookSchema);
module.exports = mongoose.model('Heading', H_Schema);
