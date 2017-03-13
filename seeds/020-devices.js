
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('devices').del()
    .then(function () {
      // Inserts seed entries
      return knex('devices').insert([
        {id: 1, name: 'dummy_device_name1', description: 'dummy_device_description1'},
        {id: 2, name: 'dummy_device_name2', description: 'dummy_device_description2'},
        {id: 3, name: 'dummy_device_name3', description: 'dummy_device_description3'}
      ]);
    });
};
