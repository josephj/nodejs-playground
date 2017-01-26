var express = require('express');
var app = express();

var knex = require('knex')({
  client: 'pg',
  connection: {
    host : 'localhost',
    user : 'josephj',
    database : 'playground_development'
  }
});


app.get('/', function (req, res) {
	knex.select('*').from('users').then(function (users) {
		res.send(users[0].name);
	});
});

app.get('/welcome', function (req, res) {
  res.send('Welcome!!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

