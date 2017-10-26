/*jshint esversion:6*/
const express = require('express');
const router = express.Router();
const models = require('../models');
const User = models.user;

router.get('/', (req, res) => {
  return User.findAll()
    .then( (users) => {
      res.json(users);
    });
  });


router.post('/', (req, res) => {
  return User.create({name : req.body.name})
  .then( (data) => {
    res.json(data);
  })
  .catch (err => {
    res.send(err);
  });
});


router.get('/:username', (req, res) => {
  var userID = parseInt(req.params.id);
  return User.findById(userID)
  .then( (users) => {
    res.json(users);
  })
  .catch((err) => {
    console.log(err);
  });
});



module.exports = router;