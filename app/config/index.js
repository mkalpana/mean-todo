'use strict';

import configValues from './config';

module.exports = {
  getDbConnectionString: () => {
    return 'mongodb://' + configValues.uname + ':' + configValues.pwd +
      '@ds011870.mlab.com:11870/node-todo';
  }
};
