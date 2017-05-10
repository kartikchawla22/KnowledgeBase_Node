var mongoose = require('mongoose'),Schema=mongoose.Schema;

// Define our user schema
var H_Schema = new Schema({
    T_ID: {type: Number},
    H_Name: {type: String},
    H_Data:{type:String},
    created_at: {type: Date, default: Date.now},
    updated_at: Date
});

module.exports=mongoose.model('Heading', H_Schema);