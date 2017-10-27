/*jshint esversion:6*/
const express = require('express');
const PORT = process.env.PORT || 8888;
const bodyParser = require('body-parser');
const path = require('path');
const db = require ('./models');
const User = db.user;
const routes = require('./routes');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const saltRounds = 12;
const redis = require('connect-redis')(session);

const app = express();
app.use(express.static('public'));
app.use(session({
  store: new redis(),
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, done) => {
  console.log('serializing');
  return done(null, {
    id: user.id,
    name: user.name
  });
});

passport.deserializeUser((user, done) => {
  console.log(user);
  console.log('deserializing');
  db.user.findOne({where: { id: user.id }})
  .then((user) => {
    return done(null, {
      id: user.id,
      name: user.name
    });
  });
});

passport.use(new LocalStrategy( {usernameField: "name"}, function (name, password, done) {
  db.user.findOne({where: {name: name}})
    .then((user) => {
      if(user === null){
        return done(null, false, {message: 'bad username or password'});
      }else{
        bcrypt.compare(password, user.password)
        .then((res) => {
          console.log(res);
          if(res){
            return done(null, user); //typically don't send the whole user back because it contains password and stuff
          }else{
            return done(null, false, {message: 'bad username or password'});
          }
        });
      }
    })
    .catch((error) => {
      console.log('ERROR:', error);
    });
}));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('/api', routes);

app.get('*', (req, res) => {
  res.sendFile('index.html', { root: path.join(__dirname, '/public') });
});


app.listen(PORT, () => {
  db.sequelize.sync({ force: false });
  console.log(`Server\'s up & up! PORT: ${PORT}`);
});