'use strict';

import Todos from '../models/todoModel';

module.exports = (app) => {
  app.get('/api/setupTodos', (req, res) => {

    let seedTodos = [
      {
        username: 'test',
        todo: 'Buy milk',
        isDone: false,
        hasAttachment: false
      },
      {
        username: 'test',
        todo: 'Buy bread',
        isDone: false,
        hasAttachment: false
      },
      {
        username: 'test',
        todo: 'Play Counter Strike',
        isDone: false,
        hasAttachment: false
      }

    ];

    Todos.create(seedTodos, function (err, results) {
      res.json(results);
    });
  });
};
