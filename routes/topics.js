/*jshint esversion:6*/
const express = require('express');
const router = express.Router();
const models = require('../models');
const Topic = models.topic;
const Users = models.user;

router.get('/', (req, res) => {
  console.log('GETTING ROUTE /');
  Topic.findAll()
  .then( (topics) => {
    res.json(topics);
  });
});



// router.post('/', (req, res) => {
//   console.log('TOPICS ROUTE - REQ USER',req.user);
//   return Topic.create({
//     name: req.body.name,
//     created_by: req.user.id,
//   })
//   .then((topic) => {
//     return Users.findOne({where: {
//       id: req.user.id
//     }})
//     .then((user) => {
//       let topicInfo = {
//         topic: topic,
//         user: user
//       };
//       return res.json(topicInfo);
//     });

//   });
// });

router.post('/', (req, res) => {
  return Topic.create({
    name: req.body.name,
    created_by: req.user.id,
  })
  .then((topic) => {
    return res.json(topic);
  });
});

router.get('/:id', (req, res) => {
  console.log('Router is getting single TOPIC id for #:', req.params.id);
  var topicId = parseInt(req.params.id);
  return Topic.findById(topicId)
  .then( (topic) => {
    res.send(topic);
  })
  .catch( (err) => {
    console.log(err);
  });
});




module.exports = router;

