exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('movies').del(), 

    // Inserts seed entries
    knex('movies').insert(
        {
          director: 'Banksy',
          title: 'Exit Through The Gift Shop',
          rating: 3,
          description: 'It is a movie about graffiti, or street art.'

        })
  );
};