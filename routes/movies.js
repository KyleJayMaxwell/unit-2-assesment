var express = require('express');
var router = express.Router();
var pg = require('pg');
var connectionString = ('postgres://localhost:5432/moviedb');
var knex = require('../db/knex');

router.get('/movies', function(req, res, next) {
  res.render('movies/index');
});

router.post('/movies', function(req, res, next){

  var director = req.body.director;
  var title = req.body.title;
  var rating = req.body.rating;
  var description = req.body.description;


});

router.get('/movie/new', function(req, res, next) {
  res.render('movies/new');
});

module.exports = router;
