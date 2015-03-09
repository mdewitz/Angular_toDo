// var fs = require('fs');
// var app = express();
// var bodyParser = require('body-parser');
// var mongoose =  require('mongoose');
var express = require('express');
var router = express.Router();

// mongoose.connect('mongodb://coreos/photo');
mongoose.connect('mongodb://localhost/angulartodo');


// app.use('api', requre('.contollers/api'));

router.get('/', function (req, res) {
  res.send("HELLO API");
});

//add todo

//delete todo

//complete todo

//uncomplete todo
router.get('/', function (req, res) {

})

module.exports = router;
// var server = app.listen(3000, function () {

//   var host = server.address().address;
//   var port = server.address().port;

//   console.log('Example app listening at http://%s:%s', host, port);

// });