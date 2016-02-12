var express = require('express');
// var React = require('react');
// var Router = require('react-router');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
var db = require('./database/dbconfig.js');
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,'/../client')));
app.use(express.static(path.join(__dirname,'/..')));

var itemRouter = require('./database/routers/itemRouter.js')(express);
app.use('/item', itemRouter);

app.listen(3000);
module.exports = app;