'use strict';

var _todoModel = require('../models/todoModel');

var _todoModel2 = _interopRequireDefault(_todoModel);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (app) {
  app.use(_bodyParser2.default.json());
  app.use(_bodyParser2.default.urlencoded({ extended: true }));
  app.use(_bodyParser2.default.json({ type: 'application/json' }));

  app.get('/api/todos/:uname', function (req, res) {
    _todoModel2.default.find({ username: req.params.uname }, function (err, results) {
      if (err) throw err;

      res.send(results);
    });
  });

  app.get('/api/todo/:id', function (req, res) {
    _todoModel2.default.findById({ _id: req.params.id }, function (err, todo) {
      if (err) throw err;
      res.send(todo);
    });
  });

  app.post('/api/todo/', function (req, res) {
    if (req.body.id) {
      // Update the todo
      _todoModel2.default.findByIdAndUpdate(req.body.id, {
        todo: req.body.todo,
        isDone: req.body.isDone,
        hasAttachment: req.body.hasAttachment
      }, { new: true }, function (err, todo) {
        if (err) throw err;
        res.send(todo);
      });
    } else {
      // Add a new todo
      var newTodo = (0, _todoModel2.default)({
        username: 'test',
        todo: req.body.todo,
        isDone: req.body.isDone,
        hasAttachment: req.body.hasAttachment
      });

      newTodo.save(function (err, todo) {
        if (err) throw err;
        res.send(todo);
      });
    }
  });

  app.delete('/api/todo/:id', function (req, res) {
    _todoModel2.default.findByIdAndRemove(req.params.id, function (err) {
      if (err) throw err;
      res.send('Deleted.');
    });
  });
};