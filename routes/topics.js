/*jshint esversion:6*/
const express = require('express');
const router = express.Router();
const models = require('../models');
const Topic = models.topic;


router.get('/', (req, res) => {
  console.log('GETTING ROUTE /');
  Topic.findAll()
  .then( (topics) => {
    res.json(topics);
  });
});


router.post((req, res) => {
  console.log('AT TOPICs POSTING REQ.BODY LOg', req.body);
  Topic.create({
    name: req.body.name,
    created_by: req.body.created_by
  })
  .then((topics) => {
    console.log('we posted topic');
    res.json(topics);
  })
  .catch((err) => {
    console.log(err);
  });
});




module.exports = router;

function isAuthenticated(req, res, next){
  if(req.isAuthenticated()) {next();}
  else{res.redirect('/');
  }
}
