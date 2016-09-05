var express = require('express');
var router = express.Router();

var Item = require('../models/Item.js');

/* GET /Items listing. */
router.get('/', function(req, res, next) {
  Item.find(function (err, Items) {
    if (err) return next(err);
    res.json(Items);
  });
});

/* POST /Items */
router.post('/', function(req, res, next) {
  Item.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET /Items/id */
router.get('/:id', function(req, res, next) {
  Item.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* PUT /Items/:id */
router.put('/:id', function(req, res, next) {
  Item.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE /Items/:id */
router.delete('/:id', function(req, res, next) {
  Item.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;