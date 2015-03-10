var express = require('express');
var router = express.Router();
var Todo = require('../models/todo')
var ObjectID = require("mongoose").Types.ObjectId;

// list all
router.get('/', function (req, res) {
//  res.send("HELLO API");
  Todo.find(function(err, todos) {
    if (err) throw err;
    res.json(todos);
  });

})

// add
router.post('/', function(req, res) {
  Todo.create ( {
    title: req.body.title
  }, function(err, todo) {
    if (err) throw err;
    res.json(todo);
  });
});

// delete
router.delete('/:id', function (req, res) {
  Todo.findById(req.params.id)
    .remove()
    .exec(function (err, num_deleted, status) {
      if(err) throw err;
      res.json( status ); // status object
    });
});

// router.delete('/:id', function(req, res) {
//   Todo.remove({ _id : ObjectID(req.params.id)}, function(err, num_removed, todo) {
//     if (err) throw err;
//     res.json( todo );
//   });
// });

// complete
router.put('/:id/complete', function(req, res) {
  Todo.update({ _id : ObjectID(req.params.id) },
  {
    // {
      completed : true
    // }
  }, function(err, update_count, todo) {
    if (err) throw err;
    res.json( todo )
  });

});

// uncomplete
router.put('/:id/uncomplete', function(req, res) {
  Todo.update({ _id : ObjectID(req.params.id) },
  {
    $set : {
      completed : false
    }
  }, function(err, update_count, todo) {
    if (err) throw err;
    res.json( todo )
  });

});

module.exports = router;