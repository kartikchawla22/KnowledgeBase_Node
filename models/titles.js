var mongoose = require('mongoose'),Schema=mongoose.Schema;

// Define our user schema
var T_Schema = new Schema({
    T_Name: {type: String},
    T_Id: {type: Number},
    created_at: {type: Date, default: Date.now},
    updated_at: Date
});

module.exports=mongoose.model('Title', T_Schema);