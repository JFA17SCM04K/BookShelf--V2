var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Book = require('../models/Book.js');

var cors = require('cors');

router.use(cors());


/* GET ALL BOOKS */
router.options('/', cors())
router.get('/', function(req, res, next) {
  console.log("Hi-------------------------");
  console.log("Inside the get route");
  Book.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* AGGREGATE QUESRRIES*/
router.get('/charts', function(req, res, next){
  console.log("Inside the charts route");
  const query = [{$group:{_id:'$available',total:{$sum:1}}}];
  Book.aggregate(query, function(err, resultOut){
    if(err) return next(err);
    res.json(resultOut);
    console.log(resultOut);
  });
})

router.get('/charts/aggr2', function(req, res, next){
  const query = [{$group: {_id:'$genre', total:{$sum:1}}}];
  Book.aggregate(query, function(err, resultOut){
    if(err) return next(err);
    res.json(resultOut);
    console.log(resultOut);
  });
}
)

/* SAVE BOOK */
// router.post('/', function(req, res, next) {
//   console.log("Inside the post route-----------");
//   console.log(req.body.isbn);
//   Book.find({"isbn":req.body.isbn}, function(err, foundEntry){
//     if(foundEntry[0]._id != undefined){
//       console.log("found entry is");
//       console.log(foundEntry[0]._id);
//       console.log("The book already exists");
//       console.log(foundEntry);
//       res.json({"exists":1});
//     }if(err){
//       console.log("Inside the post route it is an error");
//       return next(err);
//     }if(foundEntry[0]._id == undefined){
//       Book.create(req.body, function (err, post) {
//         if (err) {
//           console.log("Inside the post route it is an error");
//           return next(err);
//         }
//         res.json(post);
//         console.log("Inside the post route success-----------"+post);
//       });
//     }
//   })
// });


router.post('/', function(req, res, next) {
  console.log("Insiede the post methd of app.js")
      Book.create(req.body, function (err, post) {
        if (err) {
          console.log("Inside the post route it is an error");
          return next(err);
        }
        res.json(post);
        console.log("Inside the post route success-----------"+post);
      });

    })


/* GET SINGLE BOOK BY ID */
router.get('/:id', function(req, res, next) {
  console.log("Insiede the get methode for etting one book by id methd of app.js")
  Book.findById(req.params.id, function (err, post) {
    if (err)
    {
      console.log("Inside the get for etting one book by id route it is an error");
      return next(err);
    }
    console.log("Inside the findBy id");
    console.log(res.json(post));
    // res.json(post);

  });
});

// router.get(':/id', function(req, res, next){
//   Book.find({"_id": req.params.id}, function(err, post){
//     if(err){
//       console.log("Inside the get for etting one book by id route it is an error");
//       return next(err);
//     }
//         console.log("Inside the findBy id");
//         console.log(res.json(post));
//   });
// })



/* UPDATE BOOK */
router.put('/:id', function(req, res, next) {
  Book.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE BOOK */
router.delete('/:id', function(req, res, next) {
  Book.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});


module.exports = router;
