const express = require('express');
const app = express();
const passport = require('passport');
const Strategy = require('passport-facebook').Strategy;

var knex = require('knex')({
  client: 'pg',
  connection: {
    host : 'localhost',
    user : 'josephj',
    database : 'playground_development'
  }
});

passport.use(new Strategy({
  clientID: '1263846130372266',
  clientSecret: 'dc9462bfc2c197ae06ba85dc735c7985',
  callbackURL: 'http://localhost:4000/login/facebook/return',
  profileFields: ['id', 'name', 'displayName', 'photos', 'email']
}, function(accessToken, refreshToken, profile, cb) {
  return cb(null, profile);
}));

passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(require('morgan')('combined'));
app.use(require('cookie-parser')());
app.use(require('body-parser').urlencoded({ extended: true }));
app.use(require('express-session')({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

app.get('/', function (req, res) {
  knex.select('*').from('users').then(function (users) {
    res.render('home', {user: users[0].name});
  });
});

app.get('/login', function(req, res){
  res.render('login');
});

app.get('/login/facebook', passport.authenticate('facebook'));

app.get(
  '/login/facebook/return',
  passport.authenticate('facebook', {failureRedirect: '/login'}),
  function(req, res) {
    res.redirect('/');
  }
);

app.get(
  '/profile',
  require('connect-ensure-login').ensureLoggedIn(),
  function(req, res){
    console.log(req.user);
    res.render('profile', {user: req.user});
  }
);

app.get('/welcome', function (req, res) {
  res.send('Welcome!!');
});

app.listen(4000, function () {
  console.log('Example app listening on port 4000!');
});

