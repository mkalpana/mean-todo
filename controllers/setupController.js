var Todos = require('../models/todoModel');

module.exports = function(app) {
    app.get('/api/setupTodos', function(req, res) {

        var seedTodos = [
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

        Todos.create(seedTodos, function(err, results) {
            res.json(results);
        });
    });
};