'use strict';

import Todos from '../models/todoModel';
import bodyParser from 'body-parser';

module.exports = function (app) {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json({type: 'application/json'}));

  app.get('/api/todos/:uname', function (req, res) {
    Todos.find({username: req.params.uname}, function (err, results) {
      if (err) throw err;

      res.send(results);
    });
  });

  app.get('/api/todo/:id', function (req, res) {
    Todos.findById({_id: req.params.id}, function (err, todo) {
      if (err) throw err;
      res.send(todo);
    })
  });

  app.post('/api/todo/', function (req, res) {
    if (req.body.id) {
      // Update the todo
      Todos.findByIdAndUpdate(req.body.id, {
        todo: req.body.todo,
        isDone: req.body.isDone,
        hasAttachment: req.body.hasAttachment
      }, {new: true}, function (err, todo) {
        if (err) throw err;
        res.send(todo);
      });

    } else {
      // Add a new todo
      var newTodo = Todos({
        username: 'test',
        todo: req.body.todo,
        isDone: req.body.isDone,
        hasAttachment: req.body.hasAttachment
      });

      newTodo.save(function (err, todo) {
        if (err) throw err;
        res.send(todo);
      })

    }
  });

  app.delete('/api/todo/:id', function (req, res) {
    Todos.findByIdAndRemove(req.params.id, function (err) {
      if (err) throw err;
      res.send('Deleted.');
    });
  });
};
