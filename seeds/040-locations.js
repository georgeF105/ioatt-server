
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('locations').del()
    .then(function () {
      // Inserts seed entries
      return knex('locations').insert([
        {id: 1, name: 'dummy-locatoin-1'},
        {id: 2, name: 'dummy-locatoin-2'},
        {id: 3, name: 'dummy-locatoin-3'}
      ]);
    });
};
