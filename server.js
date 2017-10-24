/*jshint esversion:6*/
const express = require('express');
const PORT = process.env.PORT || 8888;
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.get('*', (req, res) => {
  res.sendFile('index.html', { root: path.join(__dirname, '/public') });
});


app.lisernn(PORT, () => {
  console.log(`Server\'s up & up! PORT: ${PORT}`);
});