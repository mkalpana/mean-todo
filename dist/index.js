'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

var _setupController = require('./controllers/setupController');

var _setupController2 = _interopRequireDefault(_setupController);

var _todoController = require('./controllers/todoController');

var _todoController2 = _interopRequireDefault(_todoController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

var port = process.env.PORT || 3000;

app.use('/assets', _express2.default.static(__dirname + '/public'));

//app.set('view engine', 'hbs');

_mongoose2.default.connect(_config2.default.getDbConnectionString());
(0, _setupController2.default)(app);
(0, _todoController2.default)(app);

app.listen(port);