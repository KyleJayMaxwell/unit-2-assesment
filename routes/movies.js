var express = require('express');
var router = express.Router();
var pg = require('pg');
var connectionString = ('postgres://localhost:5432/moviedb');
var knex = require('../db/knex');
var queries = require('../queries');

router.get('/movies', function(req, res, next) {
  queries.getAllMovies().then(function(movies) {
      res.render('movies/index', {movies: movies});
  });
});

router.post('/movies', function(req, res, next){

  var director = req.body.director;
  var title = req.body.title;
  var rating = req.body.rating;
  var description = req.body.description;

  queries.addSingleMovie(director,title,rating,description).then(function(results){
    res.redirect('/movies');
  });

});

router.get('/movie/new', function(req, res, next) {
  res.render('movies/new');
});

module.exports = router;
