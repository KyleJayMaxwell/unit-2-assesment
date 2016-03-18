var knex = require('./db/knex');
var movies = function() {return knex('movies');};

module.exports = {

  getAllMovies: function() {
    return knex.select().table('movies')
    .then(function(movies){
      console.log(movies);
      return movies;
    });
  },

  getSingleMovie: function(id) {
    return knex('movies').where('id', id)
    .then(function(movie){
      // console.log(movies);
      return movie;
    });
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
  },
  editMovie: function(id, director, title, rating, description) {
    return knex('movies').where('id',id).update({
          director: director,
          title: title,
          rating: rating,
          description: description
        })
        .then(function(results) {
            console.log(results);
            return results;
        }); 
  }

};
