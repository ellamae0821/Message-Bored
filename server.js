/*jshint esversion:6*/
const express = require('express');
const PORT = process.env.PORT || 8888;
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const db = require ('./models');
const User = db.user;
const routes = require('./routes');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('/api', routes);
/*app.get('/users', (req,res) => {
  return User.findAll()
  .then( (users) => {
    return res.json(users);
  });
});*/


app.get('*', (req, res) => {
  res.sendFile('index.html', { root: path.join(__dirname, '/public') });
});


app.listen(PORT, () => {
  db.sequelize.sync({ force: false });
  console.log(`Server\'s up & up! PORT: ${PORT}`);
});