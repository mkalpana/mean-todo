'use strict';

var _todoModel = require('../models/todoModel');

var _todoModel2 = _interopRequireDefault(_todoModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (app) {
  app.get('/api/setupTodos', function (req, res) {

    var seedTodos = [{
      username: 'test',
      todo: 'Buy milk',
      isDone: false,
      hasAttachment: false
    }, {
      username: 'test',
      todo: 'Buy bread',
      isDone: false,
      hasAttachment: false
    }, {
      username: 'test',
      todo: 'Play Counter Strike',
      isDone: false,
      hasAttachment: false
    }];

    _todoModel2.default.create(seedTodos, function (err, results) {
      res.json(results);
    });
  });
};