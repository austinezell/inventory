var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');
var fs = require('fs');
var http = require('http');

var mongoose = require('mongoose');
mongoose.connect(process.env.MONGOLAB_URI || "mongodb://localhost/inventory");

var app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'www')));

app.use('/users', require('./routes/users'));
app.use('/logs', require('./routes/logs'));
app.use('/items', require('./routes/items'));
const port = process.env.PORT || 3000;
app.set('port', port);


var server = http.createServer(app);
require('./fileReader')();

server.listen(port);
module.exports = app;
