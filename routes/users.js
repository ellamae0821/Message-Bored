/*jshint esversion:6*/
const express = require('express');
const router = express.Router();
const models = require('../models');
const User = models.user;


router.post('/login', (req,res) => {
  console.log("ROUTES-USER-POST LOGIN:", req.user);
  return User.findOne({
    where: {name: req.body.name}
  })
  .then((user)=> {
    res.json(user.id);
  });
});



router.get('/', (req, res) => {
  return User.findAll()
    .then( (users) => {
      res.json(users);
    });
  });


router.post('/', (req, res) => {
//  console.log(req.body.name);
  return User.create({name : req.body.name})
  .then( (data) => {
    res.json(data);
  })
  .catch (err => {
    res.send(err);
  });
});


router.get('/:id', (req, res) => {
  console.log('ID ISSSSS: ', req.params.id);
  var userID = parseInt(req.params.id);
  return User.findById(userID)
  .then( (user) => {
    res.send(user);
  })
  .catch((err) => {
    console.log(err);
  });
});



module.exports = router;