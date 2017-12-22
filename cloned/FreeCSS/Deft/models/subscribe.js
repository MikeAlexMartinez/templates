const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const subscribeSchema = new Schema({
  email: String,
  date: { type: Date, default: Date.now },
  validated: { type: Boolean, default: false },
  active: { type: Boolean, default: true },
  success: { type: String, default: '' },
  error: { type: String, default: '' },
});

const Subscribe = mongoose.model('Subscribe', subscribeSchema);

module.exports = Subscribe;