var express = require('express');
var app = express();
var mongoose = require('mongoose');
var config = require('./config');
var setupController = require('./controllers/setupController');
var todoController = require('./controllers/todoController');

var port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));

//app.set('view engine', 'hbs');

mongoose.connect(config.getDbConnectionString());
setupController(app);
todoController(app);

app.listen(port);