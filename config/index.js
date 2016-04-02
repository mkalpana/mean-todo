var configValues = require('./config');


module.exports = {
    getDbConnectionString: function() {
        return 'mongodb://' + configValues.uname + ':' + configValues.pwd +
                '@ds011870.mlab.com:11870/node-todo';
    }
};