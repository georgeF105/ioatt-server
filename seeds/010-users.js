
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, name: 'user_name_1', uid: 'B0qnU06GKgQNG9wEcZDRvLXa4al2'},
        {id: 2, name: 'user_name_2', uid: 'abc'},
        {id: 3, name: 'user_name_3', uid: 'xyz'}
      ]);
    });
};
