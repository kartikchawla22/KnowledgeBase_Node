// Get the Schemas We need to Enter the Data in their respective keys
var User = require("../models/users");
var Title = require("../models/titles");
var Heading = require("../models/headings");


exports.SearchData = function (req, res) {
    console.log(req.params.reg);
    var regex = RegExp(req.params.reg);

    Heading.find({
        H_Data: regex
    }, function (err, response) {
        if (err) {
            return res.json(req, res, err);
        }
        if ((response || []).length === 0){
            return res.json("doesn't exit");
        }
        return res.json(response);
    })
};

exports.postUsers = function (req, res) { // Function to Post the Data in Users Collection of Database
    var user = new User({ // Making Object of Users schema 
        username: req.body.username,
        password: req.body.password

    });
    user.save(function (err, response) { // Saving the Data into the Database
        if (err) {
            return res.json(req, res, err);
        }

        res.json({
            success: true,
            body: response
        })

    });
};

exports.CheckUsers = function (req, res) {
    username1 = req.body.username;
    password1 = req.body.password;
    console.log(username1);
   var a=  User.find({
        username: username1,
        password: password1
    }, function (err, response) {
        if (err) {
            return res.json("false");
        } else{
            if(response.length == 0)
            return res.json("false");
            else
            return res.json("true");
        }
    });
}





exports.getUsers = function (req, res) { // Function to Get the data from users
    User.find({}, function (err, response) { // Function to Find all the Users from collection 
        if (err) {
            return res.json(req, res, err);
        }
        res.json(response);
    })
}


exports.posttitle = function (req, res) { // Function to Post the Titles in Title Collection of Database
    var title = new Title({ // Making Object of Title schema 
        T_Name: req.body.T_Name,
        T_Id: req.body.T_Id
    });
    title.save(function (err, response) { // Saving the Data into the Database
        if (err) {
            return res.json(req, res, err);
        }
        return res.json({
            success: true,
            body: response
        });

    });
};


exports.getTitles = function (req, res) { // Function to Get the Titles from database
    Title.find({}, function (err, response) { // Function to Find all the Titles from collection 
        if (err) {
            return res.json(req, res, err);
        }
        return res.json(response);
    })
}


exports.postHeading = function (req, res) { // Function to post all the Headings to the collection 
    var heading = new Heading({ // Making Object of Heading Schema
        T_ID: req.body.T_ID,
        H_Name: req.body.H_Name,
        H_Data: req.body.H_Data

    });
    heading.save(function (err, response) { // Saving the Headings into the Database
        if (err) {
            return res.json(req, res, err);
        }

        res.json({
            success: true,
            body: response
        });

    });
};


exports.getHeadings = function (req, res) { // Function to Get the data from Headings
    Heading.find({}, function (err, response) { // Function to Find all the Headings from collection "Heading"
        if (err) {
            return res.json(req, res, err);
        }

        res.json(response);
    })
};
