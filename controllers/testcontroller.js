// const db = require('../models/db')
const mongoose = require('mongoose');
var model = require('../models/testModel');
exports.createUser = (req, res) => {

  mongoose.connect('mongodb://localhost/WebAPI');
  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  console.dir('mongoose connected.')
  let user = new model.User({ name: req.body.username, age: req.body.userage, height: req.body.userheight });
  user.save(function (err) {
        if (err) return handleError(err);
      });
      res.send("sucessfully added user")
      res.redirect('/createUser');
}