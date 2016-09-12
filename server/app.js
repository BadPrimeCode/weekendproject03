console.log('app.js sourced');

var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: false});

// custom modules
var add = require('../modules/add');
var subtract = require('../modules/subtract');
var multiply = require('../modules/multiply');
var divide = require('../modules/divide');

// Big Server is watching you!
var portage = process.env.PORT || 3030;
app.listen(portage, function() {
  console.log('listening on port whatever');
});

// base url
app.get('/', function (req, res){
  console.log('base url hit');
  // send index file from resolved path
  res.sendFile(path.resolve('public/index.html'));
});

// set up public folder
app.use(express.static('public'));

// add url
app.post('/add', urlencodedParser, function(req, res){
  console.log('add hit', req.body);
  var result = {result: add(req.body.x, req.body.y)};
  res.send(result);
});

// subtract url
app.post('/subtract', urlencodedParser, function(req, res){
  console.log('subtract hit', req.body);
  var result = {result: subtract(req.body.x, req.body.y)};
  res.send(result);
});

// multiply url
app.post('/multiply', urlencodedParser, function(req, res){
  console.log('multiply hit', req.body);
  var result = {result: multiply(req.body.x, req.body.y)};
  res.send(result);
});

// divide url
app.post('/divide', urlencodedParser, function(req, res){
  console.log('divide hit', req.body);
  var result = {result: divide(req.body.x, req.body.y)};
  res.send(result);
});
