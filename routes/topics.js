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
  console.log('posting', req.body);
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

/*const express = require('express');
const users = express.Router();
const { User, Topic, Message } = require('../../models');

users.get('/', (req, res) => {
User.all()
.then(users => {
res.json(users);
});
});

users.post('/', (req, res) => {
User.create(req.body)
.then( data => {
res.json(data);
})
.catch( err => {
res.send(err);
});
});

users.get('/:username', (req, res) => {
User.all({
where: {
name: req.params.username
}})
.then(data => {
res.json(data);
})
.catch(err => {
res.send(err);
});
});*/



module.exports = router;