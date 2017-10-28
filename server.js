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
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(session({
//  store: new redis(), - as per JON.
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use('/api', routes);

passport.serializeUser((user, done) => {
  console.log('serializing', user);
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
  }); // RETURN WHAT IF NO USERS after droping table
});

passport.use(new LocalStrategy( {usernameField: 'name'}, function (name, password, done) {
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


app.post('/api/login', passport.authenticate('local'), function (req, res) {
  const user = req.user;
    res.json(user);
});


app.get('/logout', (req, res) => {
  req.logout();
  res.sendStatus(200);
});

app.post('/api/register', (req, res) => {
  bcrypt.genSalt(saltRounds, function(err, salt){
    bcrypt.hash(req.body.password, salt, function(err, hash){
      db.user.create({
        name: req.body.name,
        password: hash
      })
      .then((user) => {
        res.json(user);
      })
      .catch((error) => {
        return res.send("ERROR , invalid username and or password ");
      });
    });
  });
});

function isAuthenticated(req, res, next){
  if(req.isAuthenticated()) {next();}
  else{res.redirect('/');
  }
}


app.get('*', (req, res) => {
  res.sendFile('index.html', { root: path.join(__dirname, '/public') });
});



app.listen(PORT, () => {
  db.sequelize.sync({ force: false });
  console.log(`Server\'s up & up! PORT: ${PORT}`);
});