var knex = require('./db/knex');
var movies = function() {return knex('movies');};

module.exports = {

  getAllMovies: function() {
    return knex.select().table('movies');
  },

  getSingleMovie: function(id) {
    return knex('movies').where('id', id);
  },
  addSingleMovie: function(director, title, rating, description) {
    return knex('movies').insert({
      director: director,
      title: title,
      rating: rating,
      description: description
    })
    .then(function(results) {
      console.log(results);
    });
  }

};
