var express = require('express');
var router = express.Router();
const controller = require('../controllers/testcontroller')
// users

/* GET home page. */
router.get('/', function(req, res, next) {
    // controller.createUser(req,res)
    res.render('createUser', { title: 'create user' });
  });

  router.post('/created/', function(req, res, next) {
    controller.createUser(req,res)
  });
  module.exports = router;
