'use strict';

import express from 'express';
import mongoose from 'mongoose';
import config from './config';
import setupController from './controllers/setupController';
import todoController from './controllers/todoController';

let app = express();

let port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));

//app.set('view engine', 'hbs');

mongoose.connect(config.getDbConnectionString());
setupController(app);
todoController(app);

app.listen(port);
