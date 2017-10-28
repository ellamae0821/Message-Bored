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


router.post('/', (req, res) => {
  console.log('HEEEEERE!');
  return Topic.create({
    name: req.body.name,
    author_id: req.user.id
  })
  .then((topic) => {
    return res.json(topic);
  });
});

/*
router.post((req, res) => {
  console.log('AT TOPICs POSTING REQ.BODY LOg', req.body);
  return Topic.create({
    name: req.body.name,
    author_id : req.user.id
  })
  .then((topics) => {
    console.log('we posted topic');
    res.json(topics);
  })
  .catch((err) => {
    console.log(err);
  });
});*/




module.exports = router;

