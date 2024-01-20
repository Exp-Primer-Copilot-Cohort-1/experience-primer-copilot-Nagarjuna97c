// Create web server
var express = require('express');
var router = express.Router();
var Comment = require('../models/comment');
var User = require('../models/user');
var Post = require('../models/post');
var mongoose = require('mongoose');

// Get comments
router.get('/', function(req, res) {
  Comment.find({}, function(err, comments) {
    if (err) throw err;
    res.json(comments);
  });
});

// Get comment by id
router.get('/:_id', function(req, res) {
  Comment.findById(req.params._id, function(err, comment) {
    if (err) throw err;
    res.json(comment);
  });
});

// Get comments by post id
router.get('/post/:_post', function(req, res) {
  Comment.find({
    _post: req.params._post
  }, function(err, comments) {
    if (err) throw err;
    res.json(comments);
  });
});

// Get comments by user id
router.get('/user/:_user', function(req, res) {
  Comment.find({
    _user: req.params._user
  }, function(err, comments) {
    if (err) throw err;
    res.json(comments);
  });
});

// Add comment
router.post('/', function(req, res) {
  var newComment = new Comment({
    _post: req.body._post,
    _user: req.body._user,
    body: req.body.body
  });
  newComment.save(function(err, comment) {
    if (err) throw err;
    res.json(comment);
  });
});

// Update comment
router.put('/:_id', function(req, res) {
  var update = {
    _post: req.body._post,
    _user: req.body._user,
    body: req.body.body
  };
  var options = {
    new: true
  };
  Comment.findByIdAndUpdate(req.params._id, update, options, function(err, comment) {
    if (err) throw err;
    res.json(comment);
  });
});

// Delete comment
router.delete('/:_id', function(req, res) {
  Comment.findByIdAndRemove(req.params._id, function(err, comment) {
    if (err) throw err;
    res.json(comment);
  });
});

module.exports = router;