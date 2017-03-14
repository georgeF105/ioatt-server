
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('join_user-location').del()
    .then(function () {
      // Inserts seed entries
      return knex('join_user-location').insert([
        {id: 1, user_id: 1, location_id: 1},
        {id: 2, user_id: 1, location_id: 2},
        {id: 3, user_id: 2, location_id: 2},
        {id: 4, user_id: 2, location_id: 3},
        {id: 5, user_id: 3, location_id: 3}
      ]);
    });
};
