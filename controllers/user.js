
var User=require("../models/users");
var Title=require("../models/titles");
var Heading=require("../models/headings");

// var Promise = require("bluebird");

exports.postUsers = function (req, res) {
    var user = new User({
        username: req.body.username,
        password: req.body.password,
        created_at: new Date(),
        updated_at: ""
    });

    user.save(function (err, response) {
        if (err) {
            return res.json(req, res, err);
        }

        res.json({
            success: true,
            body: response
        })

    });
};

exports.getUsers=function(req,res){
    User.find({}, function(err, response){
        if(err) {
            return res.json(req, res, err);
        }

        res.json(response);
    })
}

exports.posttitle = function (req, res) {
    var title = new Title({
        T_Name: req.body.T_Name,
        T_Id: req.body.T_Id,
        created_at: new Date(),
        updated_at: ""
    });

    title.save(function (err, response) {
        if (err) {
            return res.json(req, res, err);
        }

        res.json({
            success: true,
            body: response
        })

    });
};


exports.postHeading = function (req, res) {
    var heading = new Heading({
        T_ID: req.body.T_ID,
        H_Name: req.body.H_Name,
        H_Data:req.body.H_Data,
        created_at: new Date(),
        updated_at: ""
    });

    heading.save(function (err, response) {
        if (err) {
            return res.json(req, res, err);
        }

        res.json({
            success: true,
            body: response
        })

    });
};



// exports.updateUsers = function (req, res) {
//     var id = req.params.id;
//     User.findOne({ _id: id }, function (err, user) {
//         if (err) {
//             res.json(err);
//         }

//         var username = req.body.username;
//         user.username = username;
//         user.updated_at = new Date();

//         user.save(function (err, response) {
//             if (err) {
//                 res.json(err);
//             }

//             res.json(response);
//         })
//     })
// }

// exports.deleteUsers = function (req, res) {
//     var id = req.params.id;
//     User.findOne({ _id: id }, function (err, user) {
//         if (err) {
//             res.json(err);
//         }

//         if (user) {
//             User.remove({ _id: id }, function (err) {
//                 if (err) {
//                     res.json(err);
//                 }

//                 res.json("success");
//             })
//         } else {
//             res.json("User doesnt exist");
//         }

//     })
// }
// exports.findUser = function (req, res) {
//     var id = req.params.id;
//     User.findOne({ _id: id }, function (err, response) {
//         if (err) {
//             res.json(err);
//         }

//         if (response) {
//             res.json(response);
//         }


//         else {
//             res.json("User doesnt exist");
//         }

//     })
// }
// exports.searchUsers = function (req, res) {
//     var regex = RegExp(req.params.reg);


//     User.find({ name: regex }, function (err, response) {
//         if (err) {
//             return res.json(req, res, err);
//         }

//         res.json(response);
//     })
// }





