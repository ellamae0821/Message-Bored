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
const User = db.user;



router.use('/users', users);
router.use('/messages', messages);
router.use('/topics', topics);




module.exports = router;