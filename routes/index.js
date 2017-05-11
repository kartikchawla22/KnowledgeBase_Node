var express = require('express'); // Making Object Of Express
var router = express.Router(); // Using Routing Function of Express
var userController = require('../controllers/user'); //Making Object of Controllers


router.route('/v1/users') // Route to Post and Get Data From and To Users Database
  .post(userController.postUsers)
  .get(userController.getUsers)


router.route('/v1/titles') // Route to Post and Get Data From and To Titles Database
  .post(userController.posttitle)
  .get(userController.getTitles)


router.route('/v1/headings') // Route to Post and Get Data From and To Headings Database
  .post(userController.postHeading)
  .get(userController.getHeadings)


module.exports = router; // Exporting router