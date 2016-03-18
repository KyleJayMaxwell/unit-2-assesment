var express = require('express');
var router = express.Router();
var pg = require('pg');
var connectionString = ('postgres://localhost:5432/moviedb');
var knex = require('../db/knex');
var queries = require('../queries');

// All
router.get('/movies', function(req, res, next) {
  queries.getAllMovies().then(function(movie) {
      res.render('movies/index', {movies: movie});
  });
});

// Make New Movie
router.post('/movies', function(req, res, next){

  var director = req.body.director;
  var title = req.body.title;
  var rating = req.body.rating;
  var description = req.body.description;

  queries.addSingleMovie(director,title,rating,description).then(function(movies){
    res.redirect('/movies');
  });

});

// Route to form of new movie
router.get('/movie/new', function(req, res, next) {
  res.render('movies/new');
});

// individual movies
router.get('/movie/:id', function(req, res, next) {

  var id = req.params.id;
  console.log(id);

  queries.getSingleMovie(id).then(function(movies){
    var movie = movies[0];
    res.render('movies/show', {movie: movie});
  });

});

module.exports = router;
