var mongoose = require('mongoose');
// var dateFormat = require('dateformat');
// var now = new Date();
// dateFormat(now, shortDate);
var date = require('date-and-time');
var now = new Date();


var BookSchema = new mongoose.Schema({
  isbn: String,
  title: String,
  author: String,
  description: String,
  publisher: String,
  published_date: { type: Date},
  available: String,
  genre: String,
});

module.exports = mongoose.model('Book', BookSchema);
