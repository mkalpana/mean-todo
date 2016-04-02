'use strict';

import mongoose from 'mongoose';

let Schema = mongoose.Schema;
let todoSchema = new Schema({
  username: String,
  todo: String,
  isDone: Boolean,
  hasAttachment: Boolean
});

let ToDos = mongoose.model('ToDos', todoSchema);

module.exports = ToDos;
