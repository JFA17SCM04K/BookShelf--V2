var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');

var book = require('./routes/book');
var app = express();
var mongoose = require('mongoose');
var Book = require('./models/Book.js');
mongoose.Promise = require('bluebird');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'false'}));
app.use(express.static(path.join(__dirname, 'dist')));
app.use('/books', express.static(path.join(__dirname, 'dist')));
app.use('/book', book);

// app.use(function (req, res, next) {
//      res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
//      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
//      res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
//      res.setHeader('Access-Control-Allow-Credentials', true);
//      next();
//  });

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send('error');

});

// 'mongodb://JoeldeepKaurDhamija:Joeldeep@ds141406.mlab.com:41406/goji-systems'
//'mongodb://localhost/mean-angular5'
mongoose.connect('mongodb://localhost/mean-angular5', { promiseLibrary: require('bluebird') })
  .then(() =>  console.log('connection succesful'))
  .catch((err) => console.error(err));


//SEEDING THE DB
// var newBook ={ "isbn":"028882, 97885654450110",
//                 "title":"The Test of My Life",
//                 "author": "Yuvraj Singh",
//                 "description":"Autobiography by Yuvraj Singh",
//                 "publisher":"youwecan.com",
//                 "published_date": 09/08/2015,
//                 "available": "Yes",
//                 "genre": "Fiction",
//                 "type": ['New','Kindle Version'] };
// Book.create(newBook, function (err, post) {
//       if (err) console.log(err);
//       console.log(post);
//   });

// app.get('/charts', function(req, res){
//   console.log("Inside the charts route");
//   // const query = [{$group:{_id:'$available',total:{$sum:1}}}];
//   // Book.aggregate(query, function(err, resultOut){
//   //   if(err) return next(err);
//   //   console.log("Inside the charts");
//   // });
// })


// app.listen(process.env.PORT || 3000, process.env.IP, function(){
//     console.log("Yelp Camp Server has started");
// });
module.exports = app;
