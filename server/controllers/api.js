// var fs = require('fs');
// var app = express();
// var bodyParser = require('body-parser');
var mongoose =  require('mongoose');
var express = require('express');
var router = express.Router();
// var ObjectId = require('mongoose').Types.OjectId;

// mongoose.connect('mongodb://coreos/photo');
mongoose.connect('mongodb://localhost/angulartodo');

// app.use('api', requre('.contollers/api'));
var Todo = require('../models/todo');

router.get('/', function (req, res) {
  Todo.find(function(err, todos){
   if (err) throw err;
  res.json(todos);
 });
});

//add todo
router.post('/', function (req, res) {
  Todo.create({title : req.body.title}, function (err, todo){
     if (err) throw err;
      res.json(todo);
  });
});

//delete todo
router.delete('/:id', function (req, res) {
  Todo.find(req.params.id).remove().exec(function (err, num_deleted, result){
  // Todo.remove(req.params.id, function (err, num_removed, result){
  // Todo.remove({_id : ObjectId(req.params.id)}, function (err, num_removed, result){
     if (err) throw err;
      res.json(result);
  });
});

//complete todo
router.put('/:id/complete', function (req, res) {
  Todo.update({_id:req.params.id}, 
    { 
      $set : {
        completed : true
    }
  }, function (err, update_count, result) {
    if (err) throw err; 
    res.json( result );
  });
});

//incomplete todo
router.put('/:id/incomplete', function (req, res) {
  Todo.update({_id:req.params.id}, 
    { 
      $set : {
        completed : false
    }
  }, function (err, update_count, result) {
    if (err) throw err; 
    res.json( result );
  });
});

module.exports = router;
// var server = app.listen(3000, function () {

//   var host = server.address().address;
//   var port = server.address().port;

//   console.log('Example app listening at http://%s:%s', host, port);

// });