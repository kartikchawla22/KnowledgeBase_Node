var express = require('express');
var router = express.Router();

var userController = require('../controllers/user');

router.route('/v1/users')
  .post(userController.postUsers)
  .get(userController.getUsers)

router.route('/v1/titles')
  .post(userController.posttitle)
  

router.route('/v1/headings')
  .post(userController.postHeading)
  


  
module.exports = router;