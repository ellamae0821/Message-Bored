/*jshint esversion:6*/
const express = require('express');
const router = express.Router();
const users = require('./users');
const messages = require('./messages');
const topics = require ('./topics');
const passport = require('passport');
const bcrypt = require('bcrypt');
const db = require ('../models');
const saltRounds = 12;



router.use('/users', users);
router.use('/messages', messages);
router.use('/topics', topics);



/*app.get('/', (req, res) => {
  console.log('login');
  res.render('partials/login');
});*/

router.post('/login', passport.authenticate('local', {
  successRedirect: '/public',
  failureRedirect: '/'
}));

router.get('/logout', (req, res) => {
  req.logout();
  res.sendStatus(200);
});

router.post('/register', (req, res) => {
  bcrypt.genSalt(saltRounds, function(err, salt){
    bcrypt.hash(req.body.password, salt, function(err, hash){
      db.user.create({
        name: req.body.name,
        password: hash
      })
      .then((user) => {
        console.log(user);
        res.redirect('/');
      })
      .catch((error) => {
        return res.send('Stupid username');
      });
    });
  });
});





module.exports = router;