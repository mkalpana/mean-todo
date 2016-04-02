'use strict';

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  getDbConnectionString: function getDbConnectionString() {
    return 'mongodb://' + _config2.default.uname + ':' + _config2.default.pwd + '@ds011870.mlab.com:11870/node-todo';
  }
};