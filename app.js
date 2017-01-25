var express = require('express');
var app = express();
var Sequelize = require('sequelize');
var sequelize = new Sequelize('postgres://josephj@localhost:5432/playground');
sequelize
  .authenticate()
    .then(function(err) {
            console.log('Connection has been established successfully.');

    })
.catch(function (err) {
        console.log('Unable to connect to the database:', err);

});

app.get('/', function (req, res) {
  res.send('Hello World 2!');
});

app.get('/welcome', function (req, res) {
  res.send('Welcome!!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

